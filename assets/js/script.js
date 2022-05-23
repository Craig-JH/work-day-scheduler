//set day and date in header
$("#currentDay").text(moment().format('dddd MMM Do YYYY'));

//return the current time in hours to help determine past, present and future
function hourUpdater() {
    let currentHour = moment().hours();
//function to toggle between colors based on current hour
    $(".time-block").each(function() {
       let blockTime = parseInt($(this).attr("id").split("-")[1]); 

       if (blockTime < currentHour) {
           $(this).addClass("past");
       }    
       else if (blockTime === currentHour) {
           $(this).removeClass("past");
           $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
hourUpdater();

let interval = setInterval(hourUpdater, 15000);

$(".saveBtn").on("click", function() {
    let text = $(this).siblings(".text").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text)
})
//save schedule in local storage
$("#time-7am .description").val(localStorage.getItem("time-7am"));
$("#time-8am .description").val(localStorage.getItem("time-8am"));
$("#time-9am .description").val(localStorage.getItem("time-9am"));
$("#time-10am .description").val(localStorage.getItem("time-10am"));
$("#time-11am .description").val(localStorage.getItem("time-11am"));
$("#time-12pm .description").val(localStorage.getItem("time-12pm"));
$("#time-13pm .description").val(localStorage.getItem("time-13pm"));
$("#time-14pm .description").val(localStorage.getItem("time-14pm"));
$("#time-15pm .description").val(localStorage.getItem("time-15pm"));
$("#time-16pm .description").val(localStorage.getItem("time-16pm"));
$("#time-17pm .description").val(localStorage.getItem("time-17pm"));