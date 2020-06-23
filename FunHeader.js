import {ImageBackground, StyleSheet, Text} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import React from 'react';

export default function FunHeader() {
    return (
        <ImageBackground
            accessibilityRole={'image'}
            // source={require('./logo.png')}
            style={styles.background}
            imageStyle={styles.logo}>
            <Text style={styles.text}>Welcome to the Fanslator</Text>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 50,
        paddingHorizontal: 32,
        backgroundColor: Colors.lighter,
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.black,
    },
});

