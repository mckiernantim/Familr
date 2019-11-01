(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-weather></app-weather>\n<app-day></app-day>\n<app-event></app-event>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'familr';
        this.apiUrl = './assets/monsters.json';
        this.data = {};
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _roll_roll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roll/roll.component */ "./src/app/roll/roll.component.ts");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day/day.component */ "./src/app/day/day.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _monster_monster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monster/monster.component */ "./src/app/monster/monster.component.ts");
/* harmony import */ var _creature_creature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./creature/creature.component */ "./src/app/creature/creature.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _roll_roll_component__WEBPACK_IMPORTED_MODULE_4__["RollComponent"],
                _day_day_component__WEBPACK_IMPORTED_MODULE_5__["DayComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_6__["EventComponent"],
                _monster_monster_component__WEBPACK_IMPORTED_MODULE_7__["MonsterComponent"],
                _creature_creature_component__WEBPACK_IMPORTED_MODULE_8__["CreatureComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_9__["WeatherComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollDispatchModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            ],
            providers: [_roll_service__WEBPACK_IMPORTED_MODULE_0__["RollService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beach-events.ts":
/*!*********************************!*\
  !*** ./src/app/beach-events.ts ***!
  \*********************************/
/*! exports provided: beachEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beachEvents", function() { return beachEvents; });
var beachEvents = [
    {
        id: 1,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 2,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 3,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 4,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 5,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 6,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 7,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 8,
        title: 'Artus Climber',
        text: "Artus CLimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 9,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 10,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 11,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 12,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 13,
        title: 'Allosaurus',
        text: 'Theparty scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    {
        id: 14,
        title: 'Allosaurus',
        text: 'The party scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    {
        id: 15,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 16,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 17,
        title: 'Plesiosuarus',
        text: 'Two plesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 18,
        title: 'Plesiosuarus',
        text: 'Twoplesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 19,
        title: 'Plesiosuarus',
        text: 'Twoplesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 20,
        title: 'Plesiosuarus',
        text: 'Twoplesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 21,
        title: 'Plesiosuarus',
        text: 'Twoplesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 22,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 23,
        title: 'Pternadon',
        text: 'A flock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 24,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 25,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 26,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 27,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 28,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 29,
        title: 'Quetzalcoatlus',
        text: 'A fight of 1d4 Quetzalcoatlus are spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Quetzalcoatlus ",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 30,
        title: 'Quetzalcoatlus',
        text: 'A fight of 1d4 Quetzalcoatlus are spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Quetzalcoatlus ",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 31,
        title: 'Quetzalcoatlus',
        text: 'A fight of 1d4 Quetzalcoatlus are spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Quetzalcoatlus",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 32,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 33,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 34,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 35,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 36,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 37,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 38,
        title: 'Dragon, Red',
        text: 'If he characters are within 50 miles of Wyrmheart Mine, they see the young red dragon known as Tzindeldor or Tinder circling over that location.  If they are farther away they see her flying in the direction of the mine.  The dragon ignores the party unless they do something to attract her attention.',
        monsters: true,
        name: "Young Red Dragon",
        rolls: 0,
        die: 0,
        extra: 1
    },
    {
        id: 39,
        title: 'Dragon, Red',
        text: 'If he characters are within 50 miles of Wyrmheart Mine, they see the young red dragon known as Tzindeldor or Tinder circling over that location.  If they are farther away they see her flying in the direction of the mine.  The dragon ignores the party unless they do something to attract her attention.',
        monsters: true,
        name: "Young Red Dragon",
        rolls: 0,
        die: 0,
        extra: 1
    },
    {
        id: 40,
        title: 'Dragon, Red',
        text: 'If he characters are within 50 miles of Wyrmheart Mine, they see the young red dragon known as Tzindeldor or Tinder circling over that location.  If they are farther away they see her flying in the direction of the mine.  The dragon ignores the party unless they do something to attract her attention.',
        monsters: true,
        name: "Young Red Dragon",
        rolls: 0,
        die: 0,
        extra: 1
    },
    {
        id: 41,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 42,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 43,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 44,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 45,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 46,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 47,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 48,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 49,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 50,
        title: 'Flying Monkeys',
        text: 'Thesound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 51,
        title: 'Fling Monkeys',
        text: 'The sound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 52,
        title: 'Fling Monkeys',
        text: 'The sound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 53,
        title: 'Fling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 54,
        title: 'Flying Snakes',
        text: 'Rol any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 55,
        title: 'Flying Snakes',
        text: 'Rol any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 56,
        title: 'Frost Giants',
        text: 'Thecharacters hear the sound of huge creatures stomping through the wilderness.  If they follow the noise they encounter a party of 3 frost giants searching the jungle accompanied by 1d4-2 winter wolves.  Roll a d10, on 9 or 10 this is Drufis search party (page 64 TOA book).  The frost giants are looking for Artus Climber and the ring of winter and they may help characters who provide useful information.  They immediately attack anyone who witholds information or who threaten to reveal their location to the flaming fist.  They carry no treasure',
        monsters: true,
        name: "Frost Giant",
        rolls: 0,
        die: 0,
        extra: 3
    },
    {
        id: 57,
        title: 'Frost Giants',
        text: 'Thecharacters hear the sound of huge creatures stomping through the wilderness.  If they follow the noise they encounter a party of 3 frost giants searching the jungle accompanied by 1d4-2 winter wolves.  Roll a d10, on 9 or 10 this is Drufis search party (page 64 TOA book).  The frost giants are looking for Artus Climber and the ring of winter and they may help characters who provide useful information.  They immediately attack anyone who witholds information or who threaten to reveal their location to the flaming fist.  They carry no treasure',
        monsters: true,
        name: "Frost Giant",
        rolls: 0,
        die: 0,
        extra: 3
    },
    {
        id: 58,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 59,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 60,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 61,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 62,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 63,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 64,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 65,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 66,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 67,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 68,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 69,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 70,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 71,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 72,
        title: 'Red Wizard',
        text: 'Thi group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 73,
        title: 'Red Wizard',
        text: 'This group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 74,
        title: 'Red Wizard',
        text: 'Thi group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 75,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 76,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 77,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 78,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 79,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 80,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 81,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 82,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 83,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 84,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 85,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 86,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 87,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 88,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 89,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 90,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 91,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 92,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 93,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 94,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 95,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 96,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 97,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 98,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 99,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 100,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/beach.service.ts":
/*!**********************************!*\
  !*** ./src/app/beach.service.ts ***!
  \**********************************/
/*! exports provided: BeachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeachService", function() { return BeachService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _beach_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beach-events */ "./src/app/beach-events.ts");
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monster.service */ "./src/app/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BeachService = /** @class */ (function () {
    function BeachService(_rollService, weatherService, monsterService, http) {
        this._rollService = _rollService;
        this.weatherService = weatherService;
        this.monsterService = monsterService;
        this.http = http;
        this.beach = _beach_events__WEBPACK_IMPORTED_MODULE_2__["beachEvents"];
        this.rolls = {
            monsters: [],
            monsterNumbers: [],
            dice: [],
        };
    }
    BeachService.prototype.getBeach = function () {
        this.rolls.monsters = [];
        this.rolls.dice = [];
        this.rolls.monsterName = "";
        for (var i = 0; i < 3; i++) {
            var dieRoll = this._rollService.roll20();
            if (dieRoll >= 16) {
                var x = this._rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.beach[x - 1]);
                this.rolls.monsterName = this.beach[x - 1].name;
                if (this.rolls.monsterName) {
                    var currentMonsterUrl = this.monsterService.getMonsterUrl(this.rolls.monsterName);
                    console.log(currentMonsterUrl + "PLACE WHERE API WILL BE CALLED");
                    var monsterStats = this.getCurrentMonster();
                    console.log(monsterStats + "DATA BROUGHT BACK FROM API");
                    this.rolls.monsters.push(monsterStats);
                    console.log(this.response);
                }
                ;
            }
            else
                this.rolls.dice.push("nothing happened");
        }
        ;
        if (this.rolls.monsters) {
            console.log(this.rolls.monsters + "MONSTER STATS$$$$$$$$$$$");
        }
        else
            console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%");
        // this.rolls.push(this.weatherService.getWeather());
        return this.rolls;
    };
    ;
    BeachService.prototype.getCurrentMonster = function () {
    };
    BeachService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_roll_service__WEBPACK_IMPORTED_MODULE_3__["RollService"], _weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], _monster_service__WEBPACK_IMPORTED_MODULE_5__["MonsterService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BeachService);
    return BeachService;
}());



/***/ }),

/***/ "./src/app/creature/creature.component.css":
/*!*************************************************!*\
  !*** ./src/app/creature/creature.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creature/creature.component.html":
/*!**************************************************!*\
  !*** ./src/app/creature/creature.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  creature works!\n</p>\n"

/***/ }),

/***/ "./src/app/creature/creature.component.ts":
/*!************************************************!*\
  !*** ./src/app/creature/creature.component.ts ***!
  \************************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return CreatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatureComponent = /** @class */ (function () {
    function CreatureComponent() {
    }
    CreatureComponent.prototype.ngOnInit = function () {
    };
    CreatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creature',
            template: __webpack_require__(/*! ./creature.component.html */ "./src/app/creature/creature.component.html"),
            styles: [__webpack_require__(/*! ./creature.component.css */ "./src/app/creature/creature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatureComponent);
    return CreatureComponent;
}());



/***/ }),

/***/ "./src/app/day/day.component.css":
/*!***************************************!*\
  !*** ./src/app/day/day.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@-webkit-keyframes bannerReveal{\n  0%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.0;\n      }\n  1%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.05;\n      }\n  42%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.9;\n      }\n}\n@keyframes bannerReveal{\n  0%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.0;\n      }\n  1%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.05;\n      }\n  42%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.9;\n      }\n}\n@-webkit-keyframes textReveal{\n  0%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.01;\n      }\n  47%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: .01;\n      }\n  99%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 1;\n      }\n}\n@keyframes textReveal{\n  0%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 0.01;\n      }\n  47%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: .01;\n      }\n  99%{\n      -webkit-transform: rotate(xx);\n              transform: rotate(xx);\n      opacity: 1;\n      }\n}\n.elementToAnimate{\n  -webkit-animation: bannerReveal 1.5s normal forwards 0s linear;\n          animation: bannerReveal 1.5s normal forwards 0s linear;\n}\n.elementToAnimate{\n  -webkit-animation: textReveal 6s infinite 0s linear;\n          animation: textReveal 6s infinite 0s linear;\n}\n.banner-image{\n  -webkit-animation: bannerReveal 1.5s 0s linear;\n          animation: bannerReveal 1.5s 0s linear;\n  background-image: url(https://geekandsundry.com/wp-content/uploads/2017/09/ToA_Icons_Minis_HeaderImage.jpg);\n  height:600px;\n  background-repeat: no-repeat;\n  background-size:cover;\n  box-shadow: 0 0 1.5em #867453;\n\n}\n.top-box{\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 1em;\n\n}\n.day-buttons-box{\nmax-width:100%;\n\n}\n.box{\n  box-shadow: 0 0 1.5em #867453;\n}\n.box-shade{\nheight: 22px;\nbackground-color: #f4c756;\n\n\n\n\nbackground-image: linear-gradient(to bottom right, #e5d099, #f9f3d8)\n\n}\n.button{\n  background-color:#b0a383;\n  border:1px solid #922610;\n  box-shadow: 0 0 5em #867453;\n  max-width:75%;\n  border-radius:10px;\n  font-family: 'Libre Baskerville', 'Lora', 'Calisto MT', 'Bookman Old Style', Bookman, 'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;\n  color: #922610;\n  font-size: 12px;\n  line-height: 1.2em;\n  height:auto;\n  letter-spacing: 1px;\n  font-variant: small-caps;\n  font-weight: bold;\n  cursor: pointer;\n  \n}\n@media screen and (min-width:751px){\n  .event-box{\n    -ms-grid-columns:(1fr)[3];\n        grid-template-columns:repeat(3, 1fr)\n\n  }\n  .top-box{\n    -ms-grid-columns:4fr 1fr;\n        grid-template-columns:4fr 1fr;\n  }\n  .wrapper{\n    -ms-grid-columns: 1fr 4fr;\n        grid-template-columns: 1fr 4fr;\n  }\n}\n@media screen and (max-width:750px){\n  .wrapper{\n    width:100%;\n    display:-ms-grid;\n    display:grid;\n    height:auto;\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n   \n   \n  }\n  .banner-text{\n    font-size:30px\n  }\n  .top-box{\n    -ms-grid-columns:1fr;\n        grid-template-columns:1fr;\n  }\n\n  .box{\n    display:-ms-grid;\n    display:grid\n  }\n  .day-buttons-box{\n    padding:20px;\n    align-items: center;\n    justify-content: center;\n  }\n .event-box, .main-box, .top-box, .content-box{\n   display:-ms-grid;\n   display:grid\n  }\n  .event-box{\n    -webkit-animation: bannerReveal 1.5s  0s linear;\n            animation: bannerReveal 1.5s  0s linear;\n    -ms-grid-columns:(1fr)[1];\n        grid-template-columns:repeat(1, 1fr)\n  }\n\n}\n.wrapper {\n \n  \n  font-size: 13.5px;\n  line-height: 1.2em;\n  box-sizing: border-box;\n  width: 100%;\n  font-family: 'Noto Sans', 'Myriad Pro', Calibri, Helvetica,\n    Arial, sans-serif;\n  min-height:750px;\n  height:auto;\n  display:-ms-grid;\n  display:grid;\n  grid-gap: 1em;\n \n  grid-auto-rows: minmax(50px, auto);\n  text-align: center;\n  background: #f9f3d8;\n  box-shadow: 0 0 1.5em #867453;\n  \n}\n.red-border{\n \n  border-right: solid 165px #FDF1DC;\n  border-bottom: solid 1px #922610;\n  \n  box-shadow: 0 0 1.5em #867453;\n\n}\n.side-box{\n \n  width:auto;\n  height:100%\n  \n}\n.black-text{\n  color:black;\n  font-size: 13.5px;\n  line-height: 1.2em;\n  display: inline;\n  margin: 0;\n  font-style: italic\n}\n.die-roll{\n  -webkit-animation: bannerReveal 1.5s  0s linear;\n          animation: bannerReveal 1.5s  0s linear;\n}\n.main-box{\n  -webkit-animation: bannerReveal 1.5s  0s linear;\n          animation: bannerReveal 1.5s  0s linear;\n  text-align: left;\n \n  display: inline-block;\n  vertical-align: top;\n  width: auto;\n  min-width:100%;\n  \n  display:-ms-grid;\n  \n  display:grid;\n \n  -ms-grid-columns: 1fr;\n \n      grid-template-columns: 1fr;\n  grid-auto-rows: minmax(50px, auto);\n\n}\n.supplies{\ntext-align:start\n}\n.weather-box{\n  -webkit-animation: textReveal 2s 0s linear;\n          animation: textReveal 2s 0s linear;\n}\n.content-box{\n\n  display: -ms-grid;\n\n  display: grid;\n   -ms-grid-rows:  auto;\n       grid-template-rows:  auto;\n\n\n}\n.event-box{\n  padding-top:2%;\n  display:-ms-grid;\n  display:grid;\n  grid-gap: 1em;\n  grid-auto-rows:minmax(25%, auto)\n }\n.event-card{\n  -webkit-animation: bannerReveal 1.5s 0s linear;\n          animation: bannerReveal 1.5s 0s linear;\n   padding:20px;\n   box-shadow: 0 0 1.5em #867453;\n   height:auto;\n\n \n}\n.event-text{\npadding: 5px;\n}\n.box{\n  -webkit-animation: textReveal 2s 0s linear;\n          animation: textReveal 2s 0s linear;\n  padding:8px\n}\n.event-title{\n  border-bottom:red 1px solid;\n}\n.red-text-lg{\n  font-family: 'Libre Baskerville', 'Lora', 'Calisto MT', 'Bookman Old Style', Bookman, 'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;\n  color: #922610;\n  font-size: 23px;\n  line-height: 1.2em;\n\n  letter-spacing: 1px;\n  font-variant: small-caps;\n  font-weight: bold;\n}\n.banner-text{\n  color:#b0a383;\n  font-size:4em;\n}\n.encounter{\n  top: 0 !important;\n  overflow-y: scroll;\n}\n.result-grid-tile{\n  padding-top:  0px !important;\n  left: 0 !important;\n  top: calc(90%) !important;\n  height: 75% !important;\n  margin-top:0 !important;\n  width: calc(((50% - 0.75px) * 1) + 0px)!important;\n  overflow-y: scroll;\n}\n.mat-card{\n  \n  height:300px;\n  width:inherit;\n  background-color:powderblue;\n  overflow-y: scroll\n \n}\n.container{\n  display:-ms-grid;\n  display:grid;\n\n}\nul {\n  display: flex;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color:whitesmoke;\n  }\nli {\n    float: left;\n  }\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n/* Change the link color to #111 (black) on hover */\nli a:hover {\n    background-color: #111;\n  }"

/***/ }),

