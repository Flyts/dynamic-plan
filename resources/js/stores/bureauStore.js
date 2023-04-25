import axios from 'axios'
import { create } from 'zustand'

export const bureauStore = create((set) => ({
  selectedBureau: "",
  bureauStatus: false,

  setSelectedBureau: (value) => set({ selectedBureau: value }),
  setBureauStatus: (value) => set({ bureauStatus: value }),
}))