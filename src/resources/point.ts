import {
  PointDailyRequest,
  PointDailyResponse,
  PointHourlyRequest,
  PointHourlyResponse,
  PointMonthlyRequest,
  PointMonthlyResponse,
  PointNormalsRequest,
  PointNormalsResponse,
} from '../models/point'
import { Request } from '../request'

export class Point {
  private readonly request: Request

  constructor(request: Request) {
    this.request = request
  }

  async daily(params: PointDailyRequest): Promise<PointDailyResponse> {
    return await this.request.makeApiRequest('point/daily', params)
  }

  async hourly(params: PointHourlyRequest): Promise<PointHourlyResponse> {
    return await this.request.makeApiRequest('point/hourly', params)
  }

  async monthly(params: PointMonthlyRequest): Promise<PointMonthlyResponse> {
    return await this.request.makeApiRequest('point/monthly', params)
  }

  async normals(params: PointNormalsRequest): Promise<PointNormalsResponse> {
    return await this.request.makeApiRequest('point/normals', params)
  }
}
