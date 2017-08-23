import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Urls } from '.'

const app = () => express(routes)

let urls

beforeEach(async () => {
  urls = await Urls.create({})
})

test('POST /urls 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ link: 'test', project: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.link).toEqual('test')
  expect(body.project).toEqual('test')
})

test('GET /urls 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /urls/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${urls.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(urls.id)
})

test('GET /urls/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /urls/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${urls.id}`)
    .send({ link: 'test', project: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(urls.id)
  expect(body.link).toEqual('test')
  expect(body.project).toEqual('test')
})

test('PUT /urls/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ link: 'test', project: 'test' })
  expect(status).toBe(404)
})

test('DELETE /urls/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${urls.id}`)
  expect(status).toBe(204)
})

test('DELETE /urls/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
