import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const Community = ({person}) => {

    const uri = `https://image.tmdb.org/t/p/w500${person.profile_path}`

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
            <Text style={styles.personText}>{person.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginRight: 20
    },
    imageContainer:{
        width: 100,
        height: 100,
    },
    image: {
        flex: 1,
        borderRadius: 100,
        borderColor: 'rgba(26, 235, 134, 1)',
        borderWidth: 2.2
    },
    personText: {
        color: 'white',
        marginTop: 4
    }
})