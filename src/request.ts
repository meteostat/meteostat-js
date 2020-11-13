import axios, { AxiosInstance } from 'axios'

import {
  BadRequestError,
  ServiceTemporarilyUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from './error'

type HttpMethodTypes = 'post' | 'get'

export class Request {
  instance: AxiosInstance

  constructor(url: string, apiKey: string) {
    this.instance = axios.create({
      baseURL: url,
      headers: {
        'x-api-key': apiKey,
      },
    })
  }

  public async makeApiRequest<Response>(
    method: HttpMethodTypes,
    url: string,
    params?: {},
  ): Promise<Response> {
    try {
      const response = await this.instance.request({
        method,
        url,
        params,
      })
      return response.data.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      switch (error.response.status) {
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
