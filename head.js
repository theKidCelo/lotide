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

const grabFirst = function(list){
    let firstValue = list[0]
    return firstValue
}