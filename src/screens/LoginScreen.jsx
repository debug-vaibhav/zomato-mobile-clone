import React from 'react';
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDownIcon } from "react-native-heroicons/outline";
import Colors from '../constants/colors';
import TextSeparator from '../components/custom/TextSeparator';


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={require('../../assets/banner.png')} />
            <View style={styles.formContainer}>
                <Text style={styles.title}>India's #1 Food Delivery and Dining App</Text>
                <TextSeparator text='Log in or sign up'></TextSeparator>
                <View style={styles.phoneContainer}>
                    <TouchableOpacity style={styles.nationContainer}>
                        <Image style={styles.flag} source={require('../../assets/flags/india.png')}></Image>
                        <ChevronDownIcon size={15} color={Colors.peppercorn} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobileContainer}>
                        <Text>+91</Text>
                        <TextInput keyboardType='phone-pad' placeholder='Enter Phone Number' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
                <TextSeparator text='or'></TextSeparator>
                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                </View>
                <View style={styles.policyContainer}>
                    <Text style={styles.header}>By continuing, you agree to our</Text>
                    <View style={styles.linksContainer}>
                        <TouchableOpacity><Text style={styles.link}>Terms of Service</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.link}>Privacy Policy</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.link}>Content Policy</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        flex: 5,
        resizeMode: 'contain',
    },
    formContainer: {
        flex: 6,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 15
    },
    title: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 25,
        textAlign: 'center',
        color: Colors.peppercorn,
        marginBottom: 20
    },
    phoneContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15
    },
    nationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'Colors.peppercorn',
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        elevation: 20,
        shadowColor: Colors.peppercorn,
        marginRight: 10
    },
    mobileContainer: {
        flex: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.peppercorn,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        elevation: 20,
        shadowColor: Colors.peppercorn
    },
    flag: {
        height: 30,
        width: 30,
    },
    btnContainer: {
        width: '100%',
        backgroundColor: Colors.cranberry,
        paddingVertical: 12,
        borderRadius: 6
    },
    btnText: {
        fontFamily: 'Poppins-Bold',
        color: Colors.white,
        textAlign: 'center'
    },
    policyContainer: {
        display: 'flex',
    },
    header: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 12
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginHorizontal: 5,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    }
});

export default LoginScreen