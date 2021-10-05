import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Series() {
  return (
    <View>
      <Text style={styles.titleText}>En Series</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
