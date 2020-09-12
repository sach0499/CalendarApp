import domElements from "./../domElements.mjs";


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




export const renderCalendar = (offset, numDays, monthAndYear) => {


  let html = "";

  let rows = Math.ceil((offset + numDays) / 7);

  let todayFlag = false;

  if(monthAndYear[2] === (new Date).getMonth() && parseInt(monthAndYear[1]) === (new Date).getFullYear())
      todayFlag = true;


 // console.log(monthAndYear)

  let today = (new Date).getDate();


  const input = {

      offset: offset,
      remainingDays: numDays,
      numDays: numDays
  }
  


  for(let i = 0; i < rows; i++){

     html += "<tr>";

     for(let j =0; j < 7; j++){

        let todayCell = "";
        let fill = calculateNum(input);

        if(fill == today && todayFlag === true)
          todayCell = "today"

        html += `<td scope="col" class="${todayCell}">${fill}</td>`;
     }
        

    html += "</tr>";
       
  }

  
   domElements.table.innerHTML = html;


};


/* <tr>
<td scope="col"></td>
<td scope="col"></td>
<td scope="col"></td>
<td scope="col"></td>
<td scope="col"></td>
<td scope="col"></td>
<td scope="col">1</td>
</tr> */