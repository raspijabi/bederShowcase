import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export const Redux = () => {

    const { filmName, releaseDate, imgPath } = useSelector(state => state.api)
    console.log(imgPath)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {filmName}
                </Text>
                <Text style={styles.subtitle}>
                    {releaseDate}
                </Text>
                <View style={styles.imgContainer}>
                    <Image
                        source={{
                            uri: imgPath
                        }}
                        style={styles.image}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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