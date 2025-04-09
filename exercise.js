function calculateTotalParkingFee(vehicleType, hoursParked) {
    const rateBaseCar = 5000;
    const ratePerHourCar = 3000;
    const rateBaseBike = 2000;
    const ratePerHourBike = 1000;

    let totalFee = 0;

    switch(vehicleType) {
        case "car":
            totalFee = rateBaseCar + (ratePerHourCar * (hoursParked-1));
            if (hoursParked > 24) {
                totalFee += 50000;
            }
            break;
        case "bike":
            totalFee = rateBaseBike + (ratePerHourBike * (hoursParked-1));
            if (hoursParked > 24) {
                totalFee += 20000;
            }
            break;
    }

    console.log(totalFee);
}

calculateTotalParkingFee("car", 3);
calculateTotalParkingFee("bike", 1);
calculateTotalParkingFee("car", 27);
