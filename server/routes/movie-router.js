import express from 'express'

import { createMovie, readMovie, updateMovie, deleteMovie } from '../controllers/movie-ctrl'

const router = express.Router()

router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)
 