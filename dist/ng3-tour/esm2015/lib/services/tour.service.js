/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { StepTargetService } from './step-target.service';
/**
 * @record
 */
export function TourI() { }
if (false) {
    /** @type {?} */
    TourI.prototype.steps;
    /** @type {?|undefined} */
    TourI.prototype.tourOptions;
    /** @type {?|undefined} */
    TourI.prototype.withoutLogs;
    /** @type {?|undefined} */
    TourI.prototype.tourEvents;
    /** @type {?|undefined} */
    TourI.prototype.ctrlBtns;
}
/**
 * @record
 */
export function TourStepI() { }
if (false) {
    /** @type {?} */
    TourStepI.prototype.stepName;
    /** @type {?|undefined} */
    TourStepI.prototype.route;
    /** @type {?|undefined} */
    TourStepI.prototype.index;
    /** @type {?|undefined} */
    TourStepI.prototype.title;
    /** @type {?|undefined} */
    TourStepI.prototype.description;
    /** @type {?|undefined} */
    TourStepI.prototype.options;
    /** @type {?|undefined} */
    TourStepI.prototype.ctrlBtns;
    /* Skipping unhandled member: [propName: string]: any;*/
}
/**
 * @record
 */
export function CtrlBtnsI() { }
if (false) {
    /** @type {?|undefined} */
    CtrlBtnsI.prototype.prev;
    /** @type {?|undefined} */
    CtrlBtnsI.prototype.next;
    /** @type {?|undefined} */
    CtrlBtnsI.prototype.done;
    /* Skipping unhandled member: [propsName: string]: any;*/
}
/** @type {?} */
export const defaultCtrlBtns = {
    done: {
        'en-EN': 'FINALIZAR',
        'ru-RU': 'закр',
        'fr-FR': 'fini',
    },
    prev: {
        'en-EN': 'ANTERIOR',
        'ru-RU': 'пред',
        'fr-FR': 'préc'
    },
    next: {
        'en-EN': 'SIGUIENTE',
        'ru-RU': 'след',
        'fr-FR': 'proch',
    },
};
/**
 * @record
 */
export function StepOptionsI() { }
if (false) {
    /** @type {?|undefined} */
    StepOptionsI.prototype.className;
    /** @type {?|undefined} */
    StepOptionsI.prototype.withoutCounter;
    /** @type {?|undefined} */
    StepOptionsI.prototype.withoutPrev;
    /** @type {?|undefined} */
    StepOptionsI.prototype.customTemplate;
    /** @type {?|undefined} */
    StepOptionsI.prototype.themeColor;
    /** @type {?|undefined} */
    StepOptionsI.prototype.opacity;
    /** @type {?|undefined} */
    StepOptionsI.prototype.placement;
    /** @type {?|undefined} */
    StepOptionsI.prototype.arrowToTarget;
    /** @type {?|undefined} */
    StepOptionsI.prototype.backdrop;
    /** @type {?|undefined} */
    StepOptionsI.prototype.animatedStep;
    /** @type {?|undefined} */
    StepOptionsI.prototype.smoothScroll;
    /** @type {?|undefined} */
    StepOptionsI.prototype.scrollTo;
    /** @type {?|undefined} */
    StepOptionsI.prototype.fixed;
    /** @type {?|undefined} */
    StepOptionsI.prototype.minWidth;
    /** @type {?|undefined} */
    StepOptionsI.prototype.minHeight;
    /** @type {?|undefined} */
    StepOptionsI.prototype.maxWidth;
    /** @type {?|undefined} */
    StepOptionsI.prototype.maxHeight;
    /** @type {?|undefined} */
    StepOptionsI.prototype.continueIfTargetAbsent;
    /** @type {?|undefined} */
    StepOptionsI.prototype.stepTargetResize;
    /** @type {?|undefined} */
    StepOptionsI.prototype.delay;
    /** @type {?|undefined} */
    StepOptionsI.prototype.autofocus;
    /** @type {?|undefined} */
    StepOptionsI.prototype.closeOnClickOutside;
}
/** @type {?} */
export const defaultOptions = {
    className: '',
    continueIfTargetAbsent: true,
    withoutCounter: false,
    withoutPrev: false,
    customTemplate: false,
    smoothScroll: false,
    scrollTo: true,
    themeColor: 'rgb(20, 60, 60)',
    opacity: .6,
    placement: 'down',
    arrowToTarget: true,
    stepTargetResize: [0],
    delay: 1000,
    animatedStep: true,
    fixed: false,
    backdrop: true,
    minWidth: '250px',
    minHeight: '150px',
    maxWidth: '400px',
    maxHeight: '600px',
    autofocus: true,
    closeOnClickOutside: false,
};
export class StepOptions {
    /**
     * @param {?=} options
     */
    constructor(options = defaultOptions) {
        const { className, continueIfTargetAbsent, withoutCounter, withoutPrev, customTemplate, smoothScroll, scrollTo, themeColor, opacity, placement, arrowToTarget, stepTargetResize, maxHeight, maxWidth, minHeight, minWidth, delay, animatedStep, fixed, backdrop, autofocus, closeOnClickOutside, } = options;
        this.className = className;
        this.placement = placement;
        this.arrowToTarget = arrowToTarget;
        this.themeColor = themeColor;
        this.opacity = opacity;
        this.backdrop = backdrop;
        this.customTemplate = customTemplate;
        this.withoutCounter = withoutCounter;
        this.withoutPrev = withoutPrev;
        this.continueIfTargetAbsent = continueIfTargetAbsent;
        this.stepTargetResize = stepTargetResize;
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.minHeight = minHeight;
        this.minWidth = minWidth;
        this.delay = delay;
        this.animatedStep = animatedStep;
        this.smoothScroll = smoothScroll;
        this.scrollTo = scrollTo;
        this.fixed = fixed;
        this.autofocus = autofocus;
        this.closeOnClickOutside = closeOnClickOutside;
    }
}
if (false) {
    /** @type {?} */
    StepOptions.prototype.className;
    /** @type {?} */
    StepOptions.prototype.withoutCounter;
    /** @type {?} */
    StepOptions.prototype.withoutPrev;
    /** @type {?} */
    StepOptions.prototype.customTemplate;
    /** @type {?} */
    StepOptions.prototype.themeColor;
    /** @type {?} */
    StepOptions.prototype.opacity;
    /** @type {?} */
    StepOptions.prototype.placement;
    /** @type {?} */
    StepOptions.prototype.arrowToTarget;
    /** @type {?} */
    StepOptions.prototype.backdrop;
    /** @type {?} */
    StepOptions.prototype.animatedStep;
    /** @type {?} */
    StepOptions.prototype.smoothScroll;
    /** @type {?} */
    StepOptions.prototype.scrollTo;
    /** @type {?} */
    StepOptions.prototype.continueIfTargetAbsent;
    /** @type {?} */
    StepOptions.prototype.stepTargetResize;
    /** @type {?} */
    StepOptions.prototype.delay;
    /** @type {?} */
    StepOptions.prototype.fixed;
    /** @type {?} */
    StepOptions.prototype.minWidth;
    /** @type {?} */
    StepOptions.prototype.minHeight;
    /** @type {?} */
    StepOptions.prototype.maxWidth;
    /** @type {?} */
    StepOptions.prototype.maxHeight;
    /** @type {?} */
    StepOptions.prototype.autofocus;
    /** @type {?} */
    StepOptions.prototype.closeOnClickOutside;
}
/**
 * @record
 */
