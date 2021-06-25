import express from 'express'
import jpgFormat from './routes/jpg'
import pngFormat from './routes/png'

const app = express()
const port = 3000

app.use('/api/jpg',jpgFormat)
app.use('/api/png',pngFormat)

app.listen(port, () => {
    console.log(`server starts at http://localhost:${port}`)
})
