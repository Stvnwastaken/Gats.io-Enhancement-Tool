// ==UserScript==
// @name         G.E.T Gats Enhancement Tool Alpha Version 1.0.0
// @namespace    http://tampermonkey.net/
// @version      Alpha 1.0.1
// @author       LightLord
// @match        https://gats.io/
// @icon         https://www.google.com/s2/favicons?domain=gats.io
// @description   Gats.io-Enhancement-Tool (G.E.T) This is a script for Gats.io that enhances user experience by customizing the interface. This is still in the Alpha stage so don't expect it to be a completely official, developed, and perfect script.
// @grant        GM_addStyle
// @history      1.0.1 alpha version(added some small stuff)
// @history      1.0.0 initial alpha version
// ==/UserScript==
 
///===--- INFORMATION ---===\\\
 
 
//===--- IMPORTANT AWARENESS ---===\\
//--- some scripts unfortunately contain code that can take your personal information or data. Watch out for that.---\\
//--- I am not an expert coder and took me a few months to fully develop this script for release. I am not that familiar with code taking personal information.---\\
//--- I heard that anything with document.cookie in the script might be potentially there to take info or something just as bad, I am not exactly sure about this though. ---\\
//--- Please do not abuse this script in gats.io or it will ruin the game for others. I made this script since I thought the game started to become boring. ---\\
//--- This script does not contain any sort of virus or anything the code is down below anyway.---\\
//--- Also the adblock isn't one hundred percent perfect...---\\
 
//===--- Installation ---===\\
//--- for greasyfork simply press install then when it leads you to the tampermonkey page press install. Then press FILE--> SAVE ---\\
//--- for github just copy all the code then create a new tampermonkey script and paste the code in. Then press FILE--> SAVE ---\\
//--- I don't think it even works if you paste this code into the console(inspect element) and it is unnecessary anyway since tampermonkey is a code executor extension. ---\\
//--- So basically copy paste code into new tampermonkey script(delete current code in the new script first) and press file save.
 
 
//===--- Problems and Bugs ---===\\
//--- Any problem with this script like a bug in it or a glitch contact me so I can fix it :) ---\\
 
 
//===--- Contact Information ---===\\
//--- If you want to ask any questions or collab on a coding project you can reach me through github,discord, or greasyfork. Please don't contact me with unnecessary stuff---\\
//--- Discord: LightLord#4261
//--- Github: https://github.com/LightLordYT
//--- GreasyFork: https://greasyfork.org/en/users/798398-lightlord
 
 
//===--- Updates Information ---===\\
//--- When I push out new updates tampermonkey should detect it and ask if you want to update it. If not just look at github or greasyfork to see if there are new updates ---\\
//--- I will have version history above so you can see what I did for each new update. The big number 1.0.0 the one is the big number. ---\\
//--- If the big number is changed that means that it is a really big update like new features or something. The first zero the one closest to one stands for medium updates ---\\
//--- Medium updates are like adding one feature and fixing or improving a feature or something. The last zero the one farthest for the one is small updates.---\\
//--- Small updates are like fixing bugs and glitches here and there basically you won't notice a big difference if you use for example 1.0.1 and 1.0.0---\\
 
 
//===--- Copying ---==\\
//--- This script was completely original and please don't copy this script and present it like it was yours and you own it. ---\\
//--- I made almost everything in this script by myself including the images ---\\
 
//===--- Credits ---==\\
//--- I did use a lot of Vaakir's script for the customization and as reference so big shoutout to him! his youtube channel is here: https://www.youtube.com/channel/UC2m-9cAoT8EEO2dqWlk4Yfw---\\
 
//===--- small info ---==\\
//--- i will add some comments to point out what the code does ---\\
//--- IMPORTANT FOR CUSTOMIZATION --> look below for the code function changeColor(and whatever color you want to have) for exmaple function changeColorBlue. If it has  // in front of it and you want the color then remove it.
//--- the reason that i have only made 3 available is that for some reason if i make more than that then it kinda malfunctions the script so.. just don't make it more than three colors
//--- i have made it red green and blue for now but you can change it to whatever color you want as long as its within 3 colors in total also make so to do FILE--> SAVE
//--- if you don't like the colors DON"T change the color name but just change the color value like for example #E8AA00 is color value go to here and pick a color: https://htmlcolorcodes.com/color-picker/
//--- if you can help with the probelm stated above contact me:)---\\
 
