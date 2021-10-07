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
    name: 'The Big Bang Theory',
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
    temporadas: 12,
  },
  {
    name: 'How I Met Your Mother',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
    temporadas: 9,
  },
  {
    name: 'The Mandalorian',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 2,
  },
  {
    name: 'Rick and Morty',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 5,
  },
  {
    name: 'Invincible',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    genre: 'Aventura',
    temporadas: 1,
  },
  {
    name: 'Game of Thrones',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_.jpg',
    genre: 'Fantasia',
    temporadas: 8,
  },
  {
    name: 'Fullmetal Alchemist: Brotherhood',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    genre: 'Fantasia',
    temporadas: 1,
  },
  {
    name: 'The Boys',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_FMjpg_UX1000_.jpg',
    genre: 'Fantasia',
    temporadas: 2,
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
