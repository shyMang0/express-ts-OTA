"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_controller_1 = require("../controllers/notes.controller");
const router = express_1.default.Router();
// import auth from '../middleware/auth.js'
router.get('/', notes_controller_1.getAllNotes);
router.post('/', notes_controller_1.createNote);
router.get('/:id', notes_controller_1.getNote);
router.put('/:id', notes_controller_1.updateNote);
router.delete('/:id', notes_controller_1.deleteNote);
// router.get('/', (req, res) => {
// 	res.json({ message: 'get root' })
// })
// router.post('/', (req, res) => {
// 	res.json({ message: 'post root' })
// })
// router.get('/creator', getPostsByCreator)
exports.default = router;
