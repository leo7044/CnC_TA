// ==UserScript==
// @name        PTE_CheatScript
// @version     2019.05.02
// @author      leo7044 (https://github.com/leo7044)
// @description PTE_CheatScript
// @downloadURL https://github.com/leo7044/CnC_TA/raw/master/PTE_CheatScript.user.js
// @updateURL   https://github.com/leo7044/CnC_TA/raw/master/PTE_CheatScript.user.js
// @include     http*://prodgame*.alliances.commandandconquer.com/320/index.aspx*
// @include     http*://cncapp*.alliances.commandandconquer.com/320/index.aspx*
// @grant       none
// ==/UserScript==

!function(){if("/login/auth"!=window.location.pathname){var t=document.createElement("script");t.innerHTML="("+function(){function e(){try{window.setInterval(function(){var t=ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d,e=0;for(var n in ClientLib.Data.MainData.GetInstance().get_Player().GetCommandPointCount()<9999&&qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat setcommandpoints 9999"),t)!t[n].get_IsGhostMode()&&t[n].GetOffenseConditionInPercent()<100&&qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat repairoff "+e),!0===t[n].get_hasCooldown()&&qx.core.Init.getApplication().getChat().getChatWidget().send("/cheat resetmovecooldownpte"),t[n].get_CityBuildingsData().get_HasCollectableBuildings()&&t[n].CollectAllResources(),e++},1e3)}catch(t){console.log(t),window.setTimeout(e,1e3)}}!function t(){try{if("undefined"!=typeof qx&&qx.core.Init.getApplication().getMenuBar())return void e()}catch(t){void 0!==console?console.log(t):window.opera?opera.postError(t):GM_log(t)}window.setTimeout(t,1e3)}()}.toString()+")();",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)}}();