let currentDay = document.getElementById("day");
let currentHour = document.getElementById("hour");



let date = new Date();

let day = date.getDay();
function showCurrentDay () {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
    return days[day]
};
currentDay.innerHTML = "Today is:  " + showCurrentDay(day)

let hour = date.getHours();

let minute = date.getMinutes();
let second = date.getSeconds();
let prepand = (hour >= 12)? "PM" : "AM";
hour = (hour >= 12) ? hour - 12: hour;

currentHour.innerText = "Current time is: " + hour + " "+ prepand+ ": " + minute + ": " + second;