"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви подивилися?', '');

const personalsMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('Останній фільм як дивилися?', ''),
        b = prompt('Оцініть його?', ''),
        c = prompt('Останній фільм як дивилися?', ''),
        d = prompt('Оцініть його?', '');
        
personalsMovieDB.movies[a] = b;
personalsMovieDB.movies[c] = d;

console.log(personalsMovieDB);