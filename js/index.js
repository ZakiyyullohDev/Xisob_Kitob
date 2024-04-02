const balansTable = document.getElementById('balansTable')
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

// const table = document.createElement('table')
// table.classList.add('ul')

// const tbody = document.createElement('tbody')

const tr = document.getElementById('tr')

const inComeTh = document.getElementById('inComeTd')
inComeTh.textContent = totalIncome

const exPanseTh = document.getElementById('exPanseTd')
exPanseTh.textContent = totalExpense

const balansTh = document.getElementById('balansTd')
balansTh.textContent = balans

tr.appendChild(inComeTh)
tr.appendChild(exPanseTh)
tr.appendChild(balansTh)

// tbody.appendChild(tr)

balansTable.appendChild(tbody)
