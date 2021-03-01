
var timeBlocks = $('.container');
var timeBlockRow = $('.time-block');
var isPresent;
var isPast;
var isFuture;


//Created today's date in jumbotron
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);

//function to loop over time blocks

function colorDate() {
    //current time now variable
    var currentHour = moment().hour()

    //jquery .each looping use `$(this)` to refer to the current html element(time-block)
    timeBlockRow.each(function () {

        //turn html element #time-blocks into a number, using .data(key,value) can omit `data` and just use string time in .data()
        // console.log($(this).data('time'), currentHour);
        var blockHour = parseInt($(this).data('time'));

        //check time and set appropriate rows to background color
        // Military time will be read 0900-1700
        if (currentHour === blockHour) {
            $(this).addClass('present')

        } else if (currentHour > blockHour) {
            $(this).addClass('past')
        }
        else {
            $(this).addClass('future')
        }
    });
}
// execute function
colorDate();




//Click save button  and set user input into local storage 
var saveBtnEl = $('.saveBtn');

//Need on(click)--event listener
saveBtnEl.on('click', function (event) {
    event.preventDefault()
    //Capture the values from the jquery
    // console.log($(this).parent().parent().data('time'))

    //When `this` any save button is clicked,  use dom, parent element is time-block, get the data-time value
    var time1 = $(this).parent().parent().data('time')

    // When `this` any save button clicked, look for siblings in dom with class ` .description`and get the value
    var descriptionBox = $(this).siblings('.description').val();

    // set items in storage
    localStorage.setItem('time', time1);
    localStorage.setItem('description', descriptionBox)
});

//Need to reload page with saved info from local storage


function saveRefreshData() {
    
 var descriptionInput = $('.description');
    descriptionInput.each(function () {
        // console.log(descriptionInput)
        
        
        var time2 = $(this).siblings('.hour')
        // console.log(time2)
        
        var timeStored = localStorage.getItem('time');
        // console.log(timeStored)
        
        
        var textStored = localStorage.getItem('description');
        // console.log(textStored)
        if (timeStored === time2) {
            textStored.textContent.$(this)
        //    DEBUGGGGIN STOPPED HERE
            console.log(textStored.textContent.$(this))
           
        }
    })
};
saveRefreshData()