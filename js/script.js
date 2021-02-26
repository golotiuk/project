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

    let nameOfFilms = prompt('Один из последних просмотренных фильмов?',''),
        rating = prompt('На сколько оцените его?','');
        
    if (nameOfFilms != null && rating != null && nameOfFilms != '' && rating != '' && nameOfFilms.length < 50) {
        personalMovieDB.movies[nameOfFilms] = rating;
        console.log(nameOfFilms);
        console.log(rating);
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    alert('Вы киноман!');
} else {
    alert('Ошибка');
}

console.log(personalMovieDB);