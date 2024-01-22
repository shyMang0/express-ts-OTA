"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../db/config/sequelize"));
class Notes extends sequelize_1.Model {
}
Notes.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        primaryKey: true
    },
    note: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Notes',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});
// Sync the model with the database (creates the table if it doesn't exist)
Notes.sync({ force: false })
    .then(() => {
    console.log('User table created (if not exists)');
})
    .catch((err) => {
    console.error('Error creating User table:', err);
});
exports.default = Notes;
