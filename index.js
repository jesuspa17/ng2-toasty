// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
export * from './src/toasty.service';
export * from './src/toasty.component';
import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { ToastyService, ToastyConfig, toastyServiceFactory } from './src/toasty.service';
export var providers = [
    ToastyConfig,
    { provide: ToastyService, useFactory: toastyServiceFactory, deps: [ToastyConfig] }
];
var ToastyModule = ToastyModule_1 = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule_1,
            providers: providers
        };
    };
    return ToastyModule;
}());
ToastyModule = ToastyModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ToastComponent, ToastyComponent],
        exports: [ToastComponent, ToastyComponent],
        providers: providers
    })
], ToastyModule);
export { ToastyModule };
var ToastyModule_1;
