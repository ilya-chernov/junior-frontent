/*
*   ЗАДАНИЕ 
*   ****************************************************************
*   Каждую переменную объявляй при помощи const. Также обрати *
*   внимание, что при инициализации переменной через const    *
*   необходимо обязательно указать какое-либо значение.       *
*   ****************************************************************
*/

const nickName = 'Ely Blackey'
const age = 19
const isHeStudying = true
const IsHeSingle = null
let WillingToServeInMilForces;

const Person = {
    Name: 'Ilya',
    Age: 19,
    Married: false,
};

const sym = Symbol('foo');
const IntNum = 1000n;
dataVarsNames = ["nickName", "age", "isHeStudying", "IsHeSingle", "WillingToServeInMilForces", "Person", "sym", "IntNum"]
dataVars = [nickName, age, isHeStudying, IsHeSingle, WillingToServeInMilForces, Person, sym, IntNum]

for (let i = 0; i < 7; i++) {
    console.log(dataVarsNames[i], ":" , typeof dataVars[i])
}
