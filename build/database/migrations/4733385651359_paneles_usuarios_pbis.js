"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'paneles_usuarios_pbis';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.integer('paneles_pbis_id').unsigned().references('paneles_pbis.id');
            table.integer('usuario_id').unsigned().references('usuarios.id');
            table.unique(['paneles_pbis_id', 'usuario_id']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=4733385651359_paneles_usuarios_pbis.js.map