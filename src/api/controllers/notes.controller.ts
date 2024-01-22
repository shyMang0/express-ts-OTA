import { Request, Response } from 'express'
import * as NotesService from '@/api/services/notesService'
import Notes, { NotesInput } from '@/db/models/notes.model'

export const getAllNotes = async (req: Request, res: Response) => {
	const notes = await NotesService.getAll()
	try {
		return res.status(200).json(notes)
	} catch (error: any) {
		res.status(400).json({ message: error.message || error })
	}
}

export const createNote = async (req: Request, res: Response) => {
	const note: unknown = req.body.note

	//implement ZOD later
	if (!note) return res.status(400).json({ message: 'note is required' })

	const notesInput = <NotesInput>{ note: note }

	try {
		const data = await NotesService.create(notesInput)
		res.status(201).json({ message: 'new row created', data })
	} catch (error: any) {
		res.status(400).json({ message: error.message || error })
	}
}

export const getNote = async (req: Request, res: Response) => {
	const { id } = req.params // slug
	if (!id) return res.status(400).json({ message: 'id is required' })
	try {
		const data = await NotesService.getById(id)
		res.json({ data })
	} catch (error: any) {
		res.status(404).json({ messagess: error.message || error })
	}
}

export const updateNote = async (req: Request, res: Response) => {
	const { id } = req.params // slug
	const note: unknown = req.body.note
	if (!id) return res.status(400).json({ message: 'id is required' })
	if (!note) return res.status(400).json({ message: 'note is required' })

	const notesInput = <NotesInput>{ note: note }

	try {
		const data = await NotesService.update(id, notesInput)
		return res.status(200).json({ message: 'row updated', data })
	} catch (error: any) {
		return res.status(400).json({ message: error.message || error })
	}
}

export const deleteNote = async (req: Request, res: Response) => {
	const { id } = req.params // slug
	if (!id) return res.status(400).json({ message: 'id is required' })

	try {
		const data = await NotesService.deleteById(id)
		return res.status(200).json({ message: 'row deleted', id })
	} catch (error: any) {
		return res.status(404).json({ message: error.message || error })
	}
}
