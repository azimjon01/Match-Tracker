import { create } from "zustand";

export interface Match {
  id: number;
  team1: string;
  team2: string;
  score: string;
  status: "Live" | "Finished";
}

interface MatchStore {
  matches: Match[];
  addMatch: (match: Match) => void;
}

export const useMatchStore = create<MatchStore>((set) => ({
  matches: [
    {
      id: 1,
      team1: "Command №1",
      team2: "Command №2",
      score: "2:1",
      status: "Live",
    },
    {
      id: 2,
      team1: "Command №1",
      team2: "Command №2",
      score: "2:4",
      status: "Finished",
    },
  ],
  addMatch: (match) =>
    set((state) => ({
      matches: [...state.matches, match],
    })),
}));
