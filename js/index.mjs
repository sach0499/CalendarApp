import domElements from './domElements.mjs'


document.addEventListener("DOMContentLoaded", ()=> {

    console.log("Content is loaded!");

});

domElements.prevArrow.addEventListener("click", ()=> {

    console.log("Previous button is clicked.")
});


domElements.nextArrow.addEventListener("click", ()=> {

    console.log("Next Button is clicked.")
});