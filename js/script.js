"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };


function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {

        let nameOfFilms = prompt('Один из последних просмотренных фильмов?', ''),
            rating = prompt('На сколько оцените его?', '');

        if (nameOfFilms != null && rating != null && nameOfFilms != '' && rating != '' && nameOfFilms.length < 50) {
            personalMovieDB.movies[nameOfFilms] = rating;
            console.log(nameOfFilms);
            console.log(rating);
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(arg) {
    if(!arg){
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        console.log(personalMovieDB.genres);
    }
}

writeYourGenres();
