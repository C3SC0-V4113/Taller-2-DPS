import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import List from '../Components/list';

const series = [
  {
    name: 'Friends',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
    temporadas: 10,
  },
  {
    name: 'Friends',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
    temporadas: 10,
  },
  {
    name: 'Friends',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
    temporadas: 10,
  },
  {
    name: 'The Mandalorian',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 2,
  },
  {
    name: 'The Mandalorian',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 2,
  },
  {
    name: 'The Mandalorian',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 2,
  },
  {
    name: 'Game of Thrones',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_.jpg',
    genre: 'Fantasia',
    temporadas: 8,
  },
  {
    name: 'Game of Thrones',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_.jpg',
    genre: 'Fantasia',
    temporadas: 8,
  },
  {
    name: 'Game of Thrones',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_.jpg',
    genre: 'Fantasia',
    temporadas: 8,
  },
];

const genres = Array.from(new Set(series.map(s => s.genre)));

export default function Series() {
  return (
    <ScrollView>
      {genres.map((l, i) => (
        <List key={i} titulo={l} arreglo={series.filter(a => a.genre === l)} />
      ))}
    </ScrollView>
  );
}
