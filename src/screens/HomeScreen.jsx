import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.homeViewStyle}>
            <TouchableOpacity
                style={styles.homeButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PublicAPIScreen')}
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Public API</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.homeButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Redux')}
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Redux</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.homeButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('GreatDesign')}
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Great Design</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    homeViewStyle: {
        alignItems: 'center',
        padding: 30,
    },
    homeButton: {
        marginTop: 30,
        height: 50,
        width: 300,
        backgroundColor: 'black',
        borderRadius: 8,
    },
    buttonView:{
        alignItems: 'center',
        paddingTop: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})