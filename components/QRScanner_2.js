import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'



const QRScanner_2 = () => {
    const [fontsLoaded] = useFonts({
        AtkinsonHyperlegible: require('../assets/fonts/AtkinsonHyperlegible-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.touchableContainer}>
                    <Text style={styles.font}>scan Driver's QR code.</Text>
                </View>
                <Image style={styles.image} source={require('../assets/scan.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default QRScanner_2

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    touchableContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        height: 240,

        backgroundColor: '#F7F3EB',
        borderColor: "3F3F3F",
        borderRadius: 32,
        borderWidth: 5,

        padding: 0,
        margin: 0,
    },
    font: {
        padding: 0,
        marginLeft: -30,
        fontFamily: "AtkinsonHyperlegible",
        fontSize: 48,
        lineHeight: 50,
        alignSelf: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        width: 180,
        height: 220,
    },
    image: {
        position: 'absolute',
        left: 155,
        top: 125,
    }
});