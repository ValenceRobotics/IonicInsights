interface MatchData {
  match_number: number;
  team_number: number;
  alliance: "red" | "blue";
}

interface ChargedUpMatchData extends MatchData {
  cones: number;
  cubes: number;
}

class LogRecord<T extends MatchData> {
  scouter: string;
  timestamp: number;
  match_data: T;

  constructor(scouter: string, timestamp: number, match_data: T) {
    this.scouter = scouter;
    this.timestamp = timestamp;
    this.match_data = match_data;
  }
}
