# image-processing-api
 Image Processing API to resize .JPG image to .JPG or .PNG image 

# To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

# API Endpoint

* `/api/jpg?title=<imageName>&width=<integerNumber>&height=<integerNumber>`
This will resize the .JPG image with name as exact same as the value provided in parameter `title` in ./asset folder according to the `width` and `height` provided and create a new .JPG resized image in ./thumb folder.

* `/api/png?title=<imageName>&width=<integerNumber>&height=<integerNumber>`
This will resize the .JPG image with name as exact same as the value provided in parameter `title` in ./asset folder according to the `width` and `height` provided and create a new .PNG resized image in ./thumb folder.
