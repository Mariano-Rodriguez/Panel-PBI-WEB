"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class default_1 extends Seeder_1.default {
    async run() {
        await Usuario_1.default.createMany([
            {
                email: "mariano.cabral@nartexlabs.com"
            },
            {
                email: "daniel.gonzalez@nartexlabs.com"
            },
            {
                email: "sistemas@nartexlabs.com"
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Usuario.js.map