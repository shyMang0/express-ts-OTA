"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_route_1 = __importDefault(require("./root.route"));
const notes_route_1 = __importDefault(require("./notes.route"));
const router = express_1.default.Router();
router.use('/', root_route_1.default);
router.use('/notes', notes_route_1.default);
/*========== CATCH INVALID ROUTES ========== */
router.all('*', (req, res) => {
    res.status(404).json({ message: 'invalid route' });
});
exports.default = router;
