import { Injectable, isDevMode, Inject, PLATFORM_ID, EventEmitter, Component, ViewEncapsulation, ElementRef, ViewContainerRef, Output, HostListener, Input, Directive, ComponentFactoryResolver, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { __assign } from 'tslib';
import { Router, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function StepSizeI() { }
if (false) {
    /** @type {?} */
    StepSizeI.prototype.top;
    /** @type {?} */
    StepSizeI.prototype.left;
    /** @type {?} */
    StepSizeI.prototype.bottom;
    /** @type {?} */
    StepSizeI.prototype.right;
    /** @type {?|undefined} */
    StepSizeI.prototype.height;
    /** @type {?|undefined} */
    StepSizeI.prototype.width;
    /** @type {?} */
    StepSizeI.prototype.pageHeight;
}
var StepTargetService = /** @class */ (function () {
    function StepTargetService() {
        this.targetExist$ = new BehaviorSubject(null);
    }
    /**
     * @private
     * @return {?}
     */
    StepTargetService.prototype.maxHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.round(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight, window.innerHeight));
    };
    /**
     * @param {?} el
     * @return {?}
     */
    StepTargetService.prototype.getSizeAndPosition = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var targetRect = el.getBoundingClientRect();
        /** @type {?} */
        var bodyRect = document.body.getBoundingClientRect();
        /** @type {?} */
        var top = Math.round(targetRect.top - bodyRect.top);
        /** @type {?} */
        var left = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        var bottom = Math.round(targetRect.bottom - bodyRect.top);
        /** @type {?} */
        var right = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        var height = Math.round(targetRect.height || bottom - top);
        /** @type {?} */
        var width = Math.round(targetRect.width || right - left);
        /** @type {?} */
        var pageHeight = this.maxHeight();
        return { top: top, left: left, bottom: bottom, right: right, width: width, height: height, pageHeight: pageHeight };
    };
    /**
     * @param {?} target
     * @param {?} size
     * @return {?}
     */
    StepTargetService.prototype.resizeTarget = /**
     * @param {?} target
     * @param {?} size
     * @return {?}
     */
    function (target, size) {
        target.left -= size[0];
        target.right += size[0];
        target.top -= size[1] || size[0];
        target.bottom += size[1] || size[0];
        target.width += 2 * size[0];
        target.height += 2 * (size[1] || size[0]);
        return target;
    };
    /**
     * @return {?}
     */
    StepTargetService.prototype.getTargetSubject = /**
     * @return {?}
     */
    function () {
        return this.targetExist$;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StepTargetService.prototype.setTargetSubject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.targetExist$.next(value);
    };
    StepTargetService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StepTargetService.ctorParameters = function () { return []; };
    return StepTargetService;
}());
if (false) {
    /** @type {?} */
    StepTargetService.prototype.targetExist$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TourI() { }
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
function TourStepI() { }
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
function CtrlBtnsI() { }
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
var defaultCtrlBtns = {
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
function StepOptionsI() { }
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
var defaultOptions = {
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
function TourEventsI() { }
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
var defaultTourEvent = (/**
 * @param {?} props
 * @return {?}
 */
function (props) { });
/** @type {?} */
var TourDefaultEvents = {
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
        var regExpr = /^top$|^down$|^left$|^right$|^center$|^right-center$|^left-center$|^right-top$|^left-top$|^center-down$|^center-top$/i;
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
        var options = new StepOptions(__assign({}, defaultOptions, this.presets, tour.tourOptions));
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
            x.options = x.options ? __assign({}, options, x.options) : options;
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
        this.presets = __assign({}, this.presets, presets);
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
        this.steps[index] = __assign({}, step);
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
        var _a = __assign({}, TourDefaultEvents, tour.tourEvents), tourBreak = _a.tourBreak, tourStart = _a.tourStart, tourEnd = _a.tourEnd, next = _a.next, prev = _a.prev;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function StepEventsI() { }
if (false) {
    /**
     * @param {?} $event
     * @return {?}
     */
    StepEventsI.prototype.onNext = function ($event) { };
    /**
     * @param {?} $event
     * @return {?}
     */
    StepEventsI.prototype.onPrev = function ($event) { };
    /**
     * @param {?} $event
     * @return {?}
     */
    StepEventsI.prototype.onClose = function ($event) { };
}
// @dynamic
var TourStepComponent = /** @class */ (function () {
    function TourStepComponent(tourService, stepTargetService, elem, ref, 
    // @dynamic
    platformId) {
        this.tourService = tourService;
        this.stepTargetService = stepTargetService;
        this.elem = elem;
        this.ref = ref;
        this.currentStep = null;
        this.steps$ = null;
        this.onDestroy = new Subject();
        this.timeouts = [];
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
        this.done = new EventEmitter();
        this.break = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @param {?} $Event
     * @return {?}
     */
    TourStepComponent.prototype.clickOutsideToClose = /**
     * @param {?} $Event
     * @return {?}
     */
    function ($Event) {
        if (this.currentStep) {
            if (this.currentStep.options.closeOnClickOutside && !this.elem.nativeElement.contains($Event.target)) {
                this.onClose($Event);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourStepComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.target && this.currentStep) {
            this.saveTarget(this.targetElement);
            this.defineStepPlacement();
        }
    };
    /**
     * @return {?}
     */
    TourStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        this.stepModalPosition = { top: -500, left: -500 };
        this.subscribeToStepsStream();
        this.steps$ = this.stepTargetService.getTargetSubject().pipe(map((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (_this.currentStep)
                return _this.currentStep;
            if (step && _this.tourService.getTourStatus) {
                _this.targetElement = step.target;
                _this.currentStep = _this.tourService.getStepByName(step.stepName);
                _this.saveStepData();
                _this.saveTarget(step.target);
                return _this.currentStep;
            }
            return step;
        })));
    };
    /**
     * @return {?}
     */
    TourStepComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy.next();
        this.timeouts.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return clearTimeout(i); }));
    };
    /**
     * @private
     * @return {?}
     */
    TourStepComponent.prototype.subscribeToStepsStream = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.tourService.getStepsStream().pipe(takeUntil(this.onDestroy), map((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (!step) {
                _this.currentStep = null;
                return step;
            }
            var themeColor = ((_this.currentStep && _this.currentStep.options) || _this.tourService.getStepByIndex().options).themeColor;
            _this.currentStep = null;
            _this.resetClasses();
            var delay = _this.tourService.getStepByName(step).options.delay;
            _this.targetBackground = themeColor;
            if (_this.tourService.isRouteChanged()) {
                _this.timeouts[_this.timeouts.length] = setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.checkTarget(step); }), delay + 100);
            }
            else {
                _this.timeouts[_this.timeouts.length] = setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.checkTarget(step); }), 100);
            }
            return step;
        }))).subscribe();
    };
    /**
     * @private
     * @param {?} step
     * @param {?=} times
     * @return {?}
     */
    TourStepComponent.prototype.checkTarget = /**
     * @private
     * @param {?} step
     * @param {?=} times
     * @return {?}
     */
    function (step, times) {
        var _this = this;
        if (times === void 0) { times = 2; }
        if (!step || !this.tourService.getTourStatus()) {
            return;
        }
        /** @type {?} */
        var delay = this.tourService.getStepByName(step).options.delay;
        /** @type {?} */
        var target = document.querySelector("[ngtourstep=" + step + "]");
        if (times && this.tourService.isRouteChanged() && !target) {
            this.timeouts[this.timeouts.length] = setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkTarget(step, times - 1); }), delay);
        }
        else if (!target) {
            console.warn("Target is missed for step " + step);
            if (this.tourService.getStepByName(step).options.continueIfTargetAbsent) {
                /** @type {?} */
                var index = this.tourService.getStepByName(step).index + 1;
                if (index < this.tourService.getLastStep().total) {
                    this.tourService.nextStep();
                }
                else {
                    console.warn("The tour is stopped because of no targets is found  for step " + step + " and next ones");
                    this.tourService.stopTour();
                    this.stepTargetService.setTargetSubject(null);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TourStepComponent.prototype.resetClasses = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var step = this.currentStep;
        /** @type {?} */
        var source = (step && step.options) || this.tourService.getStepByIndex().options;
        var arrowToTarget = source.arrowToTarget, animatedStep = source.animatedStep, placement = source.placement, className = source.className;
        /** @type {?} */
        var arrowClass = arrowToTarget ? 'with-arrow' : '';
        /** @type {?} */
        var animationClass = animatedStep
            ? (step ? 'animation-on' : 'fade-on')
            : (step ? '' : 'fade-on');
        this.class = (arrowClass + " " + className + " pos-" + placement + " " + animationClass).trim();
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    TourStepComponent.prototype.saveTarget = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        this.target = this.stepTargetService.resizeTarget(this.stepTargetService.getSizeAndPosition(target), this.currentStep.options.stepTargetResize);
        this.timeouts[this.timeouts.length] = setTimeout((/**
         * @return {?}
         */
        function () { return _this.defineStepPlacement(); }), 0);
    };
    /**
     * @private
     * @return {?}
     */
    TourStepComponent.prototype.saveStepData = /**
     * @private
     * @return {?}
     */
    function () {
        this.resetClasses();
        this.targetBackground = 'transparent';
    };
    /**
     * @private
     * @return {?}
     */
    TourStepComponent.prototype.defineStepPlacement = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var modal = document.querySelector('.tour-step-modal');
        if (!modal) {
            this.timeouts[this.timeouts.length] = setTimeout((/**
             * @return {?}
             */
            function () { return _this.defineStepPlacement(); }), 100);
            return;
        }
        /** @type {?} */
        var modalRect = modal.getBoundingClientRect();
        this.modalHeight = Math.round(modalRect.height ? modalRect.height : modalRect.bottom - modalRect.top);
        /** @type {?} */
        var modalWidth = Math.round(modalRect.width ? modalRect.width : modalRect.right - modalRect.left);
        var _a = this.currentStep.options, placement = _a.placement, scrollTo = _a.scrollTo;
        var _b = this.target, top = _b.top, bottom = _b.bottom, width = _b.width, left = _b.left, right = _b.right;
        if (/^down$/i.test(placement)) {
            this.stepModalPosition = { top: bottom + 20, left: Math.round(left - modalWidth / 2) };
        }
        else if (/^center-down$/i.test(placement)) {
            this.stepModalPosition = { top: bottom + 20, left: Math.round(window.innerWidth / 2 - modalWidth / 2) };
        }
        else if (/^top$/i.test(placement)) {
            this.stepModalPosition = { top: top - this.modalHeight - 20, left: Math.round(left - modalWidth / 2) };
        }
        else if (/^center-top$/i.test(placement)) {
            this.stepModalPosition = { top: top - this.modalHeight - 20, left: Math.round(window.innerWidth / 2 - modalWidth / 2) };
        }
        else if (/^left$/i.test(placement)) {
            this.stepModalPosition = { left: left - modalWidth - 20, top: top };
        }
        else if (/^right$/i.test(placement)) {
            this.stepModalPosition = { left: right + width + 20, top: top };
        }
        else if (/^left-top$/i.test(placement)) {
            this.stepModalPosition = {
                left: left - modalWidth - 20, top: top - this.modalHeight + 50
            };
        }
        else if (/^right-top$/i.test(placement)) {
            this.stepModalPosition = {
                left: right + width + 20, top: top - this.modalHeight + 50
            };
        }
        else if (/^right-center$/i.test(placement)) {
            this.stepModalPosition = {
                right: 50,
                top: Math.round(window.innerHeight / 2 - this.modalHeight / 2)
            };
        }
        else if (/^left-center$/i.test(placement)) {
            this.stepModalPosition = {
                left: 50,
                top: Math.round(window.innerHeight / 2 - this.modalHeight / 2)
            };
        }
        else if (/^center$/i.test(placement)) {
            this.stepModalPosition = {
                left: Math.round(window.innerWidth / 2 - modalWidth / 2),
                top: Math.round(window.innerHeight / 2 - this.modalHeight / 2)
            };
        }
        if (this.currentStep.options.autofocus) {
            this.setFocus(modal);
        }
        if (scrollTo) {
            this.scrollTo();
        }
    };
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    TourStepComponent.prototype.setFocus = /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var nextBtn = (/** @type {?} */ (modal.querySelector('.tour-btn-next')));
        /** @type {?} */
        var endBtn = (/** @type {?} */ (modal.querySelector('.tour-btn-done')));
        if (nextBtn) {
            nextBtn.focus();
        }
        else if (endBtn) {
            endBtn.focus();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TourStepComponent.prototype.scrollTo = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.currentStep.options, placement = _a.placement, fixed = _a.fixed;
        /** @type {?} */
        var left = this.target.left;
        /** @type {?} */
        var top = placement !== 'top' ? this.target.top - 100 : this.target.top - this.modalHeight - 50;
        /** @type {?} */
        var behavior = this.currentStep.options.smoothScroll ? 'smooth' : 'auto';
        if (!fixed) {
            document.documentElement.scroll({ top: top, left: left, behavior: behavior });
        }
        else {
            document.documentElement.scroll({ top: 0, left: 0, behavior: behavior });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourStepComponent.prototype.onNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.next.emit({
            stepEvent: 'next',
            index: this.currentStep.index + 1,
            history: this.tourService.getHistory(),
        });
        this.tourService.nextStep();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourStepComponent.prototype.onPrev = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.prev.emit({
            stepEvent: 'prev',
            index: this.currentStep.index - 1,
            history: this.tourService.getHistory(),
        });
        this.tourService.prevStep();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourStepComponent.prototype.onClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.currentStep.index !== this.currentStep.total - 1) {
            this.break.emit({
                stepEvent: 'break',
                index: this.currentStep.index,
                history: this.tourService.getHistory(),
            });
        }
        else {
            this.done.emit({
                stepEvent: 'done',
                index: this.currentStep.index,
                history: this.tourService.getHistory(),
            });
        }
        this.tourService.stopTour();
    };
    TourStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-tour-step-template',
                    template: "<div class=\"tour-step-wrapper\" *ngIf=\"steps$ | async as step\" [ngClass]=\"class\">\n  <ng-tour-step-back\n    *ngIf=\"step.options.backdrop && target\"\n    [themeColor]=\"step.options.themeColor\"\n    [stepBackSize]=\"target\"\n    [position]=\"step.options.fixed ? 'fixed' : 'absolute'\"\n    [targetBackground]=\"targetBackground\"\n    [opacity]=\"step.options.opacity\"\n  >\n  </ng-tour-step-back>\n  <div\n    *ngIf=\"currentStep\"\n    class=\"tour-step-modal\"\n    [style.max-width]=\"step.options.maxWidth\"\n    [style.max-height]=\"step.options.maxHeight\"\n    [style.top.px]=\"stepModalPosition.top\"\n    [style.left.px]=\"stepModalPosition.left\"\n    [style.bottom.px]=\"stepModalPosition.bottom\"\n    [style.right.px]=\"stepModalPosition.right\"\n    [style.min-width]=\"step.options.minWidth\"\n    [style.min-height]=\"step.options.minHeight\"\n    [style.position]=\"step.options.fixed ? 'fixed' : 'absolute'\"\n    [style.color]=\"step.options.themeColor\"\n  > \n    <div *ngIf=\"!step.options.customTemplate\" class=\"tour-step-modal__content\">\n      <div class=\"tour-step-modal__header\">\n        <h3 class=\"tour-step-modal__title\">\n          {{step.title}}\n        </h3>\n        <button class=\"tour-btn-close\" type=\"button\" (click)=\"onClose($event)\">\n          &times;\n        </button>\n      </div>\n      <div class=\"tour-step-modal__body\">\n        <p class=\"tour-step-modal__description\">\n          {{step.description}}\n        </p>\n      </div>\n      <div class=\"tour-step-modal__footer\">\n        <div *ngIf=\"!step.withoutCounter\" class=\"tour-step-modal__counter\">\n          {{step.index + 1}} de {{step.total}}\n        </div>\n        <button\n          *ngIf=\"!step.withoutPrev && step.index\" \n          type=\"button\" \n          class=\"tour-btn tour-btn-prev\"\n          (click)=\"onPrev($event)\"\n        >\n          {{step.ctrlBtns.prev}}\n        </button>\n        <button\n          *ngIf=\"step.index + 1 !== step.total\"\n          type=\"button\"\n          class=\"tour-btn tour-btn-next\"\n          (click)=\"onNext($event)\"          \n        >\n          {{step.ctrlBtns.next}}\n        </button>\n        <button\n          *ngIf=\"step.index + 1 === step.total\"\n          type=\"button\"\n          class=\"tour-btn tour-btn-done\"\n          (click)=\"onClose($event)\"\n        >\n          {{step.ctrlBtns.done}}\n        </button>\n      </div>\n    </div>\n    \n      <ng-content ></ng-content>\n   \n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'steps$',
                    styles: [".tour-step-wrapper.fade-on .tour-step-modal{opacity:0}.tour-step-wrapper:not(.animation-on) .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-down.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepDown;animation:.4s ease-in-out stepDown}.tour-step-wrapper.pos-down.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-bottom:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;top:-.4rem;right:45%}.tour-step-wrapper.pos-top.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepTop;animation:.4s ease-in-out stepTop}.tour-step-wrapper.pos-top.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-top:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.4rem;right:45%}.tour-step-wrapper.pos-left.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepLeft;animation:.4s ease-in-out stepLeft}.tour-step-wrapper.pos-left.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-left:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;right:-.4rem;top:1rem}.tour-step-wrapper.pos-right.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepRight;animation:.4s ease-in-out stepRight}.tour-step-wrapper.pos-right.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-right:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;left:-.4rem;top:1rem}.tour-step-wrapper.pos-center-down.animation-on .tour-step-modal,.tour-step-wrapper.pos-center.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-center-down.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-bottom:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;top:-.4rem;right:45%}.tour-step-wrapper.pos-center-top.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-center-top.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-top:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.4rem;right:45%}.tour-step-modal{background:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.55);z-index:1100}.tour-step-modal__content{padding:.8rem;box-sizing:border-box}.tour-step-modal__header{width:100%;display:flex;justify-content:space-between}.tour-step-modal__title{font-weight:500;font-size:22px}.tour-step-modal__body{padding:1rem 0;min-height:50px;flex-grow:2}.tour-step-modal__description{line-height:24px}.tour-step-modal .tour-btn-close{background:0 0;border:none;color:#a9a9a9;font-size:1.6rem;margin:-5px -5px 0 0;cursor:pointer}.tour-step-modal .tour-btn-close:hover{color:var(--pale-grey)}.tour-step-modal__footer{padding:1px 0;display:flex;justify-content:space-between;align-items:center;justify-self:end;width:100%}.tour-btn{width:auto;height:auto;border-radius:4px;background:0 0;color:grey;cursor:pointer;padding:8px 16px;box-shadow:0 0 2px 2px rgba(0,0,0,.24),inset 0 1px 3px 0 rgba(0,0,0,.16);border:1px solid grey;transition:.3s}.tour-btn:focus,.tour-btn:hover{border-color:#737373;box-shadow:1px 1px 2px 1px rgba(0,0,0,.34);outline:0}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@-webkit-keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    TourStepComponent.ctorParameters = function () { return [
        { type: TourService },
        { type: StepTargetService },
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    TourStepComponent.propDecorators = {
        next: [{ type: Output }],
        prev: [{ type: Output }],
        done: [{ type: Output }],
        break: [{ type: Output }],
        clickOutsideToClose: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return TourStepComponent;
}());
if (false) {
    /** @type {?} */
    TourStepComponent.prototype.class;
    /** @type {?} */
    TourStepComponent.prototype.targetElement;
    /** @type {?} */
    TourStepComponent.prototype.target;
    /** @type {?} */
    TourStepComponent.prototype.currentStep;
    /** @type {?} */
    TourStepComponent.prototype.steps$;
    /** @type {?} */
    TourStepComponent.prototype.isBrowser;
    /** @type {?} */
    TourStepComponent.prototype.onDestroy;
    /** @type {?} */
    TourStepComponent.prototype.timeouts;
    /** @type {?} */
    TourStepComponent.prototype.stepModalPosition;
    /** @type {?} */
    TourStepComponent.prototype.modalHeight;
    /** @type {?} */
    TourStepComponent.prototype.targetBackground;
    /** @type {?} */
    TourStepComponent.prototype.next;
    /** @type {?} */
    TourStepComponent.prototype.prev;
    /** @type {?} */
    TourStepComponent.prototype.done;
    /** @type {?} */
    TourStepComponent.prototype.break;
    /**
     * @type {?}
     * @private
     */
    TourStepComponent.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourStepComponent.prototype.stepTargetService;
    /**
     * @type {?}
     * @private
     */
    TourStepComponent.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    TourStepComponent.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepBackComponent = /** @class */ (function () {
    function TourStepBackComponent() {
    }
    /**
     * @return {?}
     */
    TourStepBackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TourStepBackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-tour-step-back',
                    template: "<div\n    class=\"tour-step-backdrop\"\n    [style.height.px]=\"stepBackSize.pageHeight\"\n    [style.position]=\"position\"\n    [style.opacity]=\"opacity\"\n>\n  <div class=\"tour-step-backdrop__container\" >\n    <div \n      class=\"tour-step-backdrop__top\"\n      [style.height.px]=\"stepBackSize.top\"\n      [style.background]=\"themeColor\"\n    ></div>\n    <div \n      class=\"tour-step-backdrop__middle\"\n      [style.height.px]=\"stepBackSize.height\"\n    >\n      <div \n        class=\"tour-step-backdrop__left\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.width.px]=\"stepBackSize.left\"\n        [style.background]=\"themeColor\"\n      ></div>\n      <div\n        class=\"target-window\"\n        [style.width.px]=\"stepBackSize.width\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.background]=\"targetBackground\"\n      >\n      </div>\n      <div\n        class=\"tour-step-backdrop__right\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.background]=\"themeColor\"\n      ></div>\n    </div>\n    <div\n      class=\"tour-step-backdrop__bottom\"\n      [style.background]=\"themeColor\"\n      [style.height.px]=\"stepBackSize.pageHeight-stepBackSize.bottom\"\n    ></div>\n  </div>\n</div>\n",
                    styles: [".tour-step-backdrop{position:absolute;top:0;left:0;width:100%;z-index:1000}.tour-step-backdrop__container{position:absolute;top:0;left:0;height:100%;width:100%}.tour-step-backdrop__container .tour-step-backdrop__bottom,.tour-step-backdrop__container .tour-step-backdrop__left,.tour-step-backdrop__container .tour-step-backdrop__right,.tour-step-backdrop__container .tour-step-backdrop__top{position:relative}.tour-step-backdrop__container .tour-step-backdrop__top{width:100%}.tour-step-backdrop__container .tour-step-backdrop__middle{width:100%;display:flex;flex-wrap:nowrap}.tour-step-backdrop__container .tour-step-backdrop__middle .tour-step-backdrop__right{width:100%}.tour-step-backdrop__container .tour-step-backdrop__middle .target-window{flex-shrink:0;background:0 0}.tour-step-backdrop__container .tour-step-backdrop__middle .tour-step-backdrop__left{flex-shrink:0}.tour-step-backdrop__container .tour-step-backdrop__bottom{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    TourStepBackComponent.ctorParameters = function () { return []; };
    TourStepBackComponent.propDecorators = {
        themeColor: [{ type: Input }],
        stepBackSize: [{ type: Input }],
        position: [{ type: Input }],
        opacity: [{ type: Input }],
        targetBackground: [{ type: Input }]
    };
    return TourStepBackComponent;
}());
if (false) {
    /** @type {?} */
    TourStepBackComponent.prototype.themeColor;
    /** @type {?} */
    TourStepBackComponent.prototype.stepBackSize;
    /** @type {?} */
    TourStepBackComponent.prototype.position;
    /** @type {?} */
    TourStepBackComponent.prototype.opacity;
    /** @type {?} */
    TourStepBackComponent.prototype.targetBackground;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var TourRootDirective = /** @class */ (function () {
    function TourRootDirective(elem, tourService, targetService, viewContainer, componentFactory, 
    // @dynamic
    platformId) {
        this.elem = elem;
        this.tourService = tourService;
        this.targetService = targetService;
        this.viewContainer = viewContainer;
        this.componentFactory = componentFactory;
        this.customTemplate = false;
        this.onDestroy = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.modalFactory = this.componentFactory.resolveComponentFactory(TourStepComponent);
    }
    /**
     * @return {?}
     */
    TourRootDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        /** @type {?} */
        var parent = this.elem.nativeElement.parentNode;
        /** @type {?} */
        var children = Array.prototype.slice.apply(parent.childNodes);
        if (parent.localName !== 'app-root') {
            console.warn("You placed ngIfTour directive in " + this.elem.nativeElement.localName + " inside " + parent.localName + ".\n                Are you sure " + parent.localName + " better choice then app-root?");
        }
        /** @type {?} */
        var isTourTemplate = children.filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.localName === 'ng-tour-step-template'; })).length;
        /** @type {?} */
        var componentRef;
        if (isTourTemplate) {
            this.tourService.setPresets({ customTemplate: true });
        }
        else {
            this.targetService.getTargetSubject().pipe(takeUntil(this.onDestroy), map((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                if (step && !_this.isCreated) {
                    _this.isCreated = true;
                    componentRef = _this.viewContainer.createComponent(_this.modalFactory);
                }
                else if (!step && _this.isCreated) {
                    _this.isCreated = false;
                    _this.viewContainer.remove(_this.viewContainer.indexOf(componentRef));
                }
                return step;
            }))).subscribe();
        }
    };
    /**
     * @return {?}
     */
    TourRootDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy.next();
    };
    TourRootDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngIfTour]',
                },] }
    ];
    /** @nocollapse */
    TourRootDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TourService },
        { type: StepTargetService },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return TourRootDirective;
}());
if (false) {
    /** @type {?} */
    TourRootDirective.prototype.customTemplate;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.onDestroy;
    /** @type {?} */
    TourRootDirective.prototype.isEmbedded;
    /** @type {?} */
    TourRootDirective.prototype.isCreated;
    /** @type {?} */
    TourRootDirective.prototype.isBrowser;
    /** @type {?} */
    TourRootDirective.prototype.modalFactory;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.targetService;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    TourRootDirective.prototype.componentFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var TourStepDirective = /** @class */ (function () {
    function TourStepDirective(elemRef, tour, stepTarget, 
    // @dynamic
    platformId) {
        this.elemRef = elemRef;
        this.tour = tour;
        this.stepTarget = stepTarget;
        this.onDestroy = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    TourStepDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        this.tour.getStepsStream().pipe(takeUntil(this.onDestroy), map((/**
         * @param {?} stepName
         * @return {?}
         */
        function (stepName) {
            if (!stepName || _this.name !== stepName) {
                return stepName;
            }
            else {
                /** @type {?} */
                var target_1 = _this.elemRef.nativeElement;
                /** @type {?} */
                var delay = _this.tour.isRouteChanged()
                    ? _this.tour.getStepByName(stepName).options.delay
                    : 0;
                _this.timeout = setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.stepTarget.setTargetSubject({ target: target_1, stepName: stepName }); }), delay);
                return stepName;
            }
        }))).subscribe();
    };
    /**
     * @return {?}
     */
    TourStepDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy.next();
        clearTimeout(this.timeout);
    };
    TourStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngTourStep]'
                },] }
    ];
    /** @nocollapse */
    TourStepDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TourService },
        { type: StepTargetService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    TourStepDirective.propDecorators = {
        name: [{ type: Input, args: ['ngTourStep',] }]
    };
    return TourStepDirective;
}());
if (false) {
    /** @type {?} */
    TourStepDirective.prototype.name;
    /**
     * @type {?}
     * @private
     */
    TourStepDirective.prototype.onDestroy;
    /** @type {?} */
    TourStepDirective.prototype.subscription;
    /** @type {?} */
    TourStepDirective.prototype.isBrowser;
    /** @type {?} */
    TourStepDirective.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    TourStepDirective.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    TourStepDirective.prototype.tour;
    /**
     * @type {?}
     * @private
     */
    TourStepDirective.prototype.stepTarget;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var StepEventsDirective = /** @class */ (function () {
    function StepEventsDirective(tourService, 
    // @dynamic
    platformId) {
        this.tourService = tourService;
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
        this.done = new EventEmitter();
        this.break = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.isBrowser) {
            return;
        }
        if (this.eventType === 'next') {
            this.handleNext();
        }
        if (this.eventType === 'prev') {
            this.handlePrev();
        }
        if (this.eventType === 'close') {
            this.handleClose();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StepEventsDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handler();
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handleNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            _this.next.emit({
                tourEvent: 'next',
                index: _this.tourService.getLastStep().index + 1,
                history: _this.tourService.getHistory()
            });
            _this.tourService.nextStep();
        });
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handlePrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            _this.prev.emit({
                tourEvent: 'next',
                index: _this.tourService.getLastStep().index - 1,
                history: _this.tourService.getHistory()
            });
            _this.tourService.prevStep();
        });
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            if (_this.tourService.getLastStep().index + 1 === _this.tourService.getLastStep().total) {
                _this.done.emit({
                    tourEvent: 'done',
                    index: _this.tourService.getLastStep().index,
                    history: _this.tourService.getHistory()
                });
            }
            else {
                _this.break.emit({
                    tourEvent: 'break',
                    index: _this.tourService.getLastStep().index,
                    history: _this.tourService.getHistory()
                });
            }
            _this.tourService.stopTour();
        });
    };
    StepEventsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[stepEvent]',
                },] }
    ];
    /** @nocollapse */
    StepEventsDirective.ctorParameters = function () { return [
        { type: TourService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    StepEventsDirective.propDecorators = {
        eventType: [{ type: Input, args: ['stepEvent',] }],
        next: [{ type: Output }],
        prev: [{ type: Output }],
        done: [{ type: Output }],
        break: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return StepEventsDirective;
}());
if (false) {
    /** @type {?} */
    StepEventsDirective.prototype.eventType;
    /** @type {?} */
    StepEventsDirective.prototype.isBrowser;
    /** @type {?} */
    StepEventsDirective.prototype.next;
    /** @type {?} */
    StepEventsDirective.prototype.prev;
    /** @type {?} */
    StepEventsDirective.prototype.done;
    /** @type {?} */
    StepEventsDirective.prototype.break;
    /** @type {?} */
    StepEventsDirective.prototype.handler;
    /**
     * @type {?}
     * @private
     */
    StepEventsDirective.prototype.tourService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var AngularTourModule = /** @class */ (function () {
    function AngularTourModule() {
    }
    /**
     * @return {?}
     */
    AngularTourModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AngularTourModule,
            providers: [
                StepTargetService,
                TourService
            ]
        };
    };
    /**
     * @return {?}
     */
    AngularTourModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AngularTourModule,
            providers: []
        };
    };
    AngularTourModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TourStepBackComponent,
                        TourStepComponent,
                        TourStepDirective,
                        TourRootDirective,
                        StepEventsDirective,
                    ],
                    entryComponents: [TourStepComponent],
                    imports: [
                        CommonModule,
                        RouterModule,
                    ],
                    exports: [
                        TourStepBackComponent,
                        TourStepComponent,
                        TourStepDirective,
                        TourRootDirective,
                        StepEventsDirective,
                    ]
                },] }
    ];
    return AngularTourModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularTourModule, StepEventsDirective, StepOptions, StepTargetService, TourDefaultEvents, TourRootDirective, TourService, TourStepBackComponent, TourStepComponent, TourStepDirective, defaultCtrlBtns, defaultOptions, defaultTourEvent };
//# sourceMappingURL=ng3-tour.js.map
