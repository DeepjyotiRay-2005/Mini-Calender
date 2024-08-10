const date = document.querySelector(".date"),
      day = document.querySelector(".day"),
      month = document.querySelector(".month"),
      year = document.querySelector(".year");
      

let now = new Date();

let dateNow = now.getDate(),
    dayNow = now.getDay(),
    monthNow = now.getMonth(),
    yearNow = now.getFullYear();

switch (dayNow) {
    case 1:
        dayNow = "Monday";
        break;
    case 2:
        dayNow = "Tuesday";
        break;
    case 3:
        dayNow = "Wednesday";
        break;
    case 4:
        dayNow = "Thursday";
        break;
    case 5:
        dayNow = "Friday";
        break;
    case 6:
        dayNow = "Saturday";
        break;
    case 7:
        dayNow = "Sunday";
        break;

    default:
        break;
}

switch (monthNow) {
    case 1:
        monthNow = "January";
        break;
    case 2:
        monthNow = "February";
        break;
    case 3:
        monthNow = "March";
        break;
    case 4:
        monthNow = "April";
        break;
    case 5:
        monthNow = "May";
        break;
    case 6:
        monthNow = "June";
        break;
    case 7:
        monthNow = "July";
        break;
    case 8:
        monthNow = "August";
        break;
    case 9:
        monthNow = "September";
        break;
    case 10:
        monthNow = "October";
        break;
    case 11:
        monthNow = "November";
        break;
    case 12:
        monthNow = "December";
        break;

    default:
        break;
}

date.textContent = dateNow;
day.textContent = dayNow;
month.textContent = monthNow;
year.textContent = yearNow;