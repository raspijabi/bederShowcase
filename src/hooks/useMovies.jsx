import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"




export const useMovies = () => {

    const [moviesState, setMoviesState] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get('/now_playing')
        const popularPromise = movieDB.get('/popular')

        const resp = await Promise.all([nowPlayingPromise, popularPromise])
        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}