document.addEventListener("DOMContentLoaded", function () {
    let months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]; 
    let date = new Date();
    let day = date.getDate();
    let weekday = daysOfWeek[date.getDay()];
    let month = date.getMonth();
    let year = date.getFullYear()
    let weekdays = "";
    let calendarDay = "";
    let calendarMonth = "";

    // Check for leap year
    function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }
    
    // Loop through months array until index value matches month variable value
    for (let x = 0; x < months.length; x++) {
        if (x === month) {
            calendarMonth = months[x];
            break;
        }
    };

    // Create the days of week containers 
    for (let y = 0; y < daysOfWeek.length; y++) {
        // If the daysOfWeek index value matches the current day of the week, create a red container 
        if(daysOfWeek[y] === weekday) {
            weekdays += `
            <div class="calendar-square todays-date"><strong>${daysOfWeek[y].slice(0, 3)}</strong></div>
            `
        } else {
            // Create the rest of the containers
            weekdays += `
            <div class="calendar-square"><strong>${daysOfWeek[y].slice(0, 3)}</strong></div>
            `
        }
    };

    // Create the days of the month containers
    if(isLeapYear(year) && [1].includes(month)) {
        // Loop for leap years
        for (let i = 0; i < 29; i++) {
            if(day - 1 == i) {
                // Create a red container for todays date
                calendarDay += `
                <div class="calendar-square todays-date">${i + 1}</div>
                `;
            } else {
                calendarDay += `
                <div class="calendar-square">${i + 1}</div>
                `;
            }
        }
    } else {
        // Loop for other years
        for (let i = 0; i < 31; i++) {
            if(day - 1 == i) {
                // Create a red container for todays date
                calendarDay += `
                <div class="calendar-square todays-date">${i + 1}</div>
                `;
            } else if(i == 30 && [3, 5, 8, 10].includes(month)) {
                // Only create 30 in a month where there are 30 days
                calendarDay += `
                <div class="calendar-square" style="display: none;">${i + 1}</div>
                `;
            } else if(i >= 28 && [1].includes(month)) {
                // Only create 28 for Feburary
                calendarDay += `
                <div class="calendar-square" style="display: none;">${i + 1}</div>
                `;
            } else {
                calendarDay += `
                <div class="calendar-square">${i + 1}</div>
                `;
            }
        };
    };

    // Render calendar
    document.getElementById("calendar-month").innerHTML = calendarMonth + ' ' + year;
    document.getElementById("calendar-body").innerHTML = calendarDay;
    document.getElementById("daysofweek-container").innerHTML = weekdays;
})