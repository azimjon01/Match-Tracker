export interface Player {
  id: number;
  name: string;
  kills: number;
}

export interface Team {
  id: number;
  name: string;
  points: number;
  position: number;
  totalKills: number;
  players: Player[];
}
