import { Request } from '../request'

import {
  ClimateRequest,
  ClimateResponse,
  DailyRequest,
  DailyResponse,
  HourlyRequest,
  HourlyResponse,
} from './types'

export class Point {
  private readonly request: Request

  constructor(request) {
    this.request = request
  }

  async hourly(params: HourlyRequest): Promise<HourlyResponse> {
    return await this.request.makeApiRequest<HourlyResponse>(
      'point/hourly',
      params,
    )
  }

  async daily(params: DailyRequest): Promise<DailyResponse> {
    return await this.request.makeApiRequest<DailyResponse>(
      'point/daily',
      params,
    )
  }

  async climate(params: ClimateRequest): Promise<ClimateResponse> {
    return await this.request.makeApiRequest<ClimateResponse>(
      'point/climate',
      params,
    )
  }
}
