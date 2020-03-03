/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, HostListener, Inject, PLATFORM_ID, ViewEncapsulation, ElementRef, ViewContainerRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TourService, } from '../services/tour.service';
import { StepTargetService } from '../services/step-target.service';
/**
 * @record
 */
export function StepEventsI() { }
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
        else if (/^top$/i.test(placement)) {
            this.stepModalPosition = { top: top - this.modalHeight - 20, left: Math.round(left - modalWidth / 2) };
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
                    styles: [".tour-step-wrapper.fade-on .tour-step-modal{opacity:0}.tour-step-wrapper:not(.animation-on) .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-down.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepDown;animation:.4s ease-in-out stepDown}.tour-step-wrapper.pos-down.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-bottom:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;top:-.4rem;right:45%}.tour-step-wrapper.pos-top.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepTop;animation:.4s ease-in-out stepTop}.tour-step-wrapper.pos-top.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-top:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.4rem;right:45%}.tour-step-wrapper.pos-left.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepLeft;animation:.4s ease-in-out stepLeft}.tour-step-wrapper.pos-left.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-left:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;right:-.4rem;top:1rem}.tour-step-wrapper.pos-right.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepRight;animation:.4s ease-in-out stepRight}.tour-step-wrapper.pos-right.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-right:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;left:-.4rem;top:1rem}.tour-step-wrapper.pos-center.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-modal{background:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.55);z-index:1100}.tour-step-modal__content{padding:.8rem;box-sizing:border-box}.tour-step-modal__header{width:100%;display:flex;justify-content:space-between}.tour-step-modal__title{font-weight:500;font-size:22px}.tour-step-modal__body{padding:1rem 0;min-height:50px;flex-grow:2}.tour-step-modal__description{line-height:24px}.tour-step-modal .tour-btn-close{background:0 0;border:none;color:#a9a9a9;font-size:1.6rem;margin:-5px -5px 0 0;cursor:pointer}.tour-step-modal .tour-btn-close:hover{color:var(--pale-grey)}.tour-step-modal__footer{padding:1px 0;display:flex;justify-content:space-between;align-items:center;justify-self:end;width:100%}.tour-btn{width:auto;height:auto;border-radius:4px;background:0 0;color:grey;cursor:pointer;padding:8px 16px;box-shadow:0 0 2px 2px rgba(0,0,0,.24),inset 0 1px 3px 0 rgba(0,0,0,.16);border:1px solid grey;transition:.3s}.tour-btn:focus,.tour-btn:hover{border-color:#737373;box-shadow:1px 1px 2px 1px rgba(0,0,0,.34);outline:0}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@-webkit-keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}"]
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
export { TourStepComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG91ci1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFFaEIsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFFWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUNMLFdBQVcsR0FFWixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBWSxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRzdFLGlDQUlDOzs7Ozs7SUFIQyxxREFBNEI7Ozs7O0lBQzVCLHFEQUE0Qjs7Ozs7SUFDNUIsc0RBQTZCOzs7QUFJL0I7SUF5QkUsMkJBQ21CLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUM3QyxJQUFnQixFQUNoQixHQUFxQjtJQUM3QixXQUFXO0lBQ1UsVUFBYztRQUxsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFqQi9CLGdCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLFdBQU0sR0FBMEIsSUFBSSxDQUFDO1FBRXJDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQy9CLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJWCxTQUFJLEdB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OztpQkFDbkI7Ozs7Z0JBbkJDLFdBQVc7Z0JBR00saUJBQWlCO2dCQVhsQyxVQUFVO2dCQUNWLGdCQUFnQjtnREFtRGIsTUFBTSxTQUFDLFdBQVc7Ozt1QkFYcEIsTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTtzQ0FXTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBT3pDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBc00zQyx3QkFBQztDQUFBLEFBL09ELElBK09DO1NBdk9ZLGlCQUFpQjs7O0lBQzVCLGtDQUFjOztJQUNkLDBDQUF1Qjs7SUFDdkIsbUNBQWtCOztJQUNsQix3Q0FBOEI7O0lBQzlCLG1DQUFxQzs7SUFDckMsc0NBQW1COztJQUNuQixzQ0FBK0I7O0lBQy9CLHFDQUFxQjs7SUFDckIsOENBQWtGOztJQUNsRix3Q0FBb0I7O0lBQ3BCLDZDQUF5Qjs7SUFDekIsaUNBQXVEOztJQUN2RCxpQ0FBdUQ7O0lBQ3ZELGlDQUF1RDs7SUFDdkQsa0NBQXdEOzs7OztJQUd0RCx3Q0FBeUM7Ozs7O0lBQ3pDLDhDQUFxRDs7Ozs7SUFDckQsaUNBQXdCOzs7OztJQUN4QixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBUb3VyU2VydmljZSxcbiAgVG91clN0ZXBJLFxufSBmcm9tICcuLi9zZXJ2aWNlcy90b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdGVwU2l6ZUksIFN0ZXBUYXJnZXRTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zdGVwLXRhcmdldC5zZXJ2aWNlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBFdmVudHNJIHtcbiAgb25OZXh0KCRldmVudDogRXZlbnQpOiB2b2lkO1xuICBvblByZXYoJGV2ZW50OiBFdmVudCk6IHZvaWQ7XG4gIG9uQ2xvc2UoJGV2ZW50OiBFdmVudCk6IHZvaWQ7XG59XG5cbi8vIEBkeW5hbWljXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy10b3VyLXN0ZXAtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG91ci1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG91ci1zdGVwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnc3RlcHMkJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb3VyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBTdGVwRXZlbnRzSSB7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIHRhcmdldEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHRhcmdldDogU3RlcFNpemVJO1xuICBjdXJyZW50U3RlcDogVG91clN0ZXBJID0gbnVsbDtcbiAgc3RlcHMkOiBPYnNlcnZhYmxlPFRvdXJTdGVwST4gPSBudWxsO1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gIG9uRGVzdHJveSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgdGltZW91dHM6IGFueVtdID0gW107XG4gIHN0ZXBNb2RhbFBvc2l0aW9uOiB7dG9wPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgYm90dG9tPzogbnVtYmVyfTtcbiAgbW9kYWxIZWlnaHQ6IG51bWJlcjtcbiAgdGFyZ2V0QmFja2dyb3VuZDogc3RyaW5nO1xuICBAT3V0cHV0KCkgbmV4dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwcmV2OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRvbmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYnJlYWs6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RlcFRhcmdldFNlcnZpY2U6IFN0ZXBUYXJnZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvLyBAZHluYW1pY1xuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHt9KSB7XG4gICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgY2xpY2tPdXRzaWRlVG9DbG9zZSgkRXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMuY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoJEV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKCRFdmVudCk7XG4gICAgICB9XG4gICAgfSAgICAgICBcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgIHRoaXMuc2F2ZVRhcmdldCh0aGlzLnRhcmdldEVsZW1lbnQpO1xuICAgICAgdGhpcy5kZWZpbmVTdGVwUGxhY2VtZW50KCk7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHt0b3A6IC01MDAsIGxlZnQ6IC01MDB9O1xuICAgIHRoaXMuc3Vic2NyaWJlVG9TdGVwc1N0cmVhbSgpO1xuICAgIHRoaXMuc3RlcHMkID0gdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5nZXRUYXJnZXRTdWJqZWN0KCkucGlwZShcbiAgICAgIG1hcCggc3RlcCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSByZXR1cm4gdGhpcy5jdXJyZW50U3RlcDtcbiAgICAgICAgaWYgKHN0ZXAgJiYgdGhpcy50b3VyU2VydmljZS5nZXRUb3VyU3RhdHVzKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gc3RlcC50YXJnZXQ7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwLnN0ZXBOYW1lKTtcbiAgICAgICAgICB0aGlzLnNhdmVTdGVwRGF0YSgpO1xuICAgICAgICAgIHRoaXMuc2F2ZVRhcmdldChzdGVwLnRhcmdldCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLnRpbWVvdXRzLmZvckVhY2goaSA9PiBjbGVhclRpbWVvdXQoaSkpO1xuICB9XG4gIFxuICBwcml2YXRlIHN1YnNjcmliZVRvU3RlcHNTdHJlYW0oKSB7XG4gICAgdGhpcy50b3VyU2VydmljZS5nZXRTdGVwc1N0cmVhbSgpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kpLFxuICAgICAgbWFwKHN0ZXAgPT4ge1xuICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBjb25zdCB7dGhlbWVDb2xvcn0gPSAodGhpcy5jdXJyZW50U3RlcCAmJiB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMpIHx8IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5SW5kZXgoKS5vcHRpb25zO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcbiAgICAgICAgY29uc3Qge2RlbGF5fSA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zO1xuICAgICAgICB0aGlzLnRhcmdldEJhY2tncm91bmQgPSB0aGVtZUNvbG9yO1xuICAgICAgICBpZiAodGhpcy50b3VyU2VydmljZS5pc1JvdXRlQ2hhbmdlZCgpKSB7XG4gICAgICAgICAgdGhpcy50aW1lb3V0c1t0aGlzLnRpbWVvdXRzLmxlbmd0aF0gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tUYXJnZXQoc3RlcCksIGRlbGF5ICsgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH0pXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVGFyZ2V0KHN0ZXA6IHN0cmluZywgdGltZXMgPSAyKSB7XG4gICAgaWYgKCFzdGVwIHx8ICF0aGlzLnRvdXJTZXJ2aWNlLmdldFRvdXJTdGF0dXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkZWxheSA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zLmRlbGF5O1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuZ3RvdXJzdGVwPSR7c3RlcH1dYCk7XG4gICAgaWYgKHRpbWVzICYmIHRoaXMudG91clNlcnZpY2UuaXNSb3V0ZUNoYW5nZWQoKSAmJiAhdGFyZ2V0KSB7XG4gICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwLCB0aW1lcyAtIDEpLCBkZWxheSk7XG4gICAgfSBlbHNlIGlmICghdGFyZ2V0KSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRhcmdldCBpcyBtaXNzZWQgZm9yIHN0ZXAgJHtzdGVwfWApO1xuICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zLmNvbnRpbnVlSWZUYXJnZXRBYnNlbnQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBCeU5hbWUoc3RlcCkuaW5kZXggKyAxO1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvdXJTZXJ2aWNlLmdldExhc3RTdGVwKCkudG90YWwpIHtcbiAgICAgICAgICAgIHRoaXMudG91clNlcnZpY2UubmV4dFN0ZXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSB0b3VyIGlzIHN0b3BwZWQgYmVjYXVzZSBvZiBubyB0YXJnZXRzIGlzIGZvdW5kICBmb3Igc3RlcCAke3N0ZXB9IGFuZCBuZXh0IG9uZXNgKTtcbiAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLnN0b3BUb3VyKCk7XG4gICAgICAgICAgdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5zZXRUYXJnZXRTdWJqZWN0KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgcmVzZXRDbGFzc2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwO1xuICAgIGNvbnN0IHNvdXJjZSA9IChzdGVwICYmIHN0ZXAub3B0aW9ucykgfHwgdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlJbmRleCgpLm9wdGlvbnM7XG4gICAgY29uc3Qge2Fycm93VG9UYXJnZXQsIGFuaW1hdGVkU3RlcCwgcGxhY2VtZW50LCBjbGFzc05hbWV9ID0gc291cmNlO1xuICAgIGNvbnN0IGFycm93Q2xhc3MgPSBhcnJvd1RvVGFyZ2V0ID8gJ3dpdGgtYXJyb3cnIDogJyc7XG4gICAgY29uc3QgYW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRlZFN0ZXBcbiAgICAgID8gKHN0ZXAgPyAnYW5pbWF0aW9uLW9uJyA6ICdmYWRlLW9uJylcbiAgICAgIDogKHN0ZXAgPyAnJyA6ICdmYWRlLW9uJyk7XG4gICAgdGhpcy5jbGFzcyA9IGAke2Fycm93Q2xhc3N9ICR7Y2xhc3NOYW1lfSBwb3MtJHtwbGFjZW1lbnR9ICR7YW5pbWF0aW9uQ2xhc3N9YC50cmltKCk7XG4gIH1cbiAgcHJpdmF0ZSBzYXZlVGFyZ2V0KHRhcmdldDogRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5yZXNpemVUYXJnZXQoXG4gICAgdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5nZXRTaXplQW5kUG9zaXRpb24odGFyZ2V0KSwgdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zLnN0ZXBUYXJnZXRSZXNpemUpO1xuICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlZmluZVN0ZXBQbGFjZW1lbnQoKSwgMCk7XG4gIH1cbiAgcHJpdmF0ZSBzYXZlU3RlcERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldENsYXNzZXMoKTtcbiAgICB0aGlzLnRhcmdldEJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICB9XG4gIHByaXZhdGUgZGVmaW5lU3RlcFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VyLXN0ZXAtbW9kYWwnKTtcbiAgICBpZiAoIW1vZGFsKSB7XG4gICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZWZpbmVTdGVwUGxhY2VtZW50KCksIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vZGFsUmVjdCA9IG1vZGFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMubW9kYWxIZWlnaHQgPSBNYXRoLnJvdW5kKG1vZGFsUmVjdC5oZWlnaHQgPyBtb2RhbFJlY3QuaGVpZ2h0IDogbW9kYWxSZWN0LmJvdHRvbSAtIG1vZGFsUmVjdC50b3ApO1xuICAgIGNvbnN0IG1vZGFsV2lkdGggPSBNYXRoLnJvdW5kKG1vZGFsUmVjdC53aWR0aCA/IG1vZGFsUmVjdC53aWR0aCA6IG1vZGFsUmVjdC5yaWdodCAtIG1vZGFsUmVjdC5sZWZ0KTtcbiAgICBjb25zdCB7cGxhY2VtZW50LCBzY3JvbGxUb30gPSB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnM7XG4gICAgY29uc3Qge3RvcCwgYm90dG9tLCB3aWR0aCwgbGVmdCwgcmlnaHR9ID0gdGhpcy50YXJnZXQ7XG4gICAgaWYgKC9eZG93biQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7dG9wOiBib3R0b20gKyAyMCwgbGVmdDogTWF0aC5yb3VuZChsZWZ0IC0gbW9kYWxXaWR0aCAvIDIpfTtcbiAgICB9IGVsc2UgaWYgKC9edG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHt0b3A6IHRvcCAgLSB0aGlzLm1vZGFsSGVpZ2h0IC0gMjAsIGxlZnQ6IE1hdGgucm91bmQobGVmdCAtIG1vZGFsV2lkdGggLyAyKX07XG4gICAgfSBlbHNlIGlmICgvXmxlZnQkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge2xlZnQ6IGxlZnQgLSBtb2RhbFdpZHRoIC0gMjAsIHRvcH07XG4gICAgfSBlbHNlIGlmICgvXnJpZ2h0JC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtsZWZ0OiByaWdodCArIHdpZHRoICsgMjAsIHRvcH07XG4gICAgfSBlbHNlIGlmICgvXmxlZnQtdG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogbGVmdCAtIG1vZGFsV2lkdGggLSAyMCwgdG9wOiB0b3AgLSB0aGlzLm1vZGFsSGVpZ2h0ICsgNTBcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgvXnJpZ2h0LXRvcCQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIGxlZnQ6IHJpZ2h0ICsgd2lkdGggKyAyMCwgdG9wOiB0b3AgLSB0aGlzLm1vZGFsSGVpZ2h0ICsgNTBcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgvXnJpZ2h0LWNlbnRlciQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIHJpZ2h0OiA1MCxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLm1vZGFsSGVpZ2h0IC8gMilcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgvXmxlZnQtY2VudGVyJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogNTAsXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gdGhpcy5tb2RhbEhlaWdodCAvIDIpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoL15jZW50ZXIkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIG1vZGFsV2lkdGggLyAyKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLm1vZGFsSGVpZ2h0IC8gMilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKG1vZGFsKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvKCk7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIHNldEZvY3VzKG1vZGFsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgbmV4dEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b3VyLWJ0bi1uZXh0JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZW5kQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRvdXItYnRuLWRvbmUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobmV4dEJ0bikge1xuICAgICAgbmV4dEJ0bi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZW5kQnRuKSB7XG4gICAgICBlbmRCdG4uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzY3JvbGxUbygpIHtcbiAgICBjb25zdCB7cGxhY2VtZW50LCBmaXhlZH0gPSB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnM7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMudGFyZ2V0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcGxhY2VtZW50ICE9PSAndG9wJyA/IHRoaXMudGFyZ2V0LnRvcCAtIDEwMCA6IHRoaXMudGFyZ2V0LnRvcCAtIHRoaXMubW9kYWxIZWlnaHQgLSA1MDtcbiAgICBjb25zdCBiZWhhdmlvciA9IHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5zbW9vdGhTY3JvbGwgPyAnc21vb3RoJyA6ICdhdXRvJztcbiAgICBpZiAoIWZpeGVkKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsKHt0b3AsIGxlZnQsIGJlaGF2aW9yfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGwoe3RvcDogMCwgbGVmdDogMCwgYmVoYXZpb3J9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG9uTmV4dChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLm5leHQuZW1pdCh7XG4gICAgICBzdGVwRXZlbnQ6ICduZXh0JyxcbiAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTdGVwLmluZGV4ICsgMSxcbiAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpLFxuICAgIH0pO1xuICAgIHRoaXMudG91clNlcnZpY2UubmV4dFN0ZXAoKTtcbiAgfVxuICBwdWJsaWMgb25QcmV2KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucHJldi5lbWl0KHtcbiAgICAgIHN0ZXBFdmVudDogJ3ByZXYnLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXggLSAxLFxuICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgfSk7XG4gICAgdGhpcy50b3VyU2VydmljZS5wcmV2U3RlcCgpO1xuICB9XG4gIHB1YmxpYyBvbkNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwLmluZGV4ICE9PSB0aGlzLmN1cnJlbnRTdGVwLnRvdGFsIC0gMSkge1xuICAgICAgdGhpcy5icmVhay5lbWl0KHtcbiAgICAgICAgc3RlcEV2ZW50OiAnYnJlYWsnLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCxcbiAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb25lLmVtaXQoe1xuICAgICAgICBzdGVwRXZlbnQ6ICdkb25lJyxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXgsXG4gICAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG91clNlcnZpY2Uuc3RvcFRvdXIoKTtcbiAgfVxufVxuIl19