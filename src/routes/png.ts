import express from 'express'
import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

const pngFormat = express.Router()

pngFormat.get('/', (req, res) => {
    const {title,width,height} = req.query
    const titleTS = title as string
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)
    const resizedImgPath = path.join(__dirname,`/thumb/${titleTS}${widthTS}x${heightTS}.png`)

    try {
        if(fs.existsSync(resizedImgPath)) {
            console.log('from disk png')
            res.sendFile(resizedImgPath)
        } else {
            console.log(path.resolve(`./asset/${titleTS}.jpg`))
            console.log('resizing png')
            sharp(path.resolve(`./asset/${titleTS}.jpg`))
                .resize(widthTS,heightTS)
                .toFile(resizedImgPath)
                .then(() => {
                    console.log('from sharp png')
                    res.sendFile(resizedImgPath)
                })
                .catch(err => {
                    res.send(`Error in processing: ${err}`)
                })
        }
    } catch(err) {
        console.log('Error in processing: ',err)
    }

})

export default pngFormat