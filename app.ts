import express, { Express } from 'express'
import dotenv from 'dotenv'

import http from 'http'

const app: Express = express()
dotenv.config()

startServer()

async function startServer() {
	try {
		const httpServer = http.createServer(app)
		httpServer.listen(process.env.PORT || 3000)
		console.log('Http port :', process.env.PORT || 3000)
	} catch (err) {
		console.error(err)
	}
}