/***/ "./src/app/day/day.component.html":
/*!****************************************!*\
  !*** ./src/app/day/day.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"banner-image\">\n\n</div>\n<div class=\"wrapper\">\n  <div class=\"side-box\">\n    <div class=\"party-info-box box red-text-lg\">\n      <div class=\"red-text-lg\">\n        Roll Some Die\n        <select #dice>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n     \n        </select>\n        <select #faces>\n            <option value=\"4\">d4</option>\n            <option value=\"6\">d6</option>\n            <option value=\"8\">d8</option>\n            <option value=\"10\">d10</option>\n            <option value=\"12\">d12</option>\n            <option value=\"20\">d20</option>\n          </select>\n          <button (click)=\"rollDice(faces.value, dice.value)\">Roll</button>\n          <h4 class=\"red-text-lg die-roll\">{{lastRoll}}</h4>\n         </div>\n\n\n\n      <div class=\"red-border\"></div>\n    </div>\n    <div class=\"dm-controls-box red-text-lg box\">\n      <div class=\"box-shade\"></div>\n\n      <div>\n        <label>Daily Food</label>\n        <input [(ngModel)]=\"this.dailyFood\" placeholder=\"change food consumption rate\">\n        <label>daily Water:</label>\n        <input [(ngModel)]=\"this.dailyWater\" placeholder=\"change water consuption rate\">\n\n        <label>Food: </label>\n        <input placeholder=\"change food supply\" [(ngModel)]=\"partyFood\">\n        <br>\n        <label>Water: </label>\n        <input placeholder=\"change food\" [(ngModel)]=\"partyWater\">\n      </div>\n    </div>\n\n  </div>\n  <div class=\"content-box\">\n    <div class=\"top-box \">\n      <div class=\"weather-box box red-text-lg\">\n\n\n        <div *ngIf=\"dayTracker === 0 else day2\">\n          <h1>Welcome to the jungle...</h1>\n\n\n          <p class=\"black-text\">Select a location to see what happens today</p>\n        </div>\n        <div class=\"supplies black-text\">\n          <p>Food: {{partyFood}}</p>\n\n          <p>Water: {{partyWater}}</p>\n\n          <p>Space: {{partySpace}}</p>\n          <div class=\"red-border\"></div>\n        </div>\n        <ng-template #day2>\n          <p>The party is on day {{dayTracker}}</p>\n        </ng-template>\n\n\n        <ng-container *ngFor=\"let weather of this.weather; let i = index\" class=\"black-text\">\n          <div class=\"black-text\">\n            <h2 class=\"red-text-lg\">{{weatherLabelArr[i]}} Weather: {{this.weather.title}}</h2>\n            <p>{{this.weather.text}}</p>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"day-buttons-box box red-text-lg\">\n        <h3>Select Location</h3>\n        <div class=\"button-box\">\n          <button class=\"button\" (click)=\"getBeach();\">Beach</button>\n          <button class=\"button\" (click)=\"getNoUndead();\">NoUndead</button>\n          <button class=\"button\" (click)=\"getUndead();\">Undead Jungle\n          </button>\n          <button class=\"button\" value=\"greaterUndead()\" (click)=\"getGreaterUndead();\">Greater Undead Jungle\n          </button>\n          <button class=\"button\" value=\"river\" (click)=\"getRiver()\">River</button>\n          <button class=\"button\" value=\"river\" (click)=\"getSwamp()\">Swamp</button>\n          <button class=\"button\" (click)=\"this.undeadService.getCurrentMonster('Guard')\">test button</button>\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"main-box\">\n      <div *ngIf=\"this.rollResults.length===3 else nothing\" style=\"align-content: center\">\n        <div class=\"event-box results\" style=\"grid-template-columns: 1fr; text-align:center\">\n          <div class=\"event-card\">\n            <div class=\"event-title red-text-lg\">\n              <h3>Nothing happened today</h3>\n              <div class=\"red-border\"></div>\n            </div>\n            <div class=\"event.text black-text\">\n              <p>lucky you.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-template #nothing>\n        <div class=\"event-box\" style=\"align-content:center\">\n          <ng-container *ngFor=\"let result of this.rollResults\">\n            <ng-container *ngIf=\"result.title red-text-lg\">\n              <div class=\"event-card\">\n                <div class=\"event-title red-text-lg\">\n                  <h3>{{result.id}}: {{result.title}}</h3>\n                  <div class=\"red-border\"></div>\n                </div>\n                <div class=\"event.text black-text\">\n                  <p>{{result.text}}</p>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n        </div>\n\n      </ng-template>\n    </div>\n  </div>\n</div>\n<!-- <mat-grid-list cols=\"4\" rowHeight=\"3:1\" >\n  <div *ngIf=\"this.weather; else noWeather\">\n\n    <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n      <ng-container *ngFor=\"let weather of this.weather\">\n\n        <h2>Today's Weather: {{this.weather.title}}</h2>\n        <p>{{this.weather.text}}</p>\n      </ng-container>\n    </mat-grid-tile>\n  </div>\n\n  <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1.5\">\n\n\n    <h2>\n      <div>\n        The Party is on day {{this.dayTracker}}\n      </div>\n      <div>\n        <ul class=\"nav\">\n          <li>Food: {{partyFood}} </li>\n          <br>\n          <li>Water: {{partyWater}}</li>\n          <br>\n          <li>space: {{partySpace}}</li>\n\n        </ul>\n      </div>\n\n      <label>Daily food consumption</label>\n      <div>\n        <div>\n          <input [(ngModel)]=\"this.dailyFood\" placeholder=\"change food consumption rate\">\n        </div>\n        <label>Daily water consuption:</label>\n        <div>\n          <input [(ngModel)]=\"this.dailyWater\" placeholder=\"change water consuption rate\">\n        </div>\n      </div>\n      <div>\n        <ul>\n          <li>Party Food Supply: {{this.partyFood}}</li>\n          <li>\n            <input placeholder=\"change food\" [(ngModel)]=\"partyFood\">\n          </li>\n          <li>Party Water Supply: {{this.partyWater}}</li>\n          <li>\n            <input placeholder=\"change food\" [(ngModel)]=\"partyWater\">\n          </li>\n        </ul>\n      </div>\n    </h2> -->\n<!-- </mat-grid-tile> -->\n\n<!-- <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\n\n  <button (click)=\"getBeach();\">Beach</button>\n  <button (click)=\"getNoUndead();\">NoUndead</button>\n  <button (click)=\"getUndead();\">UndeadJungle</button>\n  <button value=\"greaterUndead()\" (click)=\"getGreaterUndead();\">GreaterUndeadJungle</button>\n  <button value=\"river\" (click)=\"getRiver()\">River</button>\n  <button value=\"river\" (click)=\"getSwamp()\">Swamp</button>\n  <button (click)=\"this.undeadService.getCurrentMonster('Guard')\">test button</button>\n</mat-grid-tile>\n<mat-grid-tile class=\"result-grid-tile\" [colspan]=\"1\" [rowspan]=\"1\">\n\n  <ng-template #noWeather>No weather yet, make a roll!</ng-template>\n  <div *ngIf=\"this.rollResults\">\n    <ul>\n\n      <ng-container *ngFor=\"let result of this.rollResults\">\n        <ng-container *ngIf=\"result.title\">\n          <li>\n            <mat-card>\n              <mat-card-title class=\"encounter\"> {{result.title}} </mat-card-title>\n              <mat-card-content>{{result.text}} </mat-card-content>\n            </mat-card>\n          </li>\n        </ng-container>\n      </ng-container>\n    </ul>\n  </div>\n</mat-grid-tile> -->"

/***/ }),

/***/ "./src/app/day/day.component.ts":
/*!**************************************!*\
  !*** ./src/app/day/day.component.ts ***!
  \**************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var _undead_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../undead.service */ "./src/app/undead.service.ts");
/* harmony import */ var _no_undead_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../no-undead.service */ "./src/app/no-undead.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../monster.service */ "./src/app/monster.service.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _beach_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../beach.service */ "./src/app/beach.service.ts");
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DayComponent = /** @class */ (function () {
    function DayComponent(_beachService, undeadService, weatherService, monsterService, noUndeadService, http, rs) {
        this._beachService = _beachService;
        this.undeadService = undeadService;
        this.weatherService = weatherService;
        this.monsterService = monsterService;
        this.noUndeadService = noUndeadService;
        this.http = http;
        this.rs = rs;
        this.tiles = [
            { text: 'Tile 1', cols: 2, rows: 1, border: '3px double purple' },
            { text: 'Tile 2', cols: 2, rows: 1, border: '3px double red' },
            { text: 'Tile 3', cols: 2, rows: 1, border: '3px double skyblue' },
            { text: 'Tile 4', cols: 2, rows: 1, border: '3px double yellow' },
        ];
        this.rollResults = [];
        this.nameResults = [];
        this.dayTracker = 0;
        this.weather = [];
        this.monsterUrl = null;
        this.dailyFood = 13;
        this.dailyWater = 16;
        this.partyFood = 0;
        this.dieScope = 10;
        this.partyWater = 0;
        this.partySpace = 150;
        this.weatherLabelArr = [
            "Morning", "Midday", "Evening"
        ];
    }
    DayComponent.prototype.ngOnInit = function () {
        var array = [];
        var result;
        this.returned =
            this.http.get('./assets/monsters.json').subscribe(function (monster) {
                for (var key in monster) {
                    array = Object.keys(monster).map(function (key) { return monster[key]; });
                }
                for (var i = 0; i < array.length; i++) {
                    if (array[i]['name'] === name) {
                        result = array[i];
                        return result;
                    }
                }
            });
    };
    ;
    DayComponent.prototype.rollDice = function (number, dice) {
        this.lastRoll = this.rs.roll(number, dice);
    };
    DayComponent.prototype.getWeather = function () {
        this.weather = this.weatherService.getWeather();
        console.log(this.weather);
    };
    DayComponent.prototype.getBeach = function () {
        this.refreshDay();
        var returnedResults = (this._beachService.getBeach());
        this.nameResults = returnedResults.monsterNames;
        this.rollResults = returnedResults.dice;
    };
    DayComponent.prototype.refreshDay = function () {
        this.dayTracker++;
        this.rollResults = [];
        this.nameResults = [];
        this.weather = [];
        this.weather = this.weatherService.getWeather();
        this.partyFood = this.partyFood - this.dailyFood;
        this.partyWater = this.partyWater - this.dailyWater;
    };
    DayComponent.prototype.getNoUndead = function () {
        this.refreshDay();
        var returnedResults = (this.noUndeadService.getNoUndead());
        this.nameResults = returnedResults.monsterNames;
        this.rollResults = returnedResults.dice;
    };
    DayComponent.prototype.getUndead = function () {
        this.refreshDay();
        var returnedResults = this.undeadService.getUndead();
        this.nameResults.push(returnedResults.monsterName);
        this.rollResults = returnedResults.dice;
    };
    DayComponent.prototype.getGreaterUndead = function () {
        this.refreshDay();
        var returnedResults = this.undeadService.getGreaterUndead();
        this.nameResults.push(returnedResults.monsterName);
        console.log(returnedResults);
        console.log(this.nameResults);
        this.rollResults = returnedResults.dice;
        console.log(this.rollResults);
    };
    DayComponent.prototype.getRiver = function () {
        this.refreshDay();
        var returnedResults = this.undeadService.getRiver();
        this.nameResults.push(returnedResults.monsterName);
        this.rollResults = returnedResults.dice;
        console.log(this.rollResults);
        console.log("^^^^^^^^^^^^^^^^^^");
    };
    DayComponent.prototype.getSwamp = function () {
        this.refreshDay();
        var returnedResults = this.undeadService.getSwamp();
        this.nameResults.push(returnedResults.monsterName);
        console.log(returnedResults);
        console.log(this.nameResults);
        this.rollResults = returnedResults.dice;
        console.log(this.rollResults);
    };
    DayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-day',
            template: __webpack_require__(/*! ./day.component.html */ "./src/app/day/day.component.html"),
            styles: [__webpack_require__(/*! ./day.component.css */ "./src/app/day/day.component.css")]
        }),
        __metadata("design:paramtypes", [_beach_service__WEBPACK_IMPORTED_MODULE_5__["BeachService"],
            _undead_service__WEBPACK_IMPORTED_MODULE_0__["UndeadService"],
            _weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"],
            _monster_service__WEBPACK_IMPORTED_MODULE_3__["MonsterService"],
            _no_undead_service__WEBPACK_IMPORTED_MODULE_1__["NoUndeadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _roll_service__WEBPACK_IMPORTED_MODULE_6__["RollService"]])
    ], DayComponent);
    return DayComponent;
}());



