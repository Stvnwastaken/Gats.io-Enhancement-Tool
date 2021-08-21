//--- checks to see if script is running and gives new logo (if you don't see an alert before the page finishes loading the script is not working)---\\
function scriptRunning() {

    alert("Injected G.E.T Version 1.4.8 (It might take a while for code to load depending on how powerful you computer is)")
    document.getElementById("gatsLogo").src = "https://i.imgur.com/aOG03yv.png"
};

//--- useful code for making interface look fancier--\\


var message = document.getElementById("announcementMessage");

window.onload = function () {
    document.getElementById("gameadsbannerpic").innerHTML = "add deleted (beta)";
    document.title = "G.E.T  V1.4.8";
  var newM = "Going to add auto upgrade soon! stay tuned (Also click this text to see tips and tricks/combos)";
  message.textContent = newM;
};
window.addEventListener("load", function(event) {
document.getElementById('highScoresHeading').style.background = "#13AAFF"
document.getElementById('moreGamesFooter').style.background = "#13AAFF"
document.getElementById('moreGamesFooter').innerHTML = "G.E.T made by LightLord"
var options = document.getElementById("moreGamesFooter")
options.addEventListener("click", () => {
if (window.confirm('Press Ok to see my G.E.T github repository. Press cancel to see my greasyfork'))
{
window.open("https://github.com/LightLordYT/Gats.io-Enhancement-Tool","_blank")
}
else
{
window.open('https://greasyfork.org/en/users/798398-lightlord', '_blank');
}
});
document.getElementById('infoFooter').style.background = "#13AAFF"
document.getElementById('infoFooter').innerHTML = "Click to see G.E.T Changelog and Gats.io Stats"
var link = document.getElementById("infoFooter")
link.addEventListener("click", () => {
if (window.confirm('Press Ok to see changelog. Press cancel to see stats'))
{
alert("Version 1.0.1 Added Title\nVersion 1.0.2 Added other customization stuff\n Version 1.0.3 Disabled canvas to fix glitch\nVersion 1.0.4 Fixed css for top scores and play also credit for myself XD\nVersion 1.0.5 Checks for update\nVersion 1.1.5 Redid gui also other alert/changelog/stats stuff\nVersion 1.1.6 Made the homescreen customization match\n Version 1.2.6 Added Tips and Tricks and Combos for each gun.\nVersion 1.3.6 Added fps,ms,bytes counter that can be changed by clicking on it.\nVersion 1.4.7 Added jQuery and other stuff.\nVersion 1.4.8 Added Compatibility")
}
else
{
window.open('https://stats.gats.io', '_blank');
}
});
document.getElementById("infoFooter").style.color = "black"
document.getElementById("moreGamesFooter").style.color = "black"
document.getElementById('registerButton').style.background = "#13AAFF"
document.getElementById('weaponBacking').style.background = "#001359"
document.getElementById('weaponTitle').style.background = "#001359"
document.getElementById('armorBacking').style.background = "#001359"
document.getElementById('colorBacking').style.background = "#001359"
document.getElementById('colorTitle').style.background = "#001359"
document.getElementById('armorTitle').style.background = "#001359"
document.getElementById('reconnectButton').style.background = "#13AAFF"
document.getElementById('playButton').style.background = "#13AAFF"
document.getElementById('playButton').innerHTML = "Deploy"
document.getElementById('playButtonContainer').style.background = "#001992"
document.getElementById('loginButton').style.background = "#13AAFF"
document.getElementById('logoutButton').style.background = "#13AAFF"
document.getElementById("gametypeDropdown").style.borderRadius ="10px";
document.getElementById("serversBtn").style.borderRadius ="10px";
document.getElementById("playButton").style.borderRadius = "15px";
document.getElementById("playButton").style.borderColor = "black";
document.getElementById("slct").style.backgroundColor = "blue";
document.getElementById("slct").style.borderRadius = "25px";
document.getElementById("loginButton").style.borderRadius = "20px";
document.getElementById("registerButton").style.borderRadius = "20px";
document.getElementById("red").style.borderRadius ="100px";
document.getElementById("orange").style.borderRadius ="100px";
document.getElementById("yellow").style.borderRadius ="100px";
document.getElementById("green").style.borderRadius ="100px";
document.getElementById("blue").style.borderRadius ="100px";
document.getElementById("purple").style.borderRadius ="100px";
document.getElementById("announcementMessage").style.color = "white"
});


var newP = document.getElementById("announcementMessage")
newP.addEventListener("click", () => {
if (window.confirm('Press Ok to see Combos. Press cancel to see Tips and Tricks'))
{
alert("Combo Snipe and Go(In my opinion the best sniper combo): Gun Choice: Sniper Having 1 Armor. Slot 1: Speed. Slot2: Grenade/Gas/Knife. Slot3: Damage.\nCombo Up Close: Gun Choice: smg/shotgun 1 Amor. Slot 1: Range. Slot 2: Dash/Medkit/Shield. Slot 3: Speed.\nCombo Spam: Gun Choice: lmg/assault 1 Amor. Slot 1: Range. Slot 2: Grenade/Gas. Slot 3: Speed.\nCombo Spam: Gun Choice: pistol 1 Amor. Slot 1: Damage. Slot 2: Grenade/Gas/Medkit. Slot 3: Speed.\nThese are the only combos for now. If you want more combos or want to add a combo that you like join the discord and tell me!")
}
else
{
alert("Tips and Tricks:\n Knife: For knife use when people are bunched up to maximized damage or when a person is really close. Throw knife and shoot sniper almost at the same time towards the left and right of a person so when they try to run they either get hit by sniper or killed by knife.\n Grenade: Most useful when opponent is behind cover. Throw it at them, forcing them to go in one direction, shoot in that direction so that your shot and the grenade both hit.\n Medkit: For medkit use when you get hit even if it is a little bit since sniper can easily kill you.\n Dash: Most useful when opponent is behind cover. Dash in an unpredictable way toward them and shoot them(most effective if gun is lmg,smg, or shotgun). If you want you can dash, quickly shoot and dash out to avoid taking any damage.\nGas: Most useful when opponent is behind cover. You can spam it so they have to keep on running and when they are out in the open shoot them. This way you can pinch them a lot.\nThese are the only tips and tricks for now. If you want more tips and tricks or want to add a tip or trick that you like join the discord and tell me!")
}
});
