import { Request, Response } from 'express'
import * as NotesService from '../services/notesService'
import Notes, { NotesInput } from '@/db/models/notes.model.'

export const getAllNotes = async (req: Request, res: Response) => {
	const notes = await NotesService.getAll()
	try {
		return res.status(200).json({ notes })
	} catch (error: any) {
		res.status(400).json({ messagex: error.message || error })
	}
}

export const createNote = async (req: Request, res: Response) => {
	const note: unknown = req.body.note

	if (!note) return res.status(400).json({ message: 'note is required' })

	const notesInput = <NotesInput>{ note: note }

	try {
		const data = await NotesService.create(notesInput)
		res.status(201).json({ message: 'new row created', data })
	} catch (error: any) {
		res.status(409).json({ message: error.message || error })
	}
}

export const getNote = async (req: Request, res: Response) => {
	const { id } = req.params // slug
	if (!id) return res.status(400).json({ message: 'id is required' })
	try {
		const data = await NotesService.getById(id)
		res.json({ data })
	} catch (error: any) {
		res.status(400).json({ messagess: error.message || error })
	}
}