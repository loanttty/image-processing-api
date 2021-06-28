import express from 'express'
import fs from 'fs'
import path from 'path'
import resizeImg from '../util/resizeImg'

const jpgFormat = express.Router()

jpgFormat.get('/', async (req, res) => {

    const {title,width,height} = req.query
    const titleTS = title as string
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)
    const resizedImgPath = path.resolve(`./thumb/${titleTS}${widthTS}x${heightTS}.jpg`)
    
    try {
        // check if image with same resizing request exists, else use sharp to create new one
        if(fs.existsSync(resizedImgPath)) {
            res.sendFile(resizedImgPath)
        } else {
            await resizeImg(titleTS,widthTS,heightTS,'jpg')
            res.sendFile(resizedImgPath)
        }
    } catch(err) {
        res.status(404).send(`Error in jpg processing: ${err}`)
    }

})

export default jpgFormat