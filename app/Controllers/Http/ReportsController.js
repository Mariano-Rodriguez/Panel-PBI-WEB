"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReportsService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/ReportsService"));
class ReportsController {
    async getReportSellIn({ request, response }) {
        const api = await ReportsService_1.default.getSellIn(request.all());
        response.status(api.status);
        const contentType = api.headers['content-type'];
        const contentDisposition = api.headers['content-disposition'];
        if (contentType)
            response.header('Content-Type', String(contentType));
        if (contentDisposition)
            response.header('Content-Disposition', String(contentDisposition));
        return response.stream(api.data);
    }
}
exports.default = ReportsController;
//# sourceMappingURL=ReportsController.js.map