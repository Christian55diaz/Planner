function updateHours(){
// gives colors to each task weather its in the present past or future
$('.hour').each(function(){
    // this shows a full 8 hour work day, i used LT as a universable variable for time
    var time= moment($(this).text(), 'LT');
    var timeLength= Math.ceil(moment.duration(time.diff(moment())).asTime());
    //using this function turns it into a string and doing that allows for, ifn time is less than 0 that means it is in the past
    if (parseInt(timeLength)< 0) {
        $(this).next().addClass("past");
    }
    // combing the if statment should make it the present
   else if (parseInt(timeLength)=== 0){
    //    adding present class
        $(this).next().addClass("present");
   }
//    if both do not equal it should be in the future
   else{
    //    future class here
        $(this).next().addClass("future");
   }
})
}
// function for saving planner
function handleSave(e){
// puts the content into the text boxes alloted
console.log(e.target)
var descTime= $(e.target).siblings('.description').val()?.trim();
var hourLog= $(e.target).closest('.time-block').attr('log');
localStorage.setItem(hourId, descTime);
function main() {
    // click save button and it will save what you are doing.
    $(document).on('click', '.saveBtn', handleSave);
    updateHours();
    // using moment.js this sets what current month, day, year, and time it is under the currentDay Id
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // this allows for a loops of the functions on the current date and time
    $('.description').each(function(){
            var hourLog = $(this).closest('.time-block').attr('log');
            //variable allows for one way for this to being saved.
            var description = localStorage.getItem(hourId);
            $(this).text(description);
        })
    
    
}
$(main)