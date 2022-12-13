import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'


export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        api: apiSlice.reducer
    }
})