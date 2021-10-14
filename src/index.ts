import { Request } from './request'
import { Point } from './resources/point'
import { Stations } from './resources/stations'

export * from './models'

export class Meteostat {
  private readonly request: Request
  point: Point
  stations: Stations

  constructor(apiKey: string) {
    this.request = new Request(apiKey)
    this.point = new Point(this.request)
    this.stations = new Stations(this.request)
  }
}
