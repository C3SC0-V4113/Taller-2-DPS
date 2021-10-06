import React from 'react';
import {ScrollView} from 'react-native';
import Carrousell from '../Components/carrousell';

const peliculas = [
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
];

const genres = Array.from(new Set(peliculas.map(s => s.genre)));

export default function Peliculas() {
  return (
    <>
      <ScrollView>
        {genres.map((l, i) => (
          <Carrousell
            key={i}
            titulo={l}
            arreglo={peliculas.filter(a => a.genre === l)}
          />
        ))}
      </ScrollView>
    </>
  );
}
