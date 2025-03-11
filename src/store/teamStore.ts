import { create } from "zustand";
import { Team } from "../types/team";

interface TeamStore {
  teams: Team[];
  setTeams: (teams: Team[]) => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  teams: [],
  setTeams: (teams) => set({ teams }),
}));
