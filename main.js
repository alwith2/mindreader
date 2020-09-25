// define objects

// create main text
let main = document.getElementById("main").innerHTML
//  create small text
let smTxt = document.getElementById("smTxt").innerHTML
// create symbols
let symbls = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "+"];
// create states
let state = 1
// create mind reader
let answerSym = null

// advance state
function nextState() {
    console.log(state)
    state++
    renderView()
}
// reset to state 1
function resetState() {
    state = 1
    renderView()
}

// create symbols
function randomsym() {
    var rightAns = symbls[Math.ceil(Math.random() * 10)]
    var str = "<br>";
    for (i = 0; i <= 100; i++) {
        if (i % 9) {
            var sym = symbls[Math.ceil(Math.random() * 10)]

            str = str + i + "-" + sym + "<br>"

        }

        else {
            str = str + i + "-" + rightAns + "<br>"
            answerSym = rightAns
        }
    }
    // display symbols
    return str;
}

function renderView() {
    if (state == 1) {
        document.getElementById("main").innerHTML = "I know what you did last summer"
        document.getElementById("smTxt").innerHTML = ""
        document.getElementById("btn2").style.visibility = "hidden"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 2) {
        document.getElementById("main").innerHTML = "Pick a number between 1 and 99"
        document.getElementById("smTxt").innerHTML = "When you've picked your number, click next"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"

    }
    else if (state == 3) {
        document.getElementById("main").innerHTML = "Add both digits together to get a new number"
        document.getElementById("smTxt").innerHTML = "Ex: 56 is 5 + 6 = 11<br>Click next to proceed"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 4) {
        document.getElementById("main").innerHTML = "Subtract your new number from the original number"
        document.getElementById("smTxt").innerHTML = "Ex: 56 - 11 = 45<br>This is your new number<br>Click next to proceed "
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 5) {
        // call function to create symbols
        var str = randomsym()
        document.getElementById("main").innerHTML = str;
        document.getElementById("smTxt").innerHTML = "Scroll down to find your new number.<br>Remember the symbol next to the number"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 6) {

        document.getElementById("main").innerHTML = answerSym
        document.getElementById("smTxt").innerHTML = "Your symbol is: <br>" + answerSym
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "hidden"
    }
}

renderView()