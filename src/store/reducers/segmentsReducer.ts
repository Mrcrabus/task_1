import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import segments from '../../constants/segments.json'


const initialState = segments

const segmentsSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        segmentsState: (state, {payload}: PayloadAction<number>) => {
            console.log(state)
            return state.filter(el => el.stops?.length === 1);
        }
    },
})

// Action creators are generated for each case reducer function
export const {segmentsState} = segmentsSlice.actions

export default segmentsSlice.reducer
