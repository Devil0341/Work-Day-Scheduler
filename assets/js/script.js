
var timeBlocks = $('.container');
var userInputRow = $('.description');
var timeBlockRow = $('#time-block');
var rowHour = $('.hour');

var isPresent;
var isPast;
var isFuture;


//Created today's date in jumbotron
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);

///jquery function to loop over time blocks
$(function colorDate() {
    //current time now variable
    var currentHour = moment().hour()

    //when looping use `this` to refer to the current html element(time-block)
    // Military time will be read 0900-1700
    timeBlockRow.each(function (i) {
        //turn html element #time-blocks into a number, set attribute id, and split each number into an array
        var blockHour = parseInt($(this).attr("id").split("time-block")[1]);

        //check time and set appropriate rows to background color
        if (currentHour === blockHour) {
            $(this).addClass('present')

        } else if (currentHour > blockHour) {
            $(this).addClass('past')
        } else {
            $(this).addClass('future')
        }
    });
});




//Once save button is clicked the function will save user input into local storage and show back up after refreshed page

$(function saveButton() {
    //need on(click)
    //need to set item
    //need to get item on page refresh
});