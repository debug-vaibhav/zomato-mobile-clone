import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const SplashScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Alkatra-Bold': require('../../assets/fonts/alkatra/Alkatra-Bold.ttf'),
        'Alkatra-Medium': require('../../assets/fonts/alkatra/Alkatra-Medium.ttf'),
        'Alkatra-Regular': require('../../assets/fonts/alkatra/Alkatra-Regular.ttf'),
        'Alkatra-SemiBold': require('../../assets/fonts/alkatra/Alkatra-SemiBold.ttf'),
        'Poppins-Black': require('../../assets/fonts/poppins/Poppins-Black.ttf'),
        'Poppins-BlackItalic': require('../../assets/fonts/poppins/Poppins-BlackItalic.ttf'),
        'Poppins-Bold': require('../../assets/fonts/poppins/Poppins-Bold.ttf'),
        'Poppins-BoldItalic': require('../../assets/fonts/poppins/Poppins-BoldItalic.ttf'),
        'Poppins-ExtraBold': require('../../assets/fonts/poppins/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraBoldItalic': require('../../assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf'),
        'Poppins-ExtraLight': require('../../assets/fonts/poppins/Poppins-ExtraLight.ttf'),
        'Poppins-ExtraLightItalic': require('../../assets/fonts/poppins/Poppins-ExtraLightItalic.ttf'),
        'Poppins-Italic': require('../../assets/fonts/poppins/Poppins-Italic.ttf'),
        'Poppins-Light': require('../../assets/fonts/poppins/Poppins-Light.ttf'),
        'Poppins-LightItalic': require('../../assets/fonts/poppins/Poppins-LightItalic.ttf'),
        'Poppins-Medium': require('../../assets/fonts/poppins/Poppins-Medium.ttf'),
        'Poppins-MediumItalic': require('../../assets/fonts/poppins/Poppins-MediumItalic.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/poppins/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/poppins/Poppins-Regular.ttf'),
        'Poppins-SemiBoldItalic': require('../../assets/fonts/poppins/Poppins-SemiBoldItalic.ttf'),
        'Poppins-Thin': require('../../assets/fonts/poppins/Poppins-Thin.ttf'),
        'Poppins-ThinItalic': require('../../assets/fonts/poppins/Poppins-ThinItalic.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            setInterval(() => {
                navigation.navigate('Login')
            }, 1000);
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>zomato</Text>
            <Text style={styles.tagline}>100% Green Deliveries</Text>
            <Text style={styles.subTagline}>in India</Text>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.cranberry
    },
    logo: {
        fontFamily: 'Alkatra-Bold',
        fontSize: 60,
        color: Colors.white
    },
    tagline: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: Colors.white
    },
    subTagline: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: Colors.white
    }
});

export default SplashScreen