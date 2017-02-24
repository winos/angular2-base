System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, TimerComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TimerComponent = (function () {
                function TimerComponent() {
                    var _this = this;
                    this.reset();
                    setInterval(function () { return _this.tick(); }, 1000);
                }
                TimerComponent.prototype.reset = function () {
                    this.seconds = 59;
                    this.minutes = 24;
                    this.btnLabel = "Empezar";
                    this.togglePause();
                };
                TimerComponent.prototype.tick = function () {
                    if (!this.isPaused) {
                        this.btnLabel = "Detener";
                        if (--this.seconds < 0) {
                            this.seconds = 59;
                            if (--this.minutes > 0)
                                this.reset();
                        }
                    }
                };
                TimerComponent.prototype.togglePause = function () {
                    this.isPaused = !this.isPaused;
                    this.btnLabel = this.isPaused ? 'Reanudar' : 'Detener';
                };
                return TimerComponent;
            }());
            TimerComponent = __decorate([
                core_1.Component({
                    selector: 'timer',
                    template: "\n    <h1>{{minutes}}:{{seconds | number:'2.0'}} </h1>\n    <button (click)=\"togglePause()\"> {{btnLabel}}</button>\n    "
                }),
                __metadata("design:paramtypes", [])
            ], TimerComponent);
            exports_1("TimerComponent", TimerComponent);
        }
    };
});
