import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TranslationInput = props => {
    const [textToTranslate, setTextToTranslate] = useState('');

    const goalInputHandler = (enteredText) => {
        setTextToTranslate(enteredText);
    };

    return(
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

        <Button title="Translate!" onPress={props.onTranslation.bind(this, textToTranslate)}/>
    </View>
        </View>

    )
}

export default TranslationInput;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    sectionContainer2: {
        marginTop: 32,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
