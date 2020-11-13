import { AxiosError } from 'axios'

export class MeteostatError {
  message: string
  statusCode: number
  statusText: string

  constructor(e: AxiosError) {
    if (e.response) {
      this.statusCode = e.response.status
      this.statusText = e.response.statusText
    }
  }
}

export class BadRequestError extends MeteostatError {
  constructor(e: AxiosError) {
    super(e)
    this.message = 'Please check the request parameters'
  }
}

export class UnauthorizedError extends MeteostatError {
  constructor(e: AxiosError) {
    super(e)
    this.message = 'Make sure to send a valid API key header'
  }
}

export class TooManyRequestsError extends MeteostatError {
  constructor(e: AxiosError) {
    super(e)
    this.message = "You've exceeded the Meteostat quota"
  }
}

export class ServiceTemporarilyUnavailableError extends MeteostatError {
  constructor(e: AxiosError) {
    super(e)
    this.message = 'The Meteostat API is currently down'
  }
}
