var userSelection = Cookies.get("selection");



if (userSelection == 'mimikyu') {
    document.getElementById("selection-container1").innerHTML = '<img src="images/Mimikyu1.gif">  <p> </p>';

}

else if (userSelection == 'charizard') {
    document.getElementById("selection-container1").innerHTML = '<img src="images/Charizard1.gif" >'
}

else if (userSelection == 'umbreon') {
    document.getElementById("selection-container1").innerHTML = '<img src="images/Umbreon1.gif">';
}

else {
    document.getElementById("selection-container1").innerHTML = "<p> Invalid Choice </p>"
}

var maxUserHealth = Cookies.get ("maxUserHealth");
var maxComputerHealth=Cookies.get("maxComputerHealth");
var userHealth = Cookies.get ("userHealth");
var computerHealth = Cookies.get("computerHealth");

document.getElementById("showPointsUser").innerHTML = userHealth + " / " + maxUserHealth;
document.getElementById("showPointsComputer").innerHTML = computerHealth + " / " + maxComputerHealth;

function attack1() {
    computerHealth = computerHealth - 3;
    document.getElementById("showPointsComputer").innerHTML = computerHealth + " / " + maxComputerHealth;
    Cookies.set ("computerHealth", computerHealth);
    if (computerHealth <= 0) {
        document.body.innerHTML = "<h1> Congratulations! You Won</h1>";
        return;
    }

    userHealth = userHealth - 3;
   document.getElementById("showPointsUser").innerHTML = userHealth + " / " + maxUserHealth;
   Cookies.set ("userHealth", userHealth);
    if (userHealth <= 0) {
        document.body.innerHTML = "<h1> Sorry! You lost..Better luck next time </h1>";
        return;
    }
}

function attack2() {
    computerHealth = computerHealth - 3;
    document.getElementById("showPointsComputer").innerHTML = computerHealth + " / " + maxComputerHealth;
    Cookies.set ("computerHealth", computerHealth);
    if (computerHealth <= 0) {
        document.body.innerHTML = "<h1> Congratulations! You Won</h1>";
        return;
    }
    userHealth = userHealth - 5;
    document.getElementById("showPointsUser").innerHTML = userHealth + " / " + maxUserHealth;
    Cookies.set ("userHealth", userHealth);
    if (userHealth <= 0) {
        document.body.innerHTML = "<h1>  Sorry! You lost..Better luck next time</h1>";
        return;
    }
}

function attack3() {
    computerHealth = computerHealth - 7;
    document.getElementById("showPointsComputer").innerHTML = computerHealth + " / " +maxComputerHealth;
    Cookies.set ("computerHealth", computerHealth);
    if (computerHealth <= 0) {
        document.body.innerHTML = "<h1> Congratulations! You Won</h1>";
        return;
    }
    userHealth = userHealth - 5;
    document.getElementById("showPointsUser").innerHTML = userHealth + " / " + maxUserHealth;
    Cookies.set ("userHealth", userHealth);
    if (userHealth <= 0) {
        document.body.innerHTML = "<h1>  Sorry! You lost..Better luck next time</h1>";
        return;
    }
}

function attack4() {
    computerHealth = computerHealth - 8;
    document.getElementById("showPointsComputer").innerHTML = computerHealth + " / " + maxComputerHealth;
    Cookies.set ("computerHealth", computerHealth);

    if (computerHealth <= 0) {
        document.body.innerHTML = "<h1> Congratulations! You Won</h1>";
        return;
    }
    userHealth = userHealth - 10;
    document.getElementById("showPointsUser").innerHTML = userHealth + " / " + maxUserHealth;
    Cookies.set ("userHealth", userHealth);
    if (userHealth <= 0) {
        document.body.innerHTML = "<h1>  Sorry! You lost..Better luck next time</h1>";
        return;
    }
}

function removeCookie() {
    Cookies.remove("cookieSet");
    window.open("index.html");
}