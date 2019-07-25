import request from 'supertest';

describe('API: routes', () => {

    it('should GET /api', (done) => {
        request('http://localhost:3000')
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should GET /api/1', (done) => {
        request('http://localhost:3000')
            .get('/api/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should POST /api', (done) => {
        request('http://localhost:3000')
            .post('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should PUT /api/1', (done) => {
        request('http://localhost:3000')
            .put('/api/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should DELETE /api/1', (done) => {
        request('http://localhost:3000')
            .delete('/api/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});
