import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import segments from '../../constants/segments.json'


const initialState = segments

const segmentsSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        sort: (state) => {
            state.sort((a, b) => a.dateStart > b.dateStart ? 1 : -1);
        }
    },
})

// Action creators are generated for each case reducer function
export const {sort} = segmentsSlice.actions

export default segmentsSlice.reducer