/***/ }),

/***/ "./src/app/event.ts":
/*!**************************!*\
  !*** ./src/app/event.ts ***!
  \**************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Event = /** @class */ (function () {
    function Event() {
    }
    Event = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Event);
    return Event;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../event */ "./src/app/event.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(_event) {
        this._event = _event;
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_event__WEBPACK_IMPORTED_MODULE_0__["Event"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/greater_undead-events.ts":
/*!******************************************!*\
  !*** ./src/app/greater_undead-events.ts ***!
  \******************************************/
/*! exports provided: greaterUndeadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterUndeadEvents", function() { return greaterUndeadEvents; });
var greaterUndeadEvents = [
    {
        id: 1,
        title: 'Artus Cimber',
        text: "Artus Cimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 2,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 3,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 4,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 5,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 6,
        title: 'Allosaurus',
        text: 'Theparty scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    {
        id: 7,
        title: 'Ankylosaurus',
        text: 'An ornery Ankylosaurus (club tail dino) is gorging itself on plants and attacks any thing that gets in its way.',
        monsters: true,
        name: "",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 8,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 9,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 10,
        title: 'Stegosaurus',
        text: 'This lone stegosaurus is in a genial mood and approaches the characters out of curiosity.  Anyone who touches it triggers a swipe from its tail.',
        monsters: true,
        name: "Stegosaurus",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 11,
        title: 'Tyranosaurus Rex',
        text: 'The characters spot a Tyranosaurus Rex 50 feet away.  On an even roll the dinosaur is locked in combat with a triceratops or stegasaurus, giant ape, a pair of giant constrictor snakes, or a mob of ghouls or zombies.  These mobs will not assist the players in any way directly but may weaken the creature so it can be killed by the players.  The characters can avoid the encounter with all players making a DC 15 stealth check.  If any player is proficient in the stealh skill all checks are made with advantage',
        monsters: true,
        name: "Tyranosaurus",
        rolls: 1,
        die: 10,
        extra: 0
    },
    {
        id: 12,
        title: 'Tyranosaurus Rex',
        text: 'The characters spot a Tyranosaurus Rex 50 feet away.  On an even roll the dinosaur is locked in combat with a triceratops or stegasaurus, giant ape, a pair of giant constrictor snakes, or a mob of ghouls or zombies.  These mobs will not assist the players in any way directly but may weaken the creature so it can be killed by the players.  The characters can avoid the encounter with all players making a DC 15 stealth check.  If any player is proficient in the stealh skill all checks are made with advantage',
        monsters: true,
        name: "Tyranosaurus",
        rolls: 1,
        die: 10,
        extra: 0
    },
    {
        id: 13,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 14,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 15,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 16,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 17,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 18,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 19,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 20,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 21,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 22,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 23,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 24,
        title: 'Giant Wasps',
        text: 'A droning sound announces the pressence of 1d6 Giant Wasps before the characters see them.  The Wasps all attack at once ignoring those with heavy armor in favor of those with limited or no armor.  Any character damaged by the wasps must make a DC 11 con save at the end of combat of contract Shivering Sickness',
        monsters: true,
        name: "Giant Wasp",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 25,
        title: 'Mantraps',
        text: 'The characters wander into a patch of 1d4+1 mantraps (giant man eating plant). The plants are indistinguishable until they attack.  The plants are spaced 10 ft apart and must wait until players come close enough to attack.',
        monsters: true,
        name: "Mantrap",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 26,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    { id: 27,
        title: 'Rare Plant',
        text: 'The characters find one or more unusall plants determind by a d6 roll.  1  - 2d6 dancing monkey fruit growing on a tree. 2 - manga bush with 2d6 ounces of leaves.  3 - 1d4 ryath roots growing in gorund. 4 4d6 sindaberries growing in a bush.  5 - wukka tree with 2d6 wukka nuts.  6 1d6 zabu growing on a dead tree.',
        monsters: false,
        name: "",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 28,
        title: 'Red Wizard',
        text: 'This group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 29,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 30,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 31,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 32,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 33,
        title: 'Snake, Giant Poisonous',
        text: 'The giant poisonous snake shoots out from the undergrowth and attacks a character.  The character is surprised unless their passive perception score is higher than 13.',
        monsters: true,
        name: "Giant Poisonous Snake",
        rolls: 1,
        die: 0,
        extra: 0,
    },
    { id: 34,
        title: 'Spiders',
        text: 'Giant spiderwbs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 35,
        title: 'Spiders',
        text: 'Giant spiderwbs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 36,
        title: 'Spiders',
        text: 'Giant spiderwbs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 37,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 38,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 39,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 40,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 41,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 42,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 43,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 44,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 45,
        title: 'Su Monster',
        text: 'the party comes across 1d4+1 su monsters.  The su monsters approach cautiuosly and if can get close use psychic blasts.  If the fight goes against them they retreat to their nest and have treasure.  Roll once on the treasure table to find out what it is.',
        monsters: true,
        name: "Su Monster",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 46,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 47,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 48,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 49,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 50,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 51,
        title: 'Troll',
        text: 'A hungry troll comes crashing out of the jungle intent on eating the characters',
        monsters: true,
        name: "Troll",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 52,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 53,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 54,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 55,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 56,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 57,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 58,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 59,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 60,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 61,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 62,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 63,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 64,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 65,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 66,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 67,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 68,
        title: 'Spectre',
        text: 'The evil remnant of a dead explorer has become a spectre that attacks the party.  His body can be found with a dc 13 survival check.  If found roll on the dead explorer check. ',
        monsters: true,
        name: "Spectre",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 69,
        title: 'Spectre',
        text: 'The evil remnant of a dead explorer has become a spectre that attacks the party.  His body can be found with a dc 13 survival check.  If found roll on the dead explorer check. ',
        monsters: true,
        name: "Spectre",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 70,
        title: 'Spectre',
        text: 'The evil remnant of a dead explorer has become a spectre that attacks the party.  His body can be found with a dc 13 survival check.  If found roll on the dead explorer check. ',
        monsters: true,
        name: "Spectre",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 71,
        title: 'Wight',
        text: 'The characters encounter a wight that has lurked int he chultan jungle since before the spell plague.  It hates all chultans and Ubtao especialy.  If any chultan or Ubtao symbols, the wight attacks them with preference.',
        monsters: true,
        name: "Wight",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 72,
        title: 'Wight',
        text: 'The characters encounter a wight that has lurked int he chultan jungle since before the spell plague.  It hates all chultans and Ubtao especialy.  If any chultan or Ubtao symbols, the wight attacks them with preference.',
        monsters: true,
        name: "Wight",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 73,
        title: 'Wight',
        text: 'The characters encounter a wight that has lurked int he chultan jungle since before the spell plague.  It hates all chultans and Ubtao especialy.  If any chultan or Ubtao symbols, the wight attacks them with preference.',
        monsters: true,
        name: "Wight",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 74,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 75,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 76,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 77,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 78,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 79,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 80,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 81,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 82,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 83,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 84,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 85,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 86,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombies",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 87,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombies",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 88,
        title: 'Wereboar',
        text: 'A wereboar masquerading as a chultan priest takes a dim view of explorers encroaching on its territory.  On its neck is a wooden labrynth carved into a wooden disk.  The symbol of Ubtao.  He might be guarding a shrine to Ubtao a grove of wukka trees or a cave it uses as a lair.  It may also have treasure.  Roll 3 trasure drops in the trasure table.',
        monsters: true,
        name: "Wereboar",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 89,
        title: 'Wereboar',
        text: 'A wereboar masquerading as a chultan priest takes a dim view of explorers encroaching on its territory.  On its neck is a wooden labrynth carved into a wooden disk.  The symbol of Ubtao.  He might be guarding a shrine to Ubtao a grove of wukka trees or a cave it uses as a lair.  It may also have treasure.  Roll 3 trasure drops in the trasure table.',
        monsters: true,
        name: "Wereboar",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 90,
        title: 'Weretiger',
        text: 'In human forma  weretiger offers to excort the party through a very dangerous stretch of wilderness.  If they accompany her, they cannot get attacked.  She will leave after 24 hours and will not go to Omu Nangalore or Orolunga.',
        monsters: true,
        name: "Weretiger",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 91,
        title: 'Weretiger',
        text: 'In human forma  weretiger offers to excort the party through a very dangerous stretch of wilderness.  If they accompany her, they cannot get attacked.  She will leave after 24 hours and will not go to Omu Nangalore or Orolunga.',
        monsters: true,
        name: "Weretiger",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 92,
        title: 'Winterscape',
        text: 'The characters stumble intoa  112 ft radius sphere of winter weather.  Artus used the ring of winter to drive off monsters.  All plants are covered in glittering ice and frost.  The temperature in here is a biting -30 degrees farenhiet and cannot be dispelled.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 93,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 94,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 95,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 96,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 97,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 98,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 99,
        title: 'Zorbos',
        text: 'If his encounter happens in the wild the party stumbled upon 2d6 Zorbos in wukka trees who attack if the party makes threatening motions.  If during camp, the Zorbos drop from surrounding trees and attack.',
        monsters: true,
        name: "Zorbo",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 100,
        title: 'Zorbos',
        text: 'If his encounter happens in the wild the party stumbled upon 2d6 Zorbos in wukka trees who attack if the party makes threatening motions.  If during camp, the Zorbos drop from surrounding trees and attack.',
        monsters: true,
        name: "Zorbo",
        rolls: 2,
        die: 6,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/monster.service.ts":
/*!************************************!*\
  !*** ./src/app/monster.service.ts ***!
  \************************************/
/*! exports provided: MonsterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterService", function() { return MonsterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterService = /** @class */ (function () {
    function MonsterService(http) {
        this.http = http;
    }
    MonsterService.prototype.getMonsterUrl = function (monster) {
        var _this = this;
        this.http.get('http://dnd5eapi.co/api/monsters/?name=' + monster)
            .subscribe(function (data) {
            _this.response = data;
            console.log("%%%%%%%%%%%  REQUEST MADE %%%%%%%%%%%");
            console.log(_this.response);
            if (_this.response.results[0].url) {
                console.log(_this.response.results[0].url);
                return _this.response.results[0].url;
            }
        });
    };
    ;
    MonsterService.prototype.getCurrentMonster = function (monsterUrl) {
        var _this = this;
        this.http.get(monsterUrl)
            .subscribe(function (data) {
            _this.response = data;
            console.log(data + "%%%%%%%%%%%%%%%% monste stats brought back from api");
            return _this.response;
        });
    };
    MonsterService.prototype.mapMonsterStats = function (data) {
    };
    MonsterService.prototype.getAllMonsters = function () {
        return;
    };
    MonsterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MonsterService);
    return MonsterService;
}());



/***/ }),

/***/ "./src/app/monster/monster.component.css":
/*!***********************************************!*\
  !*** ./src/app/monster/monster.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monster/monster.component.html":
/*!************************************************!*\
  !*** ./src/app/monster/monster.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  monster works!\n</p>\n"

/***/ }),

/***/ "./src/app/monster/monster.component.ts":
/*!**********************************************!*\
  !*** ./src/app/monster/monster.component.ts ***!
  \**********************************************/