export function TourEventsI() { }
if (false) {
    /** @type {?|undefined} */
    TourEventsI.prototype.tourStart;
    /** @type {?|undefined} */
    TourEventsI.prototype.tourEnd;
    /** @type {?|undefined} */
    TourEventsI.prototype.tourBreak;
    /** @type {?|undefined} */
    TourEventsI.prototype.next;
    /** @type {?|undefined} */
    TourEventsI.prototype.prev;
}
/** @type {?} */
export const defaultTourEvent = (/**
 * @param {?} props
 * @return {?}
 */
(props) => { });
/** @type {?} */
export const TourDefaultEvents = {
    tourStart: defaultTourEvent,
    tourEnd: defaultTourEvent,
    tourBreak: defaultTourEvent,
    next: defaultTourEvent,
    prev: defaultTourEvent,
};
// @dynamic
export class TourService {
    /**
     * @param {?} router
     * @param {?} targetService
     * @param {?} platformId
     */
    constructor(router, targetService, 
    // @dynamic
    platformId) {
        this.router = router;
        this.targetService = targetService;
        this.tourStarted = false;
        this.stepsStream$ = new BehaviorSubject(null);
        this.history = [];
        this.routeChanged = false;
        this.presets = {};
        // private tourStart = TourDefaultEvents.tourStart;
        this.tourBreak = TourDefaultEvents.tourBreak;
        this.tourEnd = TourDefaultEvents.tourEnd;
        this.next = TourDefaultEvents.next;
        this.prev = TourDefaultEvents.prev;
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.stopTour = this.stopTour.bind(this);
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.lang = navigator.language;
        }
        else {
            this.lang = '';
        }
    }
    /**
     * @private
     * @param {?} tour
     * @return {?}
     */
    validateOptions(tour) {
        /** @type {?} */
        const regExpr = /^top$|^down$|^left$|^right$|^center$|^right-center$|^left-center$|^right-top$|^left-top$|^center-down$|^center-top$/i;
        /** @type {?} */
        let isValid = true;
        tour.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            if (step.options && step.options.placement) {
                isValid = regExpr.test(step.options.placement);
            }
        }));
        if (tour.tourOptions && tour.tourOptions.placement) {
            isValid = regExpr.test(tour.tourOptions.placement);
        }
        return isValid;
    }
    /**
     * @private
     * @param {?} tour
     * @return {?}
     */
    setSteps(tour) {
        /** @type {?} */
        const options = new StepOptions(Object.assign({}, defaultOptions, this.presets, tour.tourOptions));
        this.steps = tour.steps.map((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => {
            x.index = i;
            if (x.description && typeof x.description === 'object') {
                x.description = this.defineLocalName(x.description);
            }
            if (x.title && typeof x.title === 'object') {
                x.title = this.defineLocalName(x.title);
            }
            x.options = x.options ? Object.assign({}, options, x.options) : options;
            x.total = tour.steps.length;
            x.ctrlBtns = this.defineLocalBtnNames(tour.ctrlBtns || defaultCtrlBtns);
            return x;
        }));
        if (isDevMode()) {
            console.log('mode: ', isDevMode());
            console.log('ng3-tour is initiated with steps:');
            console.log(this.steps);
        }
    }
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    defineLocalName(obj) {
        /** @type {?} */
        let result;
        if (!this.isBrowser) {
            return '';
        }
        if (obj.hasOwnProperty(this.lang)) {
            result = obj[this.lang];
        }
        else {
            /** @type {?} */
            const setLanguages = Object.keys(obj);
            /** @type {?} */
            const ralatedLang = setLanguages.filter((/**
             * @param {?} l
             * @return {?}
             */
            l => l.includes(this.lang.slice(0, 2))))[0];
            if (ralatedLang) {
                result = obj[ralatedLang];
            }
            else {
                result = obj[setLanguages[0]];
            }
        }
        if (typeof result === 'string') {
            return result;
        }
        console.error(`Tour configuration error with ${JSON.stringify(obj)}`);
        return 'Error';
    }
    /**
     * @private
     * @param {?} btns
     * @return {?}
     */
    defineLocalBtnNames(btns) {
        /** @type {?} */
        const btnCtrls = {};
        for (let prop in btns) {
            if (btns.hasOwnProperty(prop)) {
                /** @type {?} */
                let result;
                if (typeof btns[prop] === 'string') {
                    result = btns[prop];
                }
                else if (typeof btns[prop] === 'object' && btns[prop][this.lang] === 'string') {
                    result = btns[prop][this.lang];
                }
                else {
                    /** @type {?} */
                    const setLanguages = Object.keys(btns[prop]);
                    /** @type {?} */
                    const ralatedLang = setLanguages.filter((/**
                     * @param {?} l
                     * @return {?}
                     */
                    l => l.includes(this.lang.slice(0, 2))))[0];
                    if (ralatedLang) {
                        result = btns[prop][ralatedLang];
                    }
                    else {
                        result = btns[prop][setLanguages[0]];
                    }
                    if (typeof result === 'string') {
                        btnCtrls[prop] = result;
                    }
                    else if (this.isBrowser) {
                        console.error(`Tour configuration error with ${JSON.stringify(btns)}`);
                        btnCtrls[prop] = 'Error';
                    }
                }
            }
        }
        return btnCtrls;
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    initStep(step) {
        /** @type {?} */
        const previousStep = this.history.length ? this.getLastStep() : { route: null };
        /** @type {?} */
        const newtStep = this.steps[step];
        this.routeChanged = previousStep.route !== newtStep.route;
        this.history.push(step);
        if (newtStep.route && this.routeChanged) {
            this.router.navigate([newtStep.route]);
        }
        this.stepsStream$.next(newtStep.stepName);
    }
    /**
     * @return {?}
     */
    getHistory() {
        return this.history;
    }
    /**
     * @param {?} presets
     * @return {?}
     */
    setPresets(presets) {
        this.presets = Object.assign({}, this.presets, presets);
    }
    /**
     * @param {?} stepName
     * @param {?} step
     * @return {?}
     */
    resetStep(stepName, step) {
        /** @type {?} */
        const index = typeof stepName === 'number' ? stepName : this.getStepByName(stepName).index;
        this.steps[index] = Object.assign({}, step);
    }
    /**
     * @param {?} stepName
     * @return {?}
     */
    getStepByName(stepName) {
        return this.steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        step => step.stepName === stepName))[0];
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    getStepByIndex(index = 0) {
        return this.steps[index];
    }
    /**
     * @return {?}
     */
    getLastStep() {
        if (this.history.length)
            return this.steps[this.history.slice(-1)[0]];
        return null;
    }
    /**
     * @return {?}
     */
    getStepsStream() {
        return this.stepsStream$;
    }
    /**
     * @return {?}
     */
    isRouteChanged() {
        return this.routeChanged;
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setTourStatus(status) {
        this.tourStarted = status;
    }
    /**
     * @return {?}
     */
    getTourStatus() {
        return this.tourStarted;
    }
    /**
     * @param {?} tour
     * @return {?}
     */
    startTour(tour) {
        if (!this.validateOptions(tour)) {
            throw new Error('Placement option of the ng3-tour or one of it step is invalid');
        }
        const { tourBreak, tourStart, tourEnd, next, prev } = Object.assign({}, TourDefaultEvents, tour.tourEvents);
        tourStart({ tourEvent: 'Tour start', tour });
        this.tourBreak = tourBreak;
        this.tourEnd = tourEnd;
        this.next = next;
        this.prev = prev;
        this.setTourStatus(true);
        this.setSteps(tour);
        this.initStep(0);
    }
    /**
     * @return {?}
     */
    stopTour() {
        /** @type {?} */
        const index = this.getLastStep().index;
        /** @type {?} */
        const latestStepIndex = this.steps.length - 1;
        if (index < latestStepIndex) {
            this.tourBreak({ tourEvent: 'Tour break', step: index, history: this.history });
        }
        else if (latestStepIndex === index) {
            this.tourEnd({ tourEvent: 'Tour end', step: index, history: this.history });
        }
        this.setTourStatus(false);
        this.steps.length = 0;
        this.stepsStream$.next(null);
        this.history.length = 0;
        this.targetService.setTargetSubject(null);
    }
    /**
     * @return {?}
     */
    nextStep() {
        /** @type {?} */
        const step = this.getLastStep().index + 1;
        this.next({ tourEvent: 'Init next', step, history: this.history });
        this.initStep(step);
    }
    /**
     * @return {?}
     */
    prevStep() {
        /** @type {?} */
        const step = this.getLastStep().index - 1;
        this.prev({ tourEvent: 'Init prev', step, history: this.history });
        this.initStep(step);
    }
}
TourService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TourService.ctorParameters = () => [
    { type: Router },
    { type: StepTargetService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.steps;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.tourStarted;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.stepsStream$;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.history;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.routeChanged;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.presets;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.tourBreak;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.tourEnd;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.next;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.prev;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.lang;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.targetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG91ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQ2pELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRXhELDJCQU1DOzs7SUFMQyxzQkFBbUI7O0lBQ25CLDRCQUEyQjs7SUFDM0IsNEJBQXNCOztJQUN0QiwyQkFBeUI7O0lBQ3pCLHlCQUFxQjs7Ozs7QUFHdkIsK0JBU0M7OztJQVJDLDZCQUFpQjs7SUFDakIsMEJBQWU7O0lBQ2YsMEJBQWU7O0lBQ2YsMEJBQTJDOztJQUMzQyxnQ0FBaUQ7O0lBQ2pELDRCQUF1Qjs7SUFDdkIsNkJBQXFCOzs7Ozs7QUFJdkIsK0JBS0M7OztJQUpDLHlCQUFrQzs7SUFDbEMseUJBQWtDOztJQUNsQyx5QkFBa0M7Ozs7QUFJcEMsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM3QixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixPQUFPLEVBQUUsTUFBTTtRQUNmLE9BQU8sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsVUFBVTtRQUNuQixPQUFPLEVBQUUsTUFBTTtRQUNmLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFdBQVc7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUs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QXJNRixVQUFVOzs7O1lBcE1ILE1BQU07WUFFTixpQkFBaUI7NENBcU5wQixNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQWpCckIsNEJBQTJCOzs7OztJQUMzQixrQ0FBNEI7Ozs7O0lBQzVCLG1DQUFzRDs7Ozs7SUFDdEQsOEJBQXFCOzs7OztJQUNyQixtQ0FBNkI7Ozs7O0lBQzdCLDhCQUFtQzs7Ozs7SUFFbkMsZ0NBQWdEOzs7OztJQUNoRCw4QkFBNEM7Ozs7O0lBQzVDLDJCQUFzQzs7Ozs7SUFDdEMsMkJBQXNDOzs7OztJQUN0QyxnQ0FBMkI7Ozs7O0lBQzNCLDJCQUFxQjs7Ozs7SUFFbkIsNkJBQXNCOzs7OztJQUN0QixvQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIGlzRGV2TW9kZSwgUExBVEZPUk1fSUQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtTdGVwVGFyZ2V0U2VydmljZX0gZnJvbSAnLi9zdGVwLXRhcmdldC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb3VySSB7XG4gIHN0ZXBzOiBUb3VyU3RlcElbXTtcbiAgdG91ck9wdGlvbnM/OiBTdGVwT3B0aW9uc0k7XG4gIHdpdGhvdXRMb2dzPzogYm9vbGVhbjtcbiAgdG91ckV2ZW50cz86IFRvdXJFdmVudHNJO1xuICBjdHJsQnRucz86IEN0cmxCdG5zSTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb3VyU3RlcEkge1xuICBzdGVwTmFtZTogc3RyaW5nO1xuICByb3V0ZT86IHN0cmluZztcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nIHwge1twcm9wTmFtZTogc3RyaW5nXTogYW55fTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9O1xuICBvcHRpb25zPzogU3RlcE9wdGlvbnNJO1xuICBjdHJsQnRucz86IEN0cmxCdG5zSTtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3RybEJ0bnNJIHtcbiAgcHJldj86IHtbcHJvcHNOYW1lOiBzdHJpbmddOiBhbnl9O1xuICBuZXh0Pzoge1twcm9wc05hbWU6IHN0cmluZ106IGFueX07XG4gIGRvbmU/OiB7W3Byb3BzTmFtZTogc3RyaW5nXTogYW55fTtcbiAgW3Byb3BzTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEN0cmxCdG5zID0ge1xuICBkb25lOiB7XG4gICAnZW4tRU4nOiAnRklOQUxJWkFSJyxcbiAgICdydS1SVSc6ICfQt9Cw0LrRgCcsXG4gICAnZnItRlInOiAnZmluaScsXG4gIH0sXG4gIHByZXY6IHtcbiAgICAnZW4tRU4nOiAnQU5URVJJT1InLFxuICAgICdydS1SVSc6ICfQv9GA0LXQtCcsXG4gICAgJ2ZyLUZSJzogJ3Byw6ljJ1xuICB9LFxuICBuZXh0OiB7XG4gICAgJ2VuLUVOJzogJ1NJR1VJRU5URScsXG4gICAgJ3J1LVJVJzogJ9GB0LvQtdC0JyxcbiAgICAnZnItRlInOiAncHJvY2gnLFxuICB9LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBPcHRpb25zSSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd2l0aG91dENvdW50ZXI/OiBib29sZWFuO1xuICB3aXRob3V0UHJldj86IGJvb2xlYW47XG4gIGN1c3RvbVRlbXBsYXRlPzogYm9vbGVhbjtcbiAgdGhlbWVDb2xvcj86IHN0cmluZztcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgcGxhY2VtZW50Pzogc3RyaW5nO1xuICBhcnJvd1RvVGFyZ2V0PzogYm9vbGVhbjtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBhbmltYXRlZFN0ZXA/OiBib29sZWFuO1xuICBzbW9vdGhTY3JvbGw/OiBib29sZWFuO1xuICBzY3JvbGxUbz86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgbWluV2lkdGg/OiBzdHJpbmc7IC8vIFN0ZXAgbWluLXdpZHRoXG4gIG1pbkhlaWdodD86IHN0cmluZzsgLy8gU3RlcCBtaW4taGVpZ2h0XG4gIG1heFdpZHRoPzogc3RyaW5nOyAvLyBTdGVwIG1heC13aWR0aFxuICBtYXhIZWlnaHQ/OiBzdHJpbmc7IC8vIFN0ZXAgbWF4LWhlaWdodFxuICBjb250aW51ZUlmVGFyZ2V0QWJzZW50PzogYm9vbGVhbjsgLy8gaW5pdCBuZXh0IHN0ZXAgaWYgdGFyZ2V0IGlzIG5vdCBmb3VuZCBmb3IgY3VycmVudCBvbmVcbiAgc3RlcFRhcmdldFJlc2l6ZT86IG51bWJlcltdOyAvLyBjaGFuZ2Ugc2l6ZSBvZiBhICd3aW5kb3cnIGZvciBzdGVwIHRhcmdldFxuICBkZWxheT86IG51bWJlcjsgLy8gZm9yIHRoZSBjYXNlIG9mIHRoZSBsYXppbHkgbG9hZGVkIG9yIGFuaW1hdGVkIHJvdXRlc1xuICBhdXRvZm9jdXM/OiBib29sZWFuO1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBTdGVwT3B0aW9uc0kgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGNvbnRpbnVlSWZUYXJnZXRBYnNlbnQ6IHRydWUsXG4gIHdpdGhvdXRDb3VudGVyOiBmYWxzZSxcbiAgd2l0aG91dFByZXY6IGZhbHNlLFxuICBjdXN0b21UZW1wbGF0ZTogZmFsc2UsXG4gIHNtb290aFNjcm9sbDogZmFsc2UsXG4gIHNjcm9sbFRvOiB0cnVlLFxuICB0aGVtZUNvbG9yOiAncmdiKDIwLCA2MCwgNjApJyxcbiAgb3BhY2l0eTogLjYsXG4gIHBsYWNlbWVudDogJ2Rvd24nLFxuICBhcnJvd1RvVGFyZ2V0OiB0cnVlLFxuICBzdGVwVGFyZ2V0UmVzaXplOiBbMF0sXG4gIGRlbGF5OiAxMDAwLFxuICBhbmltYXRlZFN0ZXA6IHRydWUsXG4gIGZpeGVkOiBmYWxzZSxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIG1pbldpZHRoOiAnMjUwcHgnLFxuICBtaW5IZWlnaHQ6ICcxNTBweCcsXG4gIG1heFdpZHRoOiAnNDAwcHgnLFxuICBtYXhIZWlnaHQ6ICc2MDBweCcsXG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgY2xvc2VPbkNsaWNrT3V0c2lkZTogZmFsc2UsXG59O1xuXG5leHBvcnQgY2xhc3MgU3RlcE9wdGlvbnMgaW1wbGVtZW50cyBTdGVwT3B0aW9uc0kge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHdpdGhvdXRDb3VudGVyPzogYm9vbGVhbjtcbiAgd2l0aG91dFByZXY/OiBib29sZWFuO1xuICBjdXN0b21UZW1wbGF0ZT86IGJvb2xlYW47XG4gIHRoZW1lQ29sb3I/OiBzdHJpbmc7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBhcnJvd1RvVGFyZ2V0PzogYm9vbGVhbjtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBhbmltYXRlZFN0ZXA/OiBib29sZWFuO1xuICBzbW9vdGhTY3JvbGw/OiBib29sZWFuO1xuICBzY3JvbGxUbz86IGJvb2xlYW47XG4gIGNvbnRpbnVlSWZUYXJnZXRBYnNlbnQ/OiBib29sZWFuO1xuICBzdGVwVGFyZ2V0UmVzaXplPzogbnVtYmVyW107XG4gIGRlbGF5PzogbnVtYmVyO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIG1pbldpZHRoPzogc3RyaW5nO1xuICBtaW5IZWlnaHQ/OiBzdHJpbmc7XG4gIG1heFdpZHRoPzogc3RyaW5nO1xuICBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gIGF1dG9mb2N1cz86IGJvb2xlYW47XG4gIGNsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTdGVwT3B0aW9uc0kgPSBkZWZhdWx0T3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbnRpbnVlSWZUYXJnZXRBYnNlbnQsXG4gICAgICB3aXRob3V0Q291bnRlcixcbiAgICAgIHdpdGhvdXRQcmV2LFxuICAgICAgY3VzdG9tVGVtcGxhdGUsXG4gICAgICBzbW9vdGhTY3JvbGwsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIHRoZW1lQ29sb3IsXG4gICAgICBvcGFjaXR5LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgYXJyb3dUb1RhcmdldCxcbiAgICAgIHN0ZXBUYXJnZXRSZXNpemUsXG4gICAgICBtYXhIZWlnaHQsXG4gICAgICBtYXhXaWR0aCxcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIG1pbldpZHRoLFxuICAgICAgZGVsYXksXG4gICAgICBhbmltYXRlZFN0ZXAsXG4gICAgICBmaXhlZCxcbiAgICAgIGJhY2tkcm9wLFxuICAgICAgYXV0b2ZvY3VzLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB0aGlzLmFycm93VG9UYXJnZXQgPSBhcnJvd1RvVGFyZ2V0O1xuICAgIHRoaXMudGhlbWVDb2xvciA9IHRoZW1lQ29sb3I7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB0aGlzLmJhY2tkcm9wID0gYmFja2Ryb3A7XG4gICAgdGhpcy5jdXN0b21UZW1wbGF0ZSA9IGN1c3RvbVRlbXBsYXRlO1xuICAgIHRoaXMud2l0aG91dENvdW50ZXIgPSB3aXRob3V0Q291bnRlcjtcbiAgICB0aGlzLndpdGhvdXRQcmV2ID0gd2l0aG91dFByZXY7XG4gICAgdGhpcy5jb250aW51ZUlmVGFyZ2V0QWJzZW50ID0gY29udGludWVJZlRhcmdldEFic2VudDtcbiAgICB0aGlzLnN0ZXBUYXJnZXRSZXNpemUgPSBzdGVwVGFyZ2V0UmVzaXplO1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIHRoaXMubWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICB0aGlzLm1pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICB0aGlzLm1pbldpZHRoID0gbWluV2lkdGg7XG4gICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIHRoaXMuYW5pbWF0ZWRTdGVwID0gYW5pbWF0ZWRTdGVwO1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsID0gc21vb3RoU2Nyb2xsO1xuICAgIHRoaXMuc2Nyb2xsVG8gPSBzY3JvbGxUbztcbiAgICB0aGlzLmZpeGVkID0gZml4ZWQ7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBhdXRvZm9jdXM7XG4gICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gY2xvc2VPbkNsaWNrT3V0c2lkZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRvdXJFdmVudCA9ICAocHJvcHM6IHtcbiAgdG91ckV2ZW50OiBzdHJpbmcsXG4gIHN0ZXA/OiBudW1iZXIgfCBzdHJpbmcsXG4gIGhpc3Rvcnk/OiBudW1iZXJbXSxcbiAgdG91cj86IFRvdXJJLFxufSkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBUb3VyRXZlbnRzSSB7XG4gIHRvdXJTdGFydD86IFRvdXJFdmVudDtcbiAgdG91ckVuZD86IFRvdXJFdmVudDtcbiAgdG91ckJyZWFrPzogVG91ckV2ZW50O1xuICBuZXh0PzogVG91ckV2ZW50O1xuICBwcmV2PzogVG91ckV2ZW50O1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRvdXJFdmVudDogVG91ckV2ZW50ID0gKHByb3BzKSA9PiB7fTtcbmV4cG9ydCBjb25zdCBUb3VyRGVmYXVsdEV2ZW50cyA9IHtcbiAgdG91clN0YXJ0OiBkZWZhdWx0VG91ckV2ZW50LFxuICB0b3VyRW5kOiBkZWZhdWx0VG91ckV2ZW50LFxuICB0b3VyQnJlYWs6IGRlZmF1bHRUb3VyRXZlbnQsXG4gIG5leHQ6IGRlZmF1bHRUb3VyRXZlbnQsXG4gIHByZXY6IGRlZmF1bHRUb3VyRXZlbnQsXG59O1xuXG4gLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb3VyU2VydmljZSB7XG4gIHByaXZhdGUgc3RlcHM6IFRvdXJTdGVwSVtdO1xuICBwcml2YXRlIHRvdXJTdGFydGVkID0gZmFsc2U7XG4gIHByaXZhdGUgc3RlcHNTdHJlYW0kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIGhpc3RvcnkgPSBbXTtcbiAgcHJpdmF0ZSByb3V0ZUNoYW5nZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcmVzZXRzOiBTdGVwT3B0aW9uc0kgPSB7fTtcbiAvLyBwcml2YXRlIHRvdXJTdGFydCA9IFRvdXJEZWZhdWx0RXZlbnRzLnRvdXJTdGFydDtcbiAgcHJpdmF0ZSB0b3VyQnJlYWsgPSBUb3VyRGVmYXVsdEV2ZW50cy50b3VyQnJlYWs7XG4gIHByaXZhdGUgdG91ckVuZCA9IFRvdXJEZWZhdWx0RXZlbnRzLnRvdXJFbmQ7XG4gIHByaXZhdGUgbmV4dCA9IFRvdXJEZWZhdWx0RXZlbnRzLm5leHQ7XG4gIHByaXZhdGUgcHJldiA9IFRvdXJEZWZhdWx0RXZlbnRzLnByZXY7XG4gIHByaXZhdGUgaXNCcm93c2VyOiBib29sZWFuO1xuICBwcml2YXRlIGxhbmc6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldFNlcnZpY2U6IFN0ZXBUYXJnZXRTZXJ2aWNlLFxuICAgIC8vIEBkeW5hbWljXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDoge30pIHtcbiAgICB0aGlzLm5leHRTdGVwID0gdGhpcy5uZXh0U3RlcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJldlN0ZXAgPSB0aGlzLnByZXZTdGVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wVG91ciA9IHRoaXMuc3RvcFRvdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5sYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhbmcgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVPcHRpb25zKHRvdXI6IFRvdXJJKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVnRXhwciA9IC9edG9wJHxeZG93biR8XmxlZnQkfF5yaWdodCR8XmNlbnRlciR8XnJpZ2h0LWNlbnRlciR8XmxlZnQtY2VudGVyJHxecmlnaHQtdG9wJHxebGVmdC10b3AkfF5jZW50ZXItZG93biR8XmNlbnRlci10b3AkL2k7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIHRvdXIuc3RlcHMuZm9yRWFjaCgoc3RlcDogVG91clN0ZXBJKSA9PiB7XG4gICAgICBpZiAoc3RlcC5vcHRpb25zICYmIHN0ZXAub3B0aW9ucy5wbGFjZW1lbnQpIHtcbiAgICAgICAgaXNWYWxpZCA9IHJlZ0V4cHIudGVzdChzdGVwLm9wdGlvbnMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodG91ci50b3VyT3B0aW9ucyAmJiB0b3VyLnRvdXJPcHRpb25zLnBsYWNlbWVudCkge1xuICAgICAgaXNWYWxpZCA9IHJlZ0V4cHIudGVzdCh0b3VyLnRvdXJPcHRpb25zLnBsYWNlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG4gIHByaXZhdGUgc2V0U3RlcHModG91cjogVG91ckkpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFN0ZXBPcHRpb25zKHsuLi5kZWZhdWx0T3B0aW9ucywgLi4udGhpcy5wcmVzZXRzLCAuLi50b3VyLnRvdXJPcHRpb25zfSk7XG4gICAgdGhpcy5zdGVwcyA9IHRvdXIuc3RlcHMubWFwKCh4LCBpKSA9PiB7XG4gICAgICB4LmluZGV4ID0gaTtcbiAgICAgIGlmICh4LmRlc2NyaXB0aW9uICYmIHR5cGVvZiB4LmRlc2NyaXB0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICB4LmRlc2NyaXB0aW9uID0gdGhpcy5kZWZpbmVMb2NhbE5hbWUoeC5kZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAoeC50aXRsZSAmJiB0eXBlb2YgeC50aXRsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgeC50aXRsZSA9IHRoaXMuZGVmaW5lTG9jYWxOYW1lKHgudGl0bGUpXG4gICAgICB9XG4gICAgICB4Lm9wdGlvbnMgPSB4Lm9wdGlvbnMgPyB7Li4ub3B0aW9ucywgLi4ueC5vcHRpb25zfSA6IG9wdGlvbnM7XG4gICAgICB4LnRvdGFsID0gdG91ci5zdGVwcy5sZW5ndGg7XG4gICAgICB4LmN0cmxCdG5zID0gdGhpcy5kZWZpbmVMb2NhbEJ0bk5hbWVzKHRvdXIuY3RybEJ0bnMgfHwgZGVmYXVsdEN0cmxCdG5zKVxuICAgICAgcmV0dXJuIHg7XG4gICAgfSk7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnbW9kZTogJywgaXNEZXZNb2RlKCkpXG4gICAgICBjb25zb2xlLmxvZygnbmczLXRvdXIgaXMgaW5pdGlhdGVkIHdpdGggc3RlcHM6Jyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmluZUxvY2FsTmFtZShvYmo6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh0aGlzLmxhbmcpKSB7XG4gICAgICByZXN1bHQgPSBvYmpbdGhpcy5sYW5nXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2V0TGFuZ3VhZ2VzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgIGNvbnN0IHJhbGF0ZWRMYW5nID0gc2V0TGFuZ3VhZ2VzLmZpbHRlcihsID0+IGwuaW5jbHVkZXModGhpcy5sYW5nLnNsaWNlKDAsIDIpKSlbMF07XG4gICAgICBpZiAocmFsYXRlZExhbmcpIHtcbiAgICAgICAgcmVzdWx0ID0gb2JqW3JhbGF0ZWRMYW5nXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gb2JqW3NldExhbmd1YWdlc1swXV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihgVG91ciBjb25maWd1cmF0aW9uIGVycm9yIHdpdGggJHtKU09OLnN0cmluZ2lmeShvYmopfWApXG4gICAgcmV0dXJuICdFcnJvcidcbiAgfVxuXG4gIHByaXZhdGUgZGVmaW5lTG9jYWxCdG5OYW1lcyhidG5zOiBDdHJsQnRuc0kpOiBDdHJsQnRuc0kge1xuICAgIGNvbnN0IGJ0bkN0cmxzID0ge307XG4gICAgZm9yIChsZXQgcHJvcCBpbiBidG5zKSB7XG4gICAgICBpZiAoYnRucy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XG4gICAgICAgIGlmICh0eXBlb2YgYnRuc1twcm9wXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXN1bHQgPSBidG5zW3Byb3BdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBidG5zW3Byb3BdID09PSAnb2JqZWN0JyAmJiBidG5zW3Byb3BdW3RoaXMubGFuZ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYnRuc1twcm9wXVt0aGlzLmxhbmddXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2V0TGFuZ3VhZ2VzID0gT2JqZWN0LmtleXMoYnRuc1twcm9wXSk7XG4gICAgICAgICAgY29uc3QgcmFsYXRlZExhbmcgPSBzZXRMYW5ndWFnZXMuZmlsdGVyKGwgPT4gbC5pbmNsdWRlcyh0aGlzLmxhbmcuc2xpY2UoMCwgMikpKVswXTtcbiAgICAgICAgICBpZiAocmFsYXRlZExhbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGJ0bnNbcHJvcF1bcmFsYXRlZExhbmddXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGJ0bnNbcHJvcF1bc2V0TGFuZ3VhZ2VzWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBidG5DdHJsc1twcm9wXSA9IHJlc3VsdDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUb3VyIGNvbmZpZ3VyYXRpb24gZXJyb3Igd2l0aCAke0pTT04uc3RyaW5naWZ5KGJ0bnMpfWApO1xuICAgICAgICAgICAgYnRuQ3RybHNbcHJvcF0gPSAnRXJyb3InXG4gICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ0bkN0cmxzO1xuICB9XG4gIHByaXZhdGUgaW5pdFN0ZXAoc3RlcDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNTdGVwID0gdGhpcy5oaXN0b3J5Lmxlbmd0aCA/IHRoaXMuZ2V0TGFzdFN0ZXAoKSA6IHtyb3V0ZTogbnVsbH07XG4gICAgY29uc3QgbmV3dFN0ZXAgPSB0aGlzLnN0ZXBzW3N0ZXBdO1xuICAgIHRoaXMucm91dGVDaGFuZ2VkID0gcHJldmlvdXNTdGVwLnJvdXRlICE9PSBuZXd0U3RlcC5yb3V0ZTtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChzdGVwKTtcbiAgICBpZiAobmV3dFN0ZXAucm91dGUgJiYgdGhpcy5yb3V0ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtuZXd0U3RlcC5yb3V0ZV0pO1xuICAgIH1cbiAgICB0aGlzLnN0ZXBzU3RyZWFtJC5uZXh0KG5ld3RTdGVwLnN0ZXBOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaXN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmhpc3Rvcnk7XG4gIH1cbiAgcHVibGljIHNldFByZXNldHMocHJlc2V0czogU3RlcE9wdGlvbnNJKTogdm9pZCB7XG4gICAgdGhpcy5wcmVzZXRzID0gey4uLnRoaXMucHJlc2V0cywgLi4ucHJlc2V0c307XG4gIH1cbiAgcHVibGljIHJlc2V0U3RlcChzdGVwTmFtZTogc3RyaW5nIHwgbnVtYmVyLCBzdGVwOiBUb3VyU3RlcEkpIHtcbiAgICBjb25zdCBpbmRleCA9IHR5cGVvZiBzdGVwTmFtZSA9PT0gJ251bWJlcicgPyBzdGVwTmFtZSA6IHRoaXMuZ2V0U3RlcEJ5TmFtZShzdGVwTmFtZSkuaW5kZXg7XG4gICAgdGhpcy5zdGVwc1tpbmRleF0gPSB7Li4uc3RlcH07XG4gIH1cbiAgcHVibGljIGdldFN0ZXBCeU5hbWUoc3RlcE5hbWU6IHN0cmluZyk6IFRvdXJTdGVwSSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHMuZmlsdGVyKHN0ZXAgPT4gc3RlcC5zdGVwTmFtZSA9PT0gc3RlcE5hbWUpWzBdO1xuICB9XG4gIHB1YmxpYyBnZXRTdGVwQnlJbmRleChpbmRleCA9IDApOiBUb3VyU3RlcEkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzW2luZGV4XTtcbiAgfVxuICBwdWJsaWMgZ2V0TGFzdFN0ZXAoKTogVG91clN0ZXBJIHtcbiAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCkgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5oaXN0b3J5LnNsaWNlKC0xKVswXV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcHVibGljIGdldFN0ZXBzU3RyZWFtKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNTdHJlYW0kO1xuICB9XG4gIHB1YmxpYyBpc1JvdXRlQ2hhbmdlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZUNoYW5nZWQ7XG4gIH1cbiAgcHJpdmF0ZSBzZXRUb3VyU3RhdHVzKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudG91clN0YXJ0ZWQgPSBzdGF0dXM7XG4gIH1cbiAgcHVibGljIGdldFRvdXJTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG91clN0YXJ0ZWQ7XG4gIH1cbiAgcHVibGljIHN0YXJ0VG91cih0b3VyOiBUb3VySSkge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZU9wdGlvbnModG91cikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxhY2VtZW50IG9wdGlvbiBvZiB0aGUgbmczLXRvdXIgb3Igb25lIG9mIGl0IHN0ZXAgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICBjb25zdCB7dG91ckJyZWFrLCB0b3VyU3RhcnQsIHRvdXJFbmQsIG5leHQsIHByZXZ9ID0gey4uLlRvdXJEZWZhdWx0RXZlbnRzLCAuLi50b3VyLnRvdXJFdmVudHN9O1xuICAgIHRvdXJTdGFydCh7dG91ckV2ZW50OiAnVG91ciBzdGFydCcsIHRvdXJ9KTtcbiAgICB0aGlzLnRvdXJCcmVhayA9IHRvdXJCcmVhaztcbiAgICB0aGlzLnRvdXJFbmQgPSB0b3VyRW5kO1xuICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB0aGlzLnNldFRvdXJTdGF0dXModHJ1ZSk7XG4gICAgdGhpcy5zZXRTdGVwcyh0b3VyKTtcbiAgICB0aGlzLmluaXRTdGVwKDApO1xuICB9XG4gIHB1YmxpYyBzdG9wVG91cigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKS5pbmRleDtcbiAgICBjb25zdCBsYXRlc3RTdGVwSW5kZXggPSB0aGlzLnN0ZXBzLmxlbmd0aCAtIDE7XG4gICAgaWYgKCBpbmRleCA8IGxhdGVzdFN0ZXBJbmRleCkge1xuICAgICAgdGhpcy50b3VyQnJlYWsoe3RvdXJFdmVudDogJ1RvdXIgYnJlYWsnLCBzdGVwOiBpbmRleCwgaGlzdG9yeTogdGhpcy5oaXN0b3J5fSk7XG4gICAgfSBlbHNlIGlmIChsYXRlc3RTdGVwSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnRvdXJFbmQoe3RvdXJFdmVudDogJ1RvdXIgZW5kJywgc3RlcDogaW5kZXgsIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeX0pO1xuICAgIH1cbiAgICB0aGlzLnNldFRvdXJTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMuc3RlcHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnN0ZXBzU3RyZWFtJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuaGlzdG9yeS5sZW5ndGggPSAwO1xuICAgIHRoaXMudGFyZ2V0U2VydmljZS5zZXRUYXJnZXRTdWJqZWN0KG51bGwpO1xuICB9XG4gIHB1YmxpYyBuZXh0U3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLmluZGV4ICsgMTtcbiAgICB0aGlzLm5leHQoe3RvdXJFdmVudDogJ0luaXQgbmV4dCcsIHN0ZXAsIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeX0pO1xuICAgIHRoaXMuaW5pdFN0ZXAoc3RlcCk7XG4gIH1cbiAgcHVibGljIHByZXZTdGVwKCkge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmdldExhc3RTdGVwKCkuaW5kZXggLSAxO1xuICAgIHRoaXMucHJldih7dG91ckV2ZW50OiAnSW5pdCBwcmV2Jywgc3RlcCwgaGlzdG9yeTogdGhpcy5oaXN0b3J5fSk7XG4gICAgdGhpcy5pbml0U3RlcChzdGVwKTtcbiAgfVxufVxuIl19