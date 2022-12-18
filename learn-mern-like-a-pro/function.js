console.log("function started ");

var m = { x: 10 };
function change() {
    var m = { x: 20 }; // evabe change korle bairer jinish change hobe na ..
    console.log("value of m  inside function: ", m);
}
// function call
change();
console.log("value of m  outside function: ", m);

// object ta ke dot diye dhorte gele .. sheta reference hobe ..

function change2(n) {
    n.x = 30; // evabe change korle bairer jinish o change hoye jabe
    console.log("value of m  inside function: ", m);
}

change2(m);
console.log("value of m  outside function: ", m);
