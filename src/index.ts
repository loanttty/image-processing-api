import express from 'express'
import {promises as fsPromises, read} from 'fs'
import sharp from 'sharp'
import path from 'path'

const app = express()
const port = 3000

const storage = path.join(__dirname,`/storage.txt`)
let imageInfo : Object


app.get('/api/image', (req,res) => {
    const {title,width,height} = req.query
    const titleTS = title as string
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)
    const output = path.join(__dirname,`/thumb/resized${title}${widthTS}x${heightTS}.jpg`)

    const readData = async () => {
        const myFile = await fsPromises.readFile(storage,'utf-8')
        console.log(JSON.parse(myFile))
    }

    readData()

    sharp(`./asset/${titleTS}.jpg`)
        .resize(widthTS,heightTS)
        .toFile(output)
        .then((info) => {
            res.sendFile(output)
            imageInfo = {
                ...imageInfo,
                [titleTS]: info
            }

            const writeData = async () => {
                const myFile = await fsPromises.open(storage,'a+')
                await myFile.write(JSON.stringify(imageInfo))
            }
            writeData()
        })
})

app.listen(port, () => {
    console.log(`server starts at http://localhost:${port}`)
})
