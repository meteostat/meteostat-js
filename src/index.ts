import { Request } from './request'
import { Point } from './resources/point'
import { Stations } from './resources/stations'

export * from './models'

export class Meteostat {
  private readonly request: Request
  stations: Stations
  point: Point

  constructor(apiKey: string) {
    this.request = new Request(apiKey)
    this.stations = new Stations(this.request)
    this.point = new Point(this.request)
  }
}
