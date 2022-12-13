import React from 'react'
import { View, FlatList } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useMovieDetails } from '../hooks/useMoviesDetails'
import { Community } from './Community'
import { MainCities } from './MainCities'
import { Trends } from './Trends'

export const HorizontalSlider = ({ type }) => {

    const { nowPlaying, isLoading: isLoadingMovies, popular } = useMovies()
    const { cast, isLoading } = useMovieDetails('436270')

    if (type === 'first') {
        return (
            <View style={{ paddingLeft: 10, height: 280 }}>
                {
                    isLoadingMovies ? <></> :
                        <FlatList
                            data={nowPlaying}
                            renderItem={({ item }) => (
                                <MainCities data={item} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        )
    } else if (type === 'second') {
        return (
            <View style={{ height: 140 }}>
                {
                    isLoading ? <></> :
                        <FlatList
                            data={cast}
                            renderItem={({ item }) => <Community person={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        )
    } else if (type === 'third') {
        return (
            <View style={{ height: 250 }}>
                {
                    isLoadingMovies ? <></> :
                        <FlatList
                            data={popular}
                            renderItem={({ item }) => <Trends trending={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        )
    }
}