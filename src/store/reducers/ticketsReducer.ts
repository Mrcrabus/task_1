import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import tickets from '../../constants/tickets.json'


const initialState = tickets

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        sortTickets: (state) => {
            state.sort((a, b) => a.price > b.price ? 1 : -1);
        },
        sortTicketsRevert: (state) => {
            state.sort((a, b) => a.price < b.price ? 1 : -1);
        }
    },
})

// Action creators are generated for each case reducer function
export const {sortTickets, sortTicketsRevert} = ticketsSlice.actions

export default ticketsSlice.reducer
