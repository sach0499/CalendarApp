import domElements from './domElements.mjs'
import { getCurrentMonthAndYear, getPreviousMonth, getNextMonth } from './utils/getMonth.mjs'


document.addEventListener("DOMContentLoaded", ()=> {

    const monthAndYear = getCurrentMonthAndYear();

});

domElements.prevArrow.addEventListener("click", ()=> {

    const monthAndYear = getPreviousMonth();

    console.log(monthAndYear);
});


domElements.nextArrow.addEventListener("click", ()=> {

    const monthAndYear = getNextMonth();

    console.log(monthAndYear);
    
});