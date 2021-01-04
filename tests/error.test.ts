import * as nock from 'nock'
import { Meteostat } from '../src'
import {
  BadRequestError,
  ServiceTemporarilyUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from '../src/resources/error'

const scope = nock('https://api.meteostat.net/v2')

let meteostat: Meteostat

beforeEach(() => {
  meteostat = new Meteostat('apiKey')
})

it('should throw bad request error', async () => {
  scope.get('/stations/search').query(true).reply(400, {
    status: 400,
    statusText: 'Bad Request',
  })
  try {
    await meteostat.stations.search({})
  } catch (error) {
    expect(error).toEqual(new BadRequestError(error))
  }
})

it('should throw unauthorized error', async () => {
  scope.get('/stations/search').query(true).reply(401, {
    status: 401,
    statusText: 'Unauthorized',
  })
  try {
    await meteostat.stations.search({ query: 'Sao Paulo' })
  } catch (error) {
    expect(error).toEqual(new UnauthorizedError(error))
  }
})

it('should throw too many requests error', async () => {
  scope.get('/stations/search').query(true).reply(429, {
    status: 429,
    statusText: 'Too Many Requests',
  })
  try {
    await meteostat.stations.search({ query: 'Sao Paulo' })
  } catch (error) {
    expect(error).toEqual(new TooManyRequestsError(error))
  }
})

it('should throw service temporarily unavailable error', async () => {
  scope.get('/stations/search').query(true).reply(503, {
    status: 503,
    statusText: 'Service Unavailable',
  })
  try {
    await meteostat.stations.search({ query: 'Sao Paulo' })
  } catch (error) {
    expect(error).toEqual(new ServiceTemporarilyUnavailableError(error))
  }
})
