"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class FirebaseProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
        this.app.container.singleton('Firebase/Admin', () => {
            return firebase_admin_1.default.initializeApp({
                credential: firebase_admin_1.default.credential.cert({
                    projectId: Env_1.default.get('FIREBASE_PROJECT_ID'),
                    clientEmail: Env_1.default.get('FIREBASE_CLIENT_EMAIL'),
                    privateKey: Env_1.default.get('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
                }),
            });
        });
    }
}
exports.default = FirebaseProvider;
//# sourceMappingURL=FirebaseProvider.js.map