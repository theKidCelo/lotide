const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log(`✅✅✅assertion passed: ${actual} === ${expected}`)
    }
    if(actual !== expected){
        console.log(`🛑🛑🛑assertion passed: ${actual} !== ${expected}`)
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);