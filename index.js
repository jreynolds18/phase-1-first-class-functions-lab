const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    let firstTwoDrivers = [];
    if (firstTwoDrivers.length === 0) {
        firstTwoDrivers.push(drivers[0], drivers[1]);
    }
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function() {
    let lastTwoDrivers = [];
    let i = drivers.length;
    if (lastTwoDrivers.length === 0) {
        lastTwoDrivers.push(drivers[i-2], drivers[i-1]);
    }
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intMultiplier) {
    function fareMultiplier(fare) {
        return fare * intMultiplier;
    }
    return fareMultiplier;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, selectedFunction) {
    if (selectedFunction === returnFirstTwoDrivers) {
        const firstTwoDrivers = returnFirstTwoDrivers(drivers);
        return firstTwoDrivers;
    }
    if (selectedFunction === returnLastTwoDrivers) {
        const lastTwoDrivers = returnLastTwoDrivers(drivers);
        return lastTwoDrivers;
    }
}