function unvalidNumber(number) {
    if (number >= 100 && number <= 200) {
        if (number != 0) {
            console.log("VALID");
        }
        else {
            console.log("INVALID");
        }
    }
    else {
        console.log("INVALID");
    }
}

unvalidNumber(75)
unvalidNumber(150)
unvalidNumber(220)