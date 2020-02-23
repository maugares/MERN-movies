import Movie from '../models/movie-model'

// Crud - Create
export const createMovie = (req, res, err) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a movie'
    })
  }

  const movie = new Movie(body)

  if (!movie) {
    return res.status(400).json({ success: false, error: err })
  }

  movie
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: movie._id,
        message: 'Movie created!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Movie not created!'
      })
    })
}

// cRud - Read
export const readMovie = async (req, res) => {
  await Movie.find({}, (err, movies) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!movies.length) {
      return res.status(404).json({ success: false, error: 'Movies not found' })
    }
    return res.status(200).json({ success: true, data: movies })
  }).catch(err => console.log(err))
}

// crUd - Update
export const updateMovie = async (req, res, err) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a body to update'
    })
  }

  Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Movie not found!'
      })
    }
    movie.name = body.name
    movie.time = body.time
    movie.rating = body.rating
    movie
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: movie._id,
          message: 'Movie updated!'
        })
      })
      .catch(err => {
        return res.status(404).json({
          err,
          message: 'Movie not updated'
        })
      })
  })
}

// cruD - Delete
export const deleteMovie = async (req, res) => {
  await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!movie) {
      return res.status(404).json({ success: false, error: 'Movie not found' })
    }

    return res
      .status(200)
      .json({ success: true, data: movie })
      .catch(err => console.error(err))
  })
}
