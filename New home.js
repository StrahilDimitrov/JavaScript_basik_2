function newHome(input) {
    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;

    let typeFlower = input[0];
    let quantityFlower = Number(input[1]);
    let budget = Number(input[2]);

    let rosesSum = 0;
    let dahliasSum = 0;
    let tulipsSum = 0;
    let narcissusSum = 0;
    let gladiolusSum = 0;

    if (typeFlower == "Roses") {
        rosesSum = quantityFlower * rosesPrice;
        if (quantityFlower >= 80) {
            rosesSum -= rosesSum * 10 / 100;
        }

        if (budget >= rosesSum) {
            let leftSum = budget - rosesSum;
            console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftSum.toFixed(2)} euro left.`);
        }
        else {
            let needSum = rosesSum - budget;
            console.log(`Not enough money, you need ${needSum.toFixed(2)} euro more.`);
        }
    }
    else if (typeFlower == "Dahlias") {
        dahliasSum = quantityFlower * dahliasPrice;
        if (quantityFlower >= 90) {
            dahliasSum -= dahliasSum * 15 / 100;
        }

        if (budget >= dahliasSum) {
            let leftSum = budget - dahliasSum;
            console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftSum.toFixed(2)} euro left.`);
        }
        else {
            let needSum = dahliasSum - budget;
            console.log(`Not enough money, you need ${needSum.toFixed(2)} euro more.`);
        }
    }
    else if (typeFlower == "Tulips") {
        tulipsSum = quantityFlower * tulipsPrice;
        if (quantityFlower >= 80) {
            tulipsSum -= tulipsSum * 15 / 100;
        }

        if (budget >= tulipsSum) {
            let leftSum = budget - tulipsSum;
            console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftSum.toFixed(2)} euro left.`);
        }
        else {
            let needSum = tulipsSum - budget;
            console.log(`Not enough money, you need ${needSum.toFixed(2)} euro more.`);
        }
    }
    else if (typeFlower == "Narcissus") {
        narcissusSum = quantityFlower * narcissusPrice;
        if (quantityFlower <= 120) {
            narcissusSum += narcissusSum * 15 / 100;
        }

        if (budget >= narcissusSum) {
            let leftSum = budget - narcissusSum;
            console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftSum.toFixed(2)} euro left.`);
        }
        else {
            let needSum = narcissusSum - budget;
            console.log(`Not enough money, you need ${needSum.toFixed(2)} euro more.`);
        }
    }
    else if (typeFlower == "Gladiolus") {
        gladiolusSum = quantityFlower * gladiolusPrice;
        if (quantityFlower <= 80) {
            gladiolusSum += gladiolusSum * 20 / 100;
        }

        if (budget >= gladiolusSum) {
            let leftSum = budget - gladiolusSum;
            console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftSum.toFixed(2)} euro left.`);
        }
        else {
            let needSum = gladiolusSum - budget;
            console.log(`Not enough money, you need ${needSum.toFixed(2)} euro more.`);
        }
    }
}

//newHome(["Roses", "55", "250"])
newHome(["Tulips", "88", "260"])
//newHome(["Narcissus", "119", "360"])