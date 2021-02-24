
var timeBlocks = $('.container');
var userInputRow = $('.description');
var timeBlockRow = $('#time-block');
var rowHour = $('.hour');
// var presentClass = $('.present');
// var pastClass = $('.past');
// var futureClass = $('.future')
var isPresent;
var isPast;
var isFuture;


//Created today's date in jumbotron
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);

//Make a function use jquery to change color of time blocks according to date 
$(function colorDate() {
    //set css class .present to row if it's today date
    //current time now variable
    var currentHour = moment().hour()
    for (var i = 0; i < timeBlockRow.length; i++){
        if (rowHour == currentHour){
        userInputRow.addClass('.present');
        isPresent = true;
        }else (rowHour < currentHour)
    }
});


//save button function