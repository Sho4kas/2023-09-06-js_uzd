// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDoghyear(humanYears) {
    let dogYears = humanYears * 7
    let output = `${humanYears} Žmogaus metai yra ${dogYears} šuns metai.` 
    return output
}

console.log(humanToDoghyear(25))
console.log(humanToDoghyear(10))

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.


function booksInYear(books) {
    let booksreading = Math.floor(365 / books)
    let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${booksreading} dienas.` 
    return output
}

console.log(booksInYear(25))
console.log(booksInYear(10))

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function dayToWeek(days) {
    let week = Math.floor (days / 7)
    let output = `${days} dienos yra ${week} savaitės.` 
    return output
}

console.log(dayToWeek(7))
console.log(dayToWeek(35))


// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.


function daysToYears(days) {
    let years = Math.floor (days / 365)
    let output = `${days} dienos yra ${years} metai.` 
    return output
}

console.log(daysToYears(366))
console.log(daysToYears(230))


// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.


function yearsTohours(years) {
    let hours = (years * 365) * 24
    let output = `${years} metai turi ${hours} valandas.` 
    return output
}

console.log(yearsTohours(1))
console.log(yearsTohours(5))


// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.


function monthTohours(month) {
    let hours = (month * 30) * 24
    let output = `${month} mėnesiai turi ${hours} valandas.` 
    return output
}

console.log(monthTohours(1))
console.log(monthTohours(3))


// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.


function monthTominute(month) {
    let minute = (month * 30) * 1440
    let output = `${month} mėnesiai turi ${minute} minutes.` 
    return output
}

console.log(monthTominute(1))
console.log(monthTominute(2))