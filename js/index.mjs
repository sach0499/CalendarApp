import domElements from './domElements.mjs'
import { getCurrentMonthAndYear, getPreviousMonth, getNextMonth, calculateOffset, daysInMonth} from './utils/getMonth.mjs'
import {renderCalendar} from './utils/renderCalendar.mjs'


document.addEventListener("DOMContentLoaded", ()=> {

    const monthAndYear = getCurrentMonthAndYear();

    domElements.monthTitle.textContent = `${monthAndYear[0]} ${monthAndYear[1]}`

    renderCalendar(calculateOffset(monthAndYear), daysInMonth(monthAndYear))

    domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

});

domElements.prevArrow.addEventListener("click", ()=> {

    const monthAndYear = getPreviousMonth();

    domElements.monthTitle.textContent = `${monthAndYear[0]} ${monthAndYear[1]}`

    renderCalendar(calculateOffset(monthAndYear), daysInMonth(monthAndYear))
  
   // domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

});


domElements.nextArrow.addEventListener("click", () => {

    const monthAndYear = getNextMonth();

    domElements.monthTitle.textContent = `${monthAndYear[0]} ${monthAndYear[1]}`

    renderCalendar(calculateOffset(monthAndYear), daysInMonth(monthAndYear))

   // domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

});



domElements.addEventBtn.addEventListener("click", () => {


})


domElements.modalAddEvent.addEventListener("click", (e) => {


    e.preventDefault();

    const inputs = domElements.modalForm.elements;

    const length = domElements.modalForm.length;

    for(let i =0; i < length - 1; i++){

        console.log(`${inputs[i].id}: ${inputs[i].value}`);
    }

    
    
    


})


domElements.table.addEventListener("click", (e)=> {

      const selectedDate = e.target.textContent;

      domElements.dateTitleBtm.textContent = `${selectedDate} ${domElements.monthTitle.textContent}`

})