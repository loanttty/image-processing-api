import supertest from "supertest"
import app from "../index"

describe('GET /api/jpg', () => {
    it('should response with status 200', (done) => {
        supertest(app)
            .get('/api/jpg')
            .expect(200, done);
    });
});


