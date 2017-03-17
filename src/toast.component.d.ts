import { EventEmitter } from '@angular/core';
import { ToastData } from './toasty.service';
export declare class ToastComponent {
    toast: ToastData;
    closeToastEvent: EventEmitter<{}>;
    close($event: any): void;
}
