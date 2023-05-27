export interface MatchData {
  match_number: number;
  team_number: number;
  alliance: "red" | "blue";
}

export interface ChargedUpMatchData extends MatchData {
  cones: number;
  cubes: number;
}

export class LogRecord<T extends MatchData> {
  scouter: string;
  timestamp: number;
  match_data: T;

  constructor({ scouter, timestamp, match_data }: LogRecord<T>) {
    this.scouter = scouter;
    this.timestamp = timestamp;
    this.match_data = match_data;
  }

  // override the toString method to return a minifed string
  toString(): string {
    return `${this.scouter},${this.timestamp},${Object.values(
      this.match_data
    ).join(",")};`;
  }
}
