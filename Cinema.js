function cinema(input) {
    let premiere = 12;
    let normal = 7.50;
    let discount = 5;

    let typeProject = input[0];
    let quantityRow = Number(input[1]);
    let quantityCol = Number(input[2]);

    let price = 0;

    switch (typeProject) {
        case "Premiere":
            price = quantityCol * quantityRow * premiere;
            break;

        case "Normal":
            price = quantityCol * quantityRow * normal;
            break;

        case "Discount":
            price = quantityCol * quantityRow * discount;
            break;
    }

    console.log(`${price.toFixed(2)} euro`);
}

cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])