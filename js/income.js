const expanseDiv = document.querySelector('.info-wrapper')
const balansTable = document.getElementById('balansTable')
const purposeInput = document.getElementById('maqsadInput')
const sumInput = document.getElementById('summaInput')
const addBtn = document.getElementById('addBtn')
const undefinedInput = document.getElementById('undefinedInput')
let allDeleteBtns = document.querySelectorAll('.deleteBtn')
const inCome = JSON.parse(localStorage.getItem('inCome')) || [];

const globalTime = new Date()

const setItemStorage = () => {
    localStorage.setItem('inCome', JSON.stringify(inCome));
}

const getItemStorage = () => {
    inCome.forEach(item => {
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
            inCome.splice(index, 1);
            setItemStorage();
        })
    }
}

const addFunc = () => {
    if (!purposeInput.value) {
        purposeInput.classList.add('fail')
        undefinedInput.textContent = 'Iltimos Maqsad Kiriting!'
        setTimeout(() => {
            purposeInput.classList.remove('fail')
            undefinedInput.textContent = ''
        }, 3000);
        return
    }
    if (purposeInput.value.length > 30) {
        purposeInput.value = ''
        undefinedInput.textContent = 'Maqsadingiz uzayib ketdi! Iltimos Kamaytiring:'
        purposeInput.classList.add('fail')
        setTimeout(() => {
            undefinedInput.textContent = ''
            purposeInput.classList.remove('fail')
        }, 3000);
        return
    }
    if (!sumInput.value) {
        sumInput.value = ''
        undefinedInput.textContent = 'Iltimos Summa Kiriting!'
        sumInput.classList.add('fail')
        setTimeout(() => {
            undefinedInput.textContent = ''
            sumInput.classList.remove('fail')
        }, 3000);
        return
    }
    if (sumInput.value < 0) {
        undefinedInput.textContent = 'Iltimos Summa Kiriting!'
        sumInput.classList.add('fail')
        setTimeout(() => {
            undefinedInput.textContent = ''
            sumInput.classList.remove('fail')
        }, 3000);
        sumInput.value = ''
        return
    }
    
    const purposeTr = document.createElement('tr')
    
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
    // deleteBtn.id
    deleteBtn.classList.add('error')
    deleteBtn.classList.add('deleteBtn')
    
    purposeTr.appendChild(purposeId)
    purposeTr.appendChild(purposeLi)
    purposeTr.appendChild(sumLi)
    purposeTr.appendChild(dateLi)
    purposeTr.appendChild(deleteBtn)
    
    balansTable.appendChild(purposeTr)
    deleteFunc()
    
    inCome.push(
        {
            id:purposeId.textContent,
            purpose:purposeLi.textContent,
            sum:sumLi.textContent,
            date:dateLi.textContent
        })
        setItemStorage()
        purposeInput.value = ''
        sumInput.value = ''
}

addBtn.addEventListener('click', ()=> {
    addFunc()
})

sumInput.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        addFunc()
    }
})


getItemStorage()