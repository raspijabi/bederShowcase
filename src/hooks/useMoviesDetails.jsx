import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"


export const useMovieDetails = (movieId) => {

    const [state, setState] = useState({
        isLoading: true,
        cast: []
    })

    const getMovieDetails = async () => {
        const castPromise = movieDB.get(`/${movieId}/credits`)
    
        const [castPromiseResp] = await Promise.all([castPromise])
        setState({
            isLoading: false,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return{
        ...state,
    }

}