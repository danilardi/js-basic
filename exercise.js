function calculateTotalParkingFee(vehicleType, duration) {
    const rates = {
        car: {
            base: 5000,
            perHour: 3000,
            extraChargeOver24: 50000
        },
        bike: {
            base: 2000,
            perHour: 1000,
            extraChargeOver24: 20000
        }
    }

    let totalFee = rates[vehicleType].base + (rates[vehicleType].perHour * (duration -1));
    if (duration > 24) {
        totalFee += rates[vehicleType].extraChargeOver24;
    }

    console.log(totalFee);
}

calculateTotalParkingFee("car", 3);
calculateTotalParkingFee("bike", 1);
calculateTotalParkingFee("car", 27);