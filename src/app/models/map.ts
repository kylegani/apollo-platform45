export class Map {
  bounds: {x: number, y: number};

  constructor(obj: Map = {} as Map) {
    const {
      bounds = {x: 5, y: 5}
    } = obj;
    this.bounds = bounds;
  }
}
