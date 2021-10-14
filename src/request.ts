import 'isomorphic-fetch'

import { MeteostatResponse } from './models'
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  ServiceTemporarilyUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from './resources/error'

export type RequestParams = {
  uri: string
  params: Record<string, unknown>
}

export class Request {
  request: (params: RequestParams) => Promise<Response>

  constructor(apiKey: string) {
    this.request = ({ uri, params }: RequestParams): Promise<Response> => {
      const query: string = new URLSearchParams(
        Object.entries(params).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
          {},
        ),
      ).toString()
      return fetch(`https://meteostat.p.rapidapi.com/${uri}?${query}`, {
        headers: {
          'x-rapidapi-host': 'meteostat.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      })
    }
  }

  public async makeApiRequest(
    uri: RequestParams['uri'],
    params: RequestParams['params'],
  ): Promise<MeteostatResponse> {
    try {
      const response = await this.request({
        uri,
        params,
      })
      if (!response.ok) {
        throw response
      }
      return response.json() as Promise<MeteostatResponse>
    } catch (error) {
      switch (error?.status) {
        case 400:
          throw new BadRequestError(error)
        case 401:
          throw new UnauthorizedError(error)
        case 403:
          throw new ForbiddenError(error)
        case 404:
          throw new NotFoundError(error)
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
