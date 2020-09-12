import domElements from "./../domElements.mjs";
import {calculateOffset, daysInMonth} from "./getMonth.mjs";


const calculateNum = (input) => {

    
  if(input.offset !== 0){

      input.offset--;
      return "";
  }
       
  else if(input.remainingDays !== 0){

    input.remainingDays--;
    return (input.numDays - input.remainingDays);
  }
        
  else
      return "";

       
}

const preprocessCalendar = (monthAndYear) =>{


  const offset = calculateOffset(monthAndYear);
  const numDays = daysInMonth(monthAndYear);
  const rows = Math.ceil((offset + numDays) / 7);
  let today = null;

  if(monthAndYear[2] === (new Date).getMonth() && parseInt(monthAndYear[1]) === (new Date).getFullYear())
        today = (new Date).getDate();

  return {

      offset,
      numDays,
      rows,
      today
  }
     
}




export const renderCalendar = (monthAndYear) => {

  const info = preprocessCalendar(monthAndYear)

  const input = {

    offset: info.offset,
    remainingDays: info.numDays,
    numDays: info.numDays
      
  }

  let html = "";

  for(let i =0; i < info.rows; i++){

      html += '<tr>';

      for(let j =0; j < 7; j++){

        const fill = calculateNum(input);

        const todayCell = (fill === info.today) ? 'today' : '';

        html += `<td scope="col" class="${todayCell} align-top p-0 pb-5 pr-2 pt-12 tableCells">${fill}</td>`;

      }

      html += '</tr>';

  }

  domElements.table.innerHTML = html;

} 