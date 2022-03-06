import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import segments from '../../constants/segments.json'


const initialState = segments

const counterSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        sort: (state) => {
            state.sort((a, b) => a.stops.length > b.stops.length ? 1 : -1);
        }
    },
})

// Action creators are generated for each case reducer function
export const {sort} = counterSlice.actions

export default counterSlice.reducer
