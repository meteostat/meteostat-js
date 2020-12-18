export class MeteostatError {
  message: string
  status: number
  statusText: string

  constructor(error: Response) {
    this.status = error.status
    this.statusText = error.statusText
  }
}

export class BadRequestError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = 'Please check the request parameters'
  }
}

export class UnauthorizedError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = 'Make sure to send a valid API key header'
  }
}

export class TooManyRequestsError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = "You've exceeded the Meteostat quota"
  }
}

export class ServiceTemporarilyUnavailableError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = 'The Meteostat API is currently down'
  }
}
