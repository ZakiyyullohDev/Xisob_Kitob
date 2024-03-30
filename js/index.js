const incomeDiv = document.querySelector('.info-wrapper')
const incomeUl = document.querySelector('.ul')
let allDeleteBtns = document.querySelectorAll('.deleteBtn')
const inCome = JSON.parse(localStorage.getItem('inCome')) || [];
const exPanse = JSON.parse(localStorage.getItem('expanse')) || [];

const income = JSON.parse(localStorage.getItem('inCome'))
const expanse = JSON.parse(localStorage.getItem('expanse'))

let totalIncome = 0;
let totalExpense = 0;

income.forEach(incomeElement => {
    const purpose = incomeElement.purpose
    const id = incomeElement.id
    const incomeSum = Number(incomeElement.sum)
    const date = incomeElement.date
    totalIncome += incomeSum;
    console.log("Kirim so'm:", totalIncome);
})

expanse.forEach(expanseElement => {
    const purpose = expanseElement.purpose
    const id = expanseElement.id
    const expanseSum = Number(expanseElement.sum)
    const date = expanseElement.date
    totalExpense += expanseSum;
    console.log("Chiqim so'm:", totalExpense);

});

let balans = totalIncome - totalExpense

console.log("Balans:", balans);

const balansUl = document.createElement('ul')
balansUl.classList.add('ul')

const inComeLi = document.createElement('li')
inComeLi.textContent = totalIncome
inComeLi.classList.add('balans-li')

const ExpanseLi = document.createElement('li')
ExpanseLi.textContent = totalExpense
ExpanseLi.classList.add('balans-li')

const balansLi = document.createElement('li')
balansLi.textContent = balans
balansLi.classList.add('balans-li')

balansUl.appendChild(inComeLi)
balansUl.appendChild(ExpanseLi)
balansUl.appendChild(balansLi)

incomeDiv.appendChild(balansUl)
