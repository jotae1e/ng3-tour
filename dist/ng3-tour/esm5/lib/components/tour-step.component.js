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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG91ci1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUVYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQ0wsV0FBVyxHQUVaLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFhLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFHL0UsaUNBSUM7Ozs7OztJQUhDLHFEQUE0Qjs7Ozs7SUFDNUIscURBQTRCOzs7OztJQUM1QixzREFBNkI7OztBQUkvQjtJQXlCRSwyQkFDbUIsV0FBd0IsRUFDeEIsaUJBQW9DLEVBQzdDLElBQWdCLEVBQ2hCLEdBQXFCO0lBQzdCLFdBQVc7SUFDVSxVQUFjO1FBTGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQWpCL0IsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsV0FBTSxHQUEwQixJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDL0IsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUlYLFNBQUksR0FB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OztJQUd0RCx3Q0FBeUM7Ozs7O0lBQ3pDLDhDQUFxRDs7Ozs7SUFDckQsaUNBQXdCOzs7OztJQUN4QixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBUb3VyU2VydmljZSxcbiAgVG91clN0ZXBJLFxufSBmcm9tICcuLi9zZXJ2aWNlcy90b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RlcFNpemVJLCBTdGVwVGFyZ2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEV2ZW50c0kge1xuICBvbk5leHQoJGV2ZW50OiBFdmVudCk6IHZvaWQ7XG4gIG9uUHJldigkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbiAgb25DbG9zZSgkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbn1cblxuLy8gQGR5bmFtaWNcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXRvdXItc3RlcC10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3VyLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3VyLXN0ZXAuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdzdGVwcyQnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFN0ZXBFdmVudHNJIHtcbiAgY2xhc3M6IHN0cmluZztcbiAgdGFyZ2V0RWxlbWVudDogRWxlbWVudDtcbiAgdGFyZ2V0OiBTdGVwU2l6ZUk7XG4gIGN1cnJlbnRTdGVwOiBUb3VyU3RlcEkgPSBudWxsO1xuICBzdGVwcyQ6IE9ic2VydmFibGU8VG91clN0ZXBJPiA9IG51bGw7XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICB0aW1lb3V0czogYW55W10gPSBbXTtcbiAgc3RlcE1vZGFsUG9zaXRpb246IHsgdG9wPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyLCByaWdodD86IG51bWJlciwgYm90dG9tPzogbnVtYmVyIH07XG4gIG1vZGFsSGVpZ2h0OiBudW1iZXI7XG4gIHRhcmdldEJhY2tncm91bmQ6IHN0cmluZztcbiAgQE91dHB1dCgpIG5leHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJldjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJyZWFrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdXJTZXJ2aWNlOiBUb3VyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0ZXBUYXJnZXRTZXJ2aWNlOiBTdGVwVGFyZ2V0U2VydmljZSxcbiAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgLy8gQGR5bmFtaWNcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiB7fSkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBjbGlja091dHNpZGVUb0Nsb3NlKCRFdmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucygkRXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoJEV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pIG9uUmVzaXplKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLnNhdmVUYXJnZXQodGhpcy50YXJnZXRFbGVtZW50KTtcbiAgICAgIHRoaXMuZGVmaW5lU3RlcFBsYWNlbWVudCgpO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7IHRvcDogLTUwMCwgbGVmdDogLTUwMCB9O1xuICAgIHRoaXMuc3Vic2NyaWJlVG9TdGVwc1N0cmVhbSgpO1xuICAgIHRoaXMuc3RlcHMkID0gdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5nZXRUYXJnZXRTdWJqZWN0KCkucGlwZShcbiAgICAgIG1hcChzdGVwID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHJldHVybiB0aGlzLmN1cnJlbnRTdGVwO1xuICAgICAgICBpZiAoc3RlcCAmJiB0aGlzLnRvdXJTZXJ2aWNlLmdldFRvdXJTdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBzdGVwLnRhcmdldDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXAuc3RlcE5hbWUpO1xuICAgICAgICAgIHRoaXMuc2F2ZVN0ZXBEYXRhKCk7XG4gICAgICAgICAgdGhpcy5zYXZlVGFyZ2V0KHN0ZXAudGFyZ2V0KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RlcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMudGltZW91dHMuZm9yRWFjaChpID0+IGNsZWFyVGltZW91dChpKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvU3RlcHNTdHJlYW0oKSB7XG4gICAgdGhpcy50b3VyU2VydmljZS5nZXRTdGVwc1N0cmVhbSgpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kpLFxuICAgICAgbWFwKHN0ZXAgPT4ge1xuICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdGhlbWVDb2xvciB9ID0gKHRoaXMuY3VycmVudFN0ZXAgJiYgdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zKSB8fCB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBCeUluZGV4KCkub3B0aW9ucztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgfSA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zO1xuICAgICAgICB0aGlzLnRhcmdldEJhY2tncm91bmQgPSB0aGVtZUNvbG9yO1xuICAgICAgICBpZiAodGhpcy50b3VyU2VydmljZS5pc1JvdXRlQ2hhbmdlZCgpKSB7XG4gICAgICAgICAgdGhpcy50aW1lb3V0c1t0aGlzLnRpbWVvdXRzLmxlbmd0aF0gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tUYXJnZXQoc3RlcCksIGRlbGF5ICsgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH0pXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVGFyZ2V0KHN0ZXA6IHN0cmluZywgdGltZXMgPSAyKSB7XG4gICAgaWYgKCFzdGVwIHx8ICF0aGlzLnRvdXJTZXJ2aWNlLmdldFRvdXJTdGF0dXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkZWxheSA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zLmRlbGF5O1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuZ3RvdXJzdGVwPSR7c3RlcH1dYCk7XG4gICAgaWYgKHRpbWVzICYmIHRoaXMudG91clNlcnZpY2UuaXNSb3V0ZUNoYW5nZWQoKSAmJiAhdGFyZ2V0KSB7XG4gICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwLCB0aW1lcyAtIDEpLCBkZWxheSk7XG4gICAgfSBlbHNlIGlmICghdGFyZ2V0KSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRhcmdldCBpcyBtaXNzZWQgZm9yIHN0ZXAgJHtzdGVwfWApO1xuICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5vcHRpb25zLmNvbnRpbnVlSWZUYXJnZXRBYnNlbnQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBCeU5hbWUoc3RlcCkuaW5kZXggKyAxO1xuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnRvdXJTZXJ2aWNlLmdldExhc3RTdGVwKCkudG90YWwpIHtcbiAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLm5leHRTdGVwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgdG91ciBpcyBzdG9wcGVkIGJlY2F1c2Ugb2Ygbm8gdGFyZ2V0cyBpcyBmb3VuZCAgZm9yIHN0ZXAgJHtzdGVwfSBhbmQgbmV4dCBvbmVzYCk7XG4gICAgICAgICAgdGhpcy50b3VyU2VydmljZS5zdG9wVG91cigpO1xuICAgICAgICAgIHRoaXMuc3RlcFRhcmdldFNlcnZpY2Uuc2V0VGFyZ2V0U3ViamVjdChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIHJlc2V0Q2xhc3NlcygpOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5jdXJyZW50U3RlcDtcbiAgICBjb25zdCBzb3VyY2UgPSAoc3RlcCAmJiBzdGVwLm9wdGlvbnMpIHx8IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5SW5kZXgoKS5vcHRpb25zO1xuICAgIGNvbnN0IHsgYXJyb3dUb1RhcmdldCwgYW5pbWF0ZWRTdGVwLCBwbGFjZW1lbnQsIGNsYXNzTmFtZSB9ID0gc291cmNlO1xuICAgIGNvbnN0IGFycm93Q2xhc3MgPSBhcnJvd1RvVGFyZ2V0ID8gJ3dpdGgtYXJyb3cnIDogJyc7XG4gICAgY29uc3QgYW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRlZFN0ZXBcbiAgICAgID8gKHN0ZXAgPyAnYW5pbWF0aW9uLW9uJyA6ICdmYWRlLW9uJylcbiAgICAgIDogKHN0ZXAgPyAnJyA6ICdmYWRlLW9uJyk7XG4gICAgdGhpcy5jbGFzcyA9IGAke2Fycm93Q2xhc3N9ICR7Y2xhc3NOYW1lfSBwb3MtJHtwbGFjZW1lbnR9ICR7YW5pbWF0aW9uQ2xhc3N9YC50cmltKCk7XG4gIH1cbiAgcHJpdmF0ZSBzYXZlVGFyZ2V0KHRhcmdldDogRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5yZXNpemVUYXJnZXQoXG4gICAgICB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLmdldFNpemVBbmRQb3NpdGlvbih0YXJnZXQpLCB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMuc3RlcFRhcmdldFJlc2l6ZSk7XG4gICAgdGhpcy50aW1lb3V0c1t0aGlzLnRpbWVvdXRzLmxlbmd0aF0gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVmaW5lU3RlcFBsYWNlbWVudCgpLCAwKTtcbiAgfVxuICBwcml2YXRlIHNhdmVTdGVwRGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuICAgIHRoaXMudGFyZ2V0QmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gIH1cbiAgcHJpdmF0ZSBkZWZpbmVTdGVwUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdXItc3RlcC1tb2RhbCcpO1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlZmluZVN0ZXBQbGFjZW1lbnQoKSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW9kYWxSZWN0ID0gbW9kYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5tb2RhbEhlaWdodCA9IE1hdGgucm91bmQobW9kYWxSZWN0LmhlaWdodCA/IG1vZGFsUmVjdC5oZWlnaHQgOiBtb2RhbFJlY3QuYm90dG9tIC0gbW9kYWxSZWN0LnRvcCk7XG4gICAgY29uc3QgbW9kYWxXaWR0aCA9IE1hdGgucm91bmQobW9kYWxSZWN0LndpZHRoID8gbW9kYWxSZWN0LndpZHRoIDogbW9kYWxSZWN0LnJpZ2h0IC0gbW9kYWxSZWN0LmxlZnQpO1xuICAgIGNvbnN0IHsgcGxhY2VtZW50LCBzY3JvbGxUbyB9ID0gdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zO1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIHdpZHRoLCBsZWZ0LCByaWdodCB9ID0gdGhpcy50YXJnZXQ7XG4gICAgaWYgKC9eZG93biQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7IHRvcDogYm90dG9tICsgMjAsIGxlZnQ6IE1hdGgucm91bmQobGVmdCAtIG1vZGFsV2lkdGggLyAyKSB9O1xuICAgIH0gZWxzZSBpZiAoL15jZW50ZXItZG93biQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7IHRvcDogYm90dG9tICsgMjAsIGxlZnQ6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAyIC0gbW9kYWxXaWR0aCAvIDIpIH07XG4gICAgfSBlbHNlIGlmICgvXnRvcCQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7IHRvcDogdG9wIC0gdGhpcy5tb2RhbEhlaWdodCAtIDIwLCBsZWZ0OiBNYXRoLnJvdW5kKGxlZnQgLSBtb2RhbFdpZHRoIC8gMikgfTtcbiAgICB9IGVsc2UgaWYgKC9eY2VudGVyLXRvcCQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7IHRvcDogdG9wIC0gdGhpcy5tb2RhbEhlaWdodCAtIDIwLCBsZWZ0OiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIG1vZGFsV2lkdGggLyAyKSB9O1xuICAgIH0gZWxzZSBpZiAoL15sZWZ0JC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgbGVmdDogbGVmdCAtIG1vZGFsV2lkdGggLSAyMCwgdG9wIH07XG4gICAgfSBlbHNlIGlmICgvXnJpZ2h0JC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgbGVmdDogcmlnaHQgKyB3aWR0aCArIDIwLCB0b3AgfTtcbiAgICB9IGVsc2UgaWYgKC9ebGVmdC10b3AkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0IC0gbW9kYWxXaWR0aCAtIDIwLCB0b3A6IHRvcCAtIHRoaXMubW9kYWxIZWlnaHQgKyA1MFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQtdG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogcmlnaHQgKyB3aWR0aCArIDIwLCB0b3A6IHRvcCAtIHRoaXMubW9kYWxIZWlnaHQgKyA1MFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQtY2VudGVyJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHRoaXMubW9kYWxIZWlnaHQgLyAyKVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ebGVmdC1jZW50ZXIkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLm1vZGFsSGVpZ2h0IC8gMilcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgvXmNlbnRlciQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAyIC0gbW9kYWxXaWR0aCAvIDIpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHRoaXMubW9kYWxIZWlnaHQgLyAyKVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMobW9kYWwpO1xuICAgIH1cbiAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG8oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEZvY3VzKG1vZGFsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgbmV4dEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b3VyLWJ0bi1uZXh0JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZW5kQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRvdXItYnRuLWRvbmUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobmV4dEJ0bikge1xuICAgICAgbmV4dEJ0bi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZW5kQnRuKSB7XG4gICAgICBlbmRCdG4uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzY3JvbGxUbygpIHtcbiAgICBjb25zdCB7IHBsYWNlbWVudCwgZml4ZWQgfSA9IHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucztcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy50YXJnZXQubGVmdDtcbiAgICBjb25zdCB0b3AgPSBwbGFjZW1lbnQgIT09ICd0b3AnID8gdGhpcy50YXJnZXQudG9wIC0gMTAwIDogdGhpcy50YXJnZXQudG9wIC0gdGhpcy5tb2RhbEhlaWdodCAtIDUwO1xuICAgIGNvbnN0IGJlaGF2aW9yID0gdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zLnNtb290aFNjcm9sbCA/ICdzbW9vdGgnIDogJ2F1dG8nO1xuICAgIGlmICghZml4ZWQpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGwoeyB0b3AsIGxlZnQsIGJlaGF2aW9yIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvciB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG9uTmV4dChldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLm5leHQuZW1pdCh7XG4gICAgICBzdGVwRXZlbnQ6ICduZXh0JyxcbiAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTdGVwLmluZGV4ICsgMSxcbiAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpLFxuICAgIH0pO1xuICAgIHRoaXMudG91clNlcnZpY2UubmV4dFN0ZXAoKTtcbiAgfVxuICBwdWJsaWMgb25QcmV2KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMucHJldi5lbWl0KHtcbiAgICAgIHN0ZXBFdmVudDogJ3ByZXYnLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXggLSAxLFxuICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgfSk7XG4gICAgdGhpcy50b3VyU2VydmljZS5wcmV2U3RlcCgpO1xuICB9XG4gIHB1YmxpYyBvbkNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwLmluZGV4ICE9PSB0aGlzLmN1cnJlbnRTdGVwLnRvdGFsIC0gMSkge1xuICAgICAgdGhpcy5icmVhay5lbWl0KHtcbiAgICAgICAgc3RlcEV2ZW50OiAnYnJlYWsnLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCxcbiAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb25lLmVtaXQoe1xuICAgICAgICBzdGVwRXZlbnQ6ICdkb25lJyxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXgsXG4gICAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG91clNlcnZpY2Uuc3RvcFRvdXIoKTtcbiAgfVxufVxuIl19