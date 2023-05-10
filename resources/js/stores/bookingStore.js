import axios from 'axios'
import { create } from 'zustand'

export const bookingStore = create((set) => ({
    bookingShowForm: false,
    setBookingShowForm: (value) => set({bookingShowForm: value}),

    bookOfficeMessage: null,
    setBookOfficeMessage: (value) => set({bookOfficeMessage: value}),
    resetBookOfficeMessage: () => set({bookOfficeMessage: null}),
}))

// ({
//   office: res.data.result,
//   officeLoader: false
// })