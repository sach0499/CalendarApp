import domElements from './../domElements.mjs'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;


export const getCurrentMonthAndYear = () => {

    const date = new Date();
    const result = [months[date.getMonth()], date.getFullYear()];
     return result;
}

export const getPreviousMonth = () => {

     let currentMonth = domElements.monthTitle.textContent;

     currentMonth = currentMonth.split(',')

     currentMonth[1] = currentMonth[1].trim();

     let index;

     for(let i =0; i < months.length; i++)
        if(months[i] === currentMonth[0]){
             index = i;
             break;
        }

    if(index === 0){

        currentMonth[0] = months[11];
        currentMonth[1] = currentMonth[1] -1;
    }

    else
        currentMonth[0] = months[index - 1];

     
     return currentMonth;

}


export const getNextMonth = () => {

    let currentMonth = domElements.monthTitle.textContent;

     currentMonth = currentMonth.split(',')

     currentMonth[1] = currentMonth[1].trim();

     let index;

     for(let i =0; i < months.length; i++)
        if(months[i] === currentMonth[0]){
             index = i;
             break;
        }

    if(index === 11){

        currentMonth[0] = months[0];
        currentMonth[1] = currentMonth[1] + 1;
    }

    else
        currentMonth[0] = months[index + 1];

     
     return currentMonth;

}