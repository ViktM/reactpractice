import {ImageBackground, StyleSheet, Text} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import React from 'react';

export default function FunHeader() {
    return (
        <ImageBackground
            accessibilityRole={'image'}
            style={styles.background}
            >
            <Text style={styles.text}>Fan'sLator</Text>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        paddingBottom: 20,
        paddingTop: 10 ,
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

