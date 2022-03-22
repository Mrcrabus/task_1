import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import segments from '../../constants/segments.json'


const initialState = segments

const segmentsSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        segmentsState: (state) => {
            return state;
        }
    },
})

// Action creators are generated for each case reducer function
export const {segmentsState} = segmentsSlice.actions

export default segmentsSlice.reducer
