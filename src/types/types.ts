export interface RobotStructure {
  name: string;
  url: string;
  stats: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];
