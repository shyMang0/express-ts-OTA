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
exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const notes_model_1 = __importDefault(require("../../db/models/notes.model"));
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield notes_model_1.default.create(payload);
    return post;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_model_1.default.findByPk(id);
    if (!note) {
        throw new Error('not found');
    }
    const updatedPost = yield note.update(payload);
    return updatedPost;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield notes_model_1.default.findByPk(id, {
        paranoid: false
    });
    if (!post) {
        throw new Error('not found');
    }
    if (post && post.deleted_at) {
        throw new Error('note is deleted');
    }
    return post;
});
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield notes_model_1.default.findByPk(id);
    if (!post) {
        throw new Error('not found');
    }
    const deletedPost = yield notes_model_1.default.destroy({
        where: { id }
    });
    return !!deletedPost;
});
exports.deleteById = deleteById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const tests = yield notes_model_1.default.findAll({
        paranoid: true,
        attributes: {
            exclude: ['deleted_at']
        }
    });
    return tests;
});
exports.getAll = getAll;
