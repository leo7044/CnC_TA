// ==UserScript==
// @name        AllianzInfo
// @version     2018.06.05
// @author      leo7044 (https://github.com/leo7044)
// @description Mit diesem Sktipt könnt ihr einige Informationen abrufen, die euch und die Allianz betreffen.
// @downloadURL https://raw.githubusercontent.com/leo7044/CnC_TA/master/AllianzInfo.user.js
// @updateURL   https://raw.githubusercontent.com/leo7044/CnC_TA/master/AllianzInfo.user.js
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include     http*://cncapp*.alliances.commandandconquer.com/*/index.aspx*
// @icon        data:image/png;base64,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
// @grant       none
// ==/UserScript==
 
(function () {
    var AllianzInfoMain = function () {
        function AllianzInfoCreate() {
            try {
                console.log("AllianzInfo initialized..");
                console.log("AllianzRollen",ClientLib.Data.MainData.GetInstance().get_Alliance().get_Roles());
                qx.Class.define("AllianzInfo", {
                    type: "singleton",
                    extend: qx.core.Object,
                    construct: function () {
                        window.addEventListener("click", this.onClick, false);
                        window.addEventListener("keyup", this.onKey, false);
                        window.addEventListener("mouseover", this.onMouseOver, false);
                        AIVERSION = '2016.08.07';
                        AIAUTHOR = 'leo7044';
                        AICLASS = 'AllianzInfo';
                        AIHOMEPAGE = 'http://www.leo7044.lima-city.de/AllianzInfo';
                        AIDOWNLOAD = 'http://www.leo7044.lima-city.de/AllianzInfo/AllianzInfo.user.js';
                        AIDOWNLOADSTATS = 'http://www.leo7044.lima-city.de/AllianzInfo/TA_Stats';
                        AICONTACT = 'cc.ta.leo7044@gmail.com';
                        AIIMAGE = 'data:image/png;base64,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';
                        AIIMAGESMALL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wYDEBk3jdLxcwAABQJJREFUOMtllFuMVWcdxX/fvp197nPmwkwZOAWKVBhEKaPSVCkpVJtQq5YRKxE0YHwqmZiahpBgGmMxgQcl1MTEhklsWkmdpo0tD2okBlt7rAHbYShTRijMOR3PnNsM57L3PvvyfT7UNjSup/XyX1kr/5UluA2TL/6esT3f4g8vv5Lp6++/NxaLPWbbsW26rueVAhlFN72ud97zumdqtdo/vvHoN2+9NDnJ7rGxjzXER+Tsa2fZ9fAuzr762t5sNvvrmGWle3JZ3rn8AcVymyAMSZoRWz67Aikl3a5fX1xa/MGju3e/crspAVB4s8DhJ54QPz127BepZGLc9QWzFZita/QMDRNLJkFA4PkUr12nVyyytjcgvzyF53Wf2fmVBw9denuKz3xuE+Ly9DQjGzdy8cLFXybi8fFLVxc5X4qzcsNapKYjPwohQEhAA4KIRqnMkHuFXfevodlsP/eFrV/c/7HDcrm81zKN5//59k1+9acum7ZvxBE6TgSZmGDzgE7cgHJHcbEakTbAiKB85QarmOPQ/lGCIPz2HcvveFEUi8VMLpcrtVqddP6hc+x9/AG8jM2i0rlryODYqEUYRnh+RCJm8B8HjrzhYQrIRhHv/PECvzk0zLq1w8VUKpXXpJT3ttvt9HOvzqH6Pk2xLZiqwlICfj5qYiD5+lOTPPCT53nqhXPk0zr77zY5X4yYbgnMNesY+/GbeE5z5ezs7B6t3W5/RxAy+dc2Mp7iXyXFNQFf1mtcK9U5OPEefzfv41puJ6fOFUnE4OE1BnUHLlcVM12b62GewoUbOI5zxJBSbksmbN665KGtMbgVCAgiTr40xTNNj3DDNrRMHCng8e8/QhBBpSORrsK1BW6ooeX6uTrXYHgovtaQUuY/KLcBCywBcQ1uaajV2wlQH35VwtPbLY7cl6He7PK1Z4to9iAohRCgDIumqxNFUUyrVqsiCkNQCjTxv34IUPLDukj43j0aT26NMV9vs/pHf+FStxciCUqhfAmdLsUbVymXyxi1Wm1OKH+VpqrQWYFwbYSpgSnQhSJKS756p4+hpzj42xL+iq2YgUA5EdKTqIoD5TlYvYDrZnzD87zzlVq46p67QqabLbSKDa5CMzVipoaut/jz2bcovfspFtw76fcUYagIIoXvRwSuS+CWyQ9ZdDqd9/XR0VFvcXHpu7lsgpmihZ1ME0uaZHtMluV0evtMdm1axvaR5VSkhSMFaUsQt4BuhGpUWJecZdOqDotLzXGjVqsVbNtuLEuq3kHLQMp+bN2iJ2WR7tXQsxGDcZ18f4rlfQELHUXUETi3JEK5WNE8u7f5LDU75ePHj5/RC4WCt2XLluthGO5Zv7LDktvLcH+avh6bTEojscygdPU9Xr+yRM3IYQF2N8B0HWr/fp9HNi8QOCV83/9hoVCY1sfHxzl58uS7O3bsGEwm7M8PJBq03DhIi5gm0JWOiuUIRQbaCtH0COptgvoCOzdUyBo36frhxIkTJ57+xB4CnDp16nepVOqxMIq4Xh3gb7MryfQl6UnrIASep6hUPTavaHD/hgVarTaO40w0Go2DR48eVZ8QPH36NAcOHGBiYmIskUj8LG5bd8csk/m6Sb1loIC0HZEfjFCyS8fxb3a73cP79u07838Dezvm5+cfchzn8NTU1JdmZmZ03/cJggDDMIjH4ySTSdavX++NjIw8aRjGswMDA+7t9/8FybdVEm0ckLkAAAAASUVORK5CYII=';
                        AIIMAGESMALL16 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3wYDEBkJTLPs2AAAA2xJREFUOMtlk29InHUAxz+/58/dc96dnqcuvTRs/ms4lpXgtKihq2xYYC0ZCwKrEdSLjV4YDKo3UdGUKHoRtAShBitX9CIZoY0RZGouaH/SNnRu3u3uvJvd3dM95z3PPb9erEXQ5/33D3z5Cv5h8suv2D/0LKe/m2qrqq4+4vV4+jxerVFKhG07q/m8NZ1KpT4eeOrJS6cmJ3lm/34ABMAP0zP07u1jZnp6vLKiYjh5c4u4qZPIuthOCZ8oUOMr0NoY4s9M7nj/vicO3Q4WFy9coH3nThbm5he9Xt/9U7/m0RraUA0D15VIAUIKSkWHqws/M9ipEyjTl7sf7LlneWnpVoNoNDouXTn80jvn2T34EKZUyZckLSEVrwqJvOSvokQvuVw8e45jL0Tw+40T9fX1z4lYLNYWDoeWXjz6I0rbveTKy8joKuO9BiFdsp7Ksf2OEO8vWPyScKl2Hb7+4BSx6SFyuVxIsyzryHq0xBenFR4IC9ZsyUePa1ToUPn8CfC4vPpwHW8c3EvzcZOIX8F33yPMLf5BQ13gE8WyrL4z85tQF+HcdUlaLfLam5+x+6051M5B2PU0OU8QjwaKhMtpl5Q3yNufrmBZ1gHNLZW2X4kVUYxKCKqwobOx4yBJAUiXkW4P7+3p5tvFJKZtIIRA6Ao/XXKQUqIkkglcuwhCgiJAiFvjSujZ7vLuHoMPp35n8BsHXAmOROZsxFaSa9fW0DY2Uqu6faPZTTjoYQNcUDwKqg/6A9eJpg2Ong0TKGk4WZtSwcGN3qS1JkE+vw0tHo/P3FUTaFYL6wSsOshr+BWdgCZYvLSKmdVpqokgCy6FoiSTlliFBPu6NWKx2Em1vb39qmlmX2mMlJPOhKiqMGiIGNRWaTzWGuTlR1s4E3epNgRBIbFvZglmzrOzPoVpml3q7Oxssqurq7HKt9lh2UHqt4WprvRSXqkRv7HC979lKA+H8TsO3nye3MoSB7qWyWazU6OjoxPK4cOHGRsbGy4PVV3p37VKsHABJ57EXcsgZAuqiCBXM9hrcbaiaxzqXUPXPWnDMAb+PdNtJiYmTvr9/iFXSq6ny5m/HKLkCnbcmaOzNY9jFzFNcyqRSAyMjIzI/xnEYrG7Nzc3P19YWOhJpVLYto2maZSVlVFbWys7Ojpeb2pqOvZfzd9AtIrrG0NgfAAAAABJRU5ErkJggg==';
                    },
                    members: {
                        AllianzinfoFenster: null,
                        AllianzinfoTab: null,
                        AllianzinfoPOIsPage: null,
                        AllianzinfoRechtePage: null,
                        AllianzinfoPOIlvlPage: null,
                        AllianzinfoPOIlvlOldPage: null,
                        AllianzinfoPOIDetailPage: null,
                        AllianzinfoBasenPage: null,
                        AllianzinfoKontaktPage: null,
                        AllianzinfoInfoPage: null,
                        AllianzinfoPOIsVBox: null,
                        AllianzinfoRechteVBox: null,
                        AllianzinfoPOIlvlVBox: null,
                        AllianzinfoPOIlvlOldVBox: null,
                        AllianzinfoPOIDetailVBox: null,
                        AllianzinfoBasenVBox: null,
                        AllianzinfoKontaktVBox: null,
                        AllianzinfoInfoVBox: null,
                        AllianzinfoVBox: null,
                        AllianzinfoButton: null,
                        app: null,
                        initialize: function () {
                            this.AllianzinfoFenster = new qx.ui.window.Window(AICLASS + " " + AIVERSION + " by " + AIAUTHOR,AIIMAGE).set({
                                padding: 5,
                                paddingRight: 0,
                                width: 350,
                                showMaximize:false,
                                showMinimize:false,
                                showClose:true,
                                allowClose:true,
                                resizable:false
                            });
                            this.AllianzinfoFenster.setTextColor('black');
                            this.AllianzinfoFenster.setLayout(new qx.ui.layout.HBox());
                            this.AllianzinfoFenster.moveTo(850, 32);
 
                            // Tab Reihe
                            this.AllianzinfoTab = (new qx.ui.tabview.TabView()).set({
                                contentPaddingTop: 3,
                                contentPaddingBottom: 6,
                                contentPaddingRight: 7,
                                contentPaddingLeft: 3
                            });
                            this.AllianzinfoFenster.add(this.AllianzinfoTab);
 
                            // Tab 1
                            this.AllianzinfoPOIsPage = new qx.ui.tabview.Page("POIs");
                            this.AllianzinfoPOIsPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoPOIsPage);
                            this.AllianzinfoPOIsVBox = new qx.ui.container.Composite();
                            this.AllianzinfoPOIsVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoPOIsVBox.setThemedPadding(10);
                            this.AllianzinfoPOIsVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoPOIsPage.add(this.AllianzinfoPOIsVBox);
 
                            // Tab 2
                            this.AllianzinfoRechtePage = new qx.ui.tabview.Page("Rechte");
                            this.AllianzinfoRechtePage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoRechtePage);
                            this.AllianzinfoRechteVBox = new qx.ui.container.Composite();
                            this.AllianzinfoRechteVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoRechteVBox.setThemedPadding(10);
                            this.AllianzinfoRechteVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoRechtePage.add(this.AllianzinfoRechteVBox);
 
                            // Tab 3
                            this.AllianzinfoPOIlvlPage = new qx.ui.tabview.Page("POI-Daten (NewEco)");
                            this.AllianzinfoPOIlvlPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoPOIlvlPage);
                            this.AllianzinfoPOIlvlVBox = new qx.ui.container.Composite();
                            this.AllianzinfoPOIlvlVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoPOIlvlVBox.setThemedPadding(10);
                            this.AllianzinfoPOIlvlVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoPOIlvlPage.add(this.AllianzinfoPOIlvlVBox);
 
                            // Tab 4
                            this.AllianzinfoPOIlvlOldPage = new qx.ui.tabview.Page("POI-Daten (OldEco)");
                            this.AllianzinfoPOIlvlOldPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoPOIlvlOldPage);
                            this.AllianzinfoPOIlvlOldVBox = new qx.ui.container.Composite();
                            this.AllianzinfoPOIlvlOldVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoPOIlvlOldVBox.setThemedPadding(10);
                            this.AllianzinfoPOIlvlOldVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoPOIlvlOldPage.add(this.AllianzinfoPOIlvlOldVBox);
 
                            //Tab 5
                            this.AllianzinfoPOIDetailPage = new qx.ui.tabview.Page("POIs im Detail");
                            this.AllianzinfoPOIDetailPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoPOIDetailPage);
                            this.AllianzinfoPOIDetailVBox = new qx.ui.container.Composite();
                            this.AllianzinfoPOIDetailVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoPOIDetailVBox.setThemedPadding(10);
                            this.AllianzinfoPOIDetailVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoPOIDetailPage.add(this.AllianzinfoPOIDetailVBox);
 
                            //Tab 6
                            this.AllianzinfoBasenPage = new qx.ui.tabview.Page("Basen");
                            this.AllianzinfoBasenPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoBasenPage);
                            this.AllianzinfoBasenVBox = new qx.ui.container.Composite();
                            this.AllianzinfoBasenVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoBasenVBox.setThemedPadding(10);
                            this.AllianzinfoBasenVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoBasenPage.add(this.AllianzinfoBasenVBox);
 
                            //Tab 7
                            this.AllianzinfoKontaktPage = new qx.ui.tabview.Page("Kontakt");
                            this.AllianzinfoKontaktPage.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoTab.add(this.AllianzinfoKontaktPage);
                            this.AllianzinfoKontaktVBox = new qx.ui.container.Composite();
                            this.AllianzinfoKontaktVBox.setLayout(new qx.ui.layout.VBox(5));
                            this.AllianzinfoKontaktVBox.setThemedPadding(10);
                            this.AllianzinfoKontaktVBox.setThemedBackgroundColor("#eef");
                            this.AllianzinfoKontaktPage.add(this.AllianzinfoKontaktVBox);
 
                            this.AllianzinfoButton = new qx.ui.form.Button("<b>" + AICLASS + "</b>",AIIMAGESMALL).set({
                                toolTipText: "Öffnen: " + AICLASS + " " + AIVERSION + "",
                                width: 115,
                                height: 32,
                                maxWidth: 115,
                                maxHeight: 32,
                                center: true,
                                rich: true
                            });
                            this.AllianzinfoButton.addListener("click", function (e) {
                                this.AllianzinfoPOIsVBox.removeAll();
                                this.AllianzinfoRechteVBox.removeAll();
                                this.AllianzinfoPOIlvlVBox.removeAll();
                                this.AllianzinfoPOIlvlOldVBox.removeAll();
                                this.AllianzinfoPOIDetailVBox.removeAll();
                                this.AllianzinfoBasenVBox.removeAll();
                                this.AllianzinfoKontaktVBox.removeAll();
                                this.showAllianzinfo();
                                this.AllianzinfoFenster.show();
                            }, this);
                            this.app = qx.core.Init.getApplication();
                            this.app.getDesktop().add(this.AllianzinfoButton, {
                                right: 125,
                                top: 0
                            });
                        },
                        showAllianzinfo: function (ev) {
                            try {
                                var t_start, t_end;
                                t_start = new Date().getTime();
                                var AllianzID = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id();
                                if(AllianzID > 0) {
                                    var allianceRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Rank();
                                    var AllianzName = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Name();
                                    var TotalScore = ClientLib.Data.MainData.GetInstance().get_Alliance().get_TotalScore();
                                    var AverageScore = ClientLib.Data.MainData.GetInstance().get_Alliance().get_AverageScore();
                                }
                                else {
                                    var allianceRank = "--";
                                    var AllianzName = "--";
                                    var TotalScore = "--";
                                    var AverageScore = "--";
                                }
                                var factionArt = new Array("", "GDI", "NOD");
                                var ScorePoints = ClientLib.Data.MainData.GetInstance().get_Player().get_ScorePoints();
 
                                var GeneralField1 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
                                GeneralField1.add(new qx.ui.basic.Label("<br><big><u><b>Allianzinformationen</b></u></big>").set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Label("").set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Atom("<b>Allianzname:</b> " + AllianzName).set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Atom("<b>Rang:</b> " + allianceRank.toLocaleString()).set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Atom("<b>Gesamtpunktzahl:</b> " + TotalScore.toLocaleString()).set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Atom("<b>Punktedurchschnitt:</b> " + AverageScore.toLocaleString()).set({rich: true}));
                                GeneralField1.add(new qx.ui.basic.Atom("<b>Eigene Punktzahl:</b> " + ScorePoints.toLocaleString()).set({rich: true}));
 
                                var Beschreibung_P_S = "<b>P_S</b>: Das ist die aktuelle Punkteanzahl.";
                                var Beschreibung_P_T = "<b>P_T</b>: Das ist die Punktzahl, welche insgesamt benötigt wird, um die aktuelle Bonusstufe zu erreichen.";
                                var Beschreibung_N_T = "<b>N_T</b>: Das ist die Punktzahl, welche insgesamt benötigt wird, um die nächste Bonusstufe zu erreichen.";
                                var Beschreibung_B_P = "<b>B_P</b>: Das ist die Punktzahl, die man verlieren kann, ohne die aktuelle Bonusstufe zu verlieren.";
                                var Beschreibung_NeP = "<b>NeP</b>: Das ist die Punktzahl, welche benötigt wird, um die nächste Bonusstufe zu erreichen.";
                                var Beschreibung_PL = "<b>PL</b>: Das ist der größtmögliche POI, den man verlieren kann, ohne die aktuelle Bonusstufe zu verlieren.";
                                var Beschreibung_PG = "<b>PG</b>: Das ist der kleinstmögliche POI, den man einnehmen muss, um die nächste Bonusstufe zu erreichen.";
                                var Beschreibung_PP = "<b>PP</b>: Das ist der Vorsprung an Punkten gegenüber der Ranglistenmäßig hinter einem platzierten Allianz.";
                                var Beschreibung_NP = "<b>NP</b>: Das ist der Rückstand an Punkten gegenüber der Ranglistenmäßig vor einem platzierten Allianz.";
                                var Beschreibung_P_P = "<b>P_P</b>: Das ist der größtmögliche POI, den man verlieren kann, ohne den aktuellen Ranglistenplatz zu verlieren.";
                                var Beschreibung_N_P = "<b>N_P</b>: Das ist der kleinstmögliche POI, den man einnehmen muss, um den nächsten Ranglistenplatz zu erreichen.";
                                var Beschreibung_Bon = "<b>Bon</b>: Das ist der aktuelle Bonus.";
                                var Beschreibung_R = "<b>R</b>: Das ist die aktuelle Ranglistenplazierung.";
                                var Beschreibung_n_v_ = '<b>n.v.</b>: Wenn ihr bereits in der Rangliste auf Platz 1 steht, wird euch bei "NP" und bei "N_P" "n.v." angezeigt,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;da es keinen besseren Ranglistenplatz gibt.';
                                var Beschreibung_zu_gross = '<b>zu groß</b>: Das wird angezeigt, wenn die Punktzahl bei "PG" oder "N_P"größer als 25M ist.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weil dann reicht ein POI nicht aus, um den nächsten Ranglistenplatz zu erreichen.';
 
                                var GeneralField2 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
                                GeneralField2.add(new qx.ui.basic.Label("<br><big><u><b>Legende</b></u></big>").set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Label("").set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_P_S).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_P_T).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_N_T).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_B_P).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_NeP).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_PL).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_PG).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_PP).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_NP).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_P_P).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_N_P).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_Bon).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_R).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_n_v_).set({rich: true}));
                                GeneralField2.add(new qx.ui.basic.Atom(Beschreibung_zu_gross).set({rich: true}));
 
                                var GeneralField6 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                GeneralField6.add(new qx.ui.basic.Label("<big><u><b>POIs im Detail</b></u></big>").set({rich: true}));
                                GeneralField6.add(new qx.ui.basic.Label("").set({rich: true}));
                                var POIDetail = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var POITib = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POITib.add(new qx.ui.basic.Label("<b>Tiberium</b>").set({rich: true, alignX: "center"}));
                                var POICry = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POICry.add(new qx.ui.basic.Label("<b>Kristall</b>").set({rich: true, alignX: "center"}));
                                var POIPow = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POIPow.add(new qx.ui.basic.Label("<b>Energie</b>").set({rich: true, alignX: "center"}));
                                var POIInf = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POIInf.add(new qx.ui.basic.Label("<b>Infantrie</b>").set({rich: true, alignX: "center"}));
                                var POIVeh = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POIVeh.add(new qx.ui.basic.Label("<b>Fahrzeuge</b>").set({rich: true, alignX: "center"}));
                                var POIAir = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POIAir.add(new qx.ui.basic.Label("<b>Luft</b>").set({rich: true, alignX: "center"}));
                                var POIDef = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                POIDef.add(new qx.ui.basic.Label("<b>Defensive</b>").set({rich: true, alignX: "center"}));
                                POIDetail.add(POITib);
                                POIDetail.add(POICry);
                                POIDetail.add(POIPow);
                                POIDetail.add(POIInf);
                                POIDetail.add(POIVeh);
                                POIDetail.add(POIAir);
                                POIDetail.add(POIDef);
                                var i = 0;
                                var OwnedPOIs = ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs();
                                for (var key in OwnedPOIs) {
                                    i++;
                                    var o = OwnedPOIs[key];
                                    var Tier = o.t;
                                    var Level = o.l;
                                    if (Tier == 2) {
                                        POITib.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 3) {
                                        POICry.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 4) {
                                        POIPow.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 5) {
                                        POIInf.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 6) {
                                        POIVeh.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 7) {
                                        POIAir.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                    if (Tier == 8) {
                                        POIDef.add(new qx.ui.basic.Label(Level).set({rich: true}));
                                    }
                                }
 
                                var GeneralField5 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                GeneralField5.add(new qx.ui.basic.Label("<big><u><b>Überblick über die Basen</b></u></big>").set({rich: true}));
                                GeneralField5.add(new qx.ui.basic.Label("").set({rich: true}));
                                var Basen = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var BasenName = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenName.add(new qx.ui.basic.Label("<b>Name</b>").set({rich: true, alignX: "center"}));
                                var BasenBauhof = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenBauhof.add(new qx.ui.basic.Label("<b>Bauhof</b>").set({rich: true, alignX: "center"}));
                                var BasenBase = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenBase.add(new qx.ui.basic.Label("<b>Level</b>").set({rich: true, alignX: "center"}));
                                var BasenOffensive = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenOffensive.add(new qx.ui.basic.Label("<b>Offensive</b>").set({rich: true, alignX: "center"}));
                                var BasenDefensive = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenDefensive.add(new qx.ui.basic.Label("<b>Defensive</b>").set({rich: true, alignX: "center"}));
                                var BasenVE = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenVE.add(new qx.ui.basic.Label("<b>VE</b>").set({rich: true, alignX: "center"}));
                                var BasenSupport = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenSupport.add(new qx.ui.basic.Label("<b>Support</b>").set({rich: true, alignX: "center"}));
                                var BasenTiberium = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenTiberium.add(new qx.ui.basic.Label("<b>Tiberium</b>").set({rich: true, alignX: "center"}));
                                var BasenCrystal = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenCrystal.add(new qx.ui.basic.Label("<b>Kristall</b>").set({rich: true, alignX: "center"}));
                                var BasenPower = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenPower.add(new qx.ui.basic.Label("<b>Energie</b>").set({rich: true, alignX: "center"}));
                                var BasenCredits = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BasenCredits.add(new qx.ui.basic.Label("<b>Credits</b>").set({rich: true, alignX: "center"}));
                                Basen.add(BasenName);
                                Basen.add(BasenBauhof);
                                Basen.add(BasenBase);
                                Basen.add(BasenOffensive);
                                Basen.add(BasenDefensive);
                                Basen.add(BasenVE);
                                Basen.add(BasenSupport);
                                Basen.add(BasenTiberium);
                                Basen.add(BasenCrystal);
                                Basen.add(BasenPower);
                                Basen.add(BasenCredits);
                                var apcl = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
                                var i = 0;
                                var GesamtTiberium = 0;
                                var GesamtCrystal = 0;
                                var GesamtPower = 0;
                                var GesamtCredits = 0;
                                var LvLBau = 0;
                                var LvLBaseL = 0;
                                var LvLOff = 0;
                                var LvLDef = 0;
                                var LvLVE = 0;
                                var LvLSup = 0;
                                for (var key in apcl) {
                                    i++;
                                    var c = apcl[key];
                                    var VE_lvl = null;
                                    var Name = c.get_Name();
                                    BasenName.add(new qx.ui.basic.Label(Name.toString()).set({rich: true}));
                                    var LvlBauhof = c.get_ConstructionYardLevel();
                                    BasenBauhof.add(new qx.ui.basic.Label(LvlBauhof.toString()).set({rich: true}));
                                    var LvLBau = LvLBau + LvlBauhof;
                                    var LvlBase = c.get_LvlBase().toFixed(2);
                                    BasenBase.add(new qx.ui.basic.Label(LvlBase.toString()).set({rich: true}));
                                    var LvlOffense = c.get_LvlOffense().toFixed(2);
                                    BasenOffensive.add(new qx.ui.basic.Label(LvlOffense.toString()).set({rich: true}));
                                    var LvlDefense = c.get_LvlDefense().toFixed(2);
                                    BasenDefensive.add(new qx.ui.basic.Label(LvlDefense.toString()).set({rich: true}));
                                    unitData = c.get_CityBuildingsData();
                                    ve = unitData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_Facility);
                                    if (ve !== null) {
                                        VE_lvl = ve.get_CurrentLevel();
                                        LvLVE += ve.get_CurrentLevel();
                                    }
                                    else {
                                        VE_lvl = '<font color="#ff0000"><b>0</b></font>';
                                    }
                                    BasenVE.add(new qx.ui.basic.Label(VE_lvl).set({rich: true}));
                                    LvLBaseL = LvLBaseL + c.get_LvlBase();
                                    if (LvLDef !== null) {
                                        LvLDef += c.get_LvlDefense();
                                    }
                                    if (c.get_LvlOffense() > LvLOff) {
                                        var LvLOff = c.get_LvlOffense();
                                    }
                                    if (c.get_SupportData() !== null) {
                                        var LvlSupport = c.get_SupportData().get_Level().toString();
                                        var SupArt = c.get_SupportWeapon().n.replace(/NOD_SUPPORT_/gi,"").replace(/GDI_SUPPORT_/gi,"").replace(/FOR_SUPPORT_/gi,"");
                                        var LvLSup = LvLSup + c.get_SupportData().get_Level();
                                    }
                                    else {
                                        var LvlSupport = '<font color="#ff0000"><b>KEINE</b></font>'.toString();
                                    }
                                    if (c.get_SupportData() !== null) {
                                        BasenSupport.add(new qx.ui.basic.Label(LvlSupport + " " + SupArt).set({rich: true}));
                                    }
                                    else {
                                        BasenSupport.add(new qx.ui.basic.Label(LvlSupport).set({rich: true}));
                                    }
                                    var TiberiumproStunde = parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium) + ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Tiberium));
                                    BasenTiberium.add(new qx.ui.basic.Label(TiberiumproStunde.toLocaleString()).set({rich: true}));
                                    var CrystalproStunde = parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal) + ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Crystal));
                                    BasenCrystal.add(new qx.ui.basic.Label(CrystalproStunde.toLocaleString()).set({rich: true}));
                                    var PowerproStunde = parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power) + ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power));
                                    BasenPower.add(new qx.ui.basic.Label(PowerproStunde.toLocaleString()).set({rich: true}));
                                    var CreditsproStunde = parseInt(ClientLib.Base.Resource.GetResourceGrowPerHour(c.get_CityCreditsProduction(), false) + ClientLib.Base.Resource.GetResourceBonusGrowPerHour(c.get_CityCreditsProduction(), false));
                                    BasenCredits.add(new qx.ui.basic.Label(CreditsproStunde.toLocaleString()).set({rich: true}));
                                    var GesamtTiberium = GesamtTiberium + TiberiumproStunde;
                                    var GesamtCrystal = GesamtCrystal + CrystalproStunde;
                                    var GesamtPower = GesamtPower + PowerproStunde;
                                    var GesamtCredits = GesamtCredits + CreditsproStunde;
                                }
                                var BauD = 0
                                BauD = LvLBau / i;
                                var BaseD = 0;
                                BaseD = LvLBaseL / i;
                                var DefD = 0;
                                DefD = LvLDef / i;
                                var VED = 0;
                                VED = LvLVE / i;
                                var SupD = 0;
                                SupD = LvLSup / i;
                                var BasesCount = i;
                                BasenName.add(new qx.ui.basic.Label("<b>Gesamt</b>".toString()).set({rich: true}));
                                BasenBauhof.add(new qx.ui.basic.Label(BauD.toFixed(2)).set({rich: true}));
                                BasenBase.add(new qx.ui.basic.Label(BaseD.toFixed(2)).set({rich: true}));
                                BasenOffensive.add(new qx.ui.basic.Label(LvLOff.toFixed(2)).set({rich: true}));
                                BasenDefensive.add(new qx.ui.basic.Label(DefD.toFixed(2)).set({rich: true}));
                                BasenVE.add(new qx.ui.basic.Label(VED.toFixed(2)).set({rich: true}));
                                BasenSupport.add(new qx.ui.basic.Label(SupD.toFixed(2)).set({rich: true/*, alignX: "right"*/}));
                                BasenTiberium.add(new qx.ui.basic.Label(GesamtTiberium.toLocaleString()).set({rich: true}));
                                BasenCrystal.add(new qx.ui.basic.Label(GesamtCrystal.toLocaleString()).set({rich: true}));
                                BasenPower.add(new qx.ui.basic.Label(GesamtPower.toLocaleString()).set({rich: true}));
                                BasenCredits.add(new qx.ui.basic.Label(GesamtCredits.toLocaleString()).set({rich: true}));
 
                                var PlayerName = ClientLib.Data.MainData.GetInstance().get_Player().get_Name();
                                var WorldId = ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId();
                                var ServerName = ClientLib.Data.MainData.GetInstance().get_Server().get_Name();
                                var OverallRank = ClientLib.Data.MainData.GetInstance().get_Player().get_OverallRank();
                                var ResearchPoints = ClientLib.Data.MainData.GetInstance().get_Player().get_ResearchPoints();
                                var Credits = ClientLib.Data.MainData.GetInstance().get_Player().get_Credits().Base;
                                var Funds = ClientLib.Data.MainData.GetInstance().get_Inventory().get_PlayerFunds();
 
                                var GeneralField3 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
                                GeneralField3.add(new qx.ui.basic.Label("<br><big><u><b>Kontakt</b></u></big>").set({rich: true}));
                                GeneralField3.add(new qx.ui.basic.Label("").set({rich: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Name:</b> " + AICLASS).set({rich: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Version:</b> " + AIVERSION).set({rich: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Ersteller:</b> " + AIAUTHOR).set({rich: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Webseite:</b> <a href='" + AIHOMEPAGE + "' target='_blank'>" + AIHOMEPAGE + "</a>").set({rich: true, selectable: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Download:</b> <a href='" + AIDOWNLOAD + "' target='_blank'>" + AIDOWNLOAD + "</a>").set({rich: true, selectable: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>Lokale Statistik:</b> <a href='" + AIDOWNLOADSTATS + "' target='_blank'>" + AIDOWNLOADSTATS + "</a>").set({rich: true, selectable: true}));
                                GeneralField3.add(new qx.ui.basic.Atom("<b>E-Mail:</b> <a href='mailto:" + AICONTACT + "?subject=AllianzInfo%20InGame%20Kontakt&amp;body=Hi, mein InGame-Name ist " + ClientLib.Data.MainData.GetInstance().get_Player().get_Name().toString() + ".' target='_blank'>" + AICONTACT + "</a>").set({rich: true, selectable: true}));
 
                                var GeneralField4 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
                                GeneralField4.add(new qx.ui.basic.Label("<br><big><u><b>FAQs / Weitere Informationen</b></u></big>").set({rich: true}));
                                GeneralField4.add(new qx.ui.basic.Label("").set({rich: true}));
                                GeneralField4.add(new qx.ui.basic.Atom("<b>Besuche die Homepage:</b> <a href='" + AIHOMEPAGE + "' target='_blank'>" + AIHOMEPAGE + "</a>").set({rich: true}));
 
                                var field1 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field1.add(new qx.ui.basic.Label("<big><u><b>Allianzbonus</b></u></big>").set({rich: true}));
                                field1.add(new qx.ui.basic.Label("").set({rich: true}));
 
                                var field2 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field2.add(new qx.ui.basic.Label("<big><u><b>Informationen über die Rechtevergabe</b></u></big>").set({rich: true}));
                                field2.add(new qx.ui.basic.Label("").set({rich: true}));
 
                                var field3 = new qx.ui.container.Composite(new qx.ui.layout.HBox(50).set({alignX: "center"}));
                                var field4 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field4.add(new qx.ui.basic.Label("<big><u><b>POI-Level - Punkte</b></u></big>").set({rich: true}));
                                field4.add(new qx.ui.basic.Label("").set({rich: true}));
                                var field5 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field5.add(new qx.ui.basic.Label("<big><u><b>Bonusstufen</b></u></big>").set({rich: true}));
                                field5.add(new qx.ui.basic.Label("Kb = Kampfbonus in %").set({rich: true}));
                                var field6 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field6.add(new qx.ui.basic.Label("<big><u><b>Multiplikator</b></u></big>").set({rich: true}));
                                field6.add(new qx.ui.basic.Label("").set({rich: true}));
                                field3.add(field4);
                                field3.add(field5);
                                field3.add(field6);
 
                                var field10 = new qx.ui.container.Composite(new qx.ui.layout.HBox(50).set({alignX: "center"}));
                                var field7 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field7.add(new qx.ui.basic.Label("<big><u><b>POI-Level - Punkte</b></u></big>").set({rich: true}));
                                field7.add(new qx.ui.basic.Label("").set({rich: true}));
                                var field8 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field8.add(new qx.ui.basic.Label("<big><u><b>Bonusstufen</b></u></big>").set({rich: true}));
                                field8.add(new qx.ui.basic.Label("Kb = Kampfbonus in %").set({rich: true}));
                                var field9 = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                field9.add(new qx.ui.basic.Label("<big><u><b>Multiplikator</b></u></big>").set({rich: true}));
                                field9.add(new qx.ui.basic.Label("").set({rich: true}));
                                field10.add(field7);
                                field10.add(field8);
                                field10.add(field9);
 
                                var Recht = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                if (AllianzID > 0) {
                                    var Frage = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                    var Antwort = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "left"}));
                                    Frage.add(new qx.ui.basic.Label("<b>Allianzrolle</b>:").set({rich: true}));
                                    var Rolle = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CurrentMemberRoleInfo().Name;
                                    Antwort.add(new qx.ui.basic.Label(Rolle).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Wie viele Mitglieder hat die Allianz?</b>").set({rich: true}));
                                    var NumMembers = ClientLib.Data.MainData.GetInstance().get_Alliance().get_NumMembers();
                                    Antwort.add(new qx.ui.basic.Label(NumMembers.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Wie viele (O)BHs hat die Allianz?</b>").set({rich: true}));
                                    var NumAdmins = ClientLib.Data.MainData.GetInstance().get_Alliance().get_NumAdmins();
                                    Antwort.add(new qx.ui.basic.Label(NumAdmins.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich Berichte anderer Member anschauen?</b>").set({rich: true}));
                                    var CanViewMemberReports = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanViewMemberReports();
                                    if (true===CanViewMemberReports) {var CanViewMemberReports="ja";}
                                    else if (false===CanViewMemberReports) {var CanViewMemberReports="nein";}
                                    else {var CanViewMemberReports="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanViewMemberReports.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich auf geteilte Allianzforen zugreifen?</b>").set({rich: true}));
                                    var CanAccessAllianceForums = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanAccessAllianceForums();
                                    if (true===CanAccessAllianceForums) {var CanAccessAllianceForums="ja";}
                                    else if (false===CanAccessAllianceForums) {var CanAccessAllianceForums="nein";}
                                    else {var CanAccessAllianceForums="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanAccessAllianceForums.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich Unterforen erstellen, bearbeiten oder löschen?</b>").set({rich: true}));
                                    var CanCreateForum = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanCreateForum();
                                    if (true===CanCreateForum) {var CanCreateForum="ja";}
                                    else if (false===CanCreateForum) {var CanCreateForum="nein";}
                                    else {var CanCreateForum="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanCreateForum.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich das Allianzforum moderieren?</b>").set({rich: true}));
                                    var CanModerate = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanModerate();
                                    if (true===CanModerate) {var CanModerate="ja";}
                                    else if (false===CanModerate) {var CanModerate="nein";}
                                    else {var CanModerate="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanModerate.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich Abonnements für andere Mitglieder erzwingen?</b>").set({rich: true}));
                                    var CanForceForumSubscriptions = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanForceForumSubscriptions();
                                    if (true===CanForceForumSubscriptions) {var CanForceForumSubscriptions="ja";}
                                    else if (false===CanForceForumSubscriptions) {var CanForceForumSubscriptions="nein";}
                                    else {var CanForceForumSubscriptions="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanForceForumSubscriptions.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich einen Thread im Rekrutierungsforum erstellen?</b>").set({rich: true}));
                                    var CanStartLFMThreads = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanStartLFMThreads();
                                    if (true===CanStartLFMThreads) {var CanStartLFMThreads="ja";}
                                    else if (false===CanStartLFMThreads) {var CanStartLFMThreads="nein";}
                                    else {var CanStartLFMThreads="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanStartLFMThreads.toString()).set({rich: true}));
                                    Frage.add(new qx.ui.basic.Label("<b>Darf ich einladen?</b>").set({rich: true}));
                                    var CanInvite = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanInvite();
                                    if (true===CanInvite) {var CanInvite="ja";}
                                    else if (false===CanInvite) {var CanInvite="nein";}
                                    else {var CanInvite="Fehler";}
                                    Antwort.add(new qx.ui.basic.Label(CanInvite.toString()).set({rich: true}));
                                    var PlayerSubstitution = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted();
                                    if (!PlayerSubstitution) {
                                        Frage.add(new qx.ui.basic.Label("<b>Darf ich kicken?</b>").set({rich: true}));
                                        var CanKick = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanKick();
                                        if (true===CanKick) {var CanKick="ja";}
                                        else if (false===CanKick) {var CanKick="nein";}
                                        else {var CanKick="Fehler";}
                                        Antwort.add(new qx.ui.basic.Label(CanKick.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<b>Darf ich die Diplomatie bearbeiten?</b>").set({rich: true}));
                                        var CanRepresent = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanRepresent();
                                        if (true===CanRepresent) {var CanRepresent="ja";}
                                        else if (false===CanRepresent) {var CanRepresent="nein";}
                                        else {var CanRepresent="Fehler";}
                                        Antwort.add(new qx.ui.basic.Label(CanRepresent.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<b>Darf ich die Rechte der Mitglieder bearbeiten?</b>").set({rich: true}));
                                        var CanEditRights = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanEditRights();
                                        if (true===CanEditRights) {var CanEditRights="ja";}
                                        else if (false===CanEditRights) {var CanEditRights="nein";}
                                        else {var CanEditRights="Fehler";}
                                        Antwort.add(new qx.ui.basic.Label(CanEditRights.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<b>Darf ich Rechte niedrigerer Mitglieder bearbeiten?</b>").set({rich: true}));
                                        var CanPromoteLowerRoles = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanPromoteLowerRoles();
                                        if (true===CanPromoteLowerRoles) {var CanPromoteLowerRoles="ja";}
                                        else if (false===CanPromoteLowerRoles) {var CanPromoteLowerRoles="nein";}
                                        else {var CanPromoteLowerRoles="Fehler";}
                                        Antwort.add(new qx.ui.basic.Label(CanPromoteLowerRoles.toString()).set({rich: true}));
                                    }
                                    else {
                                        Frage.add(new qx.ui.basic.Label('<font color="#ff0000">Du spielst diesen Account nur in Vertretung!</font>').set({rich: true}));
                                        Antwort.add(new qx.ui.basic.Label("".toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<s><b>Darf ich kicken?</b></s>").set({rich: true}));
                                        var CanKick = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanKick();
                                        if (true===CanKick) {var CanKick="<s>ja</s>";}
                                        else if (false===CanKick) {var CanKick="<s>nein</s>";}
                                        else {var CanKick="<s>Fehler</s>";}
                                        Antwort.add(new qx.ui.basic.Label(CanKick.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<s><b>Darf ich die Diplomatie bearbeiten?</b></s>").set({rich: true}));
                                        var CanRepresent = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanRepresent();
                                        if (true===CanRepresent) {var CanRepresent="<s>ja</s>";}
                                        else if (false===CanRepresent) {var CanRepresent="<s>nein</s>";}
                                        else {var CanRepresent="<s>Fehler</s>";}
                                        Antwort.add(new qx.ui.basic.Label(CanRepresent.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<s><b>Darf ich die Rechte der Mitglieder bearbeiten?</b></s>").set({rich: true}));
                                        var CanEditRights = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanEditRights();
                                        if (true===CanEditRights) {var CanEditRights="<s>ja</s>";}
                                        else if (false===CanEditRights) {var CanEditRights="<s>nein</s>";}
                                        else {var CanEditRights="<s>Fehler</s>";}
                                        Antwort.add(new qx.ui.basic.Label(CanEditRights.toString()).set({rich: true}));
                                        Frage.add(new qx.ui.basic.Label("<s><b>Darf ich Rechte niedrigerer Mitglieder bearbeiten?</b></s>").set({rich: true}));
                                        var CanPromoteLowerRoles = ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanPromoteLowerRoles();
                                        if (true===CanPromoteLowerRoles) {var CanPromoteLowerRoles="<s>ja</s>";}
                                        else if (false===CanPromoteLowerRoles) {var CanPromoteLowerRoles="<s>nein</s>";}
                                        else {var CanPromoteLowerRoles="<s>Fehler</s>";}
                                        Antwort.add(new qx.ui.basic.Label(CanPromoteLowerRoles.toString()).set({rich: true}));
                                    }
                                    Recht.add(Frage);
                                    Recht.add(Antwort);
                                }
                                else {
                                    var RechtNoAlly = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                    RechtNoAlly.add(new qx.ui.basic.Label("Du bist keiner Allianz beigetreten.").set({rich: true}));
                                    Recht.add(RechtNoAlly);
                                }
 
                                var POIArray = [0, 1, 3, 6, 10, 15, 25, 40, 65, 100,
                                                150, 250, 400, 650, 1000, 1500, 2500, 4000, 6500, 10000,
                                                15000, 25000, 40000, 65000, 100000, 150000, 250000, 400000, 650000, 1000000,
                                                1500000, 2500000, 4000000, 6500000, 10000000, 15000000, 25000000, "zu groß"];
 
                                var SPOIArray = [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, "zu groß"];
 
                                var TierArrayNew = [0, 1, 5, 15, 50, 150, 500, 1200, 2500, 4000,
                                                    7000, 11000, 18000, 27000, 42000, 70000, 120000, 190000, 300000, 450000,
                                                    750000, 1200000, 2000000, 3000000, 4500000, 7000000, 11000000, 17000000, 25000000, 35000000,
                                                    47000000, 70000000, 140000000, 230000000, 310000000, 465000000, 1000000000, 1500000000, 2250000000, 3375000000,
                                                    "n.v."];
 
                                var TierArrayOld = [0, 1, 4, 9, 16, 27, 50, 90, 160, 260,
                                                    420, 750, 1300, 2200, 3600, 5700, 9700, 16400, 28000, 44000,
                                                    68000, 115000, 190000, 330000, 510000, 800000, 1350000, 2200000, 3600000, 6000000,
                                                    9000000, 15000000, 25000000, 42000000, 65000000, 100000000, 165000000, 270000000, 450000000, 700000000,
                                                    "n.v."];
 
                                if (WorldId >= 220) {var TierArray = TierArrayNew;}
                                else if (WorldId < 220) {var TierArray = TierArrayOld;}
 
                                var ResArrayNew = [0, 3400, 5000, 6800, 8000, 10000, 13000, 17000, 20000, 26000,
                                                   33000, 42000, 52000, 66000, 85000, 110000, 135000, 170000, 210000, 260000,
                                                   320000, 400000, 500000, 625000, 770000, 960000, 1200000, 1500000, 1850000, 2300000,
                                                   2900000, 3600000, 4500000, 5600000, 7000000, 8700000, 10080000, 13500000, 17000000, 21000000];
 
                                var ResArrayOld = [0, 1200, 2000, 3000, 4000, 5500, 7000, 8500, 10000, 12000,
                                                   15000, 18000, 22000, 26000, 30000, 36000, 45000, 60000, 80000, 105000,
                                                   135000, 170000, 215000, 270000, 330000, 400000, 480000, 580000, 700000, 830000,
                                                   1000000, 1200000, 1450000, 1770000, 2200000, 2700000, 3300000, 4000000, 4800000, 5600000];
 
                                if (WorldId >= 220) {var ResArray = ResArrayNew;}
                                else if (WorldId < 220) {var ResArray = ResArrayOld;}
 
                                var FightArray = [0, 5, 10, 14, 17, 20, 23, 26, 29, 32,
                                                  35, 38, 41, 44, 47, 50, 53, 56, 58, 60,
                                                  62, 64, 66, 68, 70, 72, 74, 76 ,78 ,80,
                                                  82, 84, 86, 88, 90, 92, 94, 96, 98, 100];
 
                                var RangArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
 
                                var ProzentArray = [0, 100, 90, 85, 80, 76, 72, 68, 64, 60,
                                                    57, 54, 51, 48, 45, 42, 39, 36, 33, 30,
                                                    28, 26, 24, 22, 20, 18, 16, 14, 13, 12,
                                                    11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
 
                                var LevelScore = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var Level = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var Score = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                Level.add(new qx.ui.basic.Label("<b>POI-Level</b>").set({rich: true}));
                                Score.add(new qx.ui.basic.Label("<b>Punkte</b>").set({rich: true}));
                                for (var i = 1; i <= 36; i++) {
                                    Level.add(new qx.ui.basic.Label(SPOIArray[i].toLocaleString()).set({rich: true}));
                                    Score.add(new qx.ui.basic.Label(POIArray[i].toLocaleString()).set({rich: true}));
                                }
                                LevelScore.add(Level);
                                LevelScore.add(Score);
 
                                var LevelScoreOld = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var LevelOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var ScoreOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                LevelOld.add(new qx.ui.basic.Label("<b>POI-Level</b>").set({rich: true}));
                                ScoreOld.add(new qx.ui.basic.Label("<b>Punkte</b>").set({rich: true}));
                                for (var i = 1; i <= 36; i++) {
                                    LevelOld.add(new qx.ui.basic.Label(SPOIArray[i].toLocaleString()).set({rich: true}));
                                    ScoreOld.add(new qx.ui.basic.Label(POIArray[i].toLocaleString()).set({rich: true}));
                                }
                                LevelScoreOld.add(LevelOld);
                                LevelScoreOld.add(ScoreOld);
 
                                var BStufe = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var BPunkte = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var BRes = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var BFight = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BPunkte.add(new qx.ui.basic.Label("<b>Punkte</b>").set({rich: true}));
                                BRes.add(new qx.ui.basic.Label("<b>Ressourcen</b>").set({rich: true}));
                                BFight.add(new qx.ui.basic.Label("<b>Kb</b>").set({rich: true}));
                                for (i = 1; i <=39; i++) {
                                    BPunkte.add(new qx.ui.basic.Label(TierArrayNew[i].toLocaleString()).set({rich: true}));
                                    BRes.add(new qx.ui.basic.Label(ResArrayNew[i].toLocaleString()).set({rich: true}));
                                    BFight.add(new qx.ui.basic.Label(FightArray[i].toLocaleString()).set({rich: true}));
                                }
                                BStufe.add(BPunkte);
                                BStufe.add(BRes);
                                BStufe.add(BFight);
 
                                var BStufeOld = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var BPunkteOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var BResOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var BFightOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                BPunkteOld.add(new qx.ui.basic.Label("<b>Punkte</b>").set({rich: true}));
                                BResOld.add(new qx.ui.basic.Label("<b>Ressourcen</b>").set({rich: true}));
                                BFightOld.add(new qx.ui.basic.Label("<b>Kb</b>").set({rich: true}));
                                for (i = 1; i <=39; i++) {
                                    BPunkteOld.add(new qx.ui.basic.Label(TierArrayOld[i].toLocaleString()).set({rich: true}));
                                    BResOld.add(new qx.ui.basic.Label(ResArrayOld[i].toLocaleString()).set({rich: true}));
                                    BFightOld.add(new qx.ui.basic.Label(FightArray[i].toLocaleString()).set({rich: true}));
                                }
                                BStufeOld.add(BPunkteOld);
                                BStufeOld.add(BResOld);
                                BStufeOld.add(BFightOld);
 
                                var Multi = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var MRang = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var MProzent = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                MRang.add(new qx.ui.basic.Label("<b>Rang</b>").set({rich: true}));
                                MProzent.add(new qx.ui.basic.Label("<b>Prozent</b>").set({rich: true}));
                                for (i = 1; i <= 40; i++) {
                                    MRang.add(new qx.ui.basic.Label(RangArray[i].toLocaleString()).set({rich: true}));
                                    MProzent.add(new qx.ui.basic.Label(ProzentArray[i].toLocaleString()).set({rich: true}));
                                }
                                Multi.add(MRang);
                                Multi.add(MProzent);
 
                                var MultiOld = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var MRangOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                var MProzentOld = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                MRangOld.add(new qx.ui.basic.Label("<b>Rang</b>").set({rich: true}));
                                MProzentOld.add(new qx.ui.basic.Label("<b>Prozent</b>").set({rich: true}));
                                for (i = 1; i <= 40; i++) {
                                    MRangOld.add(new qx.ui.basic.Label(RangArray[i].toLocaleString()).set({rich: true}));
                                    MProzentOld.add(new qx.ui.basic.Label(ProzentArray[i].toLocaleString()).set({rich: true}));
                                }
                                MultiOld.add(MRangOld);
                                MultiOld.add(MProzentOld);
 
                                if (AllianzID > 0) {
                                    var TiberiumBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Tiberium);
                                    var CrystalBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Crystal);
                                    var PowerBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power);
                                    var InfantrieBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIInfantryBonus();
                                    var VehicleBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIVehicleBonus();
                                    var AirBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIAirBonus();
                                    var DefBonus = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIDefenseBonus();
                                    var ranks = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore();
                                    var ranktib = ranks[0].r;
                                    var rankcry = ranks[1].r;
                                    var rankpow = ranks[2].r;
                                    var rankinf = ranks[3].r;
                                    var rankveh = ranks[4].r;
                                    var rankair = ranks[5].r;
                                    var rankdef = ranks[6].r;
                                    var scoretib = ranks[0].s;
                                    var scorecry = ranks[1].s;
                                    var scorepow = ranks[2].s;
                                    var scoreinf = ranks[3].s;
                                    var scoreveh = ranks[4].s;
                                    var scoreair = ranks[5].s;
                                    var scoredef = ranks[6].s;
                                    var previoustib = ranks[0].ps;
                                    var previouscry = ranks[1].ps;
                                    var previouspow = ranks[2].ps;
                                    var previousinf = ranks[3].ps;
                                    var previousveh = ranks[4].ps;
                                    var previousair = ranks[5].ps;
                                    var previousdef = ranks[6].ps;
                                    var nexttib = ranks[0].ns;
                                    var nextcry = ranks[1].ns;
                                    var nextpow = ranks[2].ns;
                                    var nextinf = ranks[3].ns;
                                    var nextveh = ranks[4].ns;
                                    var nextair = ranks[5].ns;
                                    var nextdef = ranks[6].ns;
                                }
 
                                var POI = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({alignX: "center"}));
                                var POIKlasse = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                POIKlasse.add(new qx.ui.basic.Label("<b>POI-Klasse</b>").set({rich: true}));
                                var P_S = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                P_S.add(new qx.ui.basic.Label("<b>P_S</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_P_S}));
                                var P_T = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                P_T.add(new qx.ui.basic.Label("<b>P_T</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_P_T}));
                                var N_T = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                N_T.add(new qx.ui.basic.Label("<b>N_T</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_N_T}));
                                var B_P = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                B_P.add(new qx.ui.basic.Label("<b>B_P</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_B_P}));
                                var NeP = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                NeP.add(new qx.ui.basic.Label("<b>NeP</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_NeP}));
                                var PL = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                PL.add(new qx.ui.basic.Label("<b>PL</b>").set({rich: true, toolTipText: Beschreibung_PL}));
                                var PG = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                PG.add(new qx.ui.basic.Label("<b>PG</b>").set({rich: true, toolTipText: Beschreibung_PG}));
                                var PP = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                PP.add(new qx.ui.basic.Label("<b>PP</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_PP}));
                                var NP = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                NP.add(new qx.ui.basic.Label("<b>NP</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_NP}));
                                var P_P = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                P_P.add(new qx.ui.basic.Label("<b>P_P</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_P_P}));
                                var N_P = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "center"}));
                                N_P.add(new qx.ui.basic.Label("<b>N_P</b>").set({rich: true, toolTipText: Beschreibung_N_P}));
                                var Bonus = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                Bonus.add(new qx.ui.basic.Label("<b>Bon</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_Bon}));
                                var Rang = new qx.ui.container.Composite(new qx.ui.layout.VBox(1).set({alignX: "right"}));
                                Rang.add(new qx.ui.basic.Label("<b>R</b>").set({rich: true, alignX: "center", toolTipText: Beschreibung_R}));
                                POI.add(POIKlasse);
                                POI.add(P_S);
                                POI.add(P_T);
                                POI.add(N_T);
                                POI.add(B_P);
                                POI.add(NeP);
                                POI.add(PL);
                                POI.add(PG);
                                POI.add(PP);
                                POI.add(NP);
                                POI.add(P_P);
                                POI.add(N_P);
                                POI.add(Bonus);
                                POI.add(Rang);
                                POIKlasse.add(tiberium = new qx.ui.basic.Atom("Tiberium" + "", "webfrontend/ui/common/icn_res_tiberium.png").set({rich: true}));
                                tiberium.setToolTipIcon("webfrontend/ui/common/icn_res_tiberium.png");
                                tiberium.setToolTipText("Tiberium");
                                tiberium.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(chrystal = new qx.ui.basic.Atom("Kristall" + "", "webfrontend/ui/common/icn_res_chrystal.png").set({rich: true}));
                                chrystal.setToolTipIcon("webfrontend/ui/common/icn_res_chrystal.png");
                                chrystal.setToolTipText("Kristall");
                                chrystal.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(power = new qx.ui.basic.Atom("Strom" + "", "webfrontend/ui/common/icn_res_power.png").set({rich: true}));
                                power.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
                                power.setToolTipText("Strom");
                                power.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(squad = new qx.ui.basic.Atom("Infantrie" + "", "FactionUI/icons/icon_arsnl_off_squad.png").set({rich: true}));
                                squad.setToolTipIcon("FactionUI/icons/icon_arsnl_off_squad.png");
                                squad.setToolTipText("Infantrie");
                                squad.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(vehicle = new qx.ui.basic.Atom("Fahrzeug" + "", "FactionUI/icons/icon_arsnl_off_vehicle.png").set({rich: true}));
                                vehicle.setToolTipIcon("FactionUI/icons/icon_arsnl_off_vehicle.png");
                                vehicle.setToolTipText("Fahrzeug");
                                vehicle.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(plane = new qx.ui.basic.Atom("Flugzeug" + "", "FactionUI/icons/icon_arsnl_off_plane.png").set({rich: true}));
                                plane.setToolTipIcon("FactionUI/icons/icon_arsnl_off_plane.png");
                                plane.setToolTipText("Flugzeug");
                                plane.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                POIKlasse.add(def = new qx.ui.basic.Atom("Resonanz" + "", "FactionUI/icons/icon_def_army_points.png").set({rich: true}));
                                def.setToolTipIcon("FactionUI/icons/icon_def_army_points.png");
                                def.setToolTipText("Resonanz");
                                def.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                                if (AllianzID > 0) {
                                    P_S.add(new qx.ui.basic.Label(scoretib.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scorecry.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scorepow.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scoreinf.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scoreveh.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scoreair.toLocaleString()).set({rich: true, height: 18}));
                                    P_S.add(new qx.ui.basic.Label(scoredef.toLocaleString()).set({rich: true, height: 18}));
                                }
                                else {
                                    for (var i = 1; i <= 7; i++) {
                                        P_S.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                    }
                                }
 
                                if (AllianzID > 0) {
                                    var j = 39;
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scoretib && scoretib < TierArray[i]) {var ATierTib = TierArray[i-1]; var BTierTib = TierArray[i]; break;}
                                    }
                                    if (scoretib >= TierArray[39]) {var ATierTib = TierArray[39]; var BTierTib = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scorecry && scorecry < TierArray[i]) {var ATierCry = TierArray[i-1]; var BTierCry = TierArray[i]; break;}
                                    }
                                    if (scorecry >= TierArray[39]) {var ATierCry = TierArray[39]; var BTierCry = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scorepow && scorepow < TierArray[i]) {var ATierPow = TierArray[i-1]; var BTierPow = TierArray[i]; break;}
                                    }
                                    if (scorepow >= TierArray[39]) {var ATierPow = TierArray[39]; var BTierPow = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scoreinf && scoreinf < TierArray[i]) {var ATierInf = TierArray[i-1]; var BTierInf = TierArray[i]; break;}
                                    }
                                    if (scoreinf >= TierArray[39]) {var ATierInf = TierArray[39]; var BTierInf = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scoreveh && scoreveh < TierArray[i]) {var ATierVeh = TierArray[i-1]; var BTierVeh = TierArray[i]; break;}
                                    }
                                    if (scoreveh >= TierArray[39]) {var ATierVeh = TierArray[39]; var BTierVeh = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scoreair && scoreair < TierArray[i]) {var ATierAir = TierArray[i-1]; var BTierAir = TierArray[i]; break;}
                                    }
                                    if (scoreair >= TierArray[39]) {var ATierAir = TierArray[39]; var BTierAir = TierArray[40];}
                                    for (var i = 1; i <= j; i++) {
                                        if (TierArray[i-1] <= scoredef && scoredef < TierArray[i]) {var ATierDef = TierArray[i-1]; var BTierDef = TierArray[i]; break;}
                                    }
                                    if (scoredef >= TierArray[39]) {var ATierDef = TierArray[39]; var BTierDef = TierArray[40];}
                                }
 
                                if (AllianzID > 0) {
                                    var CTierTib = scoretib-ATierTib;
                                    var CTierCry = scorecry-ATierCry;
                                    var CTierPow = scorepow-ATierPow;
                                    var CTierInf = scoreinf-ATierInf;
                                    var CTierVeh = scoreveh-ATierVeh;
                                    var CTierAir = scoreair-ATierAir;
                                    var CTierDef = scoredef-ATierDef;
                                    var FTierTib = BTierTib-scoretib;
                                    var FTierCry = BTierCry-scorecry;
                                    var FTierPow = BTierPow-scorepow;
                                    var FTierInf = BTierInf-scoreinf;
                                    var FTierVeh = BTierVeh-scoreveh;
                                    var FTierAir = BTierAir-scoreair;
                                    var FTierDef = BTierDef-scoredef;
                                    P_T.add(new qx.ui.basic.Label(ATierTib.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierCry.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierPow.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierInf.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierAir.toLocaleString()).set({rich: true, height: 18}));
                                    P_T.add(new qx.ui.basic.Label(ATierDef.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    N_T.add(new qx.ui.basic.Label(BTierDef.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    B_P.add(new qx.ui.basic.Label(CTierDef.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    NeP.add(new qx.ui.basic.Label(FTierDef.toLocaleString()).set({rich: true, height: 18}));
                                }
                                else {
                                    for (var i = 1; i <= 7; i++) {
                                        P_T.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        N_T.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        B_P.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        NeP.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                    }
                                }
 
                                if (AllianzID > 0) {
                                    for (var i = 1; i <= 36; i++) {
                                        if (POIArray[i-1] <= CTierTib && CTierTib < POIArray[i]) {var DTierTib = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierCry && CTierCry < POIArray[i]) {var DTierCry = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierPow && CTierPow < POIArray[i]) {var DTierPow = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierInf && CTierInf < POIArray[i]) {var DTierInf = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierVeh && CTierVeh < POIArray[i]) {var DTierVeh = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierAir && CTierAir < POIArray[i]) {var DTierAir = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= CTierDef && CTierDef < POIArray[i]) {var DTierDef = SPOIArray[i-1];}
                                    }
                                    if (CTierTib >= POIArray[36]) {var DTierTib = SPOIArray[36];}
                                    if (CTierCry >= POIArray[36]) {var DTierCry = SPOIArray[36];}
                                    if (CTierPow >= POIArray[36]) {var DTierPow = SPOIArray[36];}
                                    if (CTierInf >= POIArray[36]) {var DTierInf = SPOIArray[36];}
                                    if (CTierVeh >= POIArray[36]) {var DTierVeh = SPOIArray[36];}
                                    if (CTierAir >= POIArray[36]) {var DTierAir = SPOIArray[36];}
                                    if (CTierDef >= POIArray[36]) {var DTierDef = SPOIArray[36];}
                                }
 
                                if (AllianzID > 0) {
                                    for (var i = 1; i <= 36; i++) {
                                        if (POIArray[i-1] < FTierTib && FTierTib <= POIArray[i]) {var ETierTib = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierCry && FTierCry <= POIArray[i]) {var ETierCry = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierPow && FTierPow <= POIArray[i]) {var ETierPow = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierInf && FTierInf <= POIArray[i]) {var ETierInf = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierVeh && FTierVeh <= POIArray[i]) {var ETierVeh = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierAir && FTierAir <= POIArray[i]) {var ETierAir = SPOIArray[i];}
                                        if (POIArray[i-1] < FTierDef && FTierDef <= POIArray[i]) {var ETierDef = SPOIArray[i];}
                                    }
                                    if (FTierTib > POIArray[36]) {var ETierTib = SPOIArray[37];}
                                    if (FTierCry > POIArray[36]) {var ETierCry = SPOIArray[37];}
                                    if (FTierPow > POIArray[36]) {var ETierPow = SPOIArray[37];}
                                    if (FTierInf > POIArray[36]) {var ETierInf = SPOIArray[37];}
                                    if (FTierVeh > POIArray[36]) {var ETierVeh = SPOIArray[37];}
                                    if (FTierAir > POIArray[36]) {var ETierAir = SPOIArray[37];}
                                    if (FTierDef > POIArray[36]) {var ETierDef = SPOIArray[37];}
                                }
 
                                var HTierTib = nexttib-scoretib;
                                var HTierCry = nextcry-scorecry;
                                var HTierPow = nextpow-scorepow;
                                var HTierInf = nextinf-scoreinf;
                                var HTierVeh = nextveh-scoreveh;
                                var HTierAir = nextair-scoreair;
                                var HTierDef = nextdef-scoredef;
                                if (HTierTib > 0){var GTierTib = scoretib-previoustib;}
                                else {
                                    if (ranktib == 1) {var GTierTib = scoretib-previoustib;}
                                    else var GTierTib = 0;
                                }
                                if (HTierCry > 0){var GTierCry = scorecry-previouscry;}
                                else {
                                    if (rankcry == 1) {var GTierCry = scorecry-previouscry;}
                                    else var GTierCry = 0;
                                }
                                if (HTierPow > 0){var GTierPow = scorepow-previouspow;}
                                else {
                                    if (rankpow == 1) {var GTierPow = scorepow-previouspow;}
                                    else var GTierPow = 0;
                                }
                                if (HTierInf > 0){var GTierInf = scoreinf-previousinf;}
                                else {
                                    if (rankinf == 1) {var GTierInf = scoreinf-previousinf;}
                                    else var GTierInf = 0;
                                }
                                if (HTierVeh > 0){var GTierVeh = scoreveh-previousveh;}
                                else {
                                    if (rankveh == 1) {var GTierVeh = scoreveh-previousveh;}
                                    else var GTierVeh = 0;
                                }
                                if (HTierAir > 0){var GTierAir = scoreair-previousair;}
                                else {
                                    if (rankair == 1) {var GTierAir = scoreair-previousair;}
                                    else var GTierAir = 0;
                                }
                                if (HTierDef > 0){var GTierDef = scoredef-previousdef;}
                                else {
                                    if (rankdef == 1) {var GTierDef = scoredef-previousdef;}
                                    else var GTierDef = 0;
                                }
 
                                if (AllianzID > 0) {
                                    PL.add(new qx.ui.basic.Label(DTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    PL.add(new qx.ui.basic.Label(DTierDef.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierTib.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierCry.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierPow.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierInf.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierAir.toLocaleString()).set({rich: true, height: 18}));
                                    PG.add(new qx.ui.basic.Label(ETierDef.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    PP.add(new qx.ui.basic.Label(GTierDef.toLocaleString()).set({rich: true, height: 18}));
                                }
                                else {
                                    for (var i = 1; i <= 7; i++) {
                                        PL.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        PG.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        PP.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                    }
                                }
 
                                if (AllianzID > 0){
                                    if (nexttib > 0) {NP.add(new qx.ui.basic.Label(HTierTib.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (ranktib == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextcry > 0) {NP.add(new qx.ui.basic.Label(HTierCry.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankcry == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextpow > 0) {NP.add(new qx.ui.basic.Label(HTierPow.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankpow == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextinf > 0) {NP.add(new qx.ui.basic.Label(HTierInf.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankinf == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextveh > 0) {NP.add(new qx.ui.basic.Label(HTierVeh.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankveh == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextair > 0) {NP.add(new qx.ui.basic.Label(HTierAir.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankair == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                    if (nextdef > 0) {NP.add(new qx.ui.basic.Label(HTierDef.toLocaleString()).set({rich: true, height: 18}));}
                                    else {
                                        if (rankdef == 1)
                                            NP.add(new qx.ui.basic.Label(TierArray[40].toLocaleString()).set({rich: true, height: 18}));
                                        else NP.add(new qx.ui.basic.Label(TierArray[0].toLocaleString()).set({rich: true, height: 18}));
                                    }
                                }
                                else {
                                    for (var i = 1; i <= 7; i++) {
                                        NP.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                    }
                                }
 
                                if (AllianzID > 0) {
                                    for (var i = 1; i <= 36; i++) {
                                        if (POIArray[i-1] <= GTierTib && GTierTib < POIArray[i]) {var ITierTib = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierCry && GTierCry < POIArray[i]) {var ITierCry = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierPow && GTierPow < POIArray[i]) {var ITierPow = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierInf && GTierInf < POIArray[i]) {var ITierInf = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierVeh && GTierVeh < POIArray[i]) {var ITierVeh = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierAir && GTierAir < POIArray[i]) {var ITierAir = SPOIArray[i-1];}
                                        if (POIArray[i-1] <= GTierDef && GTierDef < POIArray[i]) {var ITierDef = SPOIArray[i-1];}
                                    }
                                    if (GTierTib >= POIArray[36]) {var ITierTib = SPOIArray[36];}
                                    if (GTierCry >= POIArray[36]) {var ITierCry = SPOIArray[36];}
                                    if (GTierPow >= POIArray[36]) {var ITierPow = SPOIArray[36];}
                                    if (GTierInf >= POIArray[36]) {var ITierInf = SPOIArray[36];}
                                    if (GTierVeh >= POIArray[36]) {var ITierVeh = SPOIArray[36];}
                                    if (GTierAir >= POIArray[36]) {var ITierAir = SPOIArray[36];}
                                    if (GTierDef >= POIArray[36]) {var ITierDef = SPOIArray[36];}
                                }
 
                                if (AllianzID > 0) {
                                    if (ranktib != 1) {
                                        if (HTierTib != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierTib && HTierTib <= POIArray[i]) {var JTierTib = SPOIArray[i]; break;}
                                            }
                                            if (HTierTib > POIArray[36]) {var JTierTib = SPOIArray[37];}
                                        }
                                        else {var JTierTib = SPOIArray[1]}
                                    }
                                    else {var JTierTib = TierArray[40];}
                                    if (rankcry != 1) {
                                        if (HTierCry != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierCry && HTierCry <= POIArray[i]) {var JTierCry = SPOIArray[i]; break;}
                                            }
                                            if (HTierCry > POIArray[36]) {var JTierCry = SPOIArray[37];}
                                        }
                                        else {var JTierCry = SPOIArray[1]}
                                    }
                                    else {var JTierCry = TierArray[40];}
                                    if (rankpow != 1) {
                                        if (HTierPow != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierPow && HTierPow <= POIArray[i]) {var JTierPow = SPOIArray[i]; break;}
                                            }
                                            if (HTierPow > POIArray[36]) {var JTierPow = SPOIArray[37];}
                                        }
                                        else {var JTierPow = SPOIArray[1]}
                                    }
                                    else {var JTierPow = TierArray[40];}
                                    if (rankinf != 1) {
                                        if (HTierInf != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierInf && HTierInf <= POIArray[i]) {var JTierInf = SPOIArray[i]; break;}
                                            }
                                            if (HTierInf > POIArray[36]) {var JTierInf = SPOIArray[37];}
                                        }
                                        else {var JTierInf = SPOIArray[1]}
                                    }
                                    else {var JTierInf = TierArray[40];}
                                    if (rankveh != 1) {
                                        if (HTierVeh != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierVeh && HTierVeh <= POIArray[i]) {var JTierVeh = SPOIArray[i]; break;}
                                            }
                                            if (HTierVeh > POIArray[36]) {var JTierVeh = SPOIArray[37];}
                                        }
                                        else {var JTierVeh = SPOIArray[1]}
                                    }
                                    else {var JTierVeh = TierArray[40];}
                                    if (rankair != 1) {
                                        if (HTierAir != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierAir && HTierAir <= POIArray[i]) {var JTierAir = SPOIArray[i]; break;}
                                            }
                                            if (HTierAir > POIArray[36]) {var JTierAir = SPOIArray[37];}
                                        }
                                        else {var JTierAir = SPOIArray[1]}
                                    }
                                    else {var JTierAir = TierArray[40];}
                                    if (rankdef != 1) {
                                        if (HTierDef != 0) {
                                            for (var i = 1; i <= 36; i++) {
                                                if (POIArray[i-1] < HTierDef && HTierDef <= POIArray[i]) {var JTierDef = SPOIArray[i]; break;}
                                            }
                                            if (HTierDef > POIArray[36]) {var JTierDef = SPOIArray[37];}
                                        }
                                        else {var JTierDef = SPOIArray[1]}
                                    }
                                    else {var JTierDef = TierArray[40];}
                                }
 
                                if (AllianzID > 0) {
                                    P_P.add(new qx.ui.basic.Label(ITierTib.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierCry.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierPow.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierInf.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierAir.toLocaleString()).set({rich: true, height: 18}));
                                    P_P.add(new qx.ui.basic.Label(ITierDef.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierTib.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierCry.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierPow.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierInf.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierVeh.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierAir.toLocaleString()).set({rich: true, height: 18}));
                                    N_P.add(new qx.ui.basic.Label(JTierDef.toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(TiberiumBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(CrystalBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(PowerBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(InfantrieBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(VehicleBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(AirBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Bonus.add(new qx.ui.basic.Label(parseInt(DefBonus).toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(ranktib.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankcry.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankpow.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankinf.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankveh.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankair.toLocaleString()).set({rich: true, height: 18}));
                                    Rang.add(new qx.ui.basic.Label(rankdef.toLocaleString()).set({rich: true, height: 18}));
                                }
                                else {
                                    for (var i = 1; i <= 7; i++) {
                                        P_P.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        N_P.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        Bonus.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                        Rang.add(new qx.ui.basic.Label("--".toString()).set({rich: true, height: 18}));
                                    }
                                }
 
                                function Shoots(context, data) {
                                    var Shoot = data.bd.toString();
                                    var PvP = (data.bd - data.bde).toString();
                                    var PvE = data.bde.toString();
                                    GeneralField5.add(new qx.ui.basic.Label("").set({rich: true}));
                                    GeneralField5.add(new qx.ui.basic.Label('<form action="http://localhost/projekte/TA_Stats/index.php" method="post" target="_blank"><input type="hidden" name="PlayerName" value="' + PlayerName + '" /><input type="hidden" name="WorldId" value="' + WorldId + '" /><input type="hidden" name="ServerName" value="' + ServerName + '" /><input type="hidden" name="ScorePoints" value="' + ScorePoints + '" /><input type="hidden" name="BasesCount" value="' + BasesCount + '" /><input type="hidden" name="OverallRank" value="' + OverallRank + '" /><input type="hidden" name="GesamtTiberium" value="' + GesamtTiberium + '" /><input type="hidden" name="GesamtCrystal" value="' + GesamtCrystal + '" /><input type="hidden" name="GesamtPower" value="' + GesamtPower + '" /><input type="hidden" name="GesamtCredits" value="' + GesamtCredits + '" /><input type="hidden" name="ResearchPoints" value="' + ResearchPoints + '" /><input type="hidden" name="Credits" value="' + Credits + '" /><input type="hidden" name="Shoot" value="' + Shoot + '" /><input type="hidden" name="PvP" value="' + PvP + '" /><input type="hidden" name="PvE" value="' + PvE + '" /><input type="hidden" name="LvLOff" value="' + LvLOff + '" /><input type="hidden" name="BaseD" value="' + BaseD + '" /><input type="hidden" name="DefD" value="' + DefD + '" /><input type="hidden" name="SupD" value="' + SupD + '" /><input type="hidden" name="Funds" value="' + Funds + '" /><input type="hidden" name="AllianzName" value="' + AllianzName + '" /><input type="hidden" name="allianceRank" value="' + allianceRank + '" /><input type="hidden" name="TotalScore" value="' + TotalScore + '" /><input type="hidden" name="AverageScore" value="' + AverageScore + '" /><input type="hidden" name="TiberiumBonus" value="' + TiberiumBonus + '" /><input type="hidden" name="CrystalBonus" value="' + CrystalBonus + '" /><input type="hidden" name="PowerBonus" value="' + PowerBonus + '" /><input type="hidden" name="InfantrieBonus" value="' + InfantrieBonus + '" /><input type="hidden" name="VehicleBonus" value="' + VehicleBonus + '" /><input type="hidden" name="AirBonus" value="' + AirBonus + '" /><input type="hidden" name="DefBonus" value="' + DefBonus + '" /><input type="hidden" name="scoretib" value="' + scoretib + '" /><input type="hidden" name="scorecry" value="' + scorecry + '" /><input type="hidden" name="scorepow" value="' + scorepow + '" /><input type="hidden" name="scoreinf" value="' + scoreinf + '" /><input type="hidden" name="scoreveh" value="' + scoreveh + '" /><input type="hidden" name="scoreair" value="' + scoreair + '" /><input type="hidden" name="scoredef" value="' + scoredef + '" /><input type="hidden" name="ranktib" value="' + ranktib + '" /><input type="hidden" name="rankcry" value="' + rankcry + '" /><input type="hidden" name="rankpow" value="' + rankpow + '" /><input type="hidden" name="rankinf" value="' + rankinf + '" /><input type="hidden" name="rankveh" value="' + rankveh + '" /><input type="hidden" name="rankair" value="' + rankair + '" /><input type="hidden" name="rankdef" value="' + rankdef + '" /><input type="submit" name="" value="&nbsp;Werte übertragen&nbsp;" style="font-weight: bold; font-size: 18px;" /></form>').set({rich: true, selectable: true}));
                                    GeneralField5.add(new qx.ui.basic.Label("<b>Lokale Statistik:</b> <a href='" + AIDOWNLOADSTATS + "' target='_blank'>" + AIDOWNLOADSTATS + "</a>").set({rich: true}));
                                }
 
                                ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetPublicPlayerInfoByName", {
                                    name : PlayerName
                                }, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, Shoots), null);
 
 
                                // Tab 1 POIs
                                this.AllianzinfoPOIsVBox.add(GeneralField1);
                                field1.add(POI);
                                this.AllianzinfoPOIsVBox.add(field1);
                                this.AllianzinfoPOIsVBox.add(GeneralField2);
 
                                // Tab 2 Rechte
                                field2.add(Recht);
                                this.AllianzinfoRechteVBox.add(field2);
 
                                // Tab 3 POI-Daten (NewEco)
                                field4.add(LevelScore);
                                field5.add(BStufe);
                                field6.add(Multi);
                                this.AllianzinfoPOIlvlVBox.add(field3);
 
                                // Tab 4 POI-Daten (OldEco)
                                field7.add(LevelScoreOld);
                                field8.add(BStufeOld);
                                field9.add(MultiOld);
                                this.AllianzinfoPOIlvlOldVBox.add(field10);
 
                                // Tab 5 POIs im Detail
                                this.AllianzinfoPOIDetailVBox.add(GeneralField6);
                                GeneralField6.add(POIDetail);
 
                                // Tab 6 Basen
                                this.AllianzinfoBasenVBox.add(GeneralField5);
                                GeneralField5.add(Basen);
 
                                // Tab 7 Kontakt
                                this.AllianzinfoKontaktVBox.add(GeneralField3);
                                this.AllianzinfoKontaktVBox.add(GeneralField4);
 
                                t_end = new Date().getTime();
                                console.log("Benötigte Zeit: ",(t_end - t_start));
                            }
                            catch(e) {
                                console.log(e);
                            }
                        }
                    }
                });
            }
            catch (e) {
                console.warn("qx.Class.define(AllianzInfo: ", e);
            }
            AllianzInfo.getInstance();
        }
        function LoadExtension() {
            try {
                if (typeof(qx)!='undefined') {
                    if (!!qx.core.Init.getApplication().getMenuBar()) {
                        AllianzInfoCreate();
                        AllianzInfo.getInstance().initialize();
                        return;
                    }
                }
            }
            catch (e) {
                if (console !== undefined) console.log(e);
                else if (window.opera) opera.postError(e);
                else GM_log(e);
            }
            window.setTimeout(LoadExtension, 1000);
        }
        LoadExtension();
    }
    function Inject() {
        if (window.location.pathname != ("/login/auth")) {
            var Script = document.createElement("script");
            Script.innerHTML = "(" + AllianzInfoMain.toString() + ")();";
            Script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(Script);
        }
    }
    Inject();
})();