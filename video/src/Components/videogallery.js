import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Card, Avatar, ListItem, Chip} from 'react-native-elements';

const VideoGallery = ({nombre, url, tipo, fecha}) => {
    return (
      <Card>
        <Card.Title>{nombre}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: 'https://cdn.alfabetajuega.com/wp-content/uploads/2020/07/minecraft-nueva-version-780x402.jpeg'}}>
          <Text>{url}</Text>
        </Card.Image>
        <Chip title={tipo} />
        <Chip title={'Fecha de estreno: '+fecha} type="outline" />
      </Card>
    );
};

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

export default VideoGallery;
