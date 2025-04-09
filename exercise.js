const rates = {
    car: {
        feeBase: 5000,
        feePerHour: 3000,
        extraChargeOver24: 50000
    },
    bike: {
        feeBase: 2000,
        feePerHour: 1000,
        extraChargeOver24: 20000
    }
}

const oneDay = 24;

function calculateTotalParkingFee(vehicleType, duration) {
    if (!rates[vehicleType]) {
        return
    }
    
    if (duration < 1) duration = 1;

    let totalFee = rates[vehicleType].feeBase + (rates[vehicleType].feePerHour * (duration - 1));
    if (duration > oneDay) {
        totalFee += rates[vehicleType].extraChargeOver24;
    }

    console.log(totalFee);
}

calculateTotalParkingFee("car", 3);
calculateTotalParkingFee("bike", 1);
calculateTotalParkingFee("car", 27);
calculateTotalParkingFee("bikee", 30);