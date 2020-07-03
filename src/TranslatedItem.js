import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TranslatedItem = props => {
  return <View  style={styles.textOut}>
      <Text>{props.translated}</Text>
  </View>
};
const styles = StyleSheet.create({
    textOut: {
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        width: '90%',
        marginVertical: 5,
        alignItems: 'center',
    }
});
export default TranslatedItem;
