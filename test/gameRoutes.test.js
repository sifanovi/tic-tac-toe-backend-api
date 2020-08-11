const app = require('../index')
const request = require('supertest')

describe('GAME ROUTES', () => {
    it('should initialize the game', async () => {
        const res = await request(app).post('/games/')
        expect(res.statusCode).toEqual(201)
       // expect(res.body).toHaveProperty('users')
    })
})
describe('GAME ROUTES', () => {
    it('getting game row should have moves,turn,logs propery', async () => {
        const res = await request(app).get('/games/041851f9-cb40-4bcf-8de8-d070cf4d62ac')
        expect(res.statusCode).toEqual(200)

          expect(res.body).toHaveProperty('moves');
          expect(res.body).toHaveProperty('turn');
          expect(res.body).toHaveProperty('logs')
    })
})

describe('GAME ROUTES', () => {
    it('game table should be updated with turn value', async () => {
        const res = await request(app).get('/games/041851f9-cb40-4bcf-8de8-d070cf4d62ac')
        expect(res.statusCode).toEqual(200)

          expect(res.body).toHaveProperty('moves');
          expect(res.body).toHaveProperty('turn');
          expect(res.body).toHaveProperty('logs')
    })
})
