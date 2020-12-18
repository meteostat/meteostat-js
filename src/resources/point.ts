import {
  PointClimateRequest,
  PointClimateResponse,
  PointDailyRequest,
  PointDailyResponse,
  PointHourlyRequest,
  PointHourlyResponse,
} from '../models/point'
import { Request } from '../request'

export class Point {
  private readonly request: Request

  constructor(request) {
    this.request = request
  }

  async hourly(params: PointHourlyRequest): Promise<PointHourlyResponse> {
    return await this.request.makeApiRequest<PointHourlyResponse>(
      'point/hourly',
      params,
    )
  }

  async daily(params: PointDailyRequest): Promise<PointDailyResponse> {
    return await this.request.makeApiRequest<PointDailyResponse>(
      'point/daily',
      params,
    )
  }

  async climate(params: PointClimateRequest): Promise<PointClimateResponse> {
    return await this.request.makeApiRequest<PointClimateResponse>(
      'point/climate',
      params,
    )
  }
}