/*! exports provided: MonsterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterComponent", function() { return MonsterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonsterComponent = /** @class */ (function () {
    function MonsterComponent() {
        this.data = [];
    }
    MonsterComponent.prototype.ngOnInit = function () {
    };
    MonsterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster',
            template: __webpack_require__(/*! ./monster.component.html */ "./src/app/monster/monster.component.html"),
            styles: [__webpack_require__(/*! ./monster.component.css */ "./src/app/monster/monster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MonsterComponent);
    return MonsterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n      Brand\n    </a>\n  \n    <button class=\"navbar-toggler\" type=\"button\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n  \n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Item 1</a>\n        </li>\n  \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Item 2</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/no-undead-events.ts":
/*!*************************************!*\
  !*** ./src/app/no-undead-events.ts ***!
  \*************************************/
/*! exports provided: noUndeadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noUndeadEvents", function() { return noUndeadEvents; });
var noUndeadEvents = [
    {
        id: 1,
        title: 'Albino Dwarves',
        text: "The characters are ambushed by 1d4+3 Albino Dwarf Warriors that spring forth from a burrow.  Any character with a passive perception above 13 notices the dwarves, everyone else is surprised.  The dwarves prefer to knock out players and steal food, gold, gear rather than kill them.  They break off their attacks if anyone speaks Dwarvish or shows peaceful intentions.",
        monsters: true,
        name: "Albino Dwarf",
        rolls: 1,
        die: 4,
        extra: 3,
    },
    {
        id: 2,
        title: 'Almiraj',
        text: "Almiraj are small bunny-unicorn things.  Amny character with a pass perception of 12 or higher spots 1d6 Almiraj 60 ft away.  The almiraj run away from any creature that they can see within 30 ft of them.  Any character who sccessfully traps an Almiraj can use an action to make a DC 14 animal handling check.  On success the Almiraj becomes tame an will not run away or attack unless it feels thretened or is harmed.",
        monsters: true,
        name: "Almiraj",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 3,
        title: 'Ape',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 4,
        title: 'Ape',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Ape",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 5,
        title: 'Artus Climber',
        text: "Artus CLimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 6,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 7,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 1,
        die: 4,
        extra: -1,
    },
    {
        id: 8,
        title: 'Axe Beaks',
        text: "A flock of 1d6 +3 Axe Beaks (big ass murder ostritch birds) come crashing through the jungle.  The parrty can hear them before they arrive but can see nothing until the birds are upons them slashing at everything within range. ",
        monsters: true,
        name: "Axe Beak",
        rolls: 1,
        die: 6,
        extra: 3,
    },
    { id: 9,
        title: 'Baboons ',
        text: 'A pack of 3d6 baboons take umbrage with the players entering their territory.  They can be distracted by tossing them each a days supply of food.  Otherwise they attack.',
        monsters: false,
        name: "Baboon",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 10,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    { id: 11,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 12,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 13,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 14,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 15,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0,
    },
    { id: 16,
        title: 'Cyclops',
        text: 'A cyclops is heading towards his home in snapping turtle bay.  He is not looking for a fight but any sudden moves or hostility may trigger one.  The Cyclops knows the region around Lake Luo and the western end of the Valley of Dread quite well and it has never seen anything like Omu there before.',
        monsters: true,
        name: "Cyclops",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 17,
        title: 'Allosaurus',
        text: 'Theparty scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    { id: 18,
        title: 'Ankylosaurus',
        text: 'An ornery Ankylosaurus (club tail dino) is gorging itself on plants and attacks any thing that gets in its way.',
        monsters: true,
        name: "",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    { id: 19,
        title: 'Brontosuarus',
        text: 'A large brontosaurus lumbers towards the characters.  It doesnt notice the party and may step on them but only ifghts back in self defense',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    { id: 20,
        title: 'Deinonychus',
        text: 'A wild boar races bas the party being chased by 1d4+2 deinonychuses the predators decide the characters are more interesting than the prey.',
        monsters: true,
        name: "Deinonychus",
        rolls: 1,
        die: 4,
        extra: 2,
    },
    { id: 21,
        title: 'Deinonychus',
        text: 'A wild boar races bas the party being chased by 1d4+2 deinonychuses the predators decide the characters are more interesting than the prey.',
        monsters: true,
        name: "Deinonychus",
        rolls: 1,
        die: 4,
        extra: 2,
    },
    { id: 22,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 23,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 24,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 25,
        title: 'Stegasaurus',
        text: 'This lone stegosaurus is in a genial mood and approaches the characters out of curiosity.  Anyone who touches it triggers a swipe from its tail.',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 26,
        title: 'Stegasaurus',
        text: 'This lone stegosaurus is in a genial mood and approaches the characters out of curiosity.  Anyone who touches it triggers a swipe from its tail.',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 27,
        title: 'Triceratops',
        text: 'A triceratops who apperas to be grazing alone is actually a mother with a nearby nest containing one noncombatant hatchling and two unhatched eggs.  The mother eyes the characters supiciously but doesnt attack unless they position themselves between her and the nest.  Ifan Talor in Port Nyanzaru offers 50gp for a young triceratops or an intact egg.  Can be talked up to 150 gold on asuccessful Charisma check of 15',
        monsters: true,
        name: "Triceratops",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 28,
        title: 'Triceratops',
        text: 'A triceratops who apperas to be grazing alone is actually a mother with a nearby nest containing one noncombatant hatchling and two unhatched eggs.  The mother eyes the characters supiciously but doesnt attack unless they position themselves between her and the nest.  Ifan Talor in Port Nyanzaru offers 50gp for a young triceratops or an intact egg.  Can be talked up to 150 gold on asuccessful Charisma check of 15',
        monsters: true,
        name: "Triceratops",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 29,
        title: 'Tyranosaurus Rex',
        text: 'The characters spot a Tyranosaurus Rex 50 feet away.  On an even roll the dinosaur is locked in combat with a triceratops or stegasaurus, giant ape, a pair of giant constrictor snakes, or a mob of ghouls or zombies.  These mobs will not assist the players in any way directly but may weaken the creature so it can be killed by the players.  The characters can avoid the encounter with all players making a DC 15 stealth check.  If any player is proficient in the stealh skill all checks are made with advantage',
        monsters: true,
        name: "Tyranosaurus",
        rolls: 1,
        die: 10,
        extra: 0,
    },
    { id: 30,
        title: 'Tyranosaurus Rex',
        text: 'The characters spot a Tyranosaurus Rex 50 feet away.  On an even roll the dinosaur is locked in combat with a triceratops or stegasaurus, giant ape, a pair of giant constrictor snakes, or a mob of ghouls or zombies.  These mobs will not assist the players in any way directly but may weaken the creature so it can be killed by the players.  The characters can avoid the encounter with all players making a DC 15 stealth check.  If any player is proficient in the stealh skill all checks are made with advantage',
        monsters: true,
        name: "Tyranosaurus",
        rolls: 1,
        die: 10,
        extra: 0,
    },
    { id: 31,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 32,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 33,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 34,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 35,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 36,
        title: 'Dragon, Faerie',
        text: 'An invisible green faerie dragon takes interest in the players and follows them for a while.  If the party is in good spirits the dragon plays cute pranks on them while they camp or travel.  If the party is not upset at these tricks, the dragon reveals itself and answers three questions truthfully.  The dragon recently visited Omu, knows of the -Snake People- who occupy the place.  It also knows things about other landmarks or locations as you determine',
        monsters: true,
        name: "Faerie Dragon",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    { id: 37,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 38,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 39,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 40,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 41,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 42,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 43,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 44,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 45,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 46,
        title: 'Flail Snail',
        text: 'The characters come across the slimy trail of a Flail Snail.  A DC 10 survival check succesfully tacks the snail.',
        monsters: true,
        name: "Flail Snail",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 47,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 48,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 49,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 49,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 51,
        title: 'Fyling Monkeys',
        text: 'The sound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 53,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 53,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 54,
        title: 'Frost Giants',
        text: 'Thecharacters hear the sound of huge creatures stomping through the wilderness.  If they follow the noise they encounter a party of 3 frost giants searching the jungle accompanied by 1d4-2 winter wolves.  Roll a d10, on 9 or 10 this is Drufis search party (page 64 TOA book).  The frost giants are looking for Artus Climber and the ring of winter and they may help characters who provide useful information.  They immediately attack anyone who witholds information or who threaten to reveal their location to the flaming fist.  They carry no treasure',
        monsters: true,
        name: "Frost Giant",
        rolls: 0,
        die: 0,
        extra: 3
    },
    { id: 55,
        title: 'Frost Giants',
        text: 'Thecharacters hear the sound of huge creatures stomping through the wilderness.  If they follow the noise they encounter a party of 3 frost giants searching the jungle accompanied by 1d4-2 winter wolves.  Roll a d10, on 9 or 10 this is Drufis search party (page 64 TOA book).  The frost giants are looking for Artus Climber and the ring of winter and they may help characters who provide useful information.  They immediately attack anyone who witholds information or who threaten to reveal their location to the flaming fist.  They carry no treasure',
        monsters: true,
        name: "Frost Giant",
        rolls: 0,
        die: 0,
        extra: 3
    },
    { id: 56,
        title: 'Giant Boars',
        text: 'The party comes upon 1d4+1 giant boards foraging ahead.  SKirting aruond the boars to prevent an attack requires a DC 12 group Stealth check',
        monsters: true,
        name: "Giant Boar",
        rolls: 1,
        die: 4,
        extra: 1
    },
    { id: 57,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    { id: 58,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 59,
        title: 'Giant Scorpions',
        text: 'Any character with a passive perception above 11 notices 1d4-1 giant scorpions as they emerge from the underbrush and attack.  At the end of the encounter, any character damaged by the creatures must suceed on a DC 11 Con save or contract "Shivering Sickness" ',
        monsters: true,
        name: "Giant Scorpions",
        rolls: 1,
        die: 4,
        extra: -1,
    },
    { id: 60,
        title: 'Giant Wasps',
        text: 'A droning sound announces the pressence of 1d6 Giant Wasps before the characters see them.  The Wasps all attack at once ignoring those with heavy armor in favor of those with limited or no armor.  Any character damaged by the wasps must make a DC 11 con save at the end of combat of contract Shivering Sickness',
        monsters: true,
        name: "Giant Wasp",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 61,
        title: 'Girralons',
        text: 'Two Girallons (four-armed super gorillas) are spotted in the trees or lumnber between crumbling, vine-covered ruins.  The group can skirt past ona  DC 13 group stealth check. If the characters defeat, ro frighten the gorillons away a search of the area finds a hidden cache, roll on the cache table.  Also roll once on the treasure table to determine what the gorillans have stashed',
        monsters: true,
        name: "Girralon",
        rolls: 1,
        die: 0,
        extra: 2,
    },
    { id: 62,
        title: 'Girralons',
        text: 'Two Girallons (four-armed super gorillas) are spotted in the trees or lumnber between crumbling, vine-covered ruins.  The group can skirt past ona  DC 13 group stealth check. If the characters defeat, ro frighten the gorillons away a search of the area finds a hidden cache, roll on the cache table.  Also roll once on the treasure table to determine what the gorillans have stashed',
        monsters: true,
        name: "Girralon",
        rolls: 1,
        die: 0,
        extra: 2,
    },
    { id: 63,
        title: 'Goblins',
        text: 'A Batari patrol of a goblin boss + 2d6+2 golbins all wearing painted wooden masks.  NIGHT: any player on watch must suceed on a dc 16 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised.  DAY:  Each player must make a DC 16 insight check to spot the signs of an ambush and an eerie silence in the jungle.  Othersiwse they are surprised.  Goblins will baragain for their lives and can be coerced or forced to serve as a guide with +1 survival.',
        monsters: true,
        name: "Goblin",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 63,
        title: 'Goblins',
        text: 'A Batari patrol of a goblin boss + 2d6+2 golbins all wearing painted wooden masks.  NIGHT: any player on watch must suceed on a dc 16 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised.  DAY:  Each player must make a DC 16 insight check to spot the signs of an ambush and an eerie silence in the jungle.  Othersiwse they are surprised.  Goblins will baragain for their lives and can be coerced or forced to serve as a guide with +1 survival.',
        monsters: true,
        name: "Goblin",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 65,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    { id: 66,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    { id: 67,
        title: 'Jaculis',
        text: 'Without warning, 1d6 Jaculis (javelin like, dragon faced snakes) leap from the jungle and attack.  Any character with a passive perception of 14 or higher is not suprised. ',
        monsters: true,
        name: "Jaculi",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 68,
        title: 'Kamadans',
        text: 'The party is ambushed by 1d4-2 Kamadans( leopards with snakes growing out of them).  Any player with a passive perceptions of 16 or higher are not surpised.  A DC 15 search of the area finds a Kamadan lair.  roll a d4 , ona  4 the lair contains 1d4-1 noncombatant kamadan cubs the size of housecats.  They can be sold in Port Nyanzaru for 150 gold or 300 gol on a dc 15 charisma check.',
        monsters: true,
        name: "Kamadan",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    { id: 69,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    { id: 70,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    { id: 71,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 72,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 73,
        title: 'Mantraps',
        text: 'The characters wander into a patch of 1d4+1 mantraps (giant man eating plant). The plants are indistinguishable until they attack.  The plants are spaced 10 ft apart and must wait until players come close enough to attack.',
        monsters: true,
        name: "Mantrap",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 74,
        title: 'Night Hag',
        text: 'One of the Sewn Sisters (hags from the tomb of anihilation) has been following the party staying in the Border Ethereal.  During the partys next long rest, she materialzies, snatches one of the partys blood or hair and disappears returning to the ethereal plane.',
        monsters: true,
        name: "Night Hag",
        rolls: 1,
        die: 0,
        extra: 0,
    },
    { id: 75,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    { id: 76,
        title: 'Rare Plant',
        text: 'The characters find one or more unusall plants determind by a d6 roll.  1  - 2d6 dancing monkey fruit growing on a tree. 2 - manga bush with 2d6 ounces of leaves.  3 - 1d4 ryath roots growing in gorund. 4 4d6 sindaberries growing in a bush.  5 - wukka tree with 2d6 wukka nuts.  6 1d6 zabu growing on a dead tree.',
        monsters: false,
        name: "",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 77,
        title: 'Red Wizard',
        text: 'This group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 78,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 79,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 80,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 81,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 82,
        title: 'Spiders',
        text: 'Giant spiderwbs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 83,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 84,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 85,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 86,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 87,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 88,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 89,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 90,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 91,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 92,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 93,
        title: 'Vegepygmy',
        text: 'The characters cross path with 1d4 vegepygmys each one mounted on a Thorny.  The hunters have wandered far from their tribe.  They flee if outnumbered otherwise they attack.',
        monsters: true,
        name: "Vegepygmy",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 94,
        title: 'Wereboar',
        text: 'A wereboar masquerading as a chultan priest takes a dim view of explorers encroaching on its territory.  On its neck is a wooden labrynth carved into a wooden disk.  The symbol of Ubtao.  He might be guarding a shrine to Ubtao a grove of wukka trees or a cave it uses as a lair.  It may also have treasure.  Roll 3 trasure drops in the trasure table.',
        monsters: true,
        name: "Wereboar",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 95,
        title: 'Weretiger',
        text: 'In human forma  weretiger offers to excort the party through a very dangerous stretch of wilderness.  If they accompany her, they cannot get attacked.  She will leave after 24 hours and will not go to Omu Nangalore or Orolunga.',
        monsters: true,
        name: "Weretiger",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 96,
        title: 'Winterscape',
        text: 'The characters stumble intoa  112 ft radius sphere of winter weather.  Artus used the ring of winter to drive off monsters.  All plants are covered in glittering ice and frost.  The temperature in here is a biting -30 degrees farenhiet and cannot be dispelled.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 97,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 98,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 99,
        title: 'Zhentarim',
        text: 'A zhent assassin with a fling snake pet leads a priest, 2d6 thugs and 1d6 tribal warriors through the wilderness in search of Artus Cimber and The Ring of Winter.  If Artus is with the party the Zhents attack to get the ring otherwise they show little interest.  Roll on the treasure table to determine what if anything they carry',
        monsters: true,
        name: "Assassin",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 100,
        title: 'Zorbos',
        text: 'If his encounter happens in the wild the party stumbled upon 2d6 Zorbos in wukka trees who attack if the party makes threatening motions.  If during camp, the Zorbos drop from surrounding trees and attack.',
        monsters: true,
        name: "Zorbo",
        rolls: 2,
        die: 6,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/no-undead.service.ts":
/*!**************************************!*\
  !*** ./src/app/no-undead.service.ts ***!
  \**************************************/
/*! exports provided: NoUndeadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndeadService", function() { return NoUndeadService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster.service */ "./src/app/monster.service.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _no_undead_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-undead-events */ "./src/app/no-undead-events.ts");
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NoUndeadService = /** @class */ (function () {
    function NoUndeadService(_rollService, weatherService, monsterService, http) {
        var _this = this;
        this._rollService = _rollService;
        this.weatherService = weatherService;
        this.monsterService = monsterService;
        this.http = http;
        this.monsters$ = this.http.get('./assets/monsters.json').subscribe(function (data) {
            _this.returned = data;
            console.log(_this.returned);
            console.log("working");
        });
        this.noUndead = _no_undead_events__WEBPACK_IMPORTED_MODULE_3__["noUndeadEvents"];
        this.rolls = {
            monsters: [],
            monsterNumbers: [],
            dice: [],
        };
    }
    NoUndeadService.prototype.getNoUndead = function () {
        this.rolls.monsters = [];
        this.rolls.dice = [];
        this.rolls.monsterName = "";
        for (var i = 0; i < 3; i++) {
            var dieRoll = this._rollService.roll20();
            if (dieRoll >= 18) {
                var x = this._rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.noUndead[x - 1]);
                this.rolls.monsterName = this.noUndead[x - 1].name;
                if (this.rolls.monsterName) {
                    var currentMonsterUrl = this.monsterService.getMonsterUrl(this.rolls.monsterName);
                    console.log(currentMonsterUrl + "PLACE WHERE API WILL BE CALLED");
                    var monsterStats = this.getCurrentMonster();
                    console.log(monsterStats + "DATA BROUGHT BACK FROM API");
                    this.rolls.monsters.push(monsterStats);
                    console.log(this.response);
                }
                ;
            }
            else
                this.rolls.dice.push("nothing happened");
        }
        ;
        if (this.rolls.monsters) {
            console.log(this.rolls.monsters + "MONSTER STATS$$$$$$$$$$$");
        }
        else
            console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%");
        // this.rolls.push(this.weatherService.getWeather());
        return this.rolls;
    };
    ;
    NoUndeadService.prototype.getCurrentMonster = function () {
    };
    NoUndeadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_roll_service__WEBPACK_IMPORTED_MODULE_4__["RollService"], _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], _monster_service__WEBPACK_IMPORTED_MODULE_1__["MonsterService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], NoUndeadService);
    return NoUndeadService;
}());



/***/ }),

/***/ "./src/app/river.ts":
/*!**************************!*\
  !*** ./src/app/river.ts ***!
  \**************************/
/*! exports provided: riverEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverEvents", function() { return riverEvents; });
var riverEvents = [
    {
        id: 1,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 2,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 3,
        title: 'Aarakocra',
        text: "Any character with a passive Widsom (perception) score of 15 or higher spots 1d4+1 aarakocra flying overhead.  These creatures are scouts from Kir Sabal or another aeire.  They observe the party from a safe distance but dont approach unless the characters demonstrate peaceful intentions.  The bird folk are friendly and can point characrers in the direction of nearby landmarks.",
        monsters: true,
        name: "Aarakocra",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 4,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 5,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 6,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 7,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 8,
        title: 'Artus Climber',
        text: "Artus CLimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 9,
        title: 'Artus Climber',
        text: "Artus CLimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 10,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 11,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 12,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 13,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 14,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 15,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 16,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 17,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 18,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 19,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 20,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 21,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 22,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 23,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 24,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 25,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 26,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 27,
        title: 'Brontosuarus',
        text: 'A large brontosaurus lumbers towards the characters.  It doesnt notice the party and may step on them but only ifghts back in self defense',
        monsters: true,
        name: "Brontosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 28,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 29,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 30,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 28,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 29,
        title: 'Plesiosuarus',
        text: 'Two plesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 30,
        title: 'Plesiosuarus',
        text: 'Two plesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 31,
        title: 'Plesiosuarus',
        text: 'Two plesiosaurus are fighting over a dead giant octopus.  If the characters are on a river the creatures are spotted at a distance of 300 ft.  To paddle to safety, one character must succeed ona DC 13 Athletics check.  Other characters in the canoe mayu use the Help action to assist.  Canoes that dont reach the shore are flipped and destroyed by the dinosaurs who then attack.',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 32,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 33,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 34,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 35,
        title: 'Quetzalcoatlus',
        text: 'A fight of 1d4 Quetzalcoatlus are spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Quetzalcoatlus ",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 36,
        title: 'Quetzalcoatlus',
        text: 'A fight of 1d4 Quetzalcoatlus are spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Quetzalcoatlus ",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 37,
        title: 'Dragon, Faerie',
        text: 'An invisible green faerie dragon takes interest in the players and follows them for a while.  If the party is in good spirits the dragon plays cute pranks on them while they camp or travel.  If the party is not upset at these tricks, the dragon reveals itself and answers three questions truthfully.  The dragon recently visited Omu, knows of the -Snake People- who occupy the place.  It also knows things about other landmarks or locations as you determine',
        monsters: true,
        name: "Faerie Dragon",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 38,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 39,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 40,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 41,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 42,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 43,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 44,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 45,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 46,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 47,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 48,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 49,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 50,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 51,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 52,
        title: 'Fyling Monkeys',
        text: 'The sound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 53,
        title: 'Fyling Monkeys',
        text: 'The sound of flapping wings heralds the arrival of 3d6 flying monkies which swoop through the adventurers in a wave of grasping hands and feet.  Each character must make a dc 12 dex save or lose a useful peice of gear.',
        monsters: true,
        name: "Flying Monkey",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 54,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 55,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 56,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 57,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 58,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 59,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    {
        id: 60,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    {
        id: 61,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 62,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 63,
        title: 'Giant Wasps',
        text: 'A droning sound announces the pressence of 1d6 Giant Wasps before the characters see them.  The Wasps all attack at once ignoring those with heavy armor in favor of those with limited or no armor.  Any character damaged by the wasps must make a DC 11 con save at the end of combat of contract Shivering Sickness',
        monsters: true,
        name: "Giant Wasp",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 64,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    {
        id: 65,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    {
        id: 66,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    {
        id: 67,
        title: 'Jaculis',
        text: 'Without warning, 1d6 Jaculis (javelin like, dragon faced snakes) leap from the jungle and attack.  Any character with a passive perception of 14 or higher is not suprised. ',
        monsters: true,
        name: "Jaculi",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 68,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 69,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 70,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 71,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    {
        id: 72,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    {
        id: 73,
        title: 'Rare Plant',
        text: 'The characters find one or more unusall plants determind by a d6 roll.  1  - 2d6 dancing monkey fruit growing on a tree. 2 - manga bush with 2d6 ounces of leaves.  3 - 1d4 ryath roots growing in gorund. 4 4d6 sindaberries growing in a bush.  5 - wukka tree with 2d6 wukka nuts.  6 1d6 zabu growing on a dead tree.',
        monsters: false,
        name: "",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 74,
        title: 'Red Wizard',
        text: 'This group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 75,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 76,
        title: 'Sea Hag',
        text: 'Thecharacters encounter 3 sea hags that compromise a coven.  They lure the party into the water by pretending to be drowning humans.  If the characters defeat the sea hags and search the area roll three times on the Treasure Table',
        monsters: true,
        name: "Sea Hag",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    {
        id: 80,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 81,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 82,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 83,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 84,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 85,
        title: 'Swarm Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 86,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 87,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 88,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 89,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 90,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 91,
        title: 'Swarm Quippers',
        text: '1d6 quippers in the water',
        monsters: true,
        name: "Swarm Quippers",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 92,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 93,
        title: 'Tabaxi Hunter',
        text: 'Anyplayer with a passive perception score higher than 15 notices a Tabaxi Hunter from a vantage point 300 ft away. If the hunter remains unseen it may follow the characters for a while, assisting them in a tough encounter.  If this encounter takes palce in Omu, see chapter 3 for information on the Tabaxi encountered there.',
        monsters: true,
        name: "Tabaxi Hunter",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 94,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 95,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 96,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    {
        id: 97,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 98,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 99,
        title: 'Zhentarim',
        text: 'A zhent assassin with a fling snake pet leads a priest, 2d6 thugs and 1d6 tribal warriors through the wilderness in search of Artus Cimber and The Ring of Winter.  If Artus is with the party the Zhents attack to get the ring otherwise they show little interest.  Roll on the treasure table to determine what if anything they carry',
        monsters: true,
        name: "Assassin",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 100,
        title: 'Zhentarim',
        text: 'A zhent assassin with a fling snake pet leads a priest, 2d6 thugs and 1d6 tribal warriors through the wilderness in search of Artus Cimber and The Ring of Winter.  If Artus is with the party the Zhents attack to get the ring otherwise they show little interest.  Roll on the treasure table to determine what if anything they carry',
        monsters: true,
        name: "Assassin",
        rolls: 3,
        die: 6,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/roll.service.ts":
/*!*********************************!*\
  !*** ./src/app/roll.service.ts ***!
  \*********************************/
/*! exports provided: RollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollService", function() { return RollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RollService = /** @class */ (function () {
    function RollService() {
    }
    RollService.prototype.roll4 = function () {
        return 1 * (Math.floor(Math.random() * 4) + 1);
    };
    RollService.prototype.roll6 = function () {
        return 1 * (Math.floor(Math.random() * 6) + 1);
    };
    RollService.prototype.roll8 = function () {
        return 1 * (Math.floor(Math.random() * 8) + 1);
    };
    RollService.prototype.roll10 = function () {
        return 1 * (Math.floor(Math.random() * 10) + 1);
    };
    RollService.prototype.roll12 = function () {
        return 1 * (Math.floor(Math.random() * 10) + 1);
    };
    RollService.prototype.roll20 = function () {
        return 1 * (Math.floor(Math.random() * 20) + 1);
    };
    RollService.prototype.roll100 = function () {
        return 1 * (Math.floor(Math.random() * 100) + 1);
    };
    RollService.prototype.roll = function (sides, number) {
        var result = 0;
        for (var i = 0; i < number; i++) {
            var roll = (1 * (Math.floor(Math.random() * sides) + 1));
            console.log(roll + " <------roll");
            result = result + roll;
            console.log(result + "<------ result");
        }
        return result;
    };
    RollService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RollService);
    return RollService;
}());



