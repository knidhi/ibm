"use strict";
var Hero = /** @class */ (function () {
    function Hero(firstname, lastname, _secret) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._secret = _secret;
        this.city = "Gotham";
    }
    Hero.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    Object.defineProperty(Hero.prototype, "secret", {
        get: function () {
            return this._secret;
        },
        set: function (val) {
            this._secret = val;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());
;
//# sourceMappingURL=Hero.js.map