"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addPower(pow) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.title = new targetClass().title;
                this.power = pow;
            }
            return class_1;
        }());
    };
}
var Batman = /** @class */ (function () {
    function Batman() {
        this.title = "Batman";
    }
    Batman = __decorate([
        addPower(5)
    ], Batman);
    return Batman;
}());
;
console.log(new Batman());
//# sourceMappingURL=step2.js.map