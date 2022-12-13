import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, StyleSheet, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { useMovies } from '../hooks/useMovies'
import { onLoad } from '../store/api/apiSlice'

export const PublicAPIScreen = () => {
    const { nowPlaying = [], isLoading } = useMovies()

    const dispatch = useDispatch()

    if (isLoading) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator color={'blue'} size={100} />
            </View>
        )
    } else {
        const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[0].poster_path}`

        dispatch(onLoad({
            filmName: nowPlaying[0].original_title,
            releaseDate: nowPlaying[0].release_date,
            imgPath: uri
        }))

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {nowPlaying[0].original_title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {nowPlaying[0].release_date}
                    </Text>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{
                                uri
                            }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 30
    },
    image: {
        flex: 1,
    },
    imgContainer: {
        height: 420,
        width: 300,
        marginTop: 20
    }
})