import express from "express";
import fs from "fs";
import resizeImg from "../util/resizeImg";
import path from "path";

const pngFormat = express.Router();

pngFormat.get("/", async (req, res): Promise<void> => {
  const { title, width, height } = req.query;
  const titleTS = title as string;
  const widthTS = parseInt(width as string);
  const heightTS = parseInt(height as string);
  const resizedImgPath = path.resolve(
    `./thumb/${titleTS}${widthTS}x${heightTS}.png`
  );

  try {
    // check if image with same resizing request exists, else use sharp to create new one
    if (fs.existsSync(resizedImgPath)) {
      res.sendFile(resizedImgPath);
    } else {
      await resizeImg(titleTS, widthTS, heightTS, "png");
      res.sendFile(resizedImgPath);
    }
  } catch (err) {
    res.status(404).send(`Error in png processing: ${err}`);
  }
});

export default pngFormat;
