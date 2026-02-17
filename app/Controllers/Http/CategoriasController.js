"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Categoria_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Categoria"));
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
class CategoriasController {
    async index({ response }) {
        try {
            const data = await Categoria_1.default.query().orderBy('id', 'asc');
            return response.ok({
                response: "Se ejecuto correctamente la consulta",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                response: "Ocurrio un error en la respuesta",
                data: [],
                status: false
            });
        }
    }
    async cat_por_loggeado({ response, auth }) {
        try {
            const data_cat = await Categoria_1.default.query()
                .whereHas('vistas', (vistasQuery) => {
                vistasQuery
                    .innerJoin('vistas_usuarios', 'vistas.id', 'vistas_usuarios.vistas_id')
                    .where('vistas_usuarios.usuarios_id', auth.user.id);
            })
                .orderBy('nivel', 'asc')
                .preload('vistas', (vistasQuery) => {
                vistasQuery
                    .innerJoin('vistas_usuarios', 'vistas.id', 'vistas_usuarios.vistas_id')
                    .where('vistas_usuarios.usuarios_id', auth.user.id)
                    .orderBy('vistas.nivel', 'asc');
            });
            const rol = await Role_1.default.findBy('id', auth.user.rol_id);
            let data_usu = {
                email: auth.user.email,
                nombre: auth.user.nombre,
                rol: rol?.nombre
            };
            let data = {
                menu: data_cat,
                usuario: data_usu
            };
            return response.ok({
                response: "Se ejecutó correctamente la consulta",
                data,
                status: true,
            });
        }
        catch (e) {
            console.error(e);
            return response.badRequest({
                response: "Ocurrió un error en la respuesta",
                data: [],
                status: false,
            });
        }
    }
    async store({ request, response }) {
        const categoriaSchema = Validator_1.schema.create({
            nombre: Validator_1.schema.string(),
            icono: Validator_1.schema.string(),
            nivel: Validator_1.schema.number()
        });
        const payload = await request.validate({ schema: categoriaSchema });
        await Categoria_1.default.create(payload);
        return response.ok({
            mensaje: "Se inserto correctamente el registro",
            data: payload,
            status: true
        });
    }
    async show({ params, response }) {
        try {
            const data = await Categoria_1.default.findByOrFail("id", params.id);
            return response.ok({
                mensaje: "Se encontro correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se encontro el registro",
                data: [],
                status: false
            });
        }
    }
    async update({ params, response, request }) {
        try {
            const data = await Categoria_1.default.findByOrFail("id", params.id);
            const info = request.only(['nombre', 'icono', 'nivel', 'status']);
            data.nombre = info.nombre;
            data.icono = info.icono;
            data.nivel = info.nivel;
            data.status = info.status;
            data.save();
            return response.ok({
                mensaje: "Se actualizo correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se actualizo el registro",
                data: [],
                status: false
            });
        }
    }
    async destroy({ params, response }) {
        try {
            const data = await Categoria_1.default.findByOrFail("id", params.id);
            data.status = !data.status;
            data.save();
            return response.ok({
                mensaje: "Se desactivo correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se desactivo el registro",
                data: [],
                status: false
            });
        }
    }
}
exports.default = CategoriasController;
//# sourceMappingURL=CategoriasController.js.map