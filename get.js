// ==UserScript==
// @name         G.E.T Gats Enhancement Tool Beta Version 1.6.8
// @namespace    https://github.com/LightLordYT/
// @version      Beta 1.6.8
// @author       LightLord
// @match        https://gats.io/
// @icon         https://www.google.com/s2/favicons?domain=gats.io
// @description  Gats.io-Enhancement-Tool (G.E.T) This is a script for Gats.io that customizes the gui This is still in the Beta stage so don't expect it to be a completely developed, and perfect script.
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.jsdelivr.net/gh/LightLordYT/Gats.io-Enhancement-Tool@latest/code.min.js
// @connect      https://cdn.jsdelivr.net/gh/LightLordYT/Gats.io-Enhancement-Tool@latest/code.min.js
// @updateURL    https://github.com/LightLordYT/Gats.io-Enhancement-Tool/blob/main/get.js
// @downloadURL  https://github.com/LightLordYT/Gats.io-Enhancement-Tool/blob/main/get.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @compatible   chrome+tampermonkey
// @license      MIT License 
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */


 /* Version Updates:
    V1.0.0 Alpha version release
    V1.0.1 Alpha version added title
    V1.0.2 Added other customization stuff
    V1.0.3 Disabled canvas to fix glitch
    V1.0.4 Fixed css for top scores and play also credit for myself XD
    V1.0.5 Checks for update
    V1.1.5 Redid gui also did some changelog/alert/stats stuff
    V1.1.6 Made the homescreen customization match
    V1.2.6 Added Tips and Tricks and Combos for each gun
    V1.3.6 Added fps,ms,bytes counter
    V1.4.7 Added jQuery and added other stuff
    V1.4.8 Added compatibility
    V1.5.8 Added source control from github
    V1.6.8 Optimized adblock and customization*/


GM_xmlhttpRequest({
        method : "GET",
        url : "https://cdn.jsdelivr.net/gh/LightLordYT/Gats.io-Enhancement-Tool@latest/code.min.js",
        onload : (ev) =>
        {
            let e = document.createElement('script');
            e.innerText = ev.responseText;
            document.head.appendChild(e);
        }
    });


var red = document.getElementById("red")
red.addEventListener("click", changeColorRed);

function changeColorRed() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#A10000");
document.getElementById('playButton').style.background = "#FF0000"
document.getElementById("slct").style.backgroundColor= "red";
}

var blue = document.getElementById("blue")
blue.addEventListener("click", changeColorBlue);

function changeColorBlue() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#001992");
document.getElementById('playButton').style.background = "#13AAFF"
document.getElementById("slct").style.backgroundColor= "blue";

}

var green = document.getElementById("green")
green.addEventListener("click", changeColorGreen)

function changeColorGreen() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#10CF00");
$('playButton')("background-color", "#25FF23")
$("slct").css("background-color", "green");

}

/*var pink = document.getElementById("pink")
pink.addEventListener("click", changeColorPink)

function changeColorPink() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#CF004F");
document.getElementById('playButton').style.background = "#FF0061"
document.getElementById("slct").style.backgroundColor= "pink";

}*/


/*var yellow = document.getElementById("yellow")
yellow.addEventListener("click", changeColorYellow)

function changeColorYellow() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#C8BE00");
document.getElementById('weaponTitle').style.background = "#E5DA00 "
document.getElementById("slct").style.backgroundColor= "yellow";

}
var orange = document.getElementById("orange")
orange.addEventListener("click", changeColorOrange)

function changeColorOrange() {

$("#colorTitle, #colorBacking, #armorBacking, #armorTitle, #weaponTitle, #weaponBacking, #playButtonContainer").css("background-color", "#C99400");

document.getElementById('weaponTitle').style.background = "#E8AA00 "
document.getElementById("slct").style.backgroundColor= "orange";

}*/


//--- GUI lol i don't really understand the code either ---\\

scriptRunning();

//fps counter
javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

//--- useful styles to make interface look cooler + some other styles for general stuff like adblock(which  should "hopefully work" although prob it doesn't so dm me on discord if u can help---\\
GM_addStyle ( `

    .ccr {
    color: red
    }

    #lgc {
    position: fixed
    z-index:-5
    };
    #playButton {
    color:black
    };
    .high-score-row {
    color: black
    };

   #gameadsbannerpic {
    position: fixed;
   z-index:-1;
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

//chatbox extension
document.getElementById("chatbox").maxlength("100");
document.getElementById("chatbox").style.borderRadius = "25px";
document.getElementById("chatbox").style.backgroundColor = "blue";
document.getElementById("chatbox").style.borderColor = "black";
document.getElementById("chatbox").style.color = "white";


//---v---adblock---v---\\ (doesn't really work so if any of you guys can help dm me)

$("#gameadsbannerpic, #detect, #adRespawnLeft, #adRespawnRight, #adRespawnTop, #adHome, #ad-group, #ad-unit-container").remove()
