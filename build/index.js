"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var inputImg = './asset/*.jpg';
var output = './thumb/resizedImg.jpg';
var app = express_1.default();
var port = 3000;
app.get('/api/image', function (req, res) {
    res.send('Resizing...');
    var _a = req.query, title = _a.title, width = _a.width, height = _a.height;
    sharp_1.default("./asset/" + title + ".jpg")
        .resize(width, height)
        .toFile(output)
        .then(function (img) {
        res.send('Resizing done!');
        res.send(img);
        //fsPromise.writeFile(output,img)
    });
});
app.listen(port, function () {
    console.log("server starts at http://localhost:" + port);
});
