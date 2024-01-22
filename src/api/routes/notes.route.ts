import express from 'express'

import { getAllNotes, createNote, getNote } from '../controllers/notes.controller'

const router = express.Router()

router.get('/', getAllNotes)
router.post('/', createNote)

router.get('/:id', getNote)

export default router
