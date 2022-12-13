import { createSlice } from '@reduxjs/toolkit'


export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        filmName: '',
        releaseDate: '',
        imgPath: ''
    },
    reducers: {
        onLoad: (state, { payload }) => {
            state.filmName = payload.filmName,
            state.releaseDate = payload.releaseDate,
            state.imgPath = payload.imgPath
        }
    }
})

export const { onLoad } = apiSlice.actions