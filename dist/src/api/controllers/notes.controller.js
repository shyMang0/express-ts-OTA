"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.getNote = exports.createNote = exports.getAllNotes = void 0;
const NotesService = __importStar(require("../../api/services/notesService"));
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield NotesService.getAll();
    try {
        return res.status(200).json({ notes });
    }
    catch (error) {
        res.status(400).json({ messagex: error.message || error });
    }
});
exports.getAllNotes = getAllNotes;
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = req.body.note;
    if (!note)
        return res.status(400).json({ message: 'note is required' });
    const notesInput = { note: note };
    try {
        const data = yield NotesService.create(notesInput);
        res.status(201).json({ message: 'new row created', data });
    }
    catch (error) {
        res.status(400).json({ message: error.message || error });
    }
});
exports.createNote = createNote;
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // slug
    if (!id)
        return res.status(400).json({ message: 'id is required' });
    try {
        const data = yield NotesService.getById(id);
        res.json({ data });
    }
    catch (error) {
        res.status(400).json({ messagess: error.message || error });
    }
});
exports.getNote = getNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // slug
    const note = req.body.note;
    if (!id)
        return res.status(400).json({ message: 'id is required' });
    if (!note)
        return res.status(400).json({ message: 'note is required' });
    const notesInput = { note: note };
    try {
        const data = yield NotesService.update(id, notesInput);
        return res.status(200).json({ message: 'row updated', data });
    }
    catch (error) {
        return res.status(400).json({ message: error.message || error });
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // slug
    if (!id)
        return res.status(400).json({ message: 'id is required' });
    try {
        const data = yield NotesService.deleteById(id);
        return res.status(200).json({ message: 'row deleted', id });
    }
    catch (error) {
        return res.status(400).json({ message: error.message || error });
    }
});
exports.deleteNote = deleteNote;
