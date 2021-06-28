import supertest from "supertest"
import app from "../index"

describe('Test Endpoints /api/jpg', () => {
    it('should response error code 404 if request query string is not provided', (done) => {
        supertest(app)
            .get('/api/jpg')
            .expect(404, done);
    });
    it('should response error code 200 if request query string is provided', (done) => {
        supertest(app)
            .get('/api/jpg/?title=fjord&width=200&height=200')
            .expect(200, done);
    });
});

describe('Test Endpoints /api/png', () => {
    it('should response error code 404 if request query string is not provided', (done) => {
        supertest(app)
            .get('/api/png')
            .expect(404, done);
    });
    it('should response error code 200 if request query string is provided', (done) => {
        supertest(app)
            .get('/api/png/?title=fjord&width=200&height=200')
            .expect(200, done);
    });
});




