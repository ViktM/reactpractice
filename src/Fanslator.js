import {StyleSheet, Picker, View, Text} from 'react-native';
import React, {useState} from 'react';
import Languages from '../languages.json';
import TranslatedItem from './TranslatedItem';
import TranslationInput from './TranslationInput';

export default function Fanslator() {

    const [translatedTexts, setTranslatedTexts] = useState([]);
    const [pickedLanguage, setPickedLanguage] = useState('oldenglish');
    const [response, setResponse] = useState(
        {
            contents: {
                text: '',
                translated: '',
                translation: '',
            },
            success: {
                total: '',
            },
        },
    );

    const addTranslation = textToTranslate => {
        // TODO account for 429 response - limited requests
        const url = 'https://api.funtranslations.com/translate/' + pickedLanguage + '?text=' + textToTranslate;
        const fakeUrl = 'https://timeline.tv/gktest';
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.error('Bad response ' + response.status);
                    return false;
                }
            })
            .then(response => setTranslatedTexts(currentTextToTranslate => [
                ...currentTextToTranslate, response.contents.translated]));
    };

    return (
        <View>
            <View>
                <Picker style={styles.picker}
                        selectedValue={pickedLanguage}
                        onValueChange={value => setPickedLanguage(value)}
                >
                    {Object.keys(Languages).map(key => (
                        <Picker.Item label={Languages[key]} value={key} key={key}/>
                    ))}
                </Picker>
            </View>
            <TranslationInput onTranslation={addTranslation}/>

            <View style={styles.sectionContainer}>
                {translatedTexts.map((translation) =>
                    <TranslatedItem key={translation + Math.random().toString()} translated={translation}/>,
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
    },
    picker: {
        paddingTop: 30,
        paddingBottom: 30,
    },
});
