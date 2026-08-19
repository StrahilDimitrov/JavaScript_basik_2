function salesCommission(input) {
    let town = input[0];
    let valueSales = Number(input[1]);

    let commission = 0;

    switch (town) {
        case "Sofia":
            if (valueSales >= 0 && valueSales <= 500) {
                commission = valueSales * 5 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 500 && valueSales <= 1000) {
                commission = valueSales * 7 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 1000 && valueSales <= 10000) {
                commission = valueSales * 8 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 10000) {
                commission = valueSales * 12 / 100;
                console.log(commission.toFixed(2));
            }
            else {
                console.log("ERROR");
            }
            break;

        case "Varna":
            if (valueSales >= 0 && valueSales <= 500) {
                commission = valueSales * 4.5 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 500 && valueSales <= 1000) {
                commission = valueSales * 7.5 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 1000 && valueSales <= 10000) {
                commission = valueSales * 10 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 10000) {
                commission = valueSales * 13 / 100;
                console.log(commission.toFixed(2));
            }
            else {
                console.log("ERROR");
            }
            break;

        case "Plovdiv":
            if (valueSales >= 0 && valueSales <= 500) {
                commission = valueSales * 5.5 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 500 && valueSales <= 1000) {
                commission = valueSales * 8 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 1000 && valueSales <= 10000) {
                commission = valueSales * 12 / 100;
                console.log(commission.toFixed(2));
            }
            else if (valueSales > 10000) {
                commission = valueSales * 14.5 / 100;
                console.log(commission.toFixed(2));
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

salesCommission(["Sofia", "1500"])
salesCommission(["Burgas", "387.45"])
salesCommission(["Plovdiv", "499.99"])
salesCommission(["Varna", "-21"])