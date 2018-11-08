
var now = new Date();
currentYear = now.getFullYear();
currentMonth = now.getMonth();
currentDay = now.getDate();
currentWeekDay = now.getDay();

//find last days of current and previous months
b = new Date(currentYear, currentMonth + 1, 0); 
let lastDayOfCurrentMonthIndex = b.getDate() + 1;
c = new Date(currentYear, currentMonth, 0);
let lastDayOfPreviousMonth = c.getDate();

let days = [];

//create rest of the previous month on 
//the same week with beginning of current month
for(let i = currentWeekDay; i > 1; i--) {
    days.unshift(lastDayOfPreviousMonth--);
}
//append dates of current month
for(let i = 1; i < lastDayOfCurrentMonthIndex; i++) {
    days.push(i);
}
//find rest of the last week of current month
let lastWeekNextMonthDays = 7 - days.length%7;

for(let i = 1; i < lastWeekNextMonthDays + 1; i++) {
    days.push(i);
}

days

var calendar = document.createElement('div');
calendar.className = "calendar";
var year = document.createElement('div');
year.className = "calendar__year";
year.appendChild(document.createTextNode(currentYear));
var month = document.createElement('div');
month.className = "calendar__month";
month.appendChild(document.createTextNode(currentMonth));
var daysContainer = document.createElement('div');
daysContainer.className = "calendar__days-container";

calendar.appendChild(year);
calendar.appendChild(month);
calendar.appendChild(daysContainer);

for(let i = 0; i < days.length; i++) {
    let day = document.createElement('div');
    day.appendChild(document.createTextNode(days[i]));
    day.className = "days-container__day";
    if ( (i<6&&days[i]>20) || (i> 20&&days[i]<7)) {
        day.className = "days-container__day days-container__day_other-month";
    }
    if (days[i] === currentDay) {
        if ((currentDay > 22) && (days.lastIndexOf(currentDay) === i)
            || (currentDay < 7) && (days.indexOf(currentDay) === i)
            || (currentDay > 6) && (currentDay < 23)
        ) {
            day.className = "days-container__day days-container__day_current";
        }
    }
    daysContainer.appendChild(day);
}

document.body.appendChild(calendar);