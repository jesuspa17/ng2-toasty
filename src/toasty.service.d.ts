import { Observable } from 'rxjs/Observable';
export declare class ToastOptions {
    title: string;
    msg?: string;
    showClose?: boolean;
    theme?: string;
    timeout?: number;
    onAdd?: Function;
    onRemove?: Function;
}
export declare class ToastData {
    id: number;
    title: string;
    msg: string;
    showClose: boolean;
    type: string;
    theme: string;
    timeout: number;
    onAdd: Function;
    onRemove: Function;
    onClick: Function;
}
export declare class ToastyConfig {
    limit: number;
    showClose: boolean;
    position: string;
    timeout: number;
    theme: string;
}
export declare function toastyServiceFactory(config: ToastyConfig): ToastyService;
export declare class ToastyService {
    private config;
    static THEMES: Array<string>;
    uniqueCounter: number;
    private toastsEmitter;
    private clearEmitter;
    constructor(config: ToastyConfig);
    getToasts(): Observable<ToastData>;
    getClear(): Observable<number>;
    default(options: ToastOptions | string | number): number;
    info(options: ToastOptions | string | number): number;
    success(options: ToastOptions | string | number): number;
    wait(options: ToastOptions | string | number): number;
    error(options: ToastOptions | string | number): number;
    warning(options: ToastOptions | string | number): number;
    private add(options, type);
    clearAll(): void;
    clear(id: number): void;
    private _checkConfigItem(config, options, property);
}
