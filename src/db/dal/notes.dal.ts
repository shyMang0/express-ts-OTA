import Notes, { NotesInput, NotesOuput } from '../models/notes.model.'

export const create = async (payload: NotesInput): Promise<NotesOuput> => {
	const post = await Notes.create(payload as any)
	return <NotesOuput>post
}

export const getById = async (id: string): Promise<NotesOuput> => {
	const post = await Notes.findByPk(id, {
		paranoid: false
	})
	if (!post) {
		throw new Error('not found')
	}

	if (post && post.deleted_at) {
		throw new Error('note is deleted')
	}
	return <NotesOuput>post
}

export const getAll = async (): Promise<NotesOuput[]> => {
	const tests = await Notes.findAll({
		paranoid: true,
		attributes: {
			exclude: ['deleted_at']
		}
	})
	return <NotesOuput[]>tests
}
