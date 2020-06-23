import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TranslationInput = props => {
    const [textToTranslate, setTextToTranslate] = useState('');

    const goalInputHandler = (enteredText) => {
        setTextToTranslate(enteredText);
    };

    return(
        <View style={styles.sectionContainer}>
            <TextInput
                style={styles.textIn}
                placeholder="Stuff here"
                onChangeText={goalInputHandler}
                value={textToTranslate}
            />
            <Button title="Add" onPress={props.onTranslation.bind(this, textToTranslate)}/>
        </View>
    )
}

export default TranslationInput;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});
