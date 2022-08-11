function showCurrentDay () {
    let date = new Date();
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
    return days[day]
};
document.getElementById("day").innerHTML = "Today is:  " + showCurrentDay(day)

function zero_first(value){
        if (value < 10) {
            value='0'+value;
        }
        return value;
    }

function current_hour () {
    let date = new Date();
    let hour = zero_first(date.getHours()) ;
    let minute = zero_first (date.getMinutes());
    let second = zero_first (date.getSeconds());
    let prepand = (hour >= 12)? "PM" : "AM";
    hour = (hour >= 12) ? hour - 12: hour;
    return "Current time is: " + hour + " "+ prepand + ": " + minute + ": " + second;
}

setInterval(function () {
    document.getElementById("hour").innerHTML = current_hour();
}, 1000);
