function workTime(input) {
    let time = Number(input[0]);
    let day = input[1];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time >= 10 && time <= 18) {
                console.log("OPEN");
            }
            else {
                console.log("CLOSED");
            }
            break;
        case "Sunday":
            console.log("CLOSED");
            break;
    }
}

workTime(["11", "Monday"])
workTime(["19", "Friday"])
workTime(["11", "Sunday"])