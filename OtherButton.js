import {Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Picker, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Languages from './languages.json';
import TranslatedItem from './TranslatedItem';
import TranslationInput from './TranslationInput';

export default function OtherButton() {


    const [translatedTexts, setTranslatedTexts] = useState([]);
    const [pickedLanguage, setPickedLanguage] = useState('oldenglish');
    const [response, setResponse] = useState({});


    const addTranslationHandler = toTranslate => {
        setTranslatedTexts(currentTextToTranslate => [
            ...currentTextToTranslate, toTranslate, pickedLanguage
            // {key: Math.random().toString(), value: enteredGoal} //to use with Flatmap
        ]);

        // TODO account for 429 response - limited requests
        const url = 'https://api.funtranslations.com/translate/' + pickedLanguage + '?text=' + toTranslate;
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    console.error("Bad response " + response.status)
                    return false;
                }
            })
            .then(console.log("All good at " + url))
            .then(data => setResponse(data))
            .then(console.log(response))

        // const translatedStuff = response.map((contents, i) => {
        //     const {
        //         translated
        //     } = content;
        //     }
        //
        //
        // )

    };

    return (
        <View>
            <View>
                <Picker
                    selectedValue={pickedLanguage}
                    onValueChange={ value => setPickedLanguage(value)}
                >
                    {Object.keys(Languages).map(key => (
                        <Picker.Item label={Languages[key]} value={key} key={key}/>
                    ))}
                </Picker>
            </View>
            <TranslationInput onTranslation={addTranslationHandler}/>
            {/*<View>*/}
            {/*<FlatList*/}
            {/*    data={courseGoals}*/}
            {/*    renderItem={itemData => (*/}
            {/*        <View style={styles.textOut}>*/}
            {/*            <Text>{itemData.item.value}</Text>*/}
            {/*        </View>*/}
            {/*)}*/}
            {/*/>*/}
            {/*</View>*/}
            <View style={styles.sectionContainer2}>
                {translatedTexts.map((translation) => <TranslatedItem key={Math.random().toString()} title={translation}/>
                    // <View key={Math.random().toString()} style={styles.textOut}>
                    //     <Text>{goal}</Text>
                    // </View>
                    )}
            </View>

        </View>
    );

}
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

    },
    sectionContainer2: {
        marginTop: 32,
        paddingHorizontal: 24,

        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textIn: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '60%',
    },
    textOut: {
        padding: 5,
        backgroundColor: '#ccc',
        borderBottomColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        width: '60%',

    },
});
