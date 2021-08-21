// ==UserScript==
// @name         G.E.T Gats Enhancement Tool Beta Version 1.5.8
// @namespace    https://github.com/LightLordYT/
// @version      Beta 1.5.8
// @author       LightLord
// @match        https://gats.io/
// @icon         https://www.google.com/s2/favicons?domain=gats.io
// @description  Gats.io-Enhancement-Tool (G.E.T) This is a script for Gats.io that customizes the gui This is still in the Beta stage so don't expect it to be a completely developed, and perfect script.
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.jsdelivr.net/gh/LightLordYT/Gats.io-Enhancement-Tool@latest/code.min.js
// @updateURL    https://greasyfork.org/en/scripts/430140-g-e-t-gats-enhancement-tool-beta-version-1-4-8
// @downloadURL  https://greasyfork.org/en/scripts/430140-g-e-t-gats-enhancement-tool-beta-version-1-4-8
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @compatible   chrome+tampermonkey
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
    V1.5.8 Added source control from github*/

///===--- INFORMATION ---===\\\


//===--- IMPORTANT AWARENESS ---===\\
//--- some scripts unfortunately contain code that can take your personal information or data. Watch out for that.---\\
//--- I am not an expert coder and took me a few months to fully develop this script for release. I am not that familiar with code taking personal information.---\\
//--- I heard that anything with document.cookie in the script might be potentially there to take info or something just as bad, I am not exactly sure about this though. ---\\
//--- Please do not abuse this script in gats.io or it will ruin the game for others. I made this script since I thought the game started to become boring. ---\\
//--- This script does not contain any sort of virus or anything the code is down below anyway.---\\
//--- Also the adblock isn't one hundred percent perfect...---\\
//--- I am fully aware I can optimize this code by a lot using jQuery but im lazy---\\

//===--- Installation ---===\\
//--- for greasyfork simply press install then when it leads you to the tampermonkey page press install. Then press FILE--> SAVE ---\\
//--- for github just copy all the code then create a new tampermonkey script and paste the code in. Then press FILE--> SAVE ---\\
//--- I don't think it even works if you paste this code into the console(inspect element) and it is unnecessary anyway since tampermonkey is a code executor extension. ---\\
//--- So basically copy paste code into new tampermonkey script(delete current code in the new script first) and press file save.


//===--- Contact Information ---===\\
//--- If you want to ask any questions or collab on a coding project you can reach me through github,discord, or greasyfork. Please don't contact me with unnecessary stuff---\\
//--- Discord: LightLord#4261
//--- Github: https://github.com/LightLordYT
//--- GreasyFork: https://greasyfork.org/en/users/798398-lightlord


//===--- Credits ---==\\
//--- I did use a lot of Vaakir's script for the customization and as reference so big shoutout to him! his youtube channel is here: https://www.youtube.com/channel/UC2m-9cAoT8EEO2dqWlk4Yfw---\\
//--- credit to mr doob for the fps counter ---\\

//===--- small info ---==\\
//--- IMPORTANT FOR CUSTOMIZATION --> look below for the code function changeColor(and whatever color you want to have) for exmaple function changeColorBlue. If it has  // in front of it and you want the color then remove it.
//--- the reason that i have only made 3 available is that for some reason if i make more than that then it kinda malfunctions the script so.. just don't make it more than three colors
//--- i have made it red green and blue for now but you can change it to whatever color you want as long as its within 3 colors in total also make so to do FILE--> SAVE
//--- if you don't like the colors DON"T change the color name but just change the color value like for example #E8AA00 is color value go to here and pick a color: https://htmlcolorcodes.com/color-picker/
//--- if you can help with the probelm stated above contact me:)---\\

//===--- My Youtube channel (optional) ---==\\
//--- if you interested in learning more about graphic design, coding, and some game content my channel is available : http://www.youtube.com/channel/UCGFfoQy07ho5wF_5duaz1vQ

//=- Note To Self -=\\
// "https://i.imgur.com/aOG03yv.png"; (src of the new logo) \\
//"https://i.imgur.com/Wer58qF.png"; (src of new background) \\


//FINALLY, ENJOY THE SCRIPT!!!\\

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

document.getElementById('colorTitle').style.background = "#A10000"
document.getElementById('colorBacking').style.background = "#A10000"
document.getElementById('armorTitle').style.background = "#A10000"
document.getElementById('armorBacking').style.background = "#A10000"
document.getElementById('weaponTitle').style.background = "#A10000"
document.getElementById('weaponBacking').style.background = "#A10000"
document.getElementById('playButton').style.background = "#FF0000"
document.getElementById('playButtonContainer').style.background = "#A10000"
    document.getElementById("slct").style.backgroundColor= "red";
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
        document.getElementById("slct").style.backgroundColor= "blue";

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
    document.getElementById("slct").style.backgroundColor= "pink";

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
        document.getElementById("slct").style.backgroundColor= "green";

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
    document.getElementById("slct").style.backgroundColor= "yellow";

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
    document.getElementById("slct").style.backgroundColor= "orange";

}*/


//--- GUI lol i don't really understand the code either ---\\

scriptRunning();

//fps counter
javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

//--- useful styles to make interface look cooler + some other styles for general stuff like adblock(which  should "hopefully work" although prob it doesn't so dm me on discord if u can help---\\
GM_addStyle ( `

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


function adblock(){
   var ad1 = document.getElementById("gameadsbannerpic");
    ad1.remove
   var ad2 = document.getElementById("detect");
    ad2.remove
   var ad3 = document.getElementById("adRespawnLeft");
    ad3.remove
   var ad4 = document.getElementById("adRespawnRight");
    ad4.remove
   var ad5 = document.getElementById("adRespawnTop");
    ad5.remove
   var ad6 = document.getElementById("adHome");
    ad6.remove
   var ad7 = document.getElementById("ad-group");
    ad7.remove
   var ad8 = document.getElementByClassName("ad-unit-container");
    ad8.remove

}

$("#gameadsbannerpic").remove()
$("#detect").remove()
$("#adRespawnLeft").remove()
$("#adRespawnRight").remove()
$("#adRespawnTop").remove()
$("#adHome").remove()
$("#detect").remove()
$("#ad-group").remove()
$("#ad-unit-container").remove()
