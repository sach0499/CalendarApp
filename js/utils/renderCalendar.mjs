import domElements from "./../domElements.mjs";

const getFirstDay = (monthAndYear) => {
  const year = monthAndYear[1];
  const month = monthAndYear[2];

  const firstDay = new Date(year, month, 1).toDateString().split(" ")[0];

  return firstDay;
};

const daysInMonth = (monthAndYear) => {
    const year = monthAndYear[1];
    const month = monthAndYear[2] + 1;
    return new Date(year, month, 0).getDate();
}

export const renderCalendar = (monthAndYear) => {


    const firstDay = getFirstDay(monthAndYear);

    const numDays = daysInMonth(monthAndYear);


    console.log(firstDay, numDays);

};
