import domElements from './domElements.mjs'
import { getCurrentMonthAndYear, getPreviousMonth, getNextMonth, calculateOffset, daysInMonth} from './utils/getMonth.mjs'
import {renderCalendar} from './utils/renderCalendar.mjs'
import renderEvents from './utils/renderEvents.mjs';



document.addEventListener("DOMContentLoaded", ()=> {

    const monthAndYear = getCurrentMonthAndYear();

    domElements.monthTitle.textContent = `${monthAndYear[0]} ${monthAndYear[1]}`

    renderCalendar(calculateOffset(monthAndYear), daysInMonth(monthAndYear))

    domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

    renderEvents(domElements.dateTitleBtm.textContent)



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

    let event = {};

    

    for(let i =0; i < length - 1; i++)
        event[`${inputs[i].id}`] = `${inputs[i].value}`;

    event["id"] = `${event["title"].split(' ').join('-')}${event["startTime"]}${event["endTime"]}`;

    const key = domElements.dateTitleBtm.textContent.split(" ").join("-");

    let events = localStorage.getItem(key);

    if(events == null){
        events = [event];

        localStorage.setItem(key, JSON.stringify(events));
    }
    else {

        events = (JSON.parse(events));
        events.push(event);
        localStorage.setItem(key, JSON.stringify(events));
    }

    renderEvents(domElements.dateTitleBtm.textContent)
    
    
    


})


domElements.table.addEventListener("click", (e)=> {

      const selectedDate = e.target.textContent;

      domElements.dateTitleBtm.textContent = `${selectedDate} ${domElements.monthTitle.textContent}`

      renderEvents(domElements.dateTitleBtm.textContent)

})


domElements.eventsTab.addEventListener("click", (e) => {

        const btn = e.target;
      
        if(btn !== null && btn.id == "event-edit"){


           
        }

        else if(btn !== null && btn.id == "event-delete"){


            // 1. get the date and eventID

            const date = domElements.dateTitleBtm.textContent;
            const eventId = btn.classList[btn.classList.length - 1];

            // 2. get the event from localstorage and delete it

            const events = JSON.parse(localStorage.getItem(date.split(' ').join('-')));

           
            for(let i = 0; i < events.length; i++){

                if(events[i].id === eventId){

                    events.splice(i, 1);
                    break;
                }
            }

           // console.log(events)

            localStorage[date.split(' ').join('-')] = JSON.stringify(events);

            // 3. render events again

            renderEvents(date)

            
        }
})