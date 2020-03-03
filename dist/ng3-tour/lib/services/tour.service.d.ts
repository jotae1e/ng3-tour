import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StepTargetService } from './step-target.service';
export interface TourI {
    steps: TourStepI[];
    tourOptions?: StepOptionsI;
    withoutLogs?: boolean;
    tourEvents?: TourEventsI;
    ctrlBtns?: CtrlBtnsI;
}
export interface TourStepI {
    stepName: string;
    route?: string;
    index?: number;
    title?: string | {
        [propName: string]: any;
    };
    description?: string | {
        [propName: string]: any;
    };
    options?: StepOptionsI;
    ctrlBtns?: CtrlBtnsI;
    [propName: string]: any;
}
export interface CtrlBtnsI {
    prev?: {
        [propsName: string]: any;
    };
    next?: {
        [propsName: string]: any;
    };
    done?: {
        [propsName: string]: any;
    };
    [propsName: string]: any;
}
export declare const defaultCtrlBtns: {
    done: {
        'en-EN': string;
        'ru-RU': string;
        'fr-FR': string;
    };
    prev: {
        'en-EN': string;
        'ru-RU': string;
        'fr-FR': string;
    };
    next: {
        'en-EN': string;
        'ru-RU': string;
        'fr-FR': string;
    };
};
export interface StepOptionsI {
    className?: string;
    withoutCounter?: boolean;
    withoutPrev?: boolean;
    customTemplate?: boolean;
    themeColor?: string;
    opacity?: number;
    placement?: string;
    arrowToTarget?: boolean;
    backdrop?: boolean;
    animatedStep?: boolean;
    smoothScroll?: boolean;
    scrollTo?: boolean;
    fixed?: boolean;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    continueIfTargetAbsent?: boolean;
    stepTargetResize?: number[];
    delay?: number;
    autofocus?: boolean;
    closeOnClickOutside?: boolean;
}
export declare const defaultOptions: StepOptionsI;
export declare class StepOptions implements StepOptionsI {
    className?: string;
    withoutCounter?: boolean;
    withoutPrev?: boolean;
    customTemplate?: boolean;
    themeColor?: string;
    opacity?: number;
    placement: string;
    arrowToTarget?: boolean;
    backdrop?: boolean;
    animatedStep?: boolean;
    smoothScroll?: boolean;
    scrollTo?: boolean;
    continueIfTargetAbsent?: boolean;
    stepTargetResize?: number[];
    delay?: number;
    fixed?: boolean;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    autofocus?: boolean;
    closeOnClickOutside?: boolean;
    constructor(options?: StepOptionsI);
}
export declare type TourEvent = (props: {
    tourEvent: string;
    step?: number | string;
    history?: number[];
    tour?: TourI;
}) => void;
export interface TourEventsI {
    tourStart?: TourEvent;
    tourEnd?: TourEvent;
    tourBreak?: TourEvent;
    next?: TourEvent;
    prev?: TourEvent;
}
export declare const defaultTourEvent: TourEvent;
export declare const TourDefaultEvents: {
    tourStart: TourEvent;
    tourEnd: TourEvent;
    tourBreak: TourEvent;
    next: TourEvent;
    prev: TourEvent;
};
export declare class TourService {
    private router;
    private readonly targetService;
    private steps;
    private tourStarted;
    private stepsStream$;
    private history;
    private routeChanged;
    private presets;
    private tourBreak;
    private tourEnd;
    private next;
    private prev;
    private isBrowser;
    private lang;
    constructor(router: Router, targetService: StepTargetService, platformId: {});
    private validateOptions;
    private setSteps;
    private defineLocalName;
    private defineLocalBtnNames;
    private initStep;
    getHistory(): any[];
    setPresets(presets: StepOptionsI): void;
    resetStep(stepName: string | number, step: TourStepI): void;
    getStepByName(stepName: string): TourStepI;
    getStepByIndex(index?: number): TourStepI;
    getLastStep(): TourStepI;
    getStepsStream(): Observable<string>;
    isRouteChanged(): boolean;
    private setTourStatus;
    getTourStatus(): boolean;
    startTour(tour: TourI): void;
    stopTour(): void;
    nextStep(): void;
    prevStep(): void;
}
