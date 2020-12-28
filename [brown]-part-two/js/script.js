//let rainfall = prompt("How many inches of rain fell?");
//for (let i = 1; i === rainfall; i++) {
//   console.log(i = '*');
//} 

//console.log(
//    "hello"
//)
yield = 50;
//yield10 = yield * .10
//yield20 = yield * .20
//yield15 = yield * .15

let rain = prompt("How many inches of rain fell?");

if (rain <= 10) {
    rainyield = yield * .80; //- yield20; // rain = 20%
}
else if (rain >= 20) {
    rainyield = yield * .90; // - yield10; // rain - 10%
}
else {
    rainyield = yield
}
// console.log(rainyield) // just rain

rainie = "*";
rainnum = parseInt(rain);
console.log(`${rainie.repeat(rainnum)}`); // rain turned into asterisks
// console.log(rainnum * "*"); 



// console.log(rainyield)// yield so far




//if (rain.toLowerCase() == "scorpio") {
//    alert("Wow! I'm a Scorpio too!");
//}

let fertilizer = prompt("Did you use fertilizer?");

if (fertilizer === "yes") {
    let fertilizertype = prompt("Did you use premium or regular fertilizer?");

    if (fertilizertype === "premium") {
        // add 15% to yield
        fullyield = rainyield * 1.15;
    } else if (fertilizertype === "regular") {
        // add 10% to yield 
        fullyield = rainyield * 1.1;
    }
    // else if (fertilizertype = "premium") {
    // add 15% to yield
    //     console.log(fullyield = rainyield * 1.15);
    else {
        // yield doesn't change
        fullyield = rainyield;
    }


}
else {
    console.log("The yield should be " + rainyield + " bushels per acre.")
}

console.log("The yield should be " + fullyield + " bushels per acre.") // final count with sentence