/***/ }),

/***/ "./src/app/roll/roll.component.css":
/*!*****************************************!*\
  !*** ./src/app/roll/roll.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roll/roll.component.html":
/*!******************************************!*\
  !*** ./src/app/roll/roll.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <button (click)=\"roll20()\">Roll some dice!</button>\n</p>\n<h2>{{this.result}}</h2>\n"

/***/ }),

/***/ "./src/app/roll/roll.component.ts":
/*!****************************************!*\
  !*** ./src/app/roll/roll.component.ts ***!
  \****************************************/
/*! exports provided: RollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollComponent", function() { return RollComponent; });
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RollComponent = /** @class */ (function () {
    function RollComponent(_rollService) {
        this._rollService = _rollService;
    }
    RollComponent.prototype.roll20 = function () {
        this.result = this._rollService.roll20();
    };
    RollComponent.prototype.ngOnInit = function () {
    };
    RollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roll',
            template: __webpack_require__(/*! ./roll.component.html */ "./src/app/roll/roll.component.html"),
            styles: [__webpack_require__(/*! ./roll.component.css */ "./src/app/roll/roll.component.css")]
        }),
        __metadata("design:paramtypes", [_roll_service__WEBPACK_IMPORTED_MODULE_0__["RollService"]])
    ], RollComponent);
    return RollComponent;
}());



/***/ }),

/***/ "./src/app/swamp.ts":
/*!**************************!*\
  !*** ./src/app/swamp.ts ***!
  \**************************/
