import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Proximamente() {
  return (
    <View>
      <Text style={styles.titleText}>En Proximamente</Text>
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
