import {FormControl} from '@angular/forms';

export class SimulationInputValidator {
  static isValidLine(line, previousLine) {
    // Checks if line is a a valid action line and that a rover placement line precedes it
    // Also checks if line is a valid rover placement line and that either the bounds or an action line precedes it
    if ((this.isValidRoverPlacementLine(line) && (this.isValidBoundsLine(previousLine) || this.isValidActionLine(previousLine)))) {
      return true;
    }
    if ((this.isValidActionLine(line) && this.isValidRoverPlacementLine(previousLine))) {
      return true;
    }
    return false;
  }

  static isValidBoundsLine(line) {
    // matches a positive integer followed by a space and then another positive integer
    return /(^[1-9]\d*)\s([1-9]\d*)$/.test(line.trim());
  }

  static isValidActionLine(line) {
    // contains any number of combinations of L, R and M
    return /^[LRM]*$/.test(line.trim());
  }

  static isValidRoverPlacementLine(line) {
    // matches a positive integer followed by a space and then another positive integer followed by another space and N, E, S or W
    return /^([1-9]\d*)\s([1-9]\d*)\s[NESW]$/.test(line.trim());
  }

  static isValidInput() {
    return (control: FormControl) => {
      const input = control.value;
      // let's use a simple iterator here for performance
      // I choose to validate input first and in isolation so as not to waste resources storing information
      const lines = input.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (i === 0 && !this.isValidBoundsLine(lines[i])) {
          return {input: {valid: false}};
        }
        if ((i + 1) % 2 === 0 && lines[i].trim() !== '') {
          return {input: {valid: false}};
        }
        if ((i + 1) % 2 !== 0 && i !== 0 && !this.isValidLine(lines[i], lines[i - 2])) {
          return {input: {valid: false}};
        }
      }
      return null;
    };
  }
}