/*! exports provided: swampEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swampEvents", function() { return swampEvents; });
var swampEvents = [
    {
        id: 1,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 2,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 3,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 4,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 5,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 6,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 7,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 8,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 9,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 10,
        title: 'Aldani',
        text: "The characters are shadowed by 1d4 aldani which are noticed by a passive perception of 13.  The Aldani don't communicate and wont fight unless the characters refuse to take a bribe to leave the area.  They will aid the characters only if offered something of great value in return",
        monsters: true,
        name: "Aldani",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 11,
        title: 'Artus Climber',
        text: "Artus CLimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 12,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 13,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 14,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 15,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    {
        id: 16,
        title: 'Chwinga',
        text: 'A chwinga takes an interest in the characters. It attempts to steal something valuable from an ungauarded pack or canoe but is noticed by any character witha  passive perceptin score of 17 or higher.  The chwinga always leaves something in return, a pretty shell, some twigs, or an uncut gemstone (10gold)',
        monsters: true,
        name: 'Chwinga',
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 17,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 18,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 19,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 20,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 21,
        title: 'Crocodiles',
        text: 'Any passive perception over 14 notices 1d4 crocodiles coming towards the party.  All other characters are surprised.  The corcodiles can capsize a canoe with a successful dc 15 strength check',
        monsters: true,
        name: 'Crocodile',
        rolls: 1,
        die: 4,
        extra: 0
    },
    {
        id: 22,
        title: 'Allosaurus',
        text: 'Theparty scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    {
        id: 23,
        title: 'Ankylosaurus',
        text: 'An ornery Ankylosaurus (club tail dino) is gorging itself on plants and attacks any thing that gets in its way.',
        monsters: true,
        name: "",
        rolls: 1,
        die: 0,
        extra: 3
    },
    {
        id: 24,
        title: 'Brontosuarus',
        text: 'A large brontosaurus lumbers towards the characters.  It doesnt notice the party and may step on them but only ifghts back in self defense',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 25,
        title: 'Brontosuarus',
        text: 'A large brontosaurus lumbers towards the characters.  It doesnt notice the party and may step on them but only ifghts back in self defense',
        monsters: true,
        name: "plsiosaurus",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 26,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 27,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 28,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 29,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 30,
        title: 'Dimetrodon',
        text: 'a pack of 2d6 dimetrodon are spotted on a sunny riverbank or on rocks along the water.  Roll any die.  on an odd number the dinosuars attack the party if they come within 100 feet.  Otherwise they pay them no notice',
        monsters: true,
        name: "Dimetrodon",
        rolls: 2,
        die: 6,
        extra: 0
    },
    {
        id: 31,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 32,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 33,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 34,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 35,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 36,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 37,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 38,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 39,
        title: 'Eblis',
        text: 'If the party is on the move while this encounter takes place they stumble upone 1d4+1 eblis (evil, reincarnated people as ostritches) living in reed huts built on stilts abouve the swamp, marsh, or pond.  The Eblis will attack any weak looking, or sick characters but offer to trade precious gemstones or information if faced with a well armed, healthy group.  For 50 gold they point the party in direction of a nearby landmark.  If the characters defeat the Eblis and search the huts roll once on the Treasure table.  If this encounter occurs while the party is camped, the Eblis sneak into the camp at night and attack.',
        monsters: true,
        name: "Eblis",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    {
        id: 40,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 41,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 42,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 43,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 44,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 45,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 46,
        title: 'Flail Snail',
        text: 'The characters come across the slimy trail of a Flail Snail.  A DC 10 survival check succesfully tacks the snail.',
        monsters: true,
        name: "Flail Snail",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 47,
        title: 'Flail Snail',
        text: 'The characters come across the slimy trail of a Flail Snail.  A DC 10 survival check succesfully tacks the snail.',
        monsters: true,
        name: "Flail Snail",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 48,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 49,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 50,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 51,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 52,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 53,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 54,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    {
        id: 55,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    {
        id: 56,
        title: 'Giant Frogs',
        text: 'These 2d6 giant frogs have come together in bunger and tro to eat eeverything that crosses their path.  The characters have plenty of warning nas the amphibians hop noisly towards them',
        monsters: true,
        name: "Giant Frog",
        rolls: 2,
        die: 6,
        extra: 3
    },
    {
        id: 57,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 58,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 59,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 60,
        title: 'Giant Snapping Turtle',
        text: 'Theplayers spot a giant snapping turtle sunning itself near the water.  It attacks any player that comes within 30ft',
        monsters: true,
        name: "Giant Snapping Turtle",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    {
        id: 61,
        title: 'Giant Crocodile',
        text: 'Before it rises out of the water the giant crocodile makes a stealth check vs players passive perception.  Any player lower than the stealth is surprised. ',
        monsters: true,
        name: "Giant Crocodile",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 62,
        title: 'Giant Wasps',
        text: 'A droning sound announces the pressence of 1d6 Giant Wasps before the characters see them.  The Wasps all attack at once ignoring those with heavy armor in favor of those with limited or no armor.  Any character damaged by the wasps must make a DC 11 con save at the end of combat of contract Shivering Sickness',
        monsters: true,
        name: "Giant Wasp",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 63,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    {
        id: 64,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    {
        id: 65,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 66,
        title: 'Lizardfolk',
        text: 'Thecharacters encounter 2d4 lizardfolk and one lizardfolk shaman.  They belong to a nearby tribe in the Valley of Dread and can be appeased with food - 1 days supply of food per lizardfolk, otherwise they attack',
        monsters: true,
        name: "Lizardfolk",
        rolls: 2,
        die: 4,
        extra: 0,
    },
    {
        id: 67,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 68,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 69,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 70,
        title: 'Mephits',
        text: 'The characters might encounter magma mephits, mud mephits, smoke mephits or steam mephits each appearing as a group of 2d6.  The mephits dont attack unless they outnumber the party 2 to 1.  They are reluctant to help unless they are outnumbered',
        monsters: true,
        name: "Mephits",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 71,
        title: 'Night Hag',
        text: 'One of the Sewn Sisters shadows the party while staying in the border ethereal during the parties next long rest the night hag materializes and snatches some blood or hair before returning to the ethereal plane.',
        monsters: true,
        name: "Night Hag",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    {
        id: 72,
        title: 'Rare Plant',
        text: 'The characters find one or more unusall plants determind by a d6 roll.  1  - 2d6 dancing monkey fruit growing on a tree. 2 - manga bush with 2d6 ounces of leaves.  3 - 1d4 ryath roots growing in gorund. 4 4d6 sindaberries growing in a bush.  5 - wukka tree with 2d6 wukka nuts.  6 1d6 zabu growing on a dead tree.',
        monsters: false,
        name: "",
        rolls: 1,
        die: 6,
        extra: 0
    },
    {
        id: 73,
        title: 'Shambling Mound',
        text: 'Roll any die whena  shambling mound encounter occurs.  Even, the characters hear the mound rumbling through the jungle.  Odd, it lies in wait to ambush with a perception of 15 required to spot it',
        monsters: true,
        name: "Shambling Mound",
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 74,
        title: 'Shambling Mound',
        text: 'Roll any die whena  shambling mound encounter occurs.  Even, the characters hear the mound rumbling through the jungle.  Odd, it lies in wait to ambush with a perception of 15 required to spot it',
        monsters: true,
        name: "Shambling Mound",
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 75,
        title: 'Shambling Mound',
        text: 'Roll any die whena  shambling mound encounter occurs.  Even, the characters hear the mound rumbling through the jungle.  Odd, it lies in wait to ambush with a perception of 15 required to spot it',
        monsters: true,
        name: "Shambling Mound",
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 76,
        title: 'Shambling Mound',
        text: 'Roll any die whena  shambling mound encounter occurs.  Even, the characters hear the mound rumbling through the jungle.  Odd, it lies in wait to ambush with a perception of 15 required to spot it',
        monsters: true,
        name: "Shambling Mound",
        rolls: 1,
        die: 1,
        extra: 0
    },
    {
        id: 77,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 78,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 79,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 80,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 81,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 82,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 83,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 84,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 85,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 86,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 87,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 88,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 89,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    {
        id: 90,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 91,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 92,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 93,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 94,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    {
        id: 95,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 96,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 97,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 98,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    {
        id: 99,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 100,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/undead-events.ts":
/*!**********************************!*\
  !*** ./src/app/undead-events.ts ***!
  \**********************************/
