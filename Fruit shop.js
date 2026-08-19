function fruitShop(input) {
    let productName = input[0];
    let dayOfWeek = input[1];
    let productQuantity = Number(input[2]);

    let price = 0;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (productName == "banana") {
                price = productQuantity * 2.50;
                console.log(price.toFixed(2));
            }
            else if (productName == "apple") {
                price = productQuantity * 1.20;
                console.log(price.toFixed(2));
            }
            else if (productName == "orange") {
                price = productQuantity * 0.85;
                console.log(price.toFixed(2));
            }
            else if (productName == "grapefruit") {
                price = productQuantity * 1.45;
                console.log(price.toFixed(2));
            }
            else if (productName == "kiwi") {
                price = productQuantity * 2.70;
                console.log(price.toFixed(2));
            }
            else if (productName == "pineapple") {
                price = productQuantity * 5.50;
                console.log(price.toFixed(2));
            }
            else if (productName == "grapes") {
                price = productQuantity * 3.85;
                console.log(price.toFixed(2));
            }
            else {
                console.log("ERROR");
            }
            break;

        case "Saturday":
        case "Sunday":
            if (productName == "banana") {
                price = productQuantity * 2.70;
                console.log(price.toFixed(2));
            }
            else if (productName == "apple") {
                price = productQuantity * 1.25;
                console.log(price.toFixed(2));
            }
            else if (productName == "orange") {
                price = productQuantity * 0.90;
                console.log(price.toFixed(2));
            }
            else if (productName == "grapefruit") {
                price = productQuantity * 1.60;
                console.log(price.toFixed(2));
            }
            else if (productName == "kiwi") {
                price = productQuantity * 3;
                console.log(price.toFixed(2));
            }
            else if (productName == "pineapple") {
                price = productQuantity * 5.60;
                console.log(price.toFixed(2));
            }
            else if (productName == "grapes") {
                price = productQuantity * 4.20;
                console.log(price.toFixed(2));
            }
            else {
                console.log("ERROR");
            }
            break;

        default:
            console.log("ERROR");
            break;
    }
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["banana", "April", "4"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["tomato", " Monday", "0.5"])