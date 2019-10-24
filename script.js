
console.log(moment());
$(document).ready(function () {
    var hourTime = parseInt(moment().format('H'));

    console.log(hourTime);
    $("#currentDay").text(moment().format("MMM Do YY"));

    // saving text content to local storage for each save button
    var hour1 = localStorage.getItem('hour1');
    if (hour1) {
        $("#hour1").text(hour1);

    }

    $("#btn1").click(function () {
        var content = $("#hour1").text();
        localStorage.setItem('hour1', content);
    });

    // save button 2
    var hour2 = localStorage.getItem('hour2');
    if (hour1) {
        $("#hour2").text(hour2);

    }

    $("#btn2").click(function () {
        var content = $("#hour2").text();
        localStorage.setItem('hour2', content);
    });

    // save button 3
    var hour3 = localStorage.getItem('hour3');
    if (hour1) {
        $("#hour3").text(hour3);

    }

    $("#btn3").click(function () {
        var content = $("#hour3").text();
        localStorage.setItem('hour3', content);
    });

    // save button 4
    var hour4 = localStorage.getItem('hour4');
    if (hour1) {
        $("#hour4").text(hour4);

    }

    $("#btn4").click(function () {
        var content = $("#hour4").text();
        localStorage.setItem('hour4', content);
    });

    // save button 5
    var hour5 = localStorage.getItem('hour5');
    if (hour1) {
        $("#hour5").text(hour5);

    }

    $("#btn5").click(function () {
        var content = $("#hour5").text();
        localStorage.setItem('hour5', content);
    });

    // save button 6
    var hour6 = localStorage.getItem('hour6');
    if (hour1) {
        $("#hour6").text(hour6);

    }

    $("#btn6").click(function () {
        var content = $("#hour6").text();
        localStorage.setItem('hour6', content);
    });

    // save button 7
    var hour7 = localStorage.getItem('hour7');
    if (hour1) {
        $("#hour7").text(hour7);

    }

    $("#btn7").click(function () {
        var content = $("#hour7").text();
        localStorage.setItem('hour7', content);
    });

    // save button 8
    var hour8 = localStorage.getItem('hour8');
    if (hour1) {
        $("#hour8").text(hour8);

    }

    $("#btn8").click(function () {
        var content = $("#hour8").text();
        localStorage.setItem('hour8', content);
    });

    // removing and adding classes to show past, present and future time blocks
    if(hourTime === 9){
        $("#hour1").removeClass("past");
        $("#hour1").addClass("present")
    }

    // hour 2 classes
    if(hourTime === 10){
        $("#hour2").removeClass("past");
        $("#hour2").addClass("present")
    }
    if(hourTime < 10){
        $("#hour2").removeClass("past");
        $("#hour2").addClass("future");
    }

    // hour 3 classes
    if(hourTime === 11){
        $("#hour3").removeClass("past");
        $("#hour3").addClass("present")
    }
    if(hourTime < 11){
        $("#hour3").removeClass("past");
        $("#hour3").addClass("future");
    }

    // hour 4 classes
    if(hourTime === 12){
        $("#hour4").removeClass("past");
        $("#hour4").addClass("present")
    }
    if(hourTime < 12){
        $("#hour4").removeClass("past");
        $("#hour4").addClass("future");
    }

    // hour 5 classes
    if(hourTime === 13){
        $("#hour5").removeClass("past");
        $("#hour5").addClass("present")
    }
    if(hourTime < 13){
        $("#hour5").removeClass("past");
        $("#hour5").addClass("future");
    }

    // hour 6 classes
    if(hourTime === 14){
        $("#hour6").removeClass("past");
        $("#hour6").addClass("present")
    }
    if(hourTime < 14){
        $("#hour6").removeClass("past");
        $("#hour6").addClass("future");
    }

    // hour 7 classes
    if(hourTime === 15){
        $("#hour7").removeClass("past");
        $("#hour7").addClass("present")
    }
    if(hourTime < 15){
        $("#hour7").removeClass("past");
        $("#hour7").addClass("future");
    }

    // hour 8 classes
    if(hourTime === 16){
        $("#hour8").removeClass("past");
        $("#hour8").addClass("present")
    }
    if(hourTime < 16){
        $("#hour8").removeClass("past");
        $("#hour8").addClass("future");
    }
});

