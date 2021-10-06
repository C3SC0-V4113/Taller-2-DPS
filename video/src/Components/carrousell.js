import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Carrousell = () => {
  return (
    <Card containerStyle={{padding: 0}}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight>
              <Image
                style={styles.ciudad}
                source={{
                  uri: 'https://cinescopia.com/wp-content/uploads/2016/01/hateful-eight-banner-what.jpg',
                }}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={{
                uri: 'https://cinescopia.com/wp-content/uploads/2016/01/hateful-eight-banner-what.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={{
                uri: 'https://cinescopia.com/wp-content/uploads/2016/01/hateful-eight-banner-what.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={{
                uri: 'https://cinescopia.com/wp-content/uploads/2016/01/hateful-eight-banner-what.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={{
                uri: 'https://cinescopia.com/wp-content/uploads/2016/01/hateful-eight-banner-what.jpg',
              }}
            />
          </View>
        </ScrollView>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listadoItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});

export default Carrousell;
