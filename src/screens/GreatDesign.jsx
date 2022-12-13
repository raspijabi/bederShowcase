import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import airbnbLogo from '../resources/airbnbLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { HorizontalSlider } from '../components/HorizontalSlider'


export const GreatDesign = () => {

    const { top } = useSafeAreaInsets()

    return (
        <ScrollView style={{ ...styles.globalContainer, marginTop: top }}>
            <View style={styles.logoContainer}>
                <Image
                    source={airbnbLogo}
                    style={styles.logoImg}
                />
            </View>
            <View style={styles.heartContainer}>
                <FontAwesomeIcon icon={faHeart} size={28} />
            </View>
            <View style={styles.searchContainer}>
                <FontAwesomeIcon icon={faSearch} size={20} style={styles.searchIcon} />
                <TextInput
                    placeholder='Search for Destinations, People'
                    style={styles.searchInput}
                />
            </View>
            <View>
                <Text style={styles.discover}>DISCOVER</Text>
                <HorizontalSlider type={'first'} />
            </View>
            <View style={styles.secondFlat}>
                <Text style={styles.title}>MY COMMUNITY</Text>
                <HorizontalSlider type={'second'} />
            </View>
            <View style={styles.thirdFlat}>
                <Text style={styles.titleTrending}>TRENDING NOW</Text>
                <HorizontalSlider type={'third'} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleTrending: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 5,
        fontFamily: 'AppleSDGothicNeo-Bold'
    },
    thirdFlat: {
        paddingLeft: 10,
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '800',
        paddingBottom: 5,
        fontFamily: 'Al Nile'
    },
    secondFlat: {
        backgroundColor: 'black',
        marginTop: 20,
        paddingLeft: 10,
        paddingTop: 10
    },
    globalContainer: {
        flex: 1,
    },
    discover: {
        fontSize: 33,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'AvenirNextCondensed-Regular'
    },
    logoImg: {
        height: 75,
        width: 240
    },
    logoContainer: {
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    heartContainer: {
        position: 'absolute',
        right: 20,
        top: 7

    },
    searchInput: {
        color: 'black',
        height: 50,
        width: '90%',
        borderColor: 'rgba(26, 235, 134, 1)',
        borderWidth: 1,
        borderRadius: 100,
        paddingLeft: 45,
        fontSize: 15
    },
    searchContainer: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    searchIcon: {
        opacity: 0.6,
        position: 'relative',
        left: 35
    }
})