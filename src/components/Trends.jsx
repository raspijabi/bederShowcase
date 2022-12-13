import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const Trends = ({ trending }) => {

    const uri = `https://image.tmdb.org/t/p/w500${trending.poster_path}`

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faCirclePlay} size={70} style={styles.icon} />
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{trending.original_title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginRight: 15,
    },
    imageContainer: {
        width: 220,
        height: 250,
    },
    image: {
        flex: 1,
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
        left: 75,
        top: 50
    },
    textContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 150,
        left: 20,
        width: 180,
        alignItems: 'center',
        borderTopRightRadius: 22,
        borderBottomLeftRadius: 22,
        padding: 7,
        borderWidth: 1,
        borderColor: 'rgba(26, 235, 134, 1)',
    },
    text: {
        color: 'white',
        fontSize: 21,
        fontWeight: '700',
    }
})