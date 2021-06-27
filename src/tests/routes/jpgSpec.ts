import express from 'express'
import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

describe('test image processing', () => {
    it('should generate an resized image 300x200 of jford.jpg', () => {
        const titleTS = 'fjord'
        const widthTS = 300 as number
        const heightTS = 200 as number
        const resizedImgPath = path.join(__dirname,`/thumb/${titleTS}${widthTS}x${heightTS}.jpg`)
        sharp(path.resolve(`./asset/${titleTS}.jpg`))
            .resize(widthTS,heightTS)
            .toFile(resizedImgPath)
        expect(fs.existsSync(resizedImgPath)).toBeTruthy()
    })
})