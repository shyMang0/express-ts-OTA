import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
	res.json({ message: 'get index' })
})

router.post('/', (req, res) => {
	res.json({ message: 'post index' })
})

export default router
