import express from 'express'

import { createMovie } from '../controllers/movie-ctrl'

const router = express.Router()

router.post('/movie', createMovie)
 