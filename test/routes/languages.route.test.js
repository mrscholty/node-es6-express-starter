import request from 'supertest';

describe('api', () => {

    let languages = [
        {id: '1', name: 'JavaScript'},
        {id: '2', name: 'Java'},
        {id: '3', name: 'C#'},
        {id: '4', name: 'Pascal'},
        {id: '5', name: 'C'}
    ];

    it('should get languages', (done) => {
        request('http://localhost:3000')
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, languages, done);
    });

    it('should get single language', (done) => {
        request('http://localhost:3000')
            .get('/api/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {id: '2', name: 'Java'}, done);
    });

});