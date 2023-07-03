import * as request from 'supertest';

import app from '../app';

describe('Index', () => {
  it('should return request data', async () => {
    const res = await request(app).get('/');
    const expected = {
      status: 200,
      description: 'Node.js App',
    };
    expect(res.status).toEqual(expected.status);
    expect(res.body).toEqual(expected);
  });
});
