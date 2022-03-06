import {configureStore} from '@reduxjs/toolkit'

import segmentsReducer from './reducers/segmentsReducer'
import ticketsReducer from './reducers/ticketsReducer'


export const store = configureStore({
    reducer: {
        segments: segmentsReducer,
        tickets: ticketsReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
