const expanseDiv = document.querySelector('.info-wrapper')
const balansTable = document.getElementById('balansTable')
const purposeInput = document.getElementById('maqsadInput')
const sumInput = document.getElementById('summaInput')
const addBtn = document.getElementById('addBtn')
let allDeleteBtns = document.querySelectorAll('.deleteBtn')
const expanse = JSON.parse(localStorage.getItem('expanse')) || [];

const globalTime = new Date()


const setItemStorage = () => {
    localStorage.setItem('expanse', JSON.stringify(expanse));
}

const getItemStorage = () => {
    expanse.forEach(item => {
        // const purposeTable = document.createElement('table')
        // purposeTable.classList.add('ul')
        
        const tbody = document.createElement('tbody')
        
        const tr = document.createElement('tr')
        
        const purposeId = document.createElement('td')
        purposeId.textContent = 1
        purposeId.classList.add('balans-li')
        
        const purposeLi = document.createElement('td')
        purposeLi.classList.add('balans-li')
        purposeLi.textContent = item.purpose
        
        const sumLi = document.createElement('td')
        sumLi.classList.add('balans-li')
        sumLi.textContent = item.sum
        
        const dateLi = document.createElement('td')
        dateLi.classList.add('balans-li')
        dateLi.textContent = item.date
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "O'chirish"
        deleteBtn.classList.add('error')
        deleteBtn.classList.add('deleteBtn')
        
        tr.appendChild(purposeId)
        tr.appendChild(purposeLi)
        tr.appendChild(sumLi)
        tr.appendChild(dateLi)
        tr.appendChild(deleteBtn)
        
        tbody.appendChild(tr)
        balansTable.appendChild(tbody)
        deleteFunc()
    });
}

const deleteFunc = () => {
    allDeleteBtns = document.querySelectorAll('.deleteBtn')
    
    for (const deleteBtn of allDeleteBtns) {
        deleteBtn.addEventListener('click', (e) => {
            const parentUl = e.target.parentElement;
            const index = parseInt(parentUl.firstElementChild.textContent) - 1;
            parentUl.remove();
            expanse.splice(index, 1);
            setItemStorage();
        })
    }
}

addBtn.addEventListener('click', ()=> {
    if (!purposeInput.value) {
        alert('Iltimos Maqsad Kiriting!')
        return
    }
    if (purposeInput.value.length > 30) {
        alert('Maqsadingiz uzayib ketdi! Iltimos Kamaytiring:')
        purposeInput.value = ''
        return
    }
    if (!sumInput.value) {
        alert('Iltimos Summa Kiriting!')
        sumInput.value = ''
        return
    }
    if (sumInput.value < 0) {
        sumInput.value = ''
        return
    }
    
    // const purposeTable = document.createElement('table')
    // purposeTable.classList.add('ul')

    const purposeTbody = document.createElement('tbody')
    
    const purposeTr = document.createElement('tr')
    // purposeTr.classList.add('balans-tr')
    
    const purposeId = document.createElement('td')
    purposeId.textContent = 1
    purposeId.classList.add('balans-li')
    
    const purposeLi = document.createElement('td')
    purposeLi.classList.add('balans-li')
    purposeLi.textContent = purposeInput.value
    
    const sumLi = document.createElement('td')
    sumLi.classList.add('balans-li')
    sumLi.textContent = sumInput.value
    
    const dateLi = document.createElement('td')
    dateLi.classList.add('balans-li')
    dateLi.textContent = `${globalTime.getMonth() + 1}/${globalTime.getDate()}/${globalTime.getFullYear()}`
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "O'chirish"
    deleteBtn.id
    deleteBtn.classList.add('error')
    deleteBtn.classList.add('deleteBtn')
    
    purposeTr.appendChild(purposeId)
    purposeTr.appendChild(purposeLi)
    purposeTr.appendChild(sumLi)
    purposeTr.appendChild(dateLi)
    purposeTr.appendChild(deleteBtn)
    
    balansTable.appendChild(purposeTr)
    deleteFunc()
    
    expanse.push(
        {
            id:purposeId.textContent,
            purpose:purposeLi.textContent,
            sum:sumLi.textContent,
            date:dateLi.textContent
        })
        setItemStorage()
        purposeInput.value = ''
        sumInput.value = ''
    })
    
    getItemStorage()
    
    // const table = document.createElement('table')
    // table.classList.add('ul')
    
    // const tbody = document.createElement('tbody')
    
    // const tr = document.createElement('tr')
    
    // const inComeTh = document.createElement('th')
    // inComeTh.classList.add('balans-li')
    
    // const exPanseTh = document.createElement('th')
    // exPanseTh.classList.add('balans-li')
    
    // const balansTh = document.createElement('th')
    // balansTh.classList.add('balans-li')
    
    // tr.appendChild(inComeTh)
    // tr.appendChild(exPanseTh)
    // tr.appendChild(balansTh)
    
    // tbody.appendChild(tr)
    
    // balansTable.appendChild(tbody)
    