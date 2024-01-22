import { DataTypes, Model } from 'sequelize'
import sequelize from '@/db/config/sequelize'

interface NotesAttributes {
	id: string
	note: string
	created_at?: Date
	updated_at?: Date
}

export interface NotesInput {
	id: string
	note: string
	updated_at?: Date
}

export interface NotesOuput extends Required<NotesAttributes> {}

class Notes extends Model<NotesAttributes, NotesInput> implements NotesAttributes {
	public id!: string
	public note!: string
	public readonly created_at?: Date
	public updated_at?: Date
	public deleted_at?: Date
}

Notes.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: true,
			primaryKey: true
		},
		note: {
			type: DataTypes.STRING,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: 'Notes',
		timestamps: true,
		paranoid: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at'
	}
)

// Sync the model with the database (creates the table if it doesn't exist)
Notes.sync({ force: false })
	.then(() => {
		console.log('User table created (if not exists)')
	})
	.catch((err) => {
		console.error('Error creating User table:', err)
	})

export default Notes
