"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
class default_1 extends Seeder_1.default {
    async run() {
        await Role_1.default.createMany([
            {
                id: 1,
                nombre: 'Desarrollador',
                descripcion: 'Los usurios con este rol deberan ser los desarrolladores del sistema ya que tendran acceso a todas las opciones del portal, asi como, seran los unicos autorizados a el registro de nuevas opciones y categorias tanto del panel web como de paneles PBI'
            },
            {
                id: 2,
                nombre: 'Administrador del Sistema',
                descripcion: 'Los usuarios con este rol seran los encargados de gestionar, modificar o agregar, usuarios, avisos o reportes, asi como la gestion de interacciones en la pagina, como la asignación de los paneles PBI a los usuarios, asi como monitoriar el funcionamiento de los paneles activos'
            },
            {
                id: 3,
                nombre: 'Colaborador',
                descripcion: 'Los usuarios con este rol seran capaces de consultar la informacion de sus paneles PBI asignados, asi como la interaccion con distintas funciones de formularios con informaciones variadas'
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Rol.js.map