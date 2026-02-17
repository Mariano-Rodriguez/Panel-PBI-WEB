"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../../start/firebase"));
class FirebaseAuth {
    async handle({ request, response }, next) {
        const token = request.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return response.unauthorized({ error: 'Token missing' });
        }
        try {
            const decoded = await firebase_1.default.auth().verifyIdToken(token);
            request['firebaseUser'] = decoded;
            await next();
        }
        catch (error) {
            return response.unauthorized({ error: 'Invalid token' });
        }
    }
}
exports.default = FirebaseAuth;
//# sourceMappingURL=FirebaseAuth.js.map