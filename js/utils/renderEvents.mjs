import domElements from './../domElements.mjs'
export default (date) => {
  

    date = date.split(" ").join("-");
     
    const events = JSON.parse(localStorage.getItem(date));

    let html = "";

   // console.log(date, events)

    if(events !== null)
        events.forEach(element => {

          html += ` <div class="col-12 p-1 pl-4 border d-flex align-items-center">
          <span class="col-6">${element.title} -- ${element.startTime} - ${element.endTime}</span>
          <a class="col-1 btn text-warning">
              <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-plus-square" id="event-edit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
          </a>
          <a class="col-1 btn text-danger" >
              <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-x-circle" id="event-delete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
          </a>
    </div>`
    

          
        });

    


    domElements.eventsTab.innerHTML = html;


  
    
};
