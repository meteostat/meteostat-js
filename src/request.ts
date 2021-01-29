import fetch, { Response } from 'node-fetch'

import { MeteostatResponse } from './models'
import {
  BadRequestError,
  ServiceTemporarilyUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from './resources/error'

type RequestParams = {
  uri: string
  params: any
}

export class Request {
  request: any

  constructor(apiKey: string) {
    this.request = ({ uri, params }: RequestParams): Promise<Response> => {
      const query: string = new URLSearchParams(params).toString()
      return fetch(`https://api.meteostat.net/v2/${uri}?${query}`, {
        headers: { 'x-api-key': apiKey },
      })
    }
  }

  public async makeApiRequest(
    uri: string,
    params: any,
  ): Promise<MeteostatResponse> {
    try {
      const response = await this.request({
        uri,
        params,
      })

      if (!response.ok) {
        throw response
      }

      return response.json()
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
