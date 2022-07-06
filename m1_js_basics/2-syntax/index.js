//JavaScript-код с созданием переменных

/* 
Автор: Илья Чернов
*/

const myName = 'Илья'
const mySurname = 'Чернов'

let myFavoriteDrink = 'Йогурт "Вкуснотеево"'
let myFavoriteAnimal = 'Dog'

const myFavoriteProgrammingLanguage = 'JavaScript' // я использовал const, потому что js разлюбить нельзя ;)

console.log('===== Summarizing Data =====')

let labelsForDataFromVars = ["Имя: ", "Фамилия: ", "Любимый напиток: ", "Любимое животное: ", "Любимый ЯП: "]
let dataFromVars = [myName, mySurname, myFavoriteDrink, myFavoriteAnimal, myFavoriteProgrammingLanguage]

for (let i = 0; i <=4; i++) {
    console.log(labelsForDataFromVars[i] + dataFromVars[i])
}