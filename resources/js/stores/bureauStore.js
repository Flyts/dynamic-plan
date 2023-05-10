import axios from 'axios'
import { create } from 'zustand'

export const bureauStore = create((set) => ({
  officeStatus: false,
  offices: [],
  office: null,
  officeLoader: false,

  setOfficeStatus: (value) => set({ officeStatus: value }),
  setOffices: (value) => set({offices: value}),
  
  setOffice: async (value) => {
    set(() => ({officeLoader: true}))

    await axios.get(route("office.one", {code: value}))
    .then((res) => {
      set(() => ({
          office: res.data.result,
          officeLoader: false
        }))
    })
    .catch(err => console.error(err))
  },
  resetOffice: () => set({office: null}),
  updateOffice: (value) => set({office: value})

}))

// ({
//   office: res.data.result,
//   officeLoader: false
// })