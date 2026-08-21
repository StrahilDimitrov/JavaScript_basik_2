function fishingBoat(input) {
    let budget = Number(input.shift());
    let seasson = input.shift();
    let quantityFishingMan = Number(input.shift());

    let priceSpring = 3000;
    let priceSummerAutumn = 4200;
    let priceWinter = 2600;

    let price = 0;

    switch (seasson) {
        case "Spring":
            if (quantityFishingMan <= 6) {
                priceSpring -= priceSpring * 10 / 100;
            }
            else if (quantityFishingMan > 6 && quantityFishingMan <= 11) {
                priceSpring -= priceSpring * 15 / 100;
            }
            else if (quantityFishingMan > 11) {
                priceSpring -= priceSpring * 25 / 100;
            }

            if (quantityFishingMan % 2 == 0) {
                priceSpring -= priceSpring * 5 / 100;
            }
            price = priceSpring;
            break;

        case "Summer":
            if (quantityFishingMan <= 6) {
                priceSummerAutumn -= priceSummerAutumn * 10 / 100;
            }
            else if (quantityFishingMan > 6 && quantityFishingMan <= 11) {
                priceSummerAutumn -= priceSummerAutumn * 15 / 100;
            }
            else if (quantityFishingMan > 11) {
                priceSummerAutumn -= priceSummerAutumn * 25 / 100;
            }

            if (quantityFishingMan % 2 == 0) {
                priceSummerAutumn -= priceSummerAutumn * 5 / 100;
            }
            price = priceSummerAutumn;
            break;

        case "Autumn":
            if (quantityFishingMan <= 6) {
                priceSummerAutumn -= priceSummerAutumn * 10 / 100;
            }
            else if (quantityFishingMan > 6 && quantityFishingMan <= 11) {
                priceSummerAutumn -= priceSummerAutumn * 15 / 100;
            }
            else if (quantityFishingMan > 11) {
                priceSummerAutumn -= priceSummerAutumn * 25 / 100;
            }

            price = priceSummerAutumn;
            break;

        case "Winter":
            if (quantityFishingMan <= 6) {
                priceWinter -= priceWinter * 10 / 100;
            }
            else if (quantityFishingMan > 6 && quantityFishingMan <= 11) {
                priceWinter -= priceWinter * 15 / 100;
            }
            else if (quantityFishingMan > 11) {
                priceWinter -= priceWinter * 25 / 100;
            }

            if (quantityFishingMan % 2 == 0) {
                priceWinter -= priceWinter * 5 / 100;
            }
            price = priceWinter;
            break;
    }

    if (budget >= price) {
        let leftPrice = budget - price;
        console.log(`Yes! You have ${leftPrice.toFixed(2)} ueor left.`);
    }
    else {
        let needPrice = price - budget;
        console.log(`Not enough money! You need ${needPrice.toFixed(2)} euro.`);
    }
}

fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])