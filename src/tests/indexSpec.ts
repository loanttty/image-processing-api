import supertest from "supertest"
import app from "../index"

describe('GET /api/jpg', () => {
    it('should generate new resizing image', (done) => {
        supertest(app)
            .get('/api/jpg')
            .expect(200, done);
    });
});

