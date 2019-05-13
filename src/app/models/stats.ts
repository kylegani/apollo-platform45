export class Stats {
  collisionCount: number;
  oobCount: number;
  roverCount: number;
  simulationsCount: number;

  constructor(obj: Stats = {} as Stats) {
    const {
      collisionCount = 0,
      oobCount = 0,
      roverCount = 0,
      simulationsCount = 0
    } = obj;
    this.collisionCount = collisionCount;
    this.oobCount = oobCount;
    this.roverCount = roverCount;
    this.simulationsCount = simulationsCount;
  }
}
