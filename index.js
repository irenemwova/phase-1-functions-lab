// Code your solution in this file!
// Function to calculate the distance in blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters location
    return Math.abs(pickupLocation - hqLocation); // Absolute difference between pickupLocation and hqLocation
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; // Each block is 264 feet
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Absolute difference multiplied by 264 feet per block
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
