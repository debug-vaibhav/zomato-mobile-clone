import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSeparator = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.separator} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        flex: 1,
        backgroundColor: Colors.peppercorn,
        opacity: 0.2
    },
    text: {
        fontFamily: 'Poppins-Medium',
        color: Colors.peppercorn,
        fontWeight: '600',
        paddingHorizontal: 10
    },
})

export default TextSeparator;