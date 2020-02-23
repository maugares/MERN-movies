import mongoose from 'mongoose'

const mongodbGateway = 'mongodb://127.0.0.1:27017'
const dbName = 'cinema'

mongoose
  .connect(`${mongodbGateway}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(e => {
    console.error('Connection error', e.message)
  })

export const db = mongoose.connection
