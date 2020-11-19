export class MeteostatError {
  message: string
  status: number
  statusText: string

  constructor(e: any) {
    this.status = e.status
    this.statusText = e.statusText
  }
}

export class BadRequestError extends MeteostatError {
  constructor(e: any) {
    super(e)
    this.message = 'Please check the request parameters'
  }
}

export class UnauthorizedError extends MeteostatError {
  constructor(e: any) {
    super(e)
    this.message = 'Make sure to send a valid API key header'
  }
}

export class TooManyRequestsError extends MeteostatError {
  constructor(e: any) {
    super(e)
    this.message = "You've exceeded the Meteostat quota"
  }
}

export class ServiceTemporarilyUnavailableError extends MeteostatError {
  constructor(e: any) {
    super(e)
    this.message = 'The Meteostat API is currently down'
  }
}
