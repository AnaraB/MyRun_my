//save reference to import DOM elements
let currentDayEl = $('#currentDay');



function loadMap (){
  const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Workout date and type')
    .openPopup();

}

loadMap();




//handle displaying the time
function displayCurrentTime() {
  let rightNow = dayjs().format('dddd, MMMM D');
  currentDayEl.text(rightNow);
}




// display currentTime
setInterval(displayCurrentTime, 1000);

// --------------------------------Event Listeners---------------------------------------------- // 

///ClearForm//

 // Get the form and reset button elements//
  document.addEventListener('DOMContentLoaded', function () { 
    
    // Get the form and reset button elements
    var form = document.querySelector('.form-bg');
    var resetButton = document.querySelector('.reset-btn');

    // Event listener for reset button
    resetButton.addEventListener('click', function (event) {

      // Prioritise resetting form by preventing defualt function
      event.preventDefault();

      // Reset the form fields
      form.reset();
    });
  })



