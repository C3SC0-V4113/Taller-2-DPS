import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Peliculas() {
  return (
    <View>
      <Text style={styles.titleText}>En Peliculas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
