import * as NotesDal from '../../db/dal/notes.dal'
import { v4 as uuidv4 } from 'uuid'

import { NotesInput, NotesOuput } from '@/db/models/notes.model.'

export const create = (payload: NotesInput): Promise<NotesOuput> => {
	const uuid = uuidv4()
	payload.id = uuid.slice(-5)
	return NotesDal.create(payload)
}
export const getById = (id: string): Promise<NotesOuput> => {
	return NotesDal.getById(id)
}

export const getAll = (): Promise<NotesOuput[]> => {
	return NotesDal.getAll()
}
