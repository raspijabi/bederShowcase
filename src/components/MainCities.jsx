import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const MainCities = ({ data }) => {

    const uri = `https://image.tmdb.org/t/p/w500${data.poster_path}`

    return (
        <View style={{flex: 1}}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faCirclePlay} size={70} style={styles.icon} />
            </View>
            <View style={styles.iconContainerExclamation}>
                <FontAwesomeIcon icon={faExclamationCircle} size={40} />
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{data.original_title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 260,
        marginRight: 20,
    },
    image: {
        flex: 1,
        borderRadius: 25
    },
    icon: {
        opacity: 0.8,
    },
    iconContainer: {
        zIndex: 15,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 70,
        height: 70,
        borderRadius: 40,
        position: 'absolute',
        left: 40,
        top: 50
    },
    iconContainerExclamation: {
        zIndex: 15,
        position: 'absolute',
        left: 60,
        top: 240,
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 170,
        left: 20,
        borderRadius: 25,
        width: 110,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 21,
        fontWeight: '700',
    }
})