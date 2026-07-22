"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const axios_1 = __importDefault(require("axios"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class ReportsService {
    static async getSellIn(payload) {
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const path = '/reports/get_sales_report';
        const message = [
            'POST',
            path,
            timestamp
        ].join('\n');
        const signature = crypto_1.default
            .createHmac('sha256', Env_1.default.get('REPORTS_INTERNAL_TOKEN'))
            .update(message)
            .digest('hex');
        const api = await axios_1.default.post(Env_1.default.get('REPORTS_URL') + path, payload, {
            responseType: 'stream',
            headers: {
                Authorization: `Bearer ${Env_1.default.get('REPORTS_CLIENT')}`,
                'X-Timestamp': timestamp,
                'X-Signature': signature
            }
        });
        return api;
    }
}
exports.default = ReportsService;
//# sourceMappingURL=ReportsService.js.map