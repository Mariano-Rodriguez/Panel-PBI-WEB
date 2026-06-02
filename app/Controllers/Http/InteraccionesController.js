"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Interaccione_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Interaccione"));
const luxon_1 = require("luxon");
class InteraccionesController {
    async index({ request, response }) {
        try {
            const { usuario_id, vista_id, fecha_inicio, fecha_fin } = request.qs();
            const query = Database_1.default
                .from('interacciones')
                .leftJoin('usuarios', 'usuarios.id', 'interacciones.usuario_id')
                .leftJoin('vistas', 'vistas.id', 'interacciones.vista_id')
                .select('interacciones.id', 'interacciones.usuario_id', 'interacciones.vista_id', 'interacciones.fecha', 'interacciones.created_at', 'usuarios.nombre as usuario', 'usuarios.email as email', 'vistas.nombre as vista', 'vistas.ruta as ruta')
                .orderBy('interacciones.created_at', 'desc');
            if (usuario_id) {
                query.where('interacciones.usuario_id', usuario_id);
            }
            if (vista_id) {
                query.where('interacciones.vista_id', vista_id);
            }
            if (fecha_inicio) {
                query.where('interacciones.fecha', '>=', fecha_inicio);
            }
            if (fecha_fin) {
                query.where('interacciones.fecha', '<=', fecha_fin);
            }
            const interacciones = await query;
            const porUsuario = new Map();
            const porVista = new Map();
            const porDia = new Map();
            interacciones.forEach((interaccion) => {
                const usuarioId = interaccion.usuario_id;
                const vistaId = interaccion.vista_id;
                const fecha = this.normalizarFecha(interaccion.fecha);
                const usuarioActual = porUsuario.get(usuarioId) || {
                    usuario_id: usuarioId,
                    usuario: interaccion.usuario || interaccion.email || 'Sin usuario',
                    email: interaccion.email || '',
                    clicks: 0,
                };
                usuarioActual.clicks += 1;
                porUsuario.set(usuarioId, usuarioActual);
                const vistaActual = porVista.get(vistaId) || {
                    vista_id: vistaId,
                    vista: interaccion.vista || 'Sin vista',
                    ruta: interaccion.ruta || '',
                    clicks: 0,
                };
                vistaActual.clicks += 1;
                porVista.set(vistaId, vistaActual);
                const diaActual = porDia.get(fecha) || {
                    fecha,
                    clicks: 0,
                };
                diaActual.clicks += 1;
                porDia.set(fecha, diaActual);
            });
            const detalle = interacciones.map((interaccion) => ({
                id: interaccion.id,
                usuario_id: interaccion.usuario_id,
                usuario: interaccion.usuario || interaccion.email || 'Sin usuario',
                email: interaccion.email || '',
                vista_id: interaccion.vista_id,
                vista: interaccion.vista || 'Sin vista',
                ruta: interaccion.ruta || '',
                fecha: this.normalizarFecha(interaccion.fecha),
                entro_en: this.normalizarFechaHora(interaccion.created_at),
            }));
            return response.ok({
                mensaje: "Se ejecuto correctamente la consulta",
                data: {
                    total_clicks: interacciones.length,
                    usuarios_unicos: porUsuario.size,
                    vistas_unicas: porVista.size,
                    por_usuario: Array.from(porUsuario.values()).sort((a, b) => b.clicks - a.clicks),
                    por_vista: Array.from(porVista.values()).sort((a, b) => b.clicks - a.clicks),
                    por_dia: Array.from(porDia.values()).sort((a, b) => a.fecha.localeCompare(b.fecha)),
                    detalle,
                },
                status: true
            });
        }
        catch (e) {
            console.error(e);
            return response.badRequest({
                mensaje: "Ocurrio un error en la respuesta",
                data: {
                    total_clicks: 0,
                    usuarios_unicos: 0,
                    vistas_unicas: 0,
                    por_usuario: [],
                    por_vista: [],
                    por_dia: [],
                    detalle: [],
                },
                status: false
            });
        }
    }
    async create({}) { }
    normalizarFecha(fecha) {
        if (!fecha)
            return '';
        if (fecha instanceof Date)
            return luxon_1.DateTime.fromJSDate(fecha).toFormat('yyyy-MM-dd');
        return String(fecha).substring(0, 10);
    }
    normalizarFechaHora(fecha) {
        if (!fecha)
            return '';
        if (fecha instanceof Date)
            return luxon_1.DateTime.fromJSDate(fecha).toISO() || '';
        return String(fecha);
    }
    async store({ auth, request, response }) {
        try {
            const info = request.only(['vista_id']);
            const now = luxon_1.DateTime.now();
            const date = now.toFormat('yyyy-MM-dd');
            await Interaccione_1.default.create({
                vista_id: info.vista_id,
                usuario_id: auth.user?.id,
                fecha: date,
            });
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: "",
                status: true
            });
        }
        catch (e) {
            return response.ok({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = InteraccionesController;
//# sourceMappingURL=InteraccionesController.js.map