import {Button, StyleSheet, Text, View} from 'react-native';

import React, { useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function ButtonStuff () {

        const [outputText, setOutputText] = useState('Default shit');
        return (

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                    {outputText}
                </Text>
                <Button title="Button to change text" onPress={() => setOutputText('Some other shit')}/>
            </View>

        );

}
const styles = StyleSheet.create({

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    }
});
