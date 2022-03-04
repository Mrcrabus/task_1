import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Segment} from "../../types/interfaces";


const initialState: Segment = {
    id: '',
    origin: 'MOW',
    destination: 'MOW',
    dateStart: '',
    dateEnd: '',
    stops: [],
    duration: 0
}

const counterSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        filterSegments: (state) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer
