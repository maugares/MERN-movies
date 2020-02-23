import express from 'express'

import { createMovie, getMovie, updateMovie, deleteMovie, getMovieById } from '../controllers/movie-ctrl'

const router = express.Router()

router.post('/movie', createMovie)
router.get('/movie', getMovie)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)
router.get('/movie/:id', getMovieById)
 