/*! exports provided: undeadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undeadEvents", function() { return undeadEvents; });
var undeadEvents = [
    {
        id: 1,
        title: 'Albino Dwarves',
        text: "The characters are ambushed by 1d4+3 Albino Dwarf Warriors that spring forth from a burrow.  Any character with a passive perception above 13 notices the dwarves, everyone else is surprised.  The dwarves prefer to knock out players and steal food, gold, gear rather than kill them.  They break off their attacks if anyone speaks Dwarvish or shows peaceful intentions.",
        monsters: true,
        name: "Albino Dwarf",
        rolls: 1,
        die: 4,
        extra: 3,
    },
    {
        id: 2,
        title: 'Artus Cimber',
        text: "Artus Cimber with or without his saurial traveling companion DragonBait, can be encounterd almost anywhere.  He may use the ring of winter to save the characters.  He is friendly  ",
        monsters: true,
        name: "Artus Climber",
        rolls: 1,
        die: 1,
        extra: 0,
    },
    {
        id: 3,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 4,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 5,
        title: 'Assassin Vine',
        text: "The characters come across the path of 1d4-1 assassin vines.  The vines are indistinguishable from normal plants and cannot be spotted by normal perception checks but the plants draw carrion to them so they party may smell dead corpses.  At night the plants may snake their wau into the players camp to drag them away",
        monsters: true,
        name: "Assassin Vine",
        rolls: 2,
        die: 4,
        extra: -1,
    },
    {
        id: 6,
        title: 'Axe Beaks',
        text: "A flock of 1d6 +3 Axe Beaks (big ass murder ostritch birds) come crashing through the jungle.  The parrty can hear them before they arrive but can see nothing until the birds are upons them slashing at everything within range. ",
        monsters: true,
        name: "Axe Beak",
        rolls: 1,
        die: 6,
        extra: 3,
    },
    {
        id: 7,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 8,
        title: 'Cache',
        text: 'The party finds a Cache of supplies left behind by other explorers.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    { id: 9,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 10,
        title: 'Cannibals',
        text: 'Chultan cannibals prowl the jungle in small groups, killing and eating zombies while steering clear of more powerful, faster undead.  Abandoned by their Gods, the cannibals have returned to worship Dendar the night Serpent and they pay tribute to Ras Nsi in exchange for his favor and protection.  They have a blue triangle painted on their forehead (Ras Nsi) and do venture into Omu.   Day: 3d6 Canibals feast on a zombie, the players see them.  Night: The cannibals sneak into the players camp.  DC10 Perception check by the player on guard notices.',
        monsters: true,
        name: 'Tribal Warrior',
        rolls: 3,
        die: 6,
        extra: 0
    },
    { id: 11,
        title: 'Allosaurus',
        text: 'Theparty scent atteracts 1d4-1 allorsaurus.  Any characters who succeed ona DC 15 Survival check find a safe place to hide, high branch, hole etc, where the "honkers" cant reach them',
        monsters: true,
        name: 'Allosaurus',
        rolls: 1,
        die: 4,
        extra: -1
    },
    {
        id: 12,
        title: 'Ankylosaurus',
        text: 'An ornery Ankylosaurus (club tail dino) is gorging itself on plants and attacks any thing that gets in its way.',
        monsters: true,
        name: "",
        rolls: 1,
        die: 0,
        extra: 3,
    },
    {
        id: 13,
        title: 'Deinonychus',
        text: 'A wild boar races bas the party being chased by 1d4+2 deinonychuses the predators decide the characters are more interesting than the prey.',
        monsters: true,
        name: "Deinonychus",
        rolls: 1,
        die: 4,
        extra: 2,
    },
    {
        id: 14,
        title: 'Hadrosaurus',
        text: 'A herd of 3d6 hadrosauruses are grazing nearby with 1d6 non combatant young.  The adults dont attack onless attacked or antagonized.  The young are Small beasts that can be sold to Ifan Talroa in Port Nyanzaru for 50 gp each, or for 100gp each if the player succeeds ona dc 15 charisma check.  The young dinosaurs are easy to handle if seperated from their parents but the adults fight if their children are captured.',
        monsters: true,
        name: "Hadrosaurus",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    {
        id: 15,
        title: 'Pternadon',
        text: 'A fock of 2d6 Pternadon is spotted overhead.  They keep their distance and only attak if threatned',
        monsters: true,
        name: "Pternadon",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 16,
        title: 'Stegasourus',
        text: 'This lone stegosaurus is in a genial mood and approaches the characters out of curiosity.  Anyone who touches it triggers a swipe from its tail.',
        monsters: true,
        name: "Stegasourus",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    {
        id: 17,
        title: 'Triceratops',
        text: 'A triceratops who apperas to be grazing alone is actually a mother with a nearby nest containing one noncombatant hatchling and two unhatched eggs.  The mother eyes the characters supiciously but doesnt attack unless they position themselves between her and the nest.  Ifan Talor in Port Nyanzaru offers 50gp for a young triceratops or an intact egg.  Can be talked up to 150 gold on asuccessful Charisma check of 15',
        monsters: true,
        name: "Triceratops",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 18,
        title: 'Tyranosaurus Rex',
        text: 'The characters spot a Tyranosaurus Rex 50 feet away.  On an even roll the dinosaur is locked in combat with a triceratops or stegasaurus, giant ape, a pair of giant constrictor snakes, or a mob of ghouls or zombies.  These mobs will not assist the players in any way directly but may weaken the creature so it can be killed by the players.  The characters can avoid the encounter with all players making a DC 15 stealth check.  If any player is proficient in the stealh skill all checks are made with advantage',
        monsters: true,
        name: "Tyranosaurus",
        rolls: 1,
        die: 10,
        extra: 0,
    },
    { id: 19,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 20,
        title: 'Emerald Enclave',
        text: 'Thecharacters stumble upon a band of Emerald Enclave scouts OR one of their outposts.  Choose whichever works best.  SCOUTS: The party meets 1d4+1 members of the EMerald Enclave working to rid the jungle of its undead menace.  The group works with a priest of Mielikki, but all other members are scouts.' +
            "If on of the characters has died recently you can use this to introduce a new character, a member of the emerald enclave, one of the scouts, or someone who has hired the m or been rescued by them.  The scouts will trade information on an equal basis with a nopn evil party.  The scouts can also be convinced to join the party for three days by succeeding on a DC 12 group Charisma check." +
            "OUTPOST: Any character with a  passive perception of 13 or higher spots a wooden platform in a tree 2d6 * 5 feet in the air and requires a dc 12 strength check to climb.  The platform is sturdy and can hold up to six characters and their gear ",
        monsters: true,
        name: "Scout",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 21,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 22,
        title: 'Explorers, dead',
        text: 'Chult is strewn with the bones and bodies of those who have fallen victim to its terrors. Roll once on the dead adventureres table to see what the players have found, then once on the treasure table to acertain what the explorers were carrying.',
        monsters: true,
        name: "Dead Adventurers",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 23,
        title: 'Explorers',
        text: 'Thepart runs upon another band of explorers consisting of a mage, a priest, a scout, and 1d6 tribal warriors.  Roll d6 to determine the groups situation.  1-2: Explorers are lost and hungry, 3-4 The eplxorers are in good shape but are actively being hunted by firenewts, ghouls, grungs, or goblins. 5 They are healthy and intent on epxloring the enarest landmark and are headed there.  6 they are healthy and headed  back to port Nyanzaru to resupply',
        monsters: true,
        name: "Tribal Warrior",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 24,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 25,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 26,
        title: 'Flaming Fist',
        text: 'FLaing Fist know the jungle dangers better than most.  A typical band consists of knight or veterna leading a band of 2d6 guards, a ascout, and an acolyte and 1d4 deinonychuses trained to fight and hunt alongside their handlers.   The band is friendly to anyone with a charter of exploration issued by Liara Portyr at Fort Belurian.  Otherwise, the band attempts to confiscate the partys gear and tells them to resupply at Fort Beluarian',
        monsters: true,
        name: "guard",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 27,
        title: 'Fyling Snakes',
        text: 'Roll any die.  On even the party encounters 1 flying snake, on odd they encounter 2d6 flying snakes.  These snakes only attack when threatened.  A flying snake that has been successfully grappled can be stuffed in a bag or container.  After 1 hour of confinement the snake calms down.  A character witha  DC 13 Animal Handling check can remove a calm snake form the container without causing it to attack or fly away.  Ifan Tal Roa will pay 25 gold per snake in Port Nyanzaru and cahn be convinced to buy them for 50g old ona  dc 15 charisma check ',
        monsters: true,
        name: "Flying Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 28,
        title: 'Giant Lizards',
        text: 'Thecharacters come across 1d6 giant lizards sunning themselves on warm rocks.  The lizards pose no threat to the characters unless threatened and are to set in their ways to be tamed',
        monsters: true,
        name: "Giant Lizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 29,
        title: 'Giant Wasps',
        text: 'A droning sound announces the pressence of 1d6 Giant Wasps before the characters see them.  The Wasps all attack at once ignoring those with heavy armor in favor of those with limited or no armor.  Any character damaged by the wasps must make a DC 11 con save at the end of combat of contract Shivering Sickness',
        monsters: true,
        name: "Giant Wasp",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 30,
        title: 'Girralons',
        text: 'Two Girallons (four-armed super gorillas) are spotted in the trees or lumnber between crumbling, vine-covered ruins.  The group can skirt past ona  DC 13 group stealth check. If the characters defeat, ro frighten the gorillons away a search of the area finds a hidden cache, roll on the cache table.  Also roll once on the treasure table to determine what the gorillans have stashed',
        monsters: true,
        name: "Girralon",
        rolls: 1,
        die: 0,
        extra: 2,
    },
    { id: 31,
        title: 'Velociraptors',
        text: 'A pck of 3d6 velociraptors burst from behind cover and attack. MAke a stealth check for the dinosaurs with advantage.  Any character whos passive wisdom is higher than the stealth check is not surprised',
        monsters: true,
        name: "Velociraptor",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 32,
        title: 'Goblins',
        text: 'A Batari patrol of a goblin boss + 2d6+2 golbins all wearing painted wooden masks.  NIGHT: any player on watch must suceed on a dc 16 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised.  DAY:  Each player must make a DC 16 insight check to spot the signs of an ambush and an eerie silence in the jungle.  Othersiwse they are surprised.  Goblins will baragain for their lives and can be coerced or forced to serve as a guide with +1 survival.',
        monsters: true,
        name: "Goblin",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 33,
        title: 'Goblins',
        text: 'A Batari patrol of a goblin boss + 2d6+2 golbins all wearing painted wooden masks.  NIGHT: any player on watch must suceed on a dc 16 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised.  DAY:  Each player must make a DC 16 insight check to spot the signs of an ambush and an eerie silence in the jungle.  Othersiwse they are surprised.  Goblins will baragain for their lives and can be coerced or forced to serve as a guide with +1 survival.',
        monsters: true,
        name: "Goblin",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 34,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    { id: 35,
        title: 'Grungs',
        text: 'A grung hunting party led by a Grung ELite Warrior and 2d6 grungs (frog people).  DAY:  A DC 14 perception check spots an ambush, otherwise the players are surprised.  NIGHT: any player on watch must suceed on a dc 14 perception check with disadvantage to spot the goblins setting up an ambush.  If no one succeed the entire party is suprised. If a grung is captured, he will offer to lead the characters to treasure in exchange for freedom.  The treasure is a cache one half mile from the players.  Roll once on the cahce table, ',
        monsters: true,
        name: "Grung",
        rolls: 2,
        die: 6,
        extra: 1,
    },
    { id: 36,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 37,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 38,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 39,
        title: 'Mad Monkey Mist',
        text: 'A blue mist floats toward the players covering 1d6 20 ft squares.  Any character with a passive wisdom of 13 spots the mist and can warn the other palyers.  At night, the mist drifts through camp at 5ft per round.  Characters who come in contact with the mist contract Mad Monkey Fever',
        monsters: true,
        name: "Mad Monkey Mist",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 40,
        title: 'Mantraps',
        text: 'The characters wander into a patch of 1d4+1 mantraps (giant man eating plant). The plants are indistinguishable until they attack.  The plants are spaced 10 ft apart and must wait until players come close enough to attack.',
        monsters: true,
        name: "Mantrap",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 41,
        title: 'Mantraps',
        text: 'The characters wander into a patch of 1d4+1 mantraps (giant man eating plant). The plants are indistinguishable until they attack.  The plants are spaced 10 ft apart and must wait until players come close enough to attack.',
        monsters: true,
        name: "Mantrap",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 42,
        title: 'Night Hag',
        text: 'One of the Sewn Sisters (hags from the tomb of anihilation) has been following the party staying in the Border Ethereal.  During the partys next long rest, she materialzies, snatches one of the partys blood or hair and disappears returning to the ethereal plane.',
        monsters: true,
        name: "Night Hag",
        rolls: 1,
        die: 0,
        extra: 0,
    },
    { id: 43,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    { id: 44,
        title: 'Pterrafolk',
        text: 'Looming in the sky 1d4+2 pterafolk watch the characters every move and wait until they blunder into danger, the next time an encounter occurs, the Pterafolk attack launching javelin attacks and staying out of melee range.  With firm resistance the pterafolk retreat but may regroup to attack at your discretion',
        monsters: true,
        name: "Pterafolk",
        rolls: 1,
        die: 4,
        extra: 2
    },
    { id: 45,
        title: 'Rare Plant',
        text: 'The characters find one or more unusall plants determind by a d6 roll.  1  - 2d6 dancing monkey fruit growing on a tree. 2 - manga bush with 2d6 ounces of leaves.  3 - 1d4 ryath roots growing in gorund. 4 4d6 sindaberries growing in a bush.  5 - wukka tree with 2d6 wukka nuts.  6 1d6 zabu growing on a dead tree.',
        monsters: false,
        name: "",
        rolls: 1,
        die: 6,
        extra: 0
    },
    { id: 46,
        title: 'Red Wizard',
        text: 'This group consists of 1 red wizard, LE, human mage, 1d6 guards, and 1d6 skeletons, all answerable to Velinda Shadowmantle.  If this encounter happens outside of the city of Omu, they are reinforcements on their way to the city.  If inside Omu the party is searching the citry for shrines (chapter 3).  They are not spoiling for a fight and if things look grim, they will surrender and offer up a crudely drawn map of Chult with the location of known undead hordes.',
        monsters: true,
        name: "Red Wizard",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 47,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 48,
        title: 'Snake, Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "constrictor snake",
        rolls: 0,
        die: 0,
        extra: 0
    },
    { id: 49,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0
    },
    { id: 50,
        title: 'Snake, Giant Constrictor',
        text: 'A constrictor snake attacks a random party member from hiding.  The character is suprised unless their passive perception is greater than 11',
        monsters: true,
        name: "Giant Constrictor Snake",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 51,
        title: 'Spiders',
        text: 'Giant spiderwbs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 52,
        title: 'Spiders',
        text: 'Giant spiderwebs are easily concealed in Chults dense jungles and swamps.  Passive perception of 13 or higher alerts the characeters in time for an encounter with 1d6 giant spiders.  Otherwise, the lead party member stumbles into an ambush and becomes grappled with a escape dc of 12 - the spiders have suprise and 100s of harmless baby spiders crawl through the webs',
        monsters: true,
        name: "Giant Spider",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 53,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 54,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 55,
        title: 'Statue of Ubtao',
        text: 'see page 202',
        monsters: false,
        name: "",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 56,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 57,
        title: 'Stirges',
        text: 'Chut is rich in caves, ruins, and hollow logs where stirges can hide.  By day, the party disturbs 2d6 stirges as they move through the jungke.  By night, the Stirges descend upon them',
        monsters: true,
        name: "Stirge",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 58,
        title: 'Su Monster',
        text: 'the party comes across 1d4+1 su monsters.  The su monsters approach cautiuosly and if can get close use psychic blasts.  If the fight goes against them they retreat to their nest and have treasure.  Roll once on the treasure table to find out what it is.',
        monsters: true,
        name: "Su Monster",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 59,
        title: 'Su Monster',
        text: 'the party comes across 1d4+1 su monsters.  The su monsters approach cautiuosly and if can get close use psychic blasts.  If the fight goes against them they retreat to their nest and have treasure.  Roll once on the treasure table to find out what it is.',
        monsters: true,
        name: "Su Monster",
        rolls: 1,
        die: 4,
        extra: 1,
    },
    { id: 60,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 61,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 62,
        title: 'Swarm of Bats',
        text: 'Ruis, hallow trees, and hidden caves all serve as hiding places for swarms of bats.  The party disturbs 1d4 swarm of bats that have become unnaturally aggressive after feasting on undead flesh',
        monsters: true,
        name: "Swarm of Bats",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 63,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 64,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 65,
        title: 'Swarm of Insects',
        text: 'The characters are beset bny 1d4 swams of centepedes.  Any cahracter damaged by a sawrm must suceed on a dc 11 con save or get SHIVERING SICKNESS',
        monsters: true,
        name: "Swarm of Insects",
        rolls: 2,
        die: 6,
        extra: 2,
    },
    { id: 66,
        title: 'Tri-flower frond',
        text: 'If his encounter happens in the wild the party stumbles upon 1d4 Tri-flower fronds that appear as nomral plants.  If the encounter occurs while the characters are camped, the fronds sneak into camp and attempt to anesthitize the party with their orange blossoms, then kill them with their yellow and red blossoms.',
        monsters: true,
        name: "Tri-flower frond",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 67,
        title: 'Troll',
        text: 'A hungry troll comes crashing out of the jungle intent on eating the characters',
        monsters: true,
        name: "Troll",
        rolls: 1,
        die: 6,
        extra: 0,
    },
    { id: 68,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 69,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 70,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 71,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 72,
        title: 'Ghouls',
        text: 'Any passive perception 12 or hihger hears and smells a ghoul pack approaching consisting of 2d6 ghouls led by a ghast.  The Ghast has a blue triangle tattooed on its forehead indicator that it once served ras nsi.',
        monsters: true,
        name: "Ghoul",
        rolls: 2,
        die: 6,
        extra: 0,
    },
    { id: 73,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 74,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 75,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 76,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 77,
        title: 'Skeletons',
        text: 'The characters come across 3d6 skeletons.  If during travel, they lie on the ground and spring up waiting for passersby.  During camp they wander in on the party unawares.',
        monsters: true,
        name: "Skeleton",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 78,
        title: 'Spectre',
        text: 'The evil remnant of a dead explorer has become a spectre that attacks the party.  His body can be found with a dc 13 survival check.  If found roll on the dead explorer check. ',
        monsters: true,
        name: "Spectre",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 79,
        title: 'Spectre',
        text: 'The evil remnant of a dead explorer has become a spectre that attacks the party.  His body can be found with a dc 13 survival check.  If found roll on the dead explorer check. ',
        monsters: true,
        name: "Spectre",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 80,
        title: 'Wight',
        text: 'The characters encounter a wight that has lurked int he chultan jungle since before the spell plague.  It hates all chultans and Ubtao especialy.  If any chultan or Ubtao symbols, the wight attacks them with preference.',
        monsters: true,
        name: "Wight",
        rolls: 0,
        die: 0,
        extra: 3,
    },
    { id: 81,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 82,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 83,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 84,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 85,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 86,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 87,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 88,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 89,
        title: 'Zombies',
        text: 'Characters catch the cent of death and hear the undead lumbering through the jungle.  Roll a d10.  1-3 3d6 Zombies.  4-5: One Ankylosaurus Zombie.  6-7  1d4 Giriallon Zombies.  8-9 1d4 Ogre Zombies.  10 Tyranosaurus zombie.',
        monsters: true,
        name: "Zombie",
        rolls: 1,
        die: 10,
        extra: 3,
    },
    { id: 90,
        title: 'Vegepygmy',
        text: 'The characters cross path with 1d4 vegepygmys each one mounted on a Thorny.  The hunters have wandered far from their tribe.  They flee if outnumbered otherwise they attack.',
        monsters: true,
        name: "Vegepygmy",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 91,
        title: 'Vegepygmy',
        text: 'The characters cross path with 1d4 vegepygmys each one mounted on a Thorny.  The hunters have wandered far from their tribe.  They flee if outnumbered otherwise they attack.',
        monsters: true,
        name: "Vegepygmy",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 92,
        title: 'Wereboar',
        text: 'A wereboar masquerading as a chultan priest takes a dim view of explorers encroaching on its territory.  On its neck is a wooden labrynth carved into a wooden disk.  The symbol of Ubtao.  He might be guarding a shrine to Ubtao a grove of wukka trees or a cave it uses as a lair.  It may also have treasure.  Roll 3 trasure drops in the trasure table.',
        monsters: true,
        name: "Wereboar",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 93,
        title: 'Weretiger',
        text: 'In human forma  weretiger offers to excort the party through a very dangerous stretch of wilderness.  If they accompany her, they cannot get attacked.  She will leave after 24 hours and will not go to Omu Nangalore or Orolunga.',
        monsters: true,
        name: "Weretiger",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 94,
        title: 'Winterscape',
        text: 'The characters stumble intoa  112 ft radius sphere of winter weather.  Artus used the ring of winter to drive off monsters.  All plants are covered in glittering ice and frost.  The temperature in here is a biting -30 degrees farenhiet and cannot be dispelled.',
        monsters: false,
        name: "",
        rolls: 0,
        die: 0,
        extra: 1,
    },
    { id: 95,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 96,
        title: 'Yellow musk creeper and zombies',
        text: 'The characters pass close to a ruin inhabited by 3d6 Yellow Musk Zombies.  Somewhere within the ruin a Yellow Musk Creeper clings to a wall.  If this encounter occurs while the players are camped the zombies attack the camp and attempt to drag the party back to the ruin',
        monsters: true,
        name: "Yellow Musk Creeper",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 97,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 98,
        title: 'Yuan-ti',
        text: 'Yuan-ti patrols consist of 1d6+1 Yuan-ti purebloods who keep their distance while they try to gather information to bring back to Ras Nsi.  The Yuan-ti are disguised but any character who succeeds on a DC 13 Perception check made with disadvantage catches sight of the serpent folk as they withdraw. If within 25 miles of OMU the group is 1d4+1 yuan-ti Malisons instead and the check is DC 14',
        monsters: true,
        name: "Yuan-ti",
        rolls: 1,
        die: 4,
        extra: 0,
    },
    { id: 99,
        title: 'Zhentarim',
        text: 'A zhent assassin with a fling snake pet leads a priest, 2d6 thugs and 1d6 tribal warriors through the wilderness in search of Artus Cimber and The Ring of Winter.  If Artus is with the party the Zhents attack to get the ring otherwise they show little interest.  Roll on the treasure table to determine what if anything they carry',
        monsters: true,
        name: "Assassin",
        rolls: 3,
        die: 6,
        extra: 0,
    },
    { id: 100,
        title: 'Zorbos',
        text: 'If his encounter happens in the wild the party stumbled upon 2d6 Zorbos in wukka trees who attack if the party makes threatening motions.  If during camp, the Zorbos drop from surrounding trees and attack.',
        monsters: true,
        name: "Zorbo",
        rolls: 2,
        die: 6,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/app/undead.service.ts":
/*!***********************************!*\
  !*** ./src/app/undead.service.ts ***!
  \***********************************/
