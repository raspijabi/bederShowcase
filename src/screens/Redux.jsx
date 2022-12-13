import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, Alert } from 'react-native'
import { useSelector } from 'react-redux'

export const Redux = () => {

    const { filmName, releaseDate, imgPath } = useSelector(state => state.api)
    const navigation = useNavigation()

    useEffect(() => {
        if (filmName === '' || releaseDate === '' || imgPath === '')
            showAlert()
    }, [])

    const showAlert = () => {
        Alert.alert(
            "No data found",
            '',
            [
                { text: "OK" }
            ],
            {
                cancelable: true,
            }
        )
        navigation.goBack()
    }
    if(filmName === '' || releaseDate === '' || imgPath === ''){
        return(
            <>
            </>
        )
    }

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