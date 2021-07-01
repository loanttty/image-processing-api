import sharp from "sharp";
import path from "path";

const resizeImg = async (
  t: string | null,
  w: number | null,
  h: number | null,
  format: string | null
): Promise<void> => {
  const resizedImgPath = path.resolve(`./thumb/${t}${w}x${h}.${format}`);
  await sharp(path.resolve(`./asset/${t}.jpg`))
    .resize(w, h)
    .toFile(resizedImgPath);
};

export default resizeImg;
