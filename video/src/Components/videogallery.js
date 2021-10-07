import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Card, Avatar, ListItem, Chip} from 'react-native-elements';
import {WebView} from 'react-native-webview';

const VideoGallery = ({nombre, url, tipo, fecha}) => {
  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={styles.Vista}>
        <WebView source={{uri: url}} />
      </View>
      <View style={styles.Chips}>
        <Chip title={tipo} />
      </View>
      <View style={styles.Chips}>
        <Chip title={'Fecha de estreno: ' + fecha} type="outline" />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  Vista: {
    height: 250,
    flex: 1,
    marginBottom: 10,
  },
  Chips: {
    padding: 2,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default VideoGallery;
