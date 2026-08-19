function neighborhoodShop(input) {
    let product = input[0];
    let town = input[1];
    let productQuantity = Number(input[2]);

    let price = 0;

    switch (town) {
        case "Sofia":
            if (product == "coffee") {
                price = productQuantity * 0.50;
            }
            else if (product == "water") {
                price = productQuantity * 0.80;
            }
            else if (product == "beer") {
                price = productQuantity * 1.20;
            }
            else if (product == "sweets") {
                price = productQuantity * 1.45;
            }
            else if (product == "peanuts") {
                price = productQuantity * 1.60;
            }
            break;

        case "Plovdiv":
            if (product == "coffee") {
                price = productQuantity * 0.40;
            }
            else if (product == "water") {
                price = productQuantity * 0.70;
            }
            else if (product == "beer") {
                price = productQuantity * 1.15;
            }
            else if (product == "sweets") {
                price = productQuantity * 1.30;
            }
            else if (product == "peanuts") {
                price = productQuantity * 1.50;
            }
            break;

        case "Varna":
            if (product == "coffee") {
                price = productQuantity * 0.45;
            }
            else if (product == "water") {
                price = productQuantity * 0.70;
            }
            else if (product == "beer") {
                price = productQuantity * 1.10;
            }
            else if (product == "sweets") {
                price = productQuantity * 1.35;
            }
            else if (product == "peanuts") {
                price = productQuantity * 1.55;
            }
            break;
    }

    console.log(`Price = ${price.toFixed(2)}`);
}

neighborhoodShop(["coffee", "Varna", "2"])
neighborhoodShop(["peanuts", "Plovdiv", "1"])
neighborhoodShop(["water", "Plovdiv", "2"])