//===--- How to start editing/hacking games yourself! ---==\\
//--- this does not require dev tools you can simply just go to the page and press ctrl+u or right click and press page source. There you can see the html and get some important and useful ids which you can change etc
//--- also if you click on the .js and .css files you can see the css and js code. If you want to change the look go to css if you want to change like interaction such as "I think" aimbot and etc
//--- call upon the ids/classes using document.getElementbyId or document.getElementByClassName. I recommend looking at khan academy for more info about it
 
//===--- My Youtube channel (optional) ---==\\
//--- if you interested in learning more about graphic design, coding, and some game content my channel is available : http://www.youtube.com/channel/UCGFfoQy07ho5wF_5duaz1vQ
 
//=- Note To Self -=\\
// "https://i.imgur.com/aOG03yv.png"; (src of the new logo) \\
//"https://i.imgur.com/Wer58qF.png"; (src of new background) \\
 
 
//FINALLY, ENJOY THE SCRIPT!!!\\
 
 
 
//--- checks to see if script is running and gives new logo (if you don't see an alert before the page finishes loading the script is not working)---\\
function scriptRunning() {
 
    alert("Injected G.E.T Alpha V0.01");
    document.getElementById("gatsLogo").src = "https://i.imgur.com/aOG03yv.png"
};
 
//--- useful code for making interface look fancier--\\
 
 
var message = document.getElementById("announcementMessage");
 
window.onload = function () {
    document.getElementById("gameadsbannerpic").innerHTML = "add deleted (beta)";
    document.title = "G.E.T V1.0.1";
  var newM = "All Game Enhancement Tools (G.E.T) Discord coming out soon!";
  message.textContent = newM;
};
window.addEventListener("load", function(event) {
    document.getElementById('highScoresHeading').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('moreGamesFooter').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('infoFooter').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('registerButton').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('weaponBacking').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('weaponTitle').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('armorBacking').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('armorTitle').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('colorBacking').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('colorTitle').style.background = "#001992"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('reconnectButton').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('playButton').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('playButtonContainer').style.background = "#001992"
  }
);
 
window.addEventListener("load", function(event) {
    document.getElementById('loginButton').style.background = "#13AAFF"
  }
);
window.addEventListener("load", function(event) {
    document.getElementById('logoutButton').style.background = "#13AAFF"
  }
);
 
var red = document.getElementById("red")
red.addEventListener("click", changeColorRed);
 
function changeColorRed() {
 
document.getElementById('colorTitle').style.background = "#A10000"
document.getElementById('colorBacking').style.background = "#A10000"
document.getElementById('armorTitle').style.background = "#A10000"
document.getElementById('armorBacking').style.background = "#A10000"
document.getElementById('weaponTitle').style.background = "#A10000"
document.getElementById('weaponBacking').style.background = "#A10000"
document.getElementById('playButton').style.background = "#FF0000"
document.getElementById('playButtonContainer').style.background = "#A10000"
}
 
var blue = document.getElementById("blue")
blue.addEventListener("click", changeColorBlue);
 
function changeColorBlue() {
 
document.getElementById('colorTitle').style.background = "#001992"
document.getElementById('colorBacking').style.background = "#001992"
document.getElementById('armorTitle').style.background = "#001992"
document.getElementById('armorBacking').style.background = "#001992"
document.getElementById('weaponTitle').style.background = "#001992"
document.getElementById('weaponBacking').style.background = "#001992"
document.getElementById('playButton').style.background = "#13AAFF"
document.getElementById('playButtonContainer').style.background = "#001992"
}
 
/*var pink = document.getElementById("pink")
pink.addEventListener("click", changeColorPink)
 
function changeColorPink() {
 
document.getElementById('colorTitle').style.background = "#CF004F"
document.getElementById('colorBacking').style.background = "#CF004F"
document.getElementById('armorTitle').style.background = "#CF004F"
document.getElementById('armorBacking').style.background = "#CF004F"
document.getElementById('weaponTitle').style.background = "#CF004F"
document.getElementById('weaponBacking').style.background = "#CF004F"
document.getElementById('playButton').style.background = "#FF0061"
document.getElementById('playButtonContainer').style.background = "#CF004F"
}*/
 
var green = document.getElementById("green")
green.addEventListener("click", changeColorGreen)
 
function changeColorGreen() {
 
document.getElementById('colorTitle').style.background = "#10CF00 "
document.getElementById('colorBacking').style.background = "#10CF00 "
document.getElementById('armorTitle').style.background = "#10CF00 "
document.getElementById('armorBacking').style.background = "#10CF00 "
document.getElementById('weaponTitle').style.background = "#10CF00 "
document.getElementById('weaponBacking').style.background = "#10CF00 "
document.getElementById('playButton').style.background = "#25FF23"
document.getElementById('playButtonContainer').style.background = "#10CF00"
}
 
/*var yellow = document.getElementById("yellow")
yellow.addEventListener("click", changeColorYellow)
 
function changeColorYellow() {
 
document.getElementById('colorTitle').style.background = "#C8BE00 "
document.getElementById('colorBacking').style.background = "#C8BE00 "
document.getElementById('armorTitle').style.background = "#C8BE00 "
document.getElementById('armorBacking').style.background = "#C8BE00 "
document.getElementById('weaponTitle').style.background = "#E5DA00 "
document.getElementById('weaponBacking').style.background = "#C8BE00 "
}
 
var orange = document.getElementById("orange")
orange.addEventListener("click", changeColorOrange)
 
function changeColorOrange() {
 
document.getElementById('colorTitle').style.background = "#C99400 "
document.getElementById('colorBacking').style.background = "#C99400 "
document.getElementById('armorTitle').style.background = "#C99400 "
document.getElementById('armorBacking').style.background = "#C99400 "
document.getElementById('weaponTitle').style.background = "#E8AA00 "
document.getElementById('weaponBacking').style.background = "#C99400 "
}*/
 
 
//--- GUI lol i don't really understand the code either ---\\
 
scriptRunning();
 
let overlayHTML = `
<link href="https://fonts.googleapis.com/css?family=Orbitron:900" rel="stylesheet"/>
<div id="box">
    <div class="ou" id="box2">
       <canvas id="myCanvas" width="2000%" height="2000%"></canvas>
    </div>
</div>
<style>
#box {
    z-index: 1;
    position: absolute;
    bottom: 0vh;
    left: 0px;}
#box2 {
    padding: 15px;
    margin-bottom: 5px}
section {
    display: flex;
    justify-content: space-between;margin:5px;}
.ou {
    background-color: rgba(0,0,102);
    letter-spacing: 3px;
 
    font-weight: bold;
    font-size: 15px;
    font-family: Orbitron;
    color:white;}
</style>
`
let overlay = document.createElement("div");
    overlay.innerHTML = overlayHTML;
    document.body.appendChild(overlay);
var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
 
 
//--- useful styles to make interface look cooler + some other styles for general stuff like adblock(which  should "hopefully work" although prob it doesn't so dm me on discord if u can help---\\
GM_addStyle ( `
 
    .high-score-row {
    color: white
    };
 
   
 
   #gameadsbanner {
    position: fixed;
   z-index:1;
    };
 
    #detect {
    position: fixed;
    z-index:-1;
    };
 
    .ad-unit-container {
    position: fixed;
    z-index:-1;
    };
 
    #adhome {
   position: fixed;
   z-index: -1;
   };
 
` );
 
 
 
 
//---v---adblock---v---\\ (doesn't really work so if any of you guys can help dm me)
function adblock(){
   var ad1 = document.getElementById("gameadsbanner"); ad1 .parentNode.removeChild(ad1);
   var ad2 = document.getElementById("detect"); ad2.parentNode.removeChild(ad2);
   var ad3 = document.getElementById("adRespawnLeft"); ad3.parentNode.removeChild(ad3);
   var ad4 = document.getElementById("adRespawnRight"); ad4.parentNode.removeChild(ad4);
   var ad5 = document.getElementById("adRespawnTop"); ad5.parentNode.removeChild(ad5);
   var ad6 = document.getElementById("adHome"); ad6.parentNode.removeChild(ad6);
   var ad7 = document.getElementById("detect"); ad7.parentNode.removeChild(ad7);
   var ad8 = document.getElementById("ad-group"); ad8.parentNode.removeChild(ad8);
   var ad9 = document.getElementByClassName("ad-unit-container"); ad9.parentNode.removeChild(ad9);
};
 
 
function adblock2(){
    chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["https://adclick.g.doubleclick.net/"] },
  ["blocking"]
);
};
 
function adblock5(){
    chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["https://googleads.g.doubleclick.net/"] },
  ["blocking"]
);
};
 
function adblock3(){
    chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["https://n.gameads.io/getcode"] },
  ["blocking"]
);
};
 
function adblock4(){
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.doubleclick.net/*"] },
  ["blocking"]
);
};
 
 
adblock3();
adblock4();
adblock2();
adblock();
adblock5();
 
 
