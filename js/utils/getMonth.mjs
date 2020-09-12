import domElements from "./../domElements.mjs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const offsets = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

export const getCurrentMonthAndYear = () => {
  const date = new Date();
  const result = [months[date.getMonth()], date.getFullYear(), date.getMonth()];
  return result;
};

export const getPreviousMonth = () => {
  let currentMonth = domElements.monthTitle.textContent;

  currentMonth = currentMonth.split(" ");

  currentMonth[1] = currentMonth[1];

  let index;

  for (let i = 0; i < months.length; i++)
    if (months[i] === currentMonth[0]) {
      index = i;
      break;
    }

  if (index === 0) {
    currentMonth[0] = months[11];
    currentMonth[1] = parseInt(currentMonth[1]) - 1;
    currentMonth[2] = 11;
  } else{
    currentMonth[0] = months[index - 1];
    currentMonth[2] = index -1;
  };


  return currentMonth;
};

export const getNextMonth = () => {
  let currentMonth = domElements.monthTitle.textContent;

  currentMonth = currentMonth.split(" ");

  currentMonth[1] = currentMonth[1];

  let index;

  for (let i = 0; i < months.length; i++)
    if (months[i] === currentMonth[0]) {
      index = i;
      break;
    }

  if (index === 11) {
    currentMonth[0] = months[0];
    currentMonth[1] = parseInt(currentMonth[1]) + 1;
    currentMonth[2] = 0;
  } else {

    currentMonth[0] = months[index + 1]
    currentMonth[2] = index +1;
  };


  return currentMonth;
};




export const calculateOffset = (monthAndYear) => {

        const year = monthAndYear[1];
        const month = monthAndYear[2];
      
        const firstDay = new Date(year, month, 1).toDateString().split(" ")[0];
      
        return offsets[firstDay];

}


export const daysInMonth = (monthAndYear) => {

    const year = monthAndYear[1];
    const month = monthAndYear[2] + 1;
    return new Date(year, month, 0).getDate();
}


export const displayMonthTitleAtTop = (monthAndYear) => {

  domElements.monthTitle.textContent = `${monthAndYear[0]} ${monthAndYear[1]}`
}