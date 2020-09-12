import domElements from './domElements.mjs'
import { getCurrentMonthAndYear, getPreviousMonth, getNextMonth, calculateOffset, daysInMonth,displayMonthTitleAtTop } from './utils/getMonth.mjs'
import { renderCalendar} from './utils/renderCalendar.mjs'
import renderEvents from './utils/renderEvents.mjs';


/*
monthAndYear:
0 -> monthName:  "January"
1 -> fullYear:  2020
2 -> 0-based index of month:  0
*/


document.addEventListener("DOMContentLoaded", ()=> {

    const monthAndYear = getCurrentMonthAndYear();
    
    displayMonthTitleAtTop(monthAndYear)

    renderCalendar(monthAndYear)

  
    domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

    renderEvents(domElements.dateTitleBtm.textContent);


});

domElements.prevArrow.addEventListener("click", ()=> {

    const monthAndYear = getPreviousMonth();

    displayMonthTitleAtTop(monthAndYear)


    renderCalendar(monthAndYear)
  
   // domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

});


domElements.nextArrow.addEventListener("click", () => {

    const monthAndYear = getNextMonth();

    displayMonthTitleAtTop(monthAndYear)

    renderCalendar(monthAndYear)

   // domElements.dateTitleBtm.textContent = `${(new Date).getDate()} ${domElements.monthTitle.textContent}`

});


domElements.addEventBtn.addEventListener("click", () =>{


    const inputs = domElements.modalForm.elements;

    for(let i =0; i < inputs.length; i++)
            inputs[i].value = "";

    const modal = $('#exampleModalCenter');
    modal.modal('show');


    domElements.modalEditEvent.classList.add("d-none");
    domElements.modalAddEvent.classList.remove("d-none");
    domElements.modalEditEvent.removeAttribute('id');


} )




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
    

    const modal = $('#exampleModalCenter');

    modal.modal('hide');


})


domElements.table.addEventListener("click", (e)=> {

      const selectedDate = e.target.textContent;

      domElements.dateTitleBtm.textContent = `${selectedDate} ${domElements.monthTitle.textContent}`

      renderEvents(domElements.dateTitleBtm.textContent)

})


domElements.eventsTab.addEventListener("click", (e) => {

        const btn = e.target;
      
        if(btn !== null && btn.id == "event-edit"){

            // 1. get date and event id

            const date = domElements.dateTitleBtm.textContent;
            const eventId = btn.classList[btn.classList.length - 1];

            // 2. get the event from the local storage


            const events = JSON.parse(localStorage.getItem(date.split(' ').join('-')));
            let event;
           
            for(let i = 0; i < events.length; i++)
               if(events[i].id === eventId){
                    event = events[i]
                    break;
                }  
            
            // 3. open modal with filled details


            const modal = $('#exampleModalCenter');

            modal.modal('show');

            

            const inputs = modal["0"].querySelectorAll("input");

            const keys = Object.keys(event);
        
            for(let i = 0; i < inputs.length; i++)
                 inputs[i].value = event[keys[i]];

            // 3. enable edit button with the id and hide the add event button

            domElements.modalAddEvent.classList.add("d-none");
            domElements.modalEditEvent.classList.remove("d-none");
            domElements.modalEditEvent.id = event.id;
        
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


            localStorage[date.split(' ').join('-')] = JSON.stringify(events);

            // 3. render events again

            renderEvents(date)

            
        }
})



domElements.modalEditEvent.addEventListener("click", (e)=> {


     // 0. 
     e.preventDefault();

     // 1. get event id and date
     const date = domElements.dateTitleBtm.textContent.split(" ").join("-");
     const eventId = domElements.modalEditEvent.id;

     // 2. get local storage data

     const events = (JSON.parse(localStorage.getItem(date)))

     // 3. modify the object


     for(let i = 0; i < events.length; i++){

          if(events[i].id === eventId){

              const inputs = document.querySelectorAll("input");
              const keys = Object.keys(events[i]);

              for(let j =0; j < inputs.length; j++)
                events[i][keys[j]] = inputs[j].value;

              break;

          }
     }


     // 4. save it
     localStorage.setItem(date, JSON.stringify(events));


     // 5. doing some rough work
     // a) closing the modal
     // b) rendering events again

    const modal = $('#exampleModalCenter');
    modal.modal('hide');

    renderEvents(date.split("-").join(' '));

    for(let i =0; i < events.length; i++)
            inputs[i].value = "";
    
    domElements.modalAddEvent.classList.remove("d-none");
    domElements.modalEditEvent.classList.add('d-none');

    domElements.modalEditEvent.removeAttribute('id');


})