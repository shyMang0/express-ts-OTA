import { Request, Response } from 'express'
import * as NotesService from '@/api/services/notesService'
import { NotesInput } from '@/db/models/notes.model'

export const getAllNotes = async (req: Request, res: Response) => {
	const notes = await NotesService.getAll()
	try {
		return res.status(200).json(notes)
	} catch (error: any) {
		res.status(400).json({ message: error.message || error })
	}
}

export const createNote = async (req: Request, res: Response) => {
	const title: unknown = req.body.title
	const body: unknown = req.body.body

	//implement ZOD later
	if (!title) return res.status(400).json({ message: 'title is required' })
	if (!body) return res.status(400).json({ message: 'body is required' })

	const notesInput = <NotesInput>{ title, body }

	try {
		const data = await NotesService.create(notesInput)
		res.status(201).json({ message: 'new note created', data })
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
	const title: unknown = req.body.title
	const body: unknown = req.body.body
	if (!id) return res.status(400).json({ message: 'id is required' })
	if (!title && !body) return res.status(400).json({ message: 'either title or body is required' })

	const notesInput = <NotesInput>{ title, body }

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
