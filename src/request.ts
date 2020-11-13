import fetch from 'node-fetch'
import * as qs from 'querystring'

import {
  BadRequestError,
  ServiceTemporarilyUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from './error'

type HttpMethodTypes = 'post' | 'get'

export class Request {
  request: any

  constructor(apiKey: string) {
    this.request = ({ uri, params }) =>
      fetch(`https://api.meteostat.net/v2/${uri}?${qs.stringify(params)}`, {
        headers: { 'x-api-key': apiKey },
      })
  }

  public async makeApiRequest<Response>(
    uri: string,
    params?: {},
  ): Promise<Response> {
    try {
      const response = await this.request({
        uri,
        params,
      })

      if (!response.ok) throw response

      const { data } = await response.json()
      return data
    } catch (error) {
      switch (error.status) {
        case 400:
          throw new BadRequestError(error)
        case 401:
          throw new UnauthorizedError(error)
        case 429:
          throw new TooManyRequestsError(error)
        case 503:
          throw new ServiceTemporarilyUnavailableError(error)
        default:
          throw error
      }
    }
  }
}
