import { Map } from './map';

export class Rover {
  index: number;
  isProcessed: boolean;
  startPosition: { x: number, y: number };
  endPosition: { x: number, y: number };
  direction: string;
  hasCollided: boolean;
  isOutOfBounds: boolean;
  instructions: string;
  private possibleDirections = ['N', 'E', 'S', 'W'];

  constructor(obj: Rover = {} as Rover) {
    const {
      index = 0,
      isProcessed = false,
      startPosition = {x: 0, y: 0},
      endPosition = {x: 0, y: 0},
      direction = 'N',
      instructions = '',
      hasCollided = false,
      isOutOfBounds = false
    } = obj;

    this.index = index;
    this.isProcessed = isProcessed;
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.direction = direction;
    this.instructions = instructions;
    this.hasCollided = hasCollided;
    this.isOutOfBounds = isOutOfBounds;
  }

  rotateLeft() {
    return this.direction = this.possibleDirections[Math.abs(((this.possibleDirections.indexOf(this.direction) + 3) % 4))];
  }

  rotateRight() {
    return this.direction = this.possibleDirections[Math.abs(((this.possibleDirections.indexOf(this.direction) + 1) % 4))];
  }

  moveForward() {
    // switch statements are bad MKAY (due to performance), but it will help us get to the point, without an if tree of doom!
    switch (this.direction) {
      case 'N':
        return this.endPosition.y++;
      case 'E':
        return this.endPosition.x++;
      case 'S':
        return this.endPosition.y--;
      case 'W':
        return this.endPosition.x--;
    }
  }

  checkHasCollided(rovers: Rover[]) {
    // iterate through rovers and check if rovers exist in the same space
    // TODO: implement rover pre-collision detection system to make this app even more awesome!
    if (rovers) {
      for (const otherRover of rovers) {
        if (otherRover.index !== this.index && otherRover.endPosition.x === this.endPosition.x &&
          otherRover.endPosition.y === this.endPosition.y) {
          this.hasCollided = true;
          this.isProcessed = true;
          return true;
        }
      }
    }
    return false;
  }

  checkIsOutOfBounds(map: Map) {
    // Assumes that a rover cannot travel out of bounds (max bounds and less than (0, 0))
    if (this.endPosition.x > map.bounds.x || this.endPosition.y > map.bounds.y || this.endPosition.x < 0 || this.endPosition.y < 0) {
      this.isOutOfBounds = true;
      this.isProcessed = true;
      return true;
    }
    return false;
  }
}
