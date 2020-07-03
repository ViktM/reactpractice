import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TranslationInput = props => {
    const [textToTranslate, setTextToTranslate] = useState('');

    const goalInputHandler = (enteredText) => {
        setTextToTranslate(enteredText);
    };

    return (
        <View>
            <View style={styles.sectionContainer}>
                <TextInput
                    style={styles.textIn}
                    placeholder="Add translation"
                    onChangeText={goalInputHandler}
                    value={textToTranslate}
                />
            </View>
            <View style={styles.sectionContainer2}>

                <TouchableOpacity
                    style = {styles.translateButton}
                    onPress = {props.onTranslation.bind(this, textToTranslate)}
                >
                    <Text style = {styles.translateButtonText}>Translate!</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default TranslationInput;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    sectionContainer2: {
        marginTop: 20,
        alignItems: 'center',
    },
    translateButton: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'blue',
        padding: 10,
        margin: 15,
        borderRadius: 5 ,
        height: 40,
    },
    translateButtonText:{
        color: 'white'
    },
    textIn: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        width: '90%',
        textAlign: 'center'
    },
});
