function numberInInterval(number) {
    if (number >= - 100 && number <= 100) {
        if (number != 0) {
            console.log("YES");
        }
        else {
            console.log("NO")
        }
    }
    else {
        console.log("NO");
    }
}

numberInInterval(-25)
numberInInterval(0)
numberInInterval(25)
numberInInterval(123)