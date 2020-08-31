function select(userSelection)
{

Cookies.set("selection",userSelection);

Cookies.set ("userHealth", "50");
Cookies.set ("computerHealth", "50");
Cookies.set ("maxUserHealth", "50");
Cookies.set ("maxComputerHealth", "50");

window.open("battle.html", "_self");

}



