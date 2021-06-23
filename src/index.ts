import express from 'express'
import {promises as fsPromise} from 'fs'
import sharp from 'sharp'
import path from 'path'

const app = express()
const port = 3000

const output = path.join(__dirname,'/thumb/resizedImg.jpg')

app.get('/api/image', (req,res) => {
    const {title,width,height} = req.query
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)

    sharp(`./asset/${title}.jpg`)
        .resize(widthTS,heightTS)
        .toFile(output)
        .then(() => {
            res.sendFile(output)
            //fsPromise.writeFile(output,img)
        })

})

app.listen(port, () => {
    console.log(`server starts at http://localhost:${port}`)
})
