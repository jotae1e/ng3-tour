/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var defaultCtrlBtns = {
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
export var defaultOptions = {
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
var StepOptions = /** @class */ (function () {
    function StepOptions(options) {
        if (options === void 0) { options = defaultOptions; }
        var className = options.className, continueIfTargetAbsent = options.continueIfTargetAbsent, withoutCounter = options.withoutCounter, withoutPrev = options.withoutPrev, customTemplate = options.customTemplate, smoothScroll = options.smoothScroll, scrollTo = options.scrollTo, themeColor = options.themeColor, opacity = options.opacity, placement = options.placement, arrowToTarget = options.arrowToTarget, stepTargetResize = options.stepTargetResize, maxHeight = options.maxHeight, maxWidth = options.maxWidth, minHeight = options.minHeight, minWidth = options.minWidth, delay = options.delay, animatedStep = options.animatedStep, fixed = options.fixed, backdrop = options.backdrop, autofocus = options.autofocus, closeOnClickOutside = options.closeOnClickOutside;
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
    return StepOptions;
}());
export { StepOptions };
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
export var defaultTourEvent = (/**
 * @param {?} props
 * @return {?}
 */
function (props) { });
/** @type {?} */
export var TourDefaultEvents = {
    tourStart: defaultTourEvent,
    tourEnd: defaultTourEvent,
    tourBreak: defaultTourEvent,
    next: defaultTourEvent,
    prev: defaultTourEvent,
};
// @dynamic
var TourService = /** @class */ (function () {
    function TourService(router, targetService, 
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
    TourService.prototype.validateOptions = /**
     * @private
     * @param {?} tour
     * @return {?}
     */
    function (tour) {
        /** @type {?} */
        var regExpr = /^top$|^down$|^left$|^right$|^center$|^right-center$|^left-center$|^right-top$|^left-top$/i;
        /** @type {?} */
        var isValid = true;
        tour.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (step.options && step.options.placement) {
                isValid = regExpr.test(step.options.placement);
            }
        }));
        if (tour.tourOptions && tour.tourOptions.placement) {
            isValid = regExpr.test(tour.tourOptions.placement);
        }
        return isValid;
    };
    /**
     * @private
     * @param {?} tour
     * @return {?}
     */
    TourService.prototype.setSteps = /**
     * @private
     * @param {?} tour
     * @return {?}
     */
    function (tour) {
        var _this = this;
        /** @type {?} */
        var options = new StepOptions(tslib_1.__assign({}, defaultOptions, this.presets, tour.tourOptions));
        this.steps = tour.steps.map((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) {
            x.index = i;
            if (x.description && typeof x.description === 'object') {
                x.description = _this.defineLocalName(x.description);
            }
            if (x.title && typeof x.title === 'object') {
                x.title = _this.defineLocalName(x.title);
            }
            x.options = x.options ? tslib_1.__assign({}, options, x.options) : options;
            x.total = tour.steps.length;
            x.ctrlBtns = _this.defineLocalBtnNames(tour.ctrlBtns || defaultCtrlBtns);
            return x;
        }));
        if (isDevMode()) {
            console.log('mode: ', isDevMode());
            console.log('ng3-tour is initiated with steps:');
            console.log(this.steps);
        }
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    TourService.prototype.defineLocalName = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        /** @type {?} */
        var result;
        if (!this.isBrowser) {
            return '';
        }
        if (obj.hasOwnProperty(this.lang)) {
            result = obj[this.lang];
        }
        else {
            /** @type {?} */
            var setLanguages = Object.keys(obj);
            /** @type {?} */
            var ralatedLang = setLanguages.filter((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return l.includes(_this.lang.slice(0, 2)); }))[0];
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
        console.error("Tour configuration error with " + JSON.stringify(obj));
        return 'Error';
    };
    /**
     * @private
     * @param {?} btns
     * @return {?}
     */
    TourService.prototype.defineLocalBtnNames = /**
     * @private
     * @param {?} btns
     * @return {?}
     */
    function (btns) {
        var _this = this;
        /** @type {?} */
        var btnCtrls = {};
        for (var prop in btns) {
            if (btns.hasOwnProperty(prop)) {
                /** @type {?} */
                var result = void 0;
                if (typeof btns[prop] === 'string') {
                    result = btns[prop];
                }
                else if (typeof btns[prop] === 'object' && btns[prop][this.lang] === 'string') {
                    result = btns[prop][this.lang];
                }
                else {
                    /** @type {?} */
                    var setLanguages = Object.keys(btns[prop]);
                    /** @type {?} */
                    var ralatedLang = setLanguages.filter((/**
                     * @param {?} l
                     * @return {?}
                     */
                    function (l) { return l.includes(_this.lang.slice(0, 2)); }))[0];
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
                        console.error("Tour configuration error with " + JSON.stringify(btns));
                        btnCtrls[prop] = 'Error';
                    }
                }
            }
        }
        return btnCtrls;
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.initStep = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var previousStep = this.history.length ? this.getLastStep() : { route: null };
        /** @type {?} */
        var newtStep = this.steps[step];
        this.routeChanged = previousStep.route !== newtStep.route;
        this.history.push(step);
        if (newtStep.route && this.routeChanged) {
            this.router.navigate([newtStep.route]);
        }
        this.stepsStream$.next(newtStep.stepName);
    };
    /**
     * @return {?}
     */
    TourService.prototype.getHistory = /**
     * @return {?}
     */
    function () {
        return this.history;
    };
    /**
     * @param {?} presets
     * @return {?}
     */
    TourService.prototype.setPresets = /**
     * @param {?} presets
     * @return {?}
     */
    function (presets) {
        this.presets = tslib_1.__assign({}, this.presets, presets);
    };
    /**
     * @param {?} stepName
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.resetStep = /**
     * @param {?} stepName
     * @param {?} step
     * @return {?}
     */
    function (stepName, step) {
        /** @type {?} */
        var index = typeof stepName === 'number' ? stepName : this.getStepByName(stepName).index;
        this.steps[index] = tslib_1.__assign({}, step);
    };
    /**
     * @param {?} stepName
     * @return {?}
     */
    TourService.prototype.getStepByName = /**
     * @param {?} stepName
     * @return {?}
     */
    function (stepName) {
        return this.steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.stepName === stepName; }))[0];
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    TourService.prototype.getStepByIndex = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        return this.steps[index];
    };
    /**
     * @return {?}
     */
    TourService.prototype.getLastStep = /**
     * @return {?}
     */
    function () {
        if (this.history.length)
            return this.steps[this.history.slice(-1)[0]];
        return null;
    };
    /**
     * @return {?}
     */
    TourService.prototype.getStepsStream = /**
     * @return {?}
     */
    function () {
        return this.stepsStream$;
    };
    /**
     * @return {?}
     */
    TourService.prototype.isRouteChanged = /**
     * @return {?}
     */
    function () {
        return this.routeChanged;
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    TourService.prototype.setTourStatus = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.tourStarted = status;
    };
    /**
     * @return {?}
     */
    TourService.prototype.getTourStatus = /**
     * @return {?}
     */
    function () {
        return this.tourStarted;
    };
    /**
     * @param {?} tour
     * @return {?}
     */
    TourService.prototype.startTour = /**
     * @param {?} tour
     * @return {?}
     */
    function (tour) {
        if (!this.validateOptions(tour)) {
            throw new Error('Placement option of the ng3-tour or one of it step is invalid');
        }
        var _a = tslib_1.__assign({}, TourDefaultEvents, tour.tourEvents), tourBreak = _a.tourBreak, tourStart = _a.tourStart, tourEnd = _a.tourEnd, next = _a.next, prev = _a.prev;
        tourStart({ tourEvent: 'Tour start', tour: tour });
        this.tourBreak = tourBreak;
        this.tourEnd = tourEnd;
        this.next = next;
        this.prev = prev;
        this.setTourStatus(true);
        this.setSteps(tour);
        this.initStep(0);
    };
    /**
     * @return {?}
     */
    TourService.prototype.stopTour = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.getLastStep().index;
        /** @type {?} */
        var latestStepIndex = this.steps.length - 1;
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
    };
    /**
     * @return {?}
     */
    TourService.prototype.nextStep = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var step = this.getLastStep().index + 1;
        this.next({ tourEvent: 'Init next', step: step, history: this.history });
        this.initStep(step);
    };
    /**
     * @return {?}
     */
    TourService.prototype.prevStep = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var step = this.getLastStep().index - 1;
        this.prev({ tourEvent: 'Init prev', step: step, history: this.history });
        this.initStep(step);
    };
    TourService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TourService.ctorParameters = function () { return [
        { type: Router },
        { type: StepTargetService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return TourService;
}());
export { TourService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG91ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUV4RCwyQkFNQzs7O0lBTEMsc0JBQW1COztJQUNuQiw0QkFBMkI7O0lBQzNCLDRCQUFzQjs7SUFDdEIsMkJBQXlCOztJQUN6Qix5QkFBcUI7Ozs7O0FBR3ZCLCtCQVNDOzs7SUFSQyw2QkFBaUI7O0lBQ2pCLDBCQUFlOztJQUNmLDBCQUFlOztJQUNmLDBCQUEyQzs7SUFDM0MsZ0NBQWlEOztJQUNqRCw0QkFBdUI7O0lBQ3ZCLDZCQUFxQjs7Ozs7O0FBSXZCLCtCQUtDOzs7SUFKQyx5QkFBa0M7O0lBQ2xDLHlCQUFrQzs7SUFDbEMseUJBQWtDOzs7O0FBSXBDLE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDN0IsSUFBSSxFQUFFO1FBQ0wsT0FBTyxFQUFFLFdBQVc7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsTUFBTTtLQUNmO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFVBQVU7UUFDbkIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFF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Q3RCLENBQUM7Ozs7SUFDTSw4QkFBUTs7O0lBQWY7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDOztnQkFyTUYsVUFBVTs7OztnQkFwTUgsTUFBTTtnQkFFTixpQkFBaUI7Z0RBcU5wQixNQUFNLFNBQUMsV0FBVzs7SUFtTHZCLGtCQUFDO0NBQUEsQUF0TUQsSUFzTUM7U0FyTVksV0FBVzs7Ozs7O0lBQ3RCLDRCQUEyQjs7Ozs7SUFDM0Isa0NBQTRCOzs7OztJQUM1QixtQ0FBc0Q7Ozs7O0lBQ3RELDhCQUFxQjs7Ozs7SUFDckIsbUNBQTZCOzs7OztJQUM3Qiw4QkFBbUM7Ozs7O0lBRW5DLGdDQUFnRDs7Ozs7SUFDaEQsOEJBQTRDOzs7OztJQUM1QywyQkFBc0M7Ozs7O0lBQ3RDLDJCQUFzQzs7Ozs7SUFDdEMsZ0NBQTJCOzs7OztJQUMzQiwyQkFBcUI7Ozs7O0lBRW5CLDZCQUFzQjs7Ozs7SUFDdEIsb0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBpc0Rldk1vZGUsIFBMQVRGT1JNX0lELCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7U3RlcFRhcmdldFNlcnZpY2V9IGZyb20gJy4vc3RlcC10YXJnZXQuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG91ckkge1xuICBzdGVwczogVG91clN0ZXBJW107XG4gIHRvdXJPcHRpb25zPzogU3RlcE9wdGlvbnNJO1xuICB3aXRob3V0TG9ncz86IGJvb2xlYW47XG4gIHRvdXJFdmVudHM/OiBUb3VyRXZlbnRzSTtcbiAgY3RybEJ0bnM/OiBDdHJsQnRuc0k7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG91clN0ZXBJIHtcbiAgc3RlcE5hbWU6IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmc7XG4gIGluZGV4PzogbnVtYmVyO1xuICB0aXRsZT86IHN0cmluZyB8IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX07XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwge1twcm9wTmFtZTogc3RyaW5nXTogYW55fTtcbiAgb3B0aW9ucz86IFN0ZXBPcHRpb25zSTtcbiAgY3RybEJ0bnM/OiBDdHJsQnRuc0k7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN0cmxCdG5zSSB7XG4gIHByZXY/OiB7W3Byb3BzTmFtZTogc3RyaW5nXTogYW55fTtcbiAgbmV4dD86IHtbcHJvcHNOYW1lOiBzdHJpbmddOiBhbnl9O1xuICBkb25lPzoge1twcm9wc05hbWU6IHN0cmluZ106IGFueX07XG4gIFtwcm9wc05hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDdHJsQnRucyA9IHtcbiAgZG9uZToge1xuICAgJ2VuLUVOJzogJ0ZJTkFMSVpBUicsXG4gICAncnUtUlUnOiAn0LfQsNC60YAnLFxuICAgJ2ZyLUZSJzogJ2ZpbmknLFxuICB9LFxuICBwcmV2OiB7XG4gICAgJ2VuLUVOJzogJ0FOVEVSSU9SJyxcbiAgICAncnUtUlUnOiAn0L/RgNC10LQnLFxuICAgICdmci1GUic6ICdwcsOpYydcbiAgfSxcbiAgbmV4dDoge1xuICAgICdlbi1FTic6ICdTSUdVSUVOVEUnLFxuICAgICdydS1SVSc6ICfRgdC70LXQtCcsXG4gICAgJ2ZyLUZSJzogJ3Byb2NoJyxcbiAgfSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGVwT3B0aW9uc0kge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHdpdGhvdXRDb3VudGVyPzogYm9vbGVhbjtcbiAgd2l0aG91dFByZXY/OiBib29sZWFuO1xuICBjdXN0b21UZW1wbGF0ZT86IGJvb2xlYW47XG4gIHRoZW1lQ29sb3I/OiBzdHJpbmc7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIHBsYWNlbWVudD86IHN0cmluZztcbiAgYXJyb3dUb1RhcmdldD86IGJvb2xlYW47XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgYW5pbWF0ZWRTdGVwPzogYm9vbGVhbjtcbiAgc21vb3RoU2Nyb2xsPzogYm9vbGVhbjtcbiAgc2Nyb2xsVG8/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIG1pbldpZHRoPzogc3RyaW5nOyAvLyBTdGVwIG1pbi13aWR0aFxuICBtaW5IZWlnaHQ/OiBzdHJpbmc7IC8vIFN0ZXAgbWluLWhlaWdodFxuICBtYXhXaWR0aD86IHN0cmluZzsgLy8gU3RlcCBtYXgtd2lkdGhcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nOyAvLyBTdGVwIG1heC1oZWlnaHRcbiAgY29udGludWVJZlRhcmdldEFic2VudD86IGJvb2xlYW47IC8vIGluaXQgbmV4dCBzdGVwIGlmIHRhcmdldCBpcyBub3QgZm91bmQgZm9yIGN1cnJlbnQgb25lXG4gIHN0ZXBUYXJnZXRSZXNpemU/OiBudW1iZXJbXTsgLy8gY2hhbmdlIHNpemUgb2YgYSAnd2luZG93JyBmb3Igc3RlcCB0YXJnZXRcbiAgZGVsYXk/OiBudW1iZXI7IC8vIGZvciB0aGUgY2FzZSBvZiB0aGUgbGF6aWx5IGxvYWRlZCBvciBhbmltYXRlZCByb3V0ZXNcbiAgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgY2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogU3RlcE9wdGlvbnNJID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBjb250aW51ZUlmVGFyZ2V0QWJzZW50OiB0cnVlLFxuICB3aXRob3V0Q291bnRlcjogZmFsc2UsXG4gIHdpdGhvdXRQcmV2OiBmYWxzZSxcbiAgY3VzdG9tVGVtcGxhdGU6IGZhbHNlLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICBzY3JvbGxUbzogdHJ1ZSxcbiAgdGhlbWVDb2xvcjogJ3JnYigyMCwgNjAsIDYwKScsXG4gIG9wYWNpdHk6IC42LFxuICBwbGFjZW1lbnQ6ICdkb3duJyxcbiAgYXJyb3dUb1RhcmdldDogdHJ1ZSxcbiAgc3RlcFRhcmdldFJlc2l6ZTogWzBdLFxuICBkZWxheTogMTAwMCxcbiAgYW5pbWF0ZWRTdGVwOiB0cnVlLFxuICBmaXhlZDogZmFsc2UsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBtaW5XaWR0aDogJzI1MHB4JyxcbiAgbWluSGVpZ2h0OiAnMTUwcHgnLFxuICBtYXhXaWR0aDogJzQwMHB4JyxcbiAgbWF4SGVpZ2h0OiAnNjAwcHgnLFxuICBhdXRvZm9jdXM6IHRydWUsXG4gIGNsb3NlT25DbGlja091dHNpZGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNsYXNzIFN0ZXBPcHRpb25zIGltcGxlbWVudHMgU3RlcE9wdGlvbnNJIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3aXRob3V0Q291bnRlcj86IGJvb2xlYW47XG4gIHdpdGhvdXRQcmV2PzogYm9vbGVhbjtcbiAgY3VzdG9tVGVtcGxhdGU/OiBib29sZWFuO1xuICB0aGVtZUNvbG9yPzogc3RyaW5nO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgYXJyb3dUb1RhcmdldD86IGJvb2xlYW47XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgYW5pbWF0ZWRTdGVwPzogYm9vbGVhbjtcbiAgc21vb3RoU2Nyb2xsPzogYm9vbGVhbjtcbiAgc2Nyb2xsVG8/OiBib29sZWFuO1xuICBjb250aW51ZUlmVGFyZ2V0QWJzZW50PzogYm9vbGVhbjtcbiAgc3RlcFRhcmdldFJlc2l6ZT86IG51bWJlcltdO1xuICBkZWxheT86IG51bWJlcjtcbiAgZml4ZWQ/OiBib29sZWFuO1xuICBtaW5XaWR0aD86IHN0cmluZztcbiAgbWluSGVpZ2h0Pzogc3RyaW5nO1xuICBtYXhXaWR0aD86IHN0cmluZztcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICBhdXRvZm9jdXM/OiBib29sZWFuO1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogU3RlcE9wdGlvbnNJID0gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb250aW51ZUlmVGFyZ2V0QWJzZW50LFxuICAgICAgd2l0aG91dENvdW50ZXIsXG4gICAgICB3aXRob3V0UHJldixcbiAgICAgIGN1c3RvbVRlbXBsYXRlLFxuICAgICAgc21vb3RoU2Nyb2xsLFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICB0aGVtZUNvbG9yLFxuICAgICAgb3BhY2l0eSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGFycm93VG9UYXJnZXQsXG4gICAgICBzdGVwVGFyZ2V0UmVzaXplLFxuICAgICAgbWF4SGVpZ2h0LFxuICAgICAgbWF4V2lkdGgsXG4gICAgICBtaW5IZWlnaHQsXG4gICAgICBtaW5XaWR0aCxcbiAgICAgIGRlbGF5LFxuICAgICAgYW5pbWF0ZWRTdGVwLFxuICAgICAgZml4ZWQsXG4gICAgICBiYWNrZHJvcCxcbiAgICAgIGF1dG9mb2N1cyxcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGUsXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgdGhpcy5hcnJvd1RvVGFyZ2V0ID0gYXJyb3dUb1RhcmdldDtcbiAgICB0aGlzLnRoZW1lQ29sb3IgPSB0aGVtZUNvbG9yO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5iYWNrZHJvcCA9IGJhY2tkcm9wO1xuICAgIHRoaXMuY3VzdG9tVGVtcGxhdGUgPSBjdXN0b21UZW1wbGF0ZTtcbiAgICB0aGlzLndpdGhvdXRDb3VudGVyID0gd2l0aG91dENvdW50ZXI7XG4gICAgdGhpcy53aXRob3V0UHJldiA9IHdpdGhvdXRQcmV2O1xuICAgIHRoaXMuY29udGludWVJZlRhcmdldEFic2VudCA9IGNvbnRpbnVlSWZUYXJnZXRBYnNlbnQ7XG4gICAgdGhpcy5zdGVwVGFyZ2V0UmVzaXplID0gc3RlcFRhcmdldFJlc2l6ZTtcbiAgICB0aGlzLm1heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB0aGlzLm1heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgdGhpcy5taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XG4gICAgdGhpcy5taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB0aGlzLmFuaW1hdGVkU3RlcCA9IGFuaW1hdGVkU3RlcDtcbiAgICB0aGlzLnNtb290aFNjcm9sbCA9IHNtb290aFNjcm9sbDtcbiAgICB0aGlzLnNjcm9sbFRvID0gc2Nyb2xsVG87XG4gICAgdGhpcy5maXhlZCA9IGZpeGVkO1xuICAgIHRoaXMuYXV0b2ZvY3VzID0gYXV0b2ZvY3VzO1xuICAgIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IGNsb3NlT25DbGlja091dHNpZGVcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUb3VyRXZlbnQgPSAgKHByb3BzOiB7XG4gIHRvdXJFdmVudDogc3RyaW5nLFxuICBzdGVwPzogbnVtYmVyIHwgc3RyaW5nLFxuICBoaXN0b3J5PzogbnVtYmVyW10sXG4gIHRvdXI/OiBUb3VySSxcbn0pID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG91ckV2ZW50c0kge1xuICB0b3VyU3RhcnQ/OiBUb3VyRXZlbnQ7XG4gIHRvdXJFbmQ/OiBUb3VyRXZlbnQ7XG4gIHRvdXJCcmVhaz86IFRvdXJFdmVudDtcbiAgbmV4dD86IFRvdXJFdmVudDtcbiAgcHJldj86IFRvdXJFdmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUb3VyRXZlbnQ6IFRvdXJFdmVudCA9IChwcm9wcykgPT4ge307XG5leHBvcnQgY29uc3QgVG91ckRlZmF1bHRFdmVudHMgPSB7XG4gIHRvdXJTdGFydDogZGVmYXVsdFRvdXJFdmVudCxcbiAgdG91ckVuZDogZGVmYXVsdFRvdXJFdmVudCxcbiAgdG91ckJyZWFrOiBkZWZhdWx0VG91ckV2ZW50LFxuICBuZXh0OiBkZWZhdWx0VG91ckV2ZW50LFxuICBwcmV2OiBkZWZhdWx0VG91ckV2ZW50LFxufTtcblxuIC8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG91clNlcnZpY2Uge1xuICBwcml2YXRlIHN0ZXBzOiBUb3VyU3RlcElbXTtcbiAgcHJpdmF0ZSB0b3VyU3RhcnRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHN0ZXBzU3RyZWFtJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHJpdmF0ZSBoaXN0b3J5ID0gW107XG4gIHByaXZhdGUgcm91dGVDaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgcHJlc2V0czogU3RlcE9wdGlvbnNJID0ge307XG4gLy8gcHJpdmF0ZSB0b3VyU3RhcnQgPSBUb3VyRGVmYXVsdEV2ZW50cy50b3VyU3RhcnQ7XG4gIHByaXZhdGUgdG91ckJyZWFrID0gVG91ckRlZmF1bHRFdmVudHMudG91ckJyZWFrO1xuICBwcml2YXRlIHRvdXJFbmQgPSBUb3VyRGVmYXVsdEV2ZW50cy50b3VyRW5kO1xuICBwcml2YXRlIG5leHQgPSBUb3VyRGVmYXVsdEV2ZW50cy5uZXh0O1xuICBwcml2YXRlIHByZXYgPSBUb3VyRGVmYXVsdEV2ZW50cy5wcmV2O1xuICBwcml2YXRlIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBsYW5nOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0YXJnZXRTZXJ2aWNlOiBTdGVwVGFyZ2V0U2VydmljZSxcbiAgICAvLyBAZHluYW1pY1xuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHt9KSB7XG4gICAgdGhpcy5uZXh0U3RlcCA9IHRoaXMubmV4dFN0ZXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXZTdGVwID0gdGhpcy5wcmV2U3RlcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcFRvdXIgPSB0aGlzLnN0b3BUb3VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYW5nID0gJydcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9ucyh0b3VyOiBUb3VySSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZ0V4cHIgPSAvXnRvcCR8XmRvd24kfF5sZWZ0JHxecmlnaHQkfF5jZW50ZXIkfF5yaWdodC1jZW50ZXIkfF5sZWZ0LWNlbnRlciR8XnJpZ2h0LXRvcCR8XmxlZnQtdG9wJC9pO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB0b3VyLnN0ZXBzLmZvckVhY2goKHN0ZXA6IFRvdXJTdGVwSSkgPT4ge1xuICAgICAgaWYgKHN0ZXAub3B0aW9ucyAmJiBzdGVwLm9wdGlvbnMucGxhY2VtZW50KSB7XG4gICAgICAgIGlzVmFsaWQgPSByZWdFeHByLnRlc3Qoc3RlcC5vcHRpb25zLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRvdXIudG91ck9wdGlvbnMgJiYgdG91ci50b3VyT3B0aW9ucy5wbGFjZW1lbnQpIHtcbiAgICAgIGlzVmFsaWQgPSByZWdFeHByLnRlc3QodG91ci50b3VyT3B0aW9ucy5wbGFjZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuICBwcml2YXRlIHNldFN0ZXBzKHRvdXI6IFRvdXJJKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTdGVwT3B0aW9ucyh7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLnRoaXMucHJlc2V0cywgLi4udG91ci50b3VyT3B0aW9uc30pO1xuICAgIHRoaXMuc3RlcHMgPSB0b3VyLnN0ZXBzLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgeC5pbmRleCA9IGk7XG4gICAgICBpZiAoeC5kZXNjcmlwdGlvbiAmJiB0eXBlb2YgeC5kZXNjcmlwdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgeC5kZXNjcmlwdGlvbiA9IHRoaXMuZGVmaW5lTG9jYWxOYW1lKHguZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgaWYgKHgudGl0bGUgJiYgdHlwZW9mIHgudGl0bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHgudGl0bGUgPSB0aGlzLmRlZmluZUxvY2FsTmFtZSh4LnRpdGxlKVxuICAgICAgfVxuICAgICAgeC5vcHRpb25zID0geC5vcHRpb25zID8gey4uLm9wdGlvbnMsIC4uLngub3B0aW9uc30gOiBvcHRpb25zO1xuICAgICAgeC50b3RhbCA9IHRvdXIuc3RlcHMubGVuZ3RoO1xuICAgICAgeC5jdHJsQnRucyA9IHRoaXMuZGVmaW5lTG9jYWxCdG5OYW1lcyh0b3VyLmN0cmxCdG5zIHx8IGRlZmF1bHRDdHJsQnRucylcbiAgICAgIHJldHVybiB4O1xuICAgIH0pO1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5sb2coJ21vZGU6ICcsIGlzRGV2TW9kZSgpKVxuICAgICAgY29uc29sZS5sb2coJ25nMy10b3VyIGlzIGluaXRpYXRlZCB3aXRoIHN0ZXBzOicpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVMb2NhbE5hbWUob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZztcbiAgICBpZiAoIXRoaXMuaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkodGhpcy5sYW5nKSkge1xuICAgICAgcmVzdWx0ID0gb2JqW3RoaXMubGFuZ107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNldExhbmd1YWdlcyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICBjb25zdCByYWxhdGVkTGFuZyA9IHNldExhbmd1YWdlcy5maWx0ZXIobCA9PiBsLmluY2x1ZGVzKHRoaXMubGFuZy5zbGljZSgwLCAyKSkpWzBdO1xuICAgICAgaWYgKHJhbGF0ZWRMYW5nKSB7XG4gICAgICAgIHJlc3VsdCA9IG9ialtyYWxhdGVkTGFuZ11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG9ialtzZXRMYW5ndWFnZXNbMF1dO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoYFRvdXIgY29uZmlndXJhdGlvbiBlcnJvciB3aXRoICR7SlNPTi5zdHJpbmdpZnkob2JqKX1gKVxuICAgIHJldHVybiAnRXJyb3InXG4gIH1cblxuICBwcml2YXRlIGRlZmluZUxvY2FsQnRuTmFtZXMoYnRuczogQ3RybEJ0bnNJKTogQ3RybEJ0bnNJIHtcbiAgICBjb25zdCBidG5DdHJscyA9IHt9O1xuICAgIGZvciAobGV0IHByb3AgaW4gYnRucykge1xuICAgICAgaWYgKGJ0bnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xuICAgICAgICBpZiAodHlwZW9mIGJ0bnNbcHJvcF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYnRuc1twcm9wXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYnRuc1twcm9wXSA9PT0gJ29iamVjdCcgJiYgYnRuc1twcm9wXVt0aGlzLmxhbmddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJlc3VsdCA9IGJ0bnNbcHJvcF1bdGhpcy5sYW5nXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNldExhbmd1YWdlcyA9IE9iamVjdC5rZXlzKGJ0bnNbcHJvcF0pO1xuICAgICAgICAgIGNvbnN0IHJhbGF0ZWRMYW5nID0gc2V0TGFuZ3VhZ2VzLmZpbHRlcihsID0+IGwuaW5jbHVkZXModGhpcy5sYW5nLnNsaWNlKDAsIDIpKSlbMF07XG4gICAgICAgICAgaWYgKHJhbGF0ZWRMYW5nKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBidG5zW3Byb3BdW3JhbGF0ZWRMYW5nXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBidG5zW3Byb3BdW3NldExhbmd1YWdlc1swXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYnRuQ3RybHNbcHJvcF0gPSByZXN1bHQ7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVG91ciBjb25maWd1cmF0aW9uIGVycm9yIHdpdGggJHtKU09OLnN0cmluZ2lmeShidG5zKX1gKTtcbiAgICAgICAgICAgIGJ0bkN0cmxzW3Byb3BdID0gJ0Vycm9yJ1xuICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidG5DdHJscztcbiAgfVxuICBwcml2YXRlIGluaXRTdGVwKHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHRoaXMuaGlzdG9yeS5sZW5ndGggPyB0aGlzLmdldExhc3RTdGVwKCkgOiB7cm91dGU6IG51bGx9O1xuICAgIGNvbnN0IG5ld3RTdGVwID0gdGhpcy5zdGVwc1tzdGVwXTtcbiAgICB0aGlzLnJvdXRlQ2hhbmdlZCA9IHByZXZpb3VzU3RlcC5yb3V0ZSAhPT0gbmV3dFN0ZXAucm91dGU7XG4gICAgdGhpcy5oaXN0b3J5LnB1c2goc3RlcCk7XG4gICAgaWYgKG5ld3RTdGVwLnJvdXRlICYmIHRoaXMucm91dGVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbmV3dFN0ZXAucm91dGVdKTtcbiAgICB9XG4gICAgdGhpcy5zdGVwc1N0cmVhbSQubmV4dChuZXd0U3RlcC5zdGVwTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlzdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5O1xuICB9XG4gIHB1YmxpYyBzZXRQcmVzZXRzKHByZXNldHM6IFN0ZXBPcHRpb25zSSk6IHZvaWQge1xuICAgIHRoaXMucHJlc2V0cyA9IHsuLi50aGlzLnByZXNldHMsIC4uLnByZXNldHN9O1xuICB9XG4gIHB1YmxpYyByZXNldFN0ZXAoc3RlcE5hbWU6IHN0cmluZyB8IG51bWJlciwgc3RlcDogVG91clN0ZXBJKSB7XG4gICAgY29uc3QgaW5kZXggPSB0eXBlb2Ygc3RlcE5hbWUgPT09ICdudW1iZXInID8gc3RlcE5hbWUgOiB0aGlzLmdldFN0ZXBCeU5hbWUoc3RlcE5hbWUpLmluZGV4O1xuICAgIHRoaXMuc3RlcHNbaW5kZXhdID0gey4uLnN0ZXB9O1xuICB9XG4gIHB1YmxpYyBnZXRTdGVwQnlOYW1lKHN0ZXBOYW1lOiBzdHJpbmcpOiBUb3VyU3RlcEkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLmZpbHRlcihzdGVwID0+IHN0ZXAuc3RlcE5hbWUgPT09IHN0ZXBOYW1lKVswXTtcbiAgfVxuICBwdWJsaWMgZ2V0U3RlcEJ5SW5kZXgoaW5kZXggPSAwKTogVG91clN0ZXBJIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1tpbmRleF07XG4gIH1cbiAgcHVibGljIGdldExhc3RTdGVwKCk6IFRvdXJTdGVwSSB7XG4gICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGgpIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuaGlzdG9yeS5zbGljZSgtMSlbMF1dO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHB1YmxpYyBnZXRTdGVwc1N0cmVhbSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzU3RyZWFtJDtcbiAgfVxuICBwdWJsaWMgaXNSb3V0ZUNoYW5nZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVDaGFuZ2VkO1xuICB9XG4gIHByaXZhdGUgc2V0VG91clN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTdGFydGVkID0gc3RhdHVzO1xuICB9XG4gIHB1YmxpYyBnZXRUb3VyU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnRvdXJTdGFydGVkO1xuICB9XG4gIHB1YmxpYyBzdGFydFRvdXIodG91cjogVG91ckkpIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVPcHRpb25zKHRvdXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYWNlbWVudCBvcHRpb24gb2YgdGhlIG5nMy10b3VyIG9yIG9uZSBvZiBpdCBzdGVwIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3Qge3RvdXJCcmVhaywgdG91clN0YXJ0LCB0b3VyRW5kLCBuZXh0LCBwcmV2fSA9IHsuLi5Ub3VyRGVmYXVsdEV2ZW50cywgLi4udG91ci50b3VyRXZlbnRzfTtcbiAgICB0b3VyU3RhcnQoe3RvdXJFdmVudDogJ1RvdXIgc3RhcnQnLCB0b3VyfSk7XG4gICAgdGhpcy50b3VyQnJlYWsgPSB0b3VyQnJlYWs7XG4gICAgdGhpcy50b3VyRW5kID0gdG91ckVuZDtcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgdGhpcy5zZXRUb3VyU3RhdHVzKHRydWUpO1xuICAgIHRoaXMuc2V0U3RlcHModG91cik7XG4gICAgdGhpcy5pbml0U3RlcCgwKTtcbiAgfVxuICBwdWJsaWMgc3RvcFRvdXIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExhc3RTdGVwKCkuaW5kZXg7XG4gICAgY29uc3QgbGF0ZXN0U3RlcEluZGV4ID0gdGhpcy5zdGVwcy5sZW5ndGggLSAxO1xuICAgIGlmICggaW5kZXggPCBsYXRlc3RTdGVwSW5kZXgpIHtcbiAgICAgIHRoaXMudG91ckJyZWFrKHt0b3VyRXZlbnQ6ICdUb3VyIGJyZWFrJywgc3RlcDogaW5kZXgsIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeX0pO1xuICAgIH0gZWxzZSBpZiAobGF0ZXN0U3RlcEluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy50b3VyRW5kKHt0b3VyRXZlbnQ6ICdUb3VyIGVuZCcsIHN0ZXA6IGluZGV4LCBoaXN0b3J5OiB0aGlzLmhpc3Rvcnl9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRUb3VyU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnN0ZXBzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zdGVwc1N0cmVhbSQubmV4dChudWxsKTtcbiAgICB0aGlzLmhpc3RvcnkubGVuZ3RoID0gMDtcbiAgICB0aGlzLnRhcmdldFNlcnZpY2Uuc2V0VGFyZ2V0U3ViamVjdChudWxsKTtcbiAgfVxuICBwdWJsaWMgbmV4dFN0ZXAoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKS5pbmRleCArIDE7XG4gICAgdGhpcy5uZXh0KHt0b3VyRXZlbnQ6ICdJbml0IG5leHQnLCBzdGVwLCBoaXN0b3J5OiB0aGlzLmhpc3Rvcnl9KTtcbiAgICB0aGlzLmluaXRTdGVwKHN0ZXApO1xuICB9XG4gIHB1YmxpYyBwcmV2U3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLmluZGV4IC0gMTtcbiAgICB0aGlzLnByZXYoe3RvdXJFdmVudDogJ0luaXQgcHJldicsIHN0ZXAsIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeX0pO1xuICAgIHRoaXMuaW5pdFN0ZXAoc3RlcCk7XG4gIH1cbn1cbiJdfQ==