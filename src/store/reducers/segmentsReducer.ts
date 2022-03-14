import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import segments from '../../constants/segments.json'


const initialState = segments

const segmentsSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        sortSegments: (state) => {
            state.sort((a, b) => a.stops.length > b.stops.length ? 1 : -1);
        }
    },
})

// Action creators are generated for each case reducer function
export const {sortSegments} = segmentsSlice.actions

export default segmentsSlice.reducer
