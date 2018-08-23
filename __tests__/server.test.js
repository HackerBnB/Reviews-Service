const request = require('supertest');
const app = require('../server/app');


describe('tests reviews path', () => {
  test('the api request has json Content-Type', () => request(app)
    .get('/api/rooms/1/reviews')
    .expect('Content-Type', /json/));
  test('should respond with reviews to a valid path', (done) => {
    request(app).get('/api/rooms/1/reviews').then((response) => {
      expect(response.statusCode).toBe(200);
      // expect(Object.keys(response.body)).toEqual(
      //   expect.arrayContaining(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
      // );
      done();
    });
  });
  test('should respond with statusCode 404 to invalid path', (done) => {
    request(app).get('/api/rooms/1/rev').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
