import {Rover} from './rover';
import {Map} from './map';

export class Simulation {
  name: string;
  simulationDate: Date;
  collisionCount: number;
  oobCount: number;
  rovers: Rover[];
  map: Map;

  constructor(obj: Simulation = {} as Simulation) {
    const {
      name = '',
      simulationDate = new Date(),
      collisionCount = 0,
      oobCount = 0,
      rovers = [],
      map = new Map()
    } = obj;
    this.name = name;
    this.simulationDate = simulationDate;
    this.collisionCount = collisionCount;
    this.oobCount = oobCount;
    this.rovers = rovers;
    this.map = map;
  }

  initMapFromInput(input) {
    const lines = input.split('\n');
    for (const line of lines) {
      if (/(^[1-9]\d*)\s([1-9]\d*)$/.test(line.trim())) {
        const values = line.split(' ');
        this.map.bounds = {x: parseInt(values[0], 10), y: parseInt(values[1], 10)};
      }
    }
  }

  initRoversFromInput(input) {
    const rovers = [];
    const lines = input.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (/^([1-9]\d*)\s([1-9]\d*)\s[NESW]$/.test(lines[i].trim())) {
        const processedLine = lines[i].trim().split(' ');
        const newRover = new Rover();
        newRover.index = rovers.length;
        newRover.startPosition = {x: parseInt(processedLine[0], 10), y: parseInt(processedLine[1], 10)};
        newRover.endPosition = {x: parseInt(processedLine[0], 10), y: parseInt(processedLine[1], 10)};
        newRover.direction = processedLine[2];
        newRover.instructions = lines[i + 2].split('');
        rovers.push(newRover);
      }
    }
    return this.rovers = rovers;
  }

  executeInstruction(instruction, rover) {
    switch (instruction) {
      case 'L':
        rover.rotateLeft();
        break;
      case 'R':
        rover.rotateRight();
        break;
      case 'M':
        rover.moveForward();
        break;
    }
    this.hasRoverFailed(rover);
  }

  hasRoverFailed(rover) {
    if (rover.checkIsOutOfBounds(this.map)) {
      this.oobCount++;
      return true;
    }
    if (rover.checkHasCollided(this.rovers)) {
      this.collisionCount++;
      return true;
    }
    return false;
  }

  process() {
    for (const rover of (this.rovers)) {
      if (rover.instructions) {
        for (const instruction of rover.instructions) {
          if (rover.isProcessed) {
            continue;
          }
          if (this.hasRoverFailed(rover)) {
            continue;
          }
          this.executeInstruction(instruction, rover);
        }
      }
      rover.isProcessed = true;
    }
  }
}
