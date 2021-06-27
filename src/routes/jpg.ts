import express from 'express'
import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

const jpgFormat = express.Router()

jpgFormat.get('/', (req, res) => {
    const {title,width,height} = req.query
    const titleTS = title as string
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)
    const resizedImgPath = path.join(__dirname,`/thumb/${titleTS}${widthTS}x${heightTS}.jpg`)

    try {
        if(fs.existsSync(resizedImgPath)) {
            console.log('from disk jpg')
            res.sendFile(resizedImgPath)
        } else {
            console.log('resizing jpg')
            sharp(path.resolve(`./asset/${titleTS}.jpg`))
                .resize(widthTS,heightTS)
                .toFile(resizedImgPath)
                .then(() => {
                    console.log('from sharp jpg')
                    res.sendFile(resizedImgPath)
                })
                .catch(err => {
                    res.send(` Error in transforming image to jpg: ${err}`)
                })
        }
    } catch(err) {
        console.log('Error in processing: ',err)
    }

})

export default jpgFormat