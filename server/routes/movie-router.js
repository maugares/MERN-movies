import express from 'express'

import { createMovie, getMovie, updateMovie, deleteMovie, getMovieById } from '../controllers/movie-ctrl'

export const router = express.Router()

router.post('/movie', createMovie)
router.get('/movies', getMovies)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)
router.get('/movie/:id', getMovieById)