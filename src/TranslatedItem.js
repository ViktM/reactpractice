import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TranslatedItem = props => {
  return <View  style={styles.textOut}>
      <Text>{props.title}</Text>
  </View>
};
const styles = StyleSheet.create({
    textOut: {
        padding: 5,
        backgroundColor: '#ccc',
        borderBottomColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        width: '60%',

    }
});
export default TranslatedItem;
