"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const index_route_1 = __importDefault(require("./src/api/routes/index.route"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
dotenv_1.default.config();
// testConnection()
app.use(index_route_1.default);
startServer();
// async function testConnection() {
// 	try {
// 		await dbInstance.testConnection()
// 	} catch (error) {
// 		console.error('Error connecting to SQLite database:', error)
// 	}
// }
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const httpServer = http_1.default.createServer(app);
            httpServer.listen(process.env.PORT || 3000);
            console.log('Http port :', process.env.PORT || 3000);
        }
        catch (err) {
            console.error(err);
        }
    });
}
