"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i<2; i++ )  {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
        if (a !=null && b !=null && a !='' && b !='' && a.length <10) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
}

if (personalMovieDB.count < 10) {
    console.log('мало фільмів');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('середній глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('кіноман');
} else {
    console.log('помилка');
}

console.log(personalMovieDB);