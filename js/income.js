const expanseDiv = document.querySelector('.info-wrapper')
const balansTable = document.getElementById('balansTable')
const purposeInput = document.getElementById('maqsadInput')
const sumInput = document.getElementById('summaInput')
const addBtn = document.getElementById('addBtn')
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
    })

    getItemStorage()
    
    
    // {
    //     income: [
    //         {
    //             income_id: 1,
    //             income_purpose: 'Bot reklama',
    //             income_sum: 150000,
    //             income_date: '03/27/2024'
    //         },
    //         {
    //             income_id: 2,
    //             income_purpose: 'Verstka sayt',
    //             income_sum: 200000,
    //             income_date: '03/27/2024'
    //         },
    //     ],
    //     expanse: [
    //         {
    //             expanse_id: 4,
    //             expanse_purpose: 'Paynet',
    //             expanse_sum: 50000,
    //             expanse_date: '03/27/2024'
    //         },
    //     ]
    // }
    
    