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
    this.message = 'Please check the query parameters'
  }
}

export class UnauthorizedError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = 'Make sure to send a valid RapidAPI key'
  }
}

export class ForbiddenError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = "You're not allowed to access this endpoint"
  }
}

export class NotFoundError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = "This endpoint doesn't exist"
  }
}

export class TooManyRequestsError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = "You've exceeded the quota"
  }
}

export class ServiceTemporarilyUnavailableError extends MeteostatError {
  constructor(error: Response) {
    super(error)
    this.message = 'The API is currently down'
  }
}
