var isEven = function(num) {
    num = Math.abs(num); //convert to absolute value to account for negative numbers
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);  // recurse for numbers that are not 0 or 1
};