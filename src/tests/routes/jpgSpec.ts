import fs from "fs";
import resizeImg from "../../util/resizeImg";
import path from "path";

describe("test image transformation to jpg format", () => {
  it("should generate an resized image 300x200 of jford.jpg in /thumb folder", async () => {
    const titleTS = "fjord";
    const widthTS = 300 as number;
    const heightTS = 200 as number;
    const resizedImgPath = path.resolve(
      `./thumb/${titleTS}${widthTS}x${heightTS}.jpg`
    );

    await resizeImg(titleTS, widthTS, heightTS, "jpg");

    expect(fs.existsSync(resizedImgPath)).toBeTruthy();
  });
});
