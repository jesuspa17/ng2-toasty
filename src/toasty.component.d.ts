import { OnInit } from '@angular/core';
import { ToastyService, ToastData, ToastyConfig } from './toasty.service';
export declare class ToastyComponent implements OnInit {
    private config;
    private toastyService;
    static POSITIONS: Array<String>;
    private _position;
    position: string;
    toasts: Array<ToastData>;
    constructor(config: ToastyConfig, toastyService: ToastyService);
    ngOnInit(): any;
    closeToast(toast: ToastData): void;
    clear(id: number): void;
    clearAll(): void;
    private _setTimeout(toast);
}
