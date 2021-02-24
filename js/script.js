"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for (let i = 0; i<2; i++) {
    personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?','')] = prompt('На сколько оцените его?','');
}

console.log(personalMovieDB);