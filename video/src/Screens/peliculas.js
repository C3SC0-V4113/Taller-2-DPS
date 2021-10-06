import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';

import Carrousell from '../Components/carrousell';

export default function Peliculas() {
  return (
    <>
    <ScrollView>
      <Carrousell />
      <Carrousell />
      <Carrousell />
      </ScrollView>
    </>
  );
}