/*! exports provided: UndeadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndeadService", function() { return UndeadService; });
/* harmony import */ var _swamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swamp */ "./src/app/swamp.ts");
/* harmony import */ var _river__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./river */ "./src/app/river.ts");
/* harmony import */ var _greater_undead_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greater_undead-events */ "./src/app/greater_undead-events.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _monster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monster.service */ "./src/app/monster.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _undead_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./undead-events */ "./src/app/undead-events.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UndeadService = /** @class */ (function () {
    function UndeadService(rollService, monsterService, http) {
        this.rollService = rollService;
        this.monsterService = monsterService;
        this.http = http;
        this.undead = _undead_events__WEBPACK_IMPORTED_MODULE_7__["undeadEvents"];
        this.river = _river__WEBPACK_IMPORTED_MODULE_1__["riverEvents"];
        this.swamp = _swamp__WEBPACK_IMPORTED_MODULE_0__["swampEvents"];
        this.greaterUndead = _greater_undead_events__WEBPACK_IMPORTED_MODULE_2__["greaterUndeadEvents"];
        this.rolls = {
            monsters: [],
            monsterNumbers: [],
            dice: [],
            monsterName: "",
        };
    }
    UndeadService.prototype.resetMonsterData = function () {
        this.rolls.monsters = [];
        this.rolls.dice = [];
        this.rolls.monsterName = "";
    };
    UndeadService.prototype.getRiver = function () {
        this.resetMonsterData();
        for (var i = 0; i < 3; i++) {
            var dieRoll = this.rollService.roll20();
            console.log(dieRoll);
            if (dieRoll >= 18) {
                var x = this.rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.river[x - 1]);
                this.rolls.monsterName = this.river[x - 1]['name'];
                if (this.rolls.monsterName) {
                    var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
                    this.rolls.monsters.push(monsterStats);
                }
                ;
            }
            else
                this.rolls.dice.push(" nothing happened");
        }
        ;
        if (this.rolls.monsters) {
        }
        else
            console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%");
        // this.rolls.push(this.weatherService.getWeather());
        console.log(this.rolls);
        return this.rolls;
    };
    UndeadService.prototype.getSwamp = function () {
        this.resetMonsterData();
        for (var i = 0; i < 3; i++) {
            var dieRoll = this.rollService.roll20();
            console.log(dieRoll);
            if (dieRoll >= 18) {
                var x = this.rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.swamp[x - 1]);
                this.rolls.monsterName = this.swamp[x - 1]['name'];
                if (this.rolls.monsterName) {
                    var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
                    this.rolls.monsters.push(monsterStats);
                }
                ;
            }
            else
                this.rolls.dice.push(" nothing happened");
        }
        ;
        if (this.rolls.monsters) {
        }
        else
            console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%");
        // this.rolls.push(this.weatherService.getWeather());
        return this.rolls;
    };
    // getEvents(location){
    //   this.resetMonsterData();
    //   for (let i = 0; i < 3; i++) {
    //     var dieRoll = this.rollService.roll20()
    //     if (dieRoll >= 18) {
    //       var x = this.rollService.roll100();
    //       this.rolls.dice.push(x + " was rolled on the event table", this.undead[x - 1])
    //       this.rolls.monsterName = this[location][x - 1]['name'];
    //       if (this.rolls.monsterName) {
    //         var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
    //         this.rolls.monsters.push(monsterStats)
    //       };
    //     } else
    //      this.rolls.dice.push(" nothing happened");
    //   };
    //   if (this.rolls.monsters) {
    //     
    //   }
    //   else
    //   // this.rolls.push(this.weatherService.getWeather());
    //   return this.rolls
    // }
    UndeadService.prototype.getUndead = function () {
        this.resetMonsterData();
        for (var i = 0; i < 3; i++) {
            var dieRoll = this.rollService.roll20();
            console.log(dieRoll);
            if (dieRoll >= 18) {
                var x = this.rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.undead[x - 1]);
                this.rolls.monsterName = this.undead[x - 1]['name'];
                if (this.rolls.monsterName) {
                    var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
                    this.rolls.monsters.push(monsterStats);
                }
                ;
            }
            else
                this.rolls.dice.push(" nothing happened");
        }
        ;
        if (this.rolls.monsters) {
        }
        else
            // this.rolls.push(this.weatherService.getWeather());
            return this.rolls;
    };
    UndeadService.prototype.getGreaterUndead = function () {
        this.resetMonsterData();
        for (var i = 0; i < 3; i++) {
            var dieRoll = this.rollService.roll20();
            console.log(dieRoll);
            if (dieRoll >= 18) {
                var x = this.rollService.roll100();
                this.rolls.dice.push(x + " was rolled on the event table", this.greaterUndead[x - 1]);
                this.rolls.monsterName = this.greaterUndead[x - 1]['name'];
                if (this.rolls.monsterName) {
                    var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
                    this.rolls.monsters.push(monsterStats);
                }
                ;
            }
            else
                this.rolls.dice.push(" nothing happened");
        }
        ;
        if (this.rolls.monsters) {
        }
        else
            console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%");
        // this.rolls.push(this.weatherService.getWeather());
        return this.rolls;
    };
    UndeadService.prototype.getCurrentMonster = function (name) {
        var returnedMonsters = [];
        var array = [];
        var response = this.http.get('./assets/monsters.json').subscribe(function (monster) {
            for (var key in monster) {
                array = Object.keys(monster).map(function (key) { return monster[key]; });
            }
            for (var i = 0; i < array.length; i++) {
                if (array[i]['name'] === name) {
                    returnedMonsters.push(array[i]);
                    return returnedMonsters;
                }
            }
        });
    };
    UndeadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_roll_service__WEBPACK_IMPORTED_MODULE_6__["RollService"], _monster_service__WEBPACK_IMPORTED_MODULE_4__["MonsterService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UndeadService);
    return UndeadService;
}());



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _weather_weatherEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/weatherEvents */ "./src/app/weather/weatherEvents.ts");
/* harmony import */ var _roll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roll.service */ "./src/app/roll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(rollService) {
        this.rollService = rollService;
        this.result = [];
    }
    WeatherService.prototype.getWeather = function () {
        this.result = [];
        for (var i = 0; i < 3; i++) {
            this.result.push(_weather_weatherEvents__WEBPACK_IMPORTED_MODULE_0__["weatherEvents"][this.rollService.roll20()]);
            console.log(this.result);
            console.log("added weather");
        }
        return this.result;
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_roll_service__WEBPACK_IMPORTED_MODULE_1__["RollService"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<h2>Weather: {{this.rollResults.title}}</h2>\n<p>{{this.rollResults.text}}</p> -->\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatherComponent.prototype.getWeather = function () {
        this.rollResults = this.weatherService.getWeather();
    };
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_0__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/weather/weatherEvents.ts":
/*!******************************************!*\
  !*** ./src/app/weather/weatherEvents.ts ***!
  \******************************************/
/*! exports provided: weatherEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherEvents", function() { return weatherEvents; });
var weatherEvents = [{
        id: 1,
        title: "Light Rain, mild weather",
        text: "The morning sees a gentle sprinkling and the sky clears to a calm pleasent day.",
        monsters: false,
        name: "nicedday",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 2,
        title: "Light Rain, mild weather",
        text: "The morning sees a gentle sprinkling and the sky clears to a calm pleasent day.",
        monsters: false,
        name: "nicedday",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 3,
        title: "Hot, misty",
        text: "The day is hot and humid with no rain subtracting -4 from anyone wearing Heavy armor for their daliy Con checks and require 1 gallon more of water today for all players.",
        monsters: false,
        name: "hot day",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 4,
        title: "Hot, misty",
        text: "The day is hot and humid with no rain subtracting -4 from anyone wearing Heavy armor for their daliy Con checks and require 1 gallon more of water today for all players.",
        monsters: false,
        name: "hot day",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 5,
        title: "Hot, misty",
        text: "The day is hot and humid with no rain subtracting -4 from anyone wearing Heavy armor for their daliy Con checks and require 1 gallon more of water today for all players.",
        monsters: false,
        name: "hot day",
        rolls: 0,
        die: 0,
        extra: 0
    },
    {
        id: 6,
        title: "Rain",
        text: "An easy rain falls all day providing opportunity for anyone witha Rain catcher to collect water.  ",
        monsters: false,
        name: "Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 7,
        title: "Rain",
        text: "An easy rain falls all day providing opportunity for anyone witha Rain catcher to collect water.  ",
        monsters: false,
        name: "Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 8,
        title: "Windy, Rainy Day.",
        text: "Winds blow in from the Sea bringing sheets of rain down sideways.  Visibility is limited to 100ft and ranged attacks carry a -2 penalty today.",
        monsters: false,
        name: "Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 9,
        title: "Windy, Rainy Day.",
        text: "Winds blow in from the Sea bringing sheets of rain down sideways.  Visibility is limited to 100ft and ranged attacks carry a -2 penalty today.",
        monsters: false,
        name: "Wind and Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 10,
        title: "Windy, Rainy Day.",
        text: "Winds blow in from the Sea bringing sheets of rain down sideways.  Visibility is limited to 100ft and ranged attacks carry a -2 penalty today.",
        monsters: false,
        name: "Wind and Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 11,
        title: "Pleasent day",
        text: "A warm sun finds its way between scattered white clouds that move swiftly across a blue sky..",
        monsters: false,
        name: 'Pleasent Day',
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 12,
        title: "Pleasent day",
        text: "A warm sun finds its way between scattered white clouds that move swiftly across a blue sky..",
        monsters: false,
        name: "Pleasent Day",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 13,
        title: "Pleasent day",
        text: "A warm sun finds its way between scattered white clouds that move swiftly across a blue sky..",
        monsters: false,
        name: "Pleasent Day",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 14,
        title: "Pleasent day",
        text: "A warm sun finds its way between scattered white clouds that move swiftly across a blue sky..",
        monsters: false,
        name: "Pleasent Day",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 14,
        title: "Pleasent day",
        text: "A warm sun finds its way between scattered white clouds that move swiftly across a blue sky..",
        monsters: false,
        name: "Pleasent Day",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 15,
        title: "Intermittent Rain",
        text: "Scattered showers fall throughout the day beneath a blanket of thikc grey clouds.",
        monsters: false,
        name: "Intermittent Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 16,
        title: "Intermittent Rain",
        text: "Scattered showers fall throughout the day beneath a blanket of thikc grey clouds.",
        monsters: false,
        name: "Intermittent Rain",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 17,
        title: "Thunder Storms",
        text: "Storms rack the island of Chult bringing down shets of rain from all angles.  Travel limited to half speed and travel by boat results in a swamped canoe after 1 hour.",
        monsters: false,
        name: "Thunder Storms",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 18,
        title: "Thunder Storms",
        text: "Storms rack the island of Chult bringing down shets of rain from all angles.  Travel limited to half speed and travel by boat results in a swamped canoe after 1 hour.",
        monsters: false,
        name: "Thunder Storms",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 19,
        title: "Thunder Storms",
        text: "Storms rack the island of Chult bringing down shets of rain from all angles.  Travel limited to half speed and travel by boat results in a swamped canoe after 1 hour.",
        monsters: false,
        name: "Thunder Storms",
        rolls: 0,
        die: 0,
        extra: 0,
    },
    {
        id: 20,
        title: "Tropical Storm",
        text: "Chultan weather brings its wrath down on the island whipping winds and rain at terrible speeds.  All players must make a DC 15 Con check or recieve a level of exhaustion.  Travel is impossible today on rivers and every hex crossed guarantees a level of exhaustion by foot.",
        monsters: false,
        name: "Tropical Storm",
        rolls: 0,
        die: 0,
        extra: 0,
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDD5UtXnuSqE-JVErA9b5qR7q_XjIwOYDw",
        authDomain: "familr.firebaseapp.com",
        databaseURL: "https://familr.firebaseio.com",
        projectId: "familr",
        storageBucket: "familr.appspot.com",
        messagingSenderId: "541973018355"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timmckiernan/Desktop/Familr_2/Familr/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map