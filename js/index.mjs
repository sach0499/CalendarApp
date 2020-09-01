import domElements from './domElements.mjs'
import { getCurrentMonthAndYear, getPreviousMonth, getNextMonth } from './utils/getMonth.mjs'
import {renderCalendar} from './utils/renderCalendar.mjs'


document.addEventListener("DOMContentLoaded", ()=> {

    const monthAndYear = getCurrentMonthAndYear();

    domElements.monthTitle.textContent = `${monthAndYear[0]}, ${monthAndYear[1]}`

    renderCalendar(monthAndYear);


});

domElements.prevArrow.addEventListener("click", ()=> {

    const monthAndYear = getPreviousMonth();

    domElements.monthTitle.textContent = `${monthAndYear[0]}, ${monthAndYear[1]}`

    renderCalendar(monthAndYear);
});


domElements.nextArrow.addEventListener("click", ()=> {

    const monthAndYear = getNextMonth();

    domElements.monthTitle.textContent = `${monthAndYear[0]}, ${monthAndYear[1]}`

    renderCalendar(monthAndYear);
    
});