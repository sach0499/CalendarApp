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



export const renderCalendar = (offset, numDays) => {


  let html = "";

  let rows = Math.ceil((offset + numDays) / 7);


  const input = {

      offset: offset,
      remainingDays: numDays,
      numDays: numDays
  }
  


  for(let i = 0; i < rows; i++){

     html += "<tr>";

     for(let j =0; j < 7; j++)
        html += `<td scope="col">${calculateNum(input)}</td>`;

    html += "</tr>";
       
  }

  console.log(input)

 // console.log(html);

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