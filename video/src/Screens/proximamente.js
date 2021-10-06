import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import VideoGallery from '../Components/videogallery';

const proximamente = [
  {
    name: 'Breaking Bad',
    type: 'Serie',
    date: '12-12-12',
    video: 'https://youtu.be/VaOt6tXyf2Y',
  },
  {
    name: 'El Camino',
    type: 'Pelicula',
    date: '12-12-12',
    video: 'https://youtu.be/1JLUn2DFW4w',
  },
  {
    name: 'Queens Gambit',
    type: 'Serie',
    date: '12-12-12',
    video: 'https://youtu.be/kwrQzTz16w4',
  },
  {
    name: 'The Lighthouse',
    type: 'Pelicula',
    date: '12-12-12',
    video: 'https://youtu.be/Hyag7lR8CPA',
  },
  {
    name: 'Bojack Horseman',
    type: 'Serie',
    date: '12-12-12',
    video: 'https://youtu.be/ZOGxOQxXjdo',
  },
  {
    name: 'The Matrix Resurrections',
    type: 'Pelicula',
    date: '12-12-12',
    video: 'https://youtu.be/9ix7TUGVYIo',
  },
];

export default function Proximamente() {
  return (
    <ScrollView>
      {proximamente.map((u, i) => (
        <VideoGallery
          key={i}
          nombre={u.name}
          url={u.video}
          tipo={u.type}
          fecha={u.date}
        />
      ))}
    </ScrollView>
  );
}
