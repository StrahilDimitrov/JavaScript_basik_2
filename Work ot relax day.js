function workDay(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day!");
            break;

        case "Saturday":
        case "Sunday":
            console.log("Weekend!");
            break;

        default:
            console.log("ERROR!");
            break;
    }
}

workDay("Monday")
workDay("Saturday")
workDay("Wednesday")
workDay("-1564")