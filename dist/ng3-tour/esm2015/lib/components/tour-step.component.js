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
export class TourStepComponent {
    /**
     * @param {?} tourService
     * @param {?} stepTargetService
     * @param {?} elem
     * @param {?} ref
     * @param {?} platformId
     */
    constructor(tourService, stepTargetService, elem, ref, 
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
    clickOutsideToClose($Event) {
        if (this.currentStep) {
            if (this.currentStep.options.closeOnClickOutside && !this.elem.nativeElement.contains($Event.target)) {
                this.onClose($Event);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.target && this.currentStep) {
            this.saveTarget(this.targetElement);
            this.defineStepPlacement();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }
        this.stepModalPosition = { top: -500, left: -500 };
        this.subscribeToStepsStream();
        this.steps$ = this.stepTargetService.getTargetSubject().pipe(map((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            if (this.currentStep)
                return this.currentStep;
            if (step && this.tourService.getTourStatus) {
                this.targetElement = step.target;
                this.currentStep = this.tourService.getStepByName(step.stepName);
                this.saveStepData();
                this.saveTarget(step.target);
                return this.currentStep;
            }
            return step;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy.next();
        this.timeouts.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => clearTimeout(i)));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToStepsStream() {
        this.tourService.getStepsStream().pipe(takeUntil(this.onDestroy), map((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            if (!step) {
                this.currentStep = null;
                return step;
            }
            const { themeColor } = (this.currentStep && this.currentStep.options) || this.tourService.getStepByIndex().options;
            this.currentStep = null;
            this.resetClasses();
            const { delay } = this.tourService.getStepByName(step).options;
            this.targetBackground = themeColor;
            if (this.tourService.isRouteChanged()) {
                this.timeouts[this.timeouts.length] = setTimeout((/**
                 * @return {?}
                 */
                () => this.checkTarget(step)), delay + 100);
            }
            else {
                this.timeouts[this.timeouts.length] = setTimeout((/**
                 * @return {?}
                 */
                () => this.checkTarget(step)), 100);
            }
            return step;
        }))).subscribe();
    }
    /**
     * @private
     * @param {?} step
     * @param {?=} times
     * @return {?}
     */
    checkTarget(step, times = 2) {
        if (!step || !this.tourService.getTourStatus()) {
            return;
        }
        /** @type {?} */
        const delay = this.tourService.getStepByName(step).options.delay;
        /** @type {?} */
        const target = document.querySelector(`[ngtourstep=${step}]`);
        if (times && this.tourService.isRouteChanged() && !target) {
            this.timeouts[this.timeouts.length] = setTimeout((/**
             * @return {?}
             */
            () => this.checkTarget(step, times - 1)), delay);
        }
        else if (!target) {
            console.warn(`Target is missed for step ${step}`);
            if (this.tourService.getStepByName(step).options.continueIfTargetAbsent) {
                /** @type {?} */
                const index = this.tourService.getStepByName(step).index + 1;
                if (index < this.tourService.getLastStep().total) {
                    this.tourService.nextStep();
                }
                else {
                    console.warn(`The tour is stopped because of no targets is found  for step ${step} and next ones`);
                    this.tourService.stopTour();
                    this.stepTargetService.setTargetSubject(null);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetClasses() {
        /** @type {?} */
        const step = this.currentStep;
        /** @type {?} */
        const source = (step && step.options) || this.tourService.getStepByIndex().options;
        const { arrowToTarget, animatedStep, placement, className } = source;
        /** @type {?} */
        const arrowClass = arrowToTarget ? 'with-arrow' : '';
        /** @type {?} */
        const animationClass = animatedStep
            ? (step ? 'animation-on' : 'fade-on')
            : (step ? '' : 'fade-on');
        this.class = `${arrowClass} ${className} pos-${placement} ${animationClass}`.trim();
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    saveTarget(target) {
        this.target = this.stepTargetService.resizeTarget(this.stepTargetService.getSizeAndPosition(target), this.currentStep.options.stepTargetResize);
        this.timeouts[this.timeouts.length] = setTimeout((/**
         * @return {?}
         */
        () => this.defineStepPlacement()), 0);
    }
    /**
     * @private
     * @return {?}
     */
    saveStepData() {
        this.resetClasses();
        this.targetBackground = 'transparent';
    }
    /**
     * @private
     * @return {?}
     */
    defineStepPlacement() {
        /** @type {?} */
        const modal = document.querySelector('.tour-step-modal');
        if (!modal) {
            this.timeouts[this.timeouts.length] = setTimeout((/**
             * @return {?}
             */
            () => this.defineStepPlacement()), 100);
            return;
        }
        /** @type {?} */
        const modalRect = modal.getBoundingClientRect();
        this.modalHeight = Math.round(modalRect.height ? modalRect.height : modalRect.bottom - modalRect.top);
        /** @type {?} */
        const modalWidth = Math.round(modalRect.width ? modalRect.width : modalRect.right - modalRect.left);
        const { placement, scrollTo } = this.currentStep.options;
        const { top, bottom, width, left, right } = this.target;
        if (/^down$/i.test(placement)) {
            this.stepModalPosition = { top: bottom + 20, left: Math.round(left - modalWidth / 2) };
        }
        else if (/^top$/i.test(placement)) {
            this.stepModalPosition = { top: top - this.modalHeight - 20, left: Math.round(left - modalWidth / 2) };
        }
        else if (/^left$/i.test(placement)) {
            this.stepModalPosition = { left: left - modalWidth - 20, top };
        }
        else if (/^right$/i.test(placement)) {
            this.stepModalPosition = { left: right + width + 20, top };
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
    }
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    setFocus(modal) {
        /** @type {?} */
        const nextBtn = (/** @type {?} */ (modal.querySelector('.tour-btn-next')));
        /** @type {?} */
        const endBtn = (/** @type {?} */ (modal.querySelector('.tour-btn-done')));
        if (nextBtn) {
            nextBtn.focus();
        }
        else if (endBtn) {
            endBtn.focus();
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollTo() {
        const { placement, fixed } = this.currentStep.options;
        /** @type {?} */
        const left = this.target.left;
        /** @type {?} */
        const top = placement !== 'top' ? this.target.top - 100 : this.target.top - this.modalHeight - 50;
        /** @type {?} */
        const behavior = this.currentStep.options.smoothScroll ? 'smooth' : 'auto';
        if (!fixed) {
            document.documentElement.scroll({ top, left, behavior });
        }
        else {
            document.documentElement.scroll({ top: 0, left: 0, behavior });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNext(event) {
        this.next.emit({
            stepEvent: 'next',
            index: this.currentStep.index + 1,
            history: this.tourService.getHistory(),
        });
        this.tourService.nextStep();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPrev(event) {
        this.prev.emit({
            stepEvent: 'prev',
            index: this.currentStep.index - 1,
            history: this.tourService.getHistory(),
        });
        this.tourService.prevStep();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClose(event) {
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
    }
}
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
TourStepComponent.ctorParameters = () => [
    { type: TourService },
    { type: StepTargetService },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TourStepComponent.propDecorators = {
    next: [{ type: Output }],
    prev: [{ type: Output }],
    done: [{ type: Output }],
    break: [{ type: Output }],
    clickOutsideToClose: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG91ci1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFFaEIsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFFWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUNMLFdBQVcsR0FFWixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBWSxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRzdFLGlDQUlDOzs7Ozs7SUFIQyxxREFBNEI7Ozs7O0lBQzVCLHFEQUE0Qjs7Ozs7SUFDNUIsc0RBQTZCOzs7QUFZL0IsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFpQjVCLFlBQ21CLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUM3QyxJQUFnQixFQUNoQixHQUFxQjtJQUM3QixXQUFXO0lBQ1UsVUFBYztRQUxsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFqQi9CLGdCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLFdBQU0sR0FBMEIsSUFBSSxDQUFDO1FBRXJDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQy9CLGFBQVEsR0FB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QjtZQVhsQyxVQUFVO1lBQ1YsZ0JBQWdCOzRDQW1EYixNQUFNLFNBQUMsV0FBVzs7O21CQVhwQixNQUFNO21CQUNOLE1BQU07bUJBQ04sTUFBTTtvQkFDTixNQUFNO2tDQVdOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1QkFPekMsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWhDekMsa0NBQWM7O0lBQ2QsMENBQXVCOztJQUN2QixtQ0FBa0I7O0lBQ2xCLHdDQUE4Qjs7SUFDOUIsbUNBQXFDOztJQUNyQyxzQ0FBbUI7O0lBQ25CLHNDQUErQjs7SUFDL0IscUNBQXFCOztJQUNyQiw4Q0FBa0Y7O0lBQ2xGLHdDQUFvQjs7SUFDcEIsNkNBQXlCOztJQUN6QixpQ0FBdUQ7O0lBQ3ZELGlDQUF1RDs7SUFDdkQsaUNBQXVEOztJQUN2RCxrQ0FBd0Q7Ozs7O0lBR3RELHdDQUF5Qzs7Ozs7SUFDekMsOENBQXFEOzs7OztJQUNyRCxpQ0FBd0I7Ozs7O0lBQ3hCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFRvdXJTZXJ2aWNlLFxuICBUb3VyU3RlcEksXG59IGZyb20gJy4uL3NlcnZpY2VzL3RvdXIuc2VydmljZSc7XG5pbXBvcnQge1N0ZXBTaXplSSwgU3RlcFRhcmdldFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEV2ZW50c0kge1xuICBvbk5leHQoJGV2ZW50OiBFdmVudCk6IHZvaWQ7XG4gIG9uUHJldigkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbiAgb25DbG9zZSgkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbn1cblxuLy8gQGR5bmFtaWNcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXRvdXItc3RlcC10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3VyLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3VyLXN0ZXAuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdzdGVwcyQnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFN0ZXBFdmVudHNJIHtcbiAgY2xhc3M6IHN0cmluZztcbiAgdGFyZ2V0RWxlbWVudDogRWxlbWVudDtcbiAgdGFyZ2V0OiBTdGVwU2l6ZUk7XG4gIGN1cnJlbnRTdGVwOiBUb3VyU3RlcEkgPSBudWxsO1xuICBzdGVwcyQ6IE9ic2VydmFibGU8VG91clN0ZXBJPiA9IG51bGw7XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICB0aW1lb3V0czogYW55W10gPSBbXTtcbiAgc3RlcE1vZGFsUG9zaXRpb246IHt0b3A/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCBib3R0b20/OiBudW1iZXJ9O1xuICBtb2RhbEhlaWdodDogbnVtYmVyO1xuICB0YXJnZXRCYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBuZXh0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXY6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZG9uZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBicmVhazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3VyU2VydmljZTogVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGVwVGFyZ2V0U2VydmljZTogU3RlcFRhcmdldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8vIEBkeW5hbWljXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDoge30pIHtcbiAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBjbGlja091dHNpZGVUb0Nsb3NlKCRFdmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucygkRXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoJEV2ZW50KTtcbiAgICAgIH1cbiAgICB9ICAgICAgIFxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKSBvblJlc2l6ZShldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgdGhpcy5zYXZlVGFyZ2V0KHRoaXMudGFyZ2V0RWxlbWVudCk7XG4gICAgICB0aGlzLmRlZmluZVN0ZXBQbGFjZW1lbnQoKTtcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge3RvcDogLTUwMCwgbGVmdDogLTUwMH07XG4gICAgdGhpcy5zdWJzY3JpYmVUb1N0ZXBzU3RyZWFtKCk7XG4gICAgdGhpcy5zdGVwcyQgPSB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLmdldFRhcmdldFN1YmplY3QoKS5waXBlKFxuICAgICAgbWFwKCBzdGVwID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHJldHVybiB0aGlzLmN1cnJlbnRTdGVwO1xuICAgICAgICBpZiAoc3RlcCAmJiB0aGlzLnRvdXJTZXJ2aWNlLmdldFRvdXJTdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSBzdGVwLnRhcmdldDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXAuc3RlcE5hbWUpO1xuICAgICAgICAgIHRoaXMuc2F2ZVN0ZXBEYXRhKCk7XG4gICAgICAgICAgdGhpcy5zYXZlVGFyZ2V0KHN0ZXAudGFyZ2V0KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RlcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMudGltZW91dHMuZm9yRWFjaChpID0+IGNsZWFyVGltZW91dChpKSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9TdGVwc1N0cmVhbSgpIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBzU3RyZWFtKCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm9uRGVzdHJveSksXG4gICAgICBtYXAoc3RlcCA9PiB7XG4gICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGNvbnN0IHt0aGVtZUNvbG9yfSA9ICh0aGlzLmN1cnJlbnRTdGVwICYmIHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucykgfHwgdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlJbmRleCgpLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuICAgICAgICBjb25zdCB7ZGVsYXl9ID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnM7XG4gICAgICAgIHRoaXMudGFyZ2V0QmFja2dyb3VuZCA9IHRoZW1lQ29sb3I7XG4gICAgICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmlzUm91dGVDaGFuZ2VkKCkpIHtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwKSwgZGVsYXkgKyAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVGFyZ2V0KHN0ZXApLCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgfSlcbiAgICApLnN1YnNjcmliZSgpO1xuICB9XG4gIHByaXZhdGUgY2hlY2tUYXJnZXQoc3RlcDogc3RyaW5nLCB0aW1lcyA9IDIpIHtcbiAgICBpZiAoIXN0ZXAgfHwgIXRoaXMudG91clNlcnZpY2UuZ2V0VG91clN0YXR1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlbGF5ID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnMuZGVsYXk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW25ndG91cnN0ZXA9JHtzdGVwfV1gKTtcbiAgICBpZiAodGltZXMgJiYgdGhpcy50b3VyU2VydmljZS5pc1JvdXRlQ2hhbmdlZCgpICYmICF0YXJnZXQpIHtcbiAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVGFyZ2V0KHN0ZXAsIHRpbWVzIC0gMSksIGRlbGF5KTtcbiAgICB9IGVsc2UgaWYgKCF0YXJnZXQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGFyZ2V0IGlzIG1pc3NlZCBmb3Igc3RlcCAke3N0ZXB9YCk7XG4gICAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnMuY29udGludWVJZlRhcmdldEFic2VudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5pbmRleCArIDE7XG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS50b3RhbCkge1xuICAgICAgICAgICAgdGhpcy50b3VyU2VydmljZS5uZXh0U3RlcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIHRvdXIgaXMgc3RvcHBlZCBiZWNhdXNlIG9mIG5vIHRhcmdldHMgaXMgZm91bmQgIGZvciBzdGVwICR7c3RlcH0gYW5kIG5leHQgb25lc2ApO1xuICAgICAgICAgIHRoaXMudG91clNlcnZpY2Uuc3RvcFRvdXIoKTtcbiAgICAgICAgICB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLnNldFRhcmdldFN1YmplY3QobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSByZXNldENsYXNzZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuY3VycmVudFN0ZXA7XG4gICAgY29uc3Qgc291cmNlID0gKHN0ZXAgJiYgc3RlcC5vcHRpb25zKSB8fCB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBCeUluZGV4KCkub3B0aW9ucztcbiAgICBjb25zdCB7YXJyb3dUb1RhcmdldCwgYW5pbWF0ZWRTdGVwLCBwbGFjZW1lbnQsIGNsYXNzTmFtZX0gPSBzb3VyY2U7XG4gICAgY29uc3QgYXJyb3dDbGFzcyA9IGFycm93VG9UYXJnZXQgPyAnd2l0aC1hcnJvdycgOiAnJztcbiAgICBjb25zdCBhbmltYXRpb25DbGFzcyA9IGFuaW1hdGVkU3RlcFxuICAgICAgPyAoc3RlcCA/ICdhbmltYXRpb24tb24nIDogJ2ZhZGUtb24nKVxuICAgICAgOiAoc3RlcCA/ICcnIDogJ2ZhZGUtb24nKTtcbiAgICB0aGlzLmNsYXNzID0gYCR7YXJyb3dDbGFzc30gJHtjbGFzc05hbWV9IHBvcy0ke3BsYWNlbWVudH0gJHthbmltYXRpb25DbGFzc31gLnRyaW0oKTtcbiAgfVxuICBwcml2YXRlIHNhdmVUYXJnZXQodGFyZ2V0OiBFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLnJlc2l6ZVRhcmdldChcbiAgICB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLmdldFNpemVBbmRQb3NpdGlvbih0YXJnZXQpLCB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMuc3RlcFRhcmdldFJlc2l6ZSk7XG4gICAgdGhpcy50aW1lb3V0c1t0aGlzLnRpbWVvdXRzLmxlbmd0aF0gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVmaW5lU3RlcFBsYWNlbWVudCgpLCAwKTtcbiAgfVxuICBwcml2YXRlIHNhdmVTdGVwRGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuICAgIHRoaXMudGFyZ2V0QmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gIH1cbiAgcHJpdmF0ZSBkZWZpbmVTdGVwUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdXItc3RlcC1tb2RhbCcpO1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlZmluZVN0ZXBQbGFjZW1lbnQoKSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW9kYWxSZWN0ID0gbW9kYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5tb2RhbEhlaWdodCA9IE1hdGgucm91bmQobW9kYWxSZWN0LmhlaWdodCA/IG1vZGFsUmVjdC5oZWlnaHQgOiBtb2RhbFJlY3QuYm90dG9tIC0gbW9kYWxSZWN0LnRvcCk7XG4gICAgY29uc3QgbW9kYWxXaWR0aCA9IE1hdGgucm91bmQobW9kYWxSZWN0LndpZHRoID8gbW9kYWxSZWN0LndpZHRoIDogbW9kYWxSZWN0LnJpZ2h0IC0gbW9kYWxSZWN0LmxlZnQpO1xuICAgIGNvbnN0IHtwbGFjZW1lbnQsIHNjcm9sbFRvfSA9IHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucztcbiAgICBjb25zdCB7dG9wLCBib3R0b20sIHdpZHRoLCBsZWZ0LCByaWdodH0gPSB0aGlzLnRhcmdldDtcbiAgICBpZiAoL15kb3duJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHt0b3A6IGJvdHRvbSArIDIwLCBsZWZ0OiBNYXRoLnJvdW5kKGxlZnQgLSBtb2RhbFdpZHRoIC8gMil9O1xuICAgIH0gZWxzZSBpZiAoL150b3AkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge3RvcDogdG9wICAtIHRoaXMubW9kYWxIZWlnaHQgLSAyMCwgbGVmdDogTWF0aC5yb3VuZChsZWZ0IC0gbW9kYWxXaWR0aCAvIDIpfTtcbiAgICB9IGVsc2UgaWYgKC9ebGVmdCQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7bGVmdDogbGVmdCAtIG1vZGFsV2lkdGggLSAyMCwgdG9wfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge2xlZnQ6IHJpZ2h0ICsgd2lkdGggKyAyMCwgdG9wfTtcbiAgICB9IGVsc2UgaWYgKC9ebGVmdC10b3AkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0IC0gbW9kYWxXaWR0aCAtIDIwLCB0b3A6IHRvcCAtIHRoaXMubW9kYWxIZWlnaHQgKyA1MFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQtdG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogcmlnaHQgKyB3aWR0aCArIDIwLCB0b3A6IHRvcCAtIHRoaXMubW9kYWxIZWlnaHQgKyA1MFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQtY2VudGVyJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHRoaXMubW9kYWxIZWlnaHQgLyAyKVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9ebGVmdC1jZW50ZXIkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLm1vZGFsSGVpZ2h0IC8gMilcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgvXmNlbnRlciQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAyIC0gbW9kYWxXaWR0aCAvIDIpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHRoaXMubW9kYWxIZWlnaHQgLyAyKVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMobW9kYWwpO1xuICAgIH1cbiAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG8oKTtcbiAgICB9XG4gIH1cbiAgXG4gIHByaXZhdGUgc2V0Rm9jdXMobW9kYWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRvdXItYnRuLW5leHQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBlbmRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudG91ci1idG4tZG9uZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChuZXh0QnRuKSB7XG4gICAgICBuZXh0QnRuLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChlbmRCdG4pIHtcbiAgICAgIGVuZEJ0bi5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHNjcm9sbFRvKCkge1xuICAgIGNvbnN0IHtwbGFjZW1lbnQsIGZpeGVkfSA9IHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucztcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy50YXJnZXQubGVmdDtcbiAgICBjb25zdCB0b3AgPSBwbGFjZW1lbnQgIT09ICd0b3AnID8gdGhpcy50YXJnZXQudG9wIC0gMTAwIDogdGhpcy50YXJnZXQudG9wIC0gdGhpcy5tb2RhbEhlaWdodCAtIDUwO1xuICAgIGNvbnN0IGJlaGF2aW9yID0gdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zLnNtb290aFNjcm9sbCA/ICdzbW9vdGgnIDogJ2F1dG8nO1xuICAgIGlmICghZml4ZWQpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGwoe3RvcCwgbGVmdCwgYmVoYXZpb3J9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbCh7dG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcn0pO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgb25OZXh0KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMubmV4dC5lbWl0KHtcbiAgICAgIHN0ZXBFdmVudDogJ25leHQnLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXggKyAxLFxuICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgfSk7XG4gICAgdGhpcy50b3VyU2VydmljZS5uZXh0U3RlcCgpO1xuICB9XG4gIHB1YmxpYyBvblByZXYoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5wcmV2LmVtaXQoe1xuICAgICAgc3RlcEV2ZW50OiAncHJldicsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCAtIDEsXG4gICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKSxcbiAgICB9KTtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnByZXZTdGVwKCk7XG4gIH1cbiAgcHVibGljIG9uQ2xvc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXAuaW5kZXggIT09IHRoaXMuY3VycmVudFN0ZXAudG90YWwgLSAxKSB7XG4gICAgICB0aGlzLmJyZWFrLmVtaXQoe1xuICAgICAgICBzdGVwRXZlbnQ6ICdicmVhaycsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTdGVwLmluZGV4LFxuICAgICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbmUuZW1pdCh7XG4gICAgICAgIHN0ZXBFdmVudDogJ2RvbmUnLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCxcbiAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b3VyU2VydmljZS5zdG9wVG91cigpO1xuICB9XG59XG4iXX0=