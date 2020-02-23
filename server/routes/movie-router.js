import express from 'express'

import { createMovie, readMovie } from '../controllers/movie-ctrl'

const router = express.Router()

router.post('/movie', createMovie)
router.get('/movie', readMovie)
 