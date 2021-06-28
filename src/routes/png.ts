import express from 'express'
import fs from 'fs'
import resizeImg from '../util/resizeImg'
import path from 'path'

const pngFormat = express.Router()

pngFormat.get('/', async (req, res) => {
    const {title,width,height} = req.query
    const titleTS = title as string
    const widthTS = parseInt(width as string)
    const heightTS = parseInt(height as string)
    const resizedImgPath = path.resolve(`./thumb/${titleTS}${widthTS}x${heightTS}.png`)
    
    try {
        if(fs.existsSync(resizedImgPath)) {
            console.log('from disk png')
            res.sendFile(resizedImgPath)
        } else {
            console.log('resizing png')
            await resizeImg(titleTS,widthTS,heightTS,'png')
            res.sendFile(resizedImgPath)
        }
    } catch(err) {
        res.status(404).send(`Error in png processing: ${err}`)
    }

})

export default pngFormat