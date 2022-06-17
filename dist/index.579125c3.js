const twentyFourlb = 0.005;
const numberOfFolds = document.querySelector("#folds");
const thickness = document.querySelector("#thickness");
const calculateThickness = (e)=>{
    const folds = Number(e.target.value);
    let inches = 0;
    console.log(typeof folds);
    if (folds === 1) {
        inches = twentyFourlb * 2;
        console.log(inches);
    } else inches = twentyFourlb * 2 ** folds;
    let feet = Math.floor(inches / 12);
    console.log(typeof feet);
    let remainderInches = Math.floor(inches % 12);
    let remainderFeet = Math.floor(feet % 5280);
    let miles = Math.floor(feet / 5280);
    let earths = Math.floor(miles / 7917.5);
    let remainderMiles = Math.floor(miles % 7917.5);
    let au = Math.floor(miles / 92955807.267433);
    let remainderEarths = Math.floor(earths % 92955807.267433 / 7917.5);
    console.log(feet, "hi");
    if (miles >= 92955807.267433) thickness.textContent = `${au} AUs ${remainderEarths} earths`;
    else if (miles >= 7917.5) thickness.textContent = `${earths} earths ${remainderMiles} miles`;
    else if (feet >= 5280) thickness.textContent = `${miles} miles ${remainderFeet} feet`;
    else if (inches >= 12) thickness.textContent = `${feet} feet ${remainderInches} inches`;
    else thickness.textContent = `${inches} inches`;
};
numberOfFolds.addEventListener("input", calculateThickness);

//# sourceMappingURL=index.579125c3.js.map
