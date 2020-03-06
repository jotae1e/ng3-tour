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
                styles: [".tour-step-wrapper.fade-on .tour-step-modal{opacity:0}.tour-step-wrapper:not(.animation-on) .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-down.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepDown;animation:.4s ease-in-out stepDown}.tour-step-wrapper.pos-down.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-bottom:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;top:-.4rem;right:45%}.tour-step-wrapper.pos-top.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepTop;animation:.4s ease-in-out stepTop}.tour-step-wrapper.pos-top.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-top:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.4rem;right:45%}.tour-step-wrapper.pos-left.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepLeft;animation:.4s ease-in-out stepLeft}.tour-step-wrapper.pos-left.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-left:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;right:-.4rem;top:1rem}.tour-step-wrapper.pos-right.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out stepRight;animation:.4s ease-in-out stepRight}.tour-step-wrapper.pos-right.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-right:.4rem solid #fff;border-top:.4rem solid transparent;border-bottom:.4rem solid transparent;left:-.4rem;top:1rem}.tour-step-wrapper.pos-center-down.animation-on .tour-step-modal,.tour-step-wrapper.pos-center.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-center-down.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-bottom:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;top:-.4rem;right:45%}.tour-step-wrapper.pos-center-top.animation-on .tour-step-modal{-webkit-animation:.4s ease-in-out fade;animation:.4s ease-in-out fade}.tour-step-wrapper.pos-center-top.with-arrow .tour-step-modal::after{content:\"\";width:0;height:0;position:absolute;border-top:.4rem solid #fff;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.4rem;right:45%}.tour-step-modal{background:#fff;border-radius:4px;box-shadow:0 0 12px 4px rgba(0,0,0,.55);z-index:1100}.tour-step-modal__content{padding:.8rem;box-sizing:border-box}.tour-step-modal__header{width:100%;display:flex;justify-content:space-between}.tour-step-modal__title{font-weight:500;font-size:22px}.tour-step-modal__body{padding:1rem 0;min-height:50px;flex-grow:2}.tour-step-modal__description{line-height:24px}.tour-step-modal .tour-btn-close{background:0 0;border:none;color:#a9a9a9;font-size:1.6rem;margin:-5px -5px 0 0;cursor:pointer}.tour-step-modal .tour-btn-close:hover{color:var(--pale-grey)}.tour-step-modal__footer{padding:1px 0;display:flex;justify-content:space-between;align-items:center;justify-self:end;width:100%}.tour-btn{width:auto;height:auto;border-radius:4px;background:0 0;color:grey;cursor:pointer;padding:8px 16px;box-shadow:0 0 2px 2px rgba(0,0,0,.24),inset 0 1px 3px 0 rgba(0,0,0,.16);border:1px solid grey;transition:.3s}.tour-btn:focus,.tour-btn:hover{border-color:#737373;box-shadow:1px 1px 2px 1px rgba(0,0,0,.34);outline:0}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepDown{0%{transform:translateY(30px);opacity:0}100%{transform:translateY(0);opacity:1}}@-webkit-keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepLeft{0%{transform:translateX(-30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes stepRight{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes stepTop{0%{transform:translateY(-30px);opacity:0}100%{transform:translateY(0);opacity:1}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG91ci1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUVYLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQ0wsV0FBVyxHQUVaLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFhLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFHL0UsaUNBSUM7Ozs7OztJQUhDLHFEQUE0Qjs7Ozs7SUFDNUIscURBQTRCOzs7OztJQUM1QixzREFBNkI7OztBQVkvQixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWlCNUIsWUFDbUIsV0FBd0IsRUFDeEIsaUJBQW9DLEVBQzdDLElBQWdCLEVBQ2hCLEdBQXFCO0lBQzdCLFdBQVc7SUFDVSxVQUFjO1FBTGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQWpCL0IsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFDOUIsV0FBTSxHQUEwQixJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDL0IsYUFBUSxHQUFV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ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFRvdXJTZXJ2aWNlLFxuICBUb3VyU3RlcEksXG59IGZyb20gJy4uL3NlcnZpY2VzL3RvdXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdGVwU2l6ZUksIFN0ZXBUYXJnZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RlcC10YXJnZXQuc2VydmljZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBTdGVwRXZlbnRzSSB7XG4gIG9uTmV4dCgkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbiAgb25QcmV2KCRldmVudDogRXZlbnQpOiB2b2lkO1xuICBvbkNsb3NlKCRldmVudDogRXZlbnQpOiB2b2lkO1xufVxuXG4vLyBAZHluYW1pY1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctdG91ci1zdGVwLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvdXItc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvdXItc3RlcC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ3N0ZXBzJCcsXG59KVxuXG5leHBvcnQgY2xhc3MgVG91clN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgU3RlcEV2ZW50c0kge1xuICBjbGFzczogc3RyaW5nO1xuICB0YXJnZXRFbGVtZW50OiBFbGVtZW50O1xuICB0YXJnZXQ6IFN0ZXBTaXplSTtcbiAgY3VycmVudFN0ZXA6IFRvdXJTdGVwSSA9IG51bGw7XG4gIHN0ZXBzJDogT2JzZXJ2YWJsZTxUb3VyU3RlcEk+ID0gbnVsbDtcbiAgaXNCcm93c2VyOiBib29sZWFuO1xuICBvbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHRpbWVvdXRzOiBhbnlbXSA9IFtdO1xuICBzdGVwTW9kYWxQb3NpdGlvbjogeyB0b3A/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCBib3R0b20/OiBudW1iZXIgfTtcbiAgbW9kYWxIZWlnaHQ6IG51bWJlcjtcbiAgdGFyZ2V0QmFja2dyb3VuZDogc3RyaW5nO1xuICBAT3V0cHV0KCkgbmV4dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwcmV2OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRvbmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYnJlYWs6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RlcFRhcmdldFNlcnZpY2U6IFN0ZXBUYXJnZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvLyBAZHluYW1pY1xuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHt9KSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pIGNsaWNrT3V0c2lkZVRvQ2xvc2UoJEV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RlcC5vcHRpb25zLmNsb3NlT25DbGlja091dHNpZGUgJiYgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKCRFdmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMub25DbG9zZSgkRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgIHRoaXMuc2F2ZVRhcmdldCh0aGlzLnRhcmdldEVsZW1lbnQpO1xuICAgICAgdGhpcy5kZWZpbmVTdGVwUGxhY2VtZW50KCk7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgdG9wOiAtNTAwLCBsZWZ0OiAtNTAwIH07XG4gICAgdGhpcy5zdWJzY3JpYmVUb1N0ZXBzU3RyZWFtKCk7XG4gICAgdGhpcy5zdGVwcyQgPSB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLmdldFRhcmdldFN1YmplY3QoKS5waXBlKFxuICAgICAgbWFwKHN0ZXAgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkgcmV0dXJuIHRoaXMuY3VycmVudFN0ZXA7XG4gICAgICAgIGlmIChzdGVwICYmIHRoaXMudG91clNlcnZpY2UuZ2V0VG91clN0YXR1cykge1xuICAgICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHN0ZXAudGFyZ2V0O1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBCeU5hbWUoc3RlcC5zdGVwTmFtZSk7XG4gICAgICAgICAgdGhpcy5zYXZlU3RlcERhdGEoKTtcbiAgICAgICAgICB0aGlzLnNhdmVUYXJnZXQoc3RlcC50YXJnZXQpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGVwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy50aW1lb3V0cy5mb3JFYWNoKGkgPT4gY2xlYXJUaW1lb3V0KGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9TdGVwc1N0cmVhbSgpIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0ZXBzU3RyZWFtKCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm9uRGVzdHJveSksXG4gICAgICBtYXAoc3RlcCA9PiB7XG4gICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyB0aGVtZUNvbG9yIH0gPSAodGhpcy5jdXJyZW50U3RlcCAmJiB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMpIHx8IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5SW5kZXgoKS5vcHRpb25zO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcbiAgICAgICAgY29uc3QgeyBkZWxheSB9ID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnM7XG4gICAgICAgIHRoaXMudGFyZ2V0QmFja2dyb3VuZCA9IHRoZW1lQ29sb3I7XG4gICAgICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmlzUm91dGVDaGFuZ2VkKCkpIHtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1RhcmdldChzdGVwKSwgZGVsYXkgKyAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVGFyZ2V0KHN0ZXApLCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgfSlcbiAgICApLnN1YnNjcmliZSgpO1xuICB9XG4gIHByaXZhdGUgY2hlY2tUYXJnZXQoc3RlcDogc3RyaW5nLCB0aW1lcyA9IDIpIHtcbiAgICBpZiAoIXN0ZXAgfHwgIXRoaXMudG91clNlcnZpY2UuZ2V0VG91clN0YXR1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlbGF5ID0gdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnMuZGVsYXk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW25ndG91cnN0ZXA9JHtzdGVwfV1gKTtcbiAgICBpZiAodGltZXMgJiYgdGhpcy50b3VyU2VydmljZS5pc1JvdXRlQ2hhbmdlZCgpICYmICF0YXJnZXQpIHtcbiAgICAgIHRoaXMudGltZW91dHNbdGhpcy50aW1lb3V0cy5sZW5ndGhdID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVGFyZ2V0KHN0ZXAsIHRpbWVzIC0gMSksIGRlbGF5KTtcbiAgICB9IGVsc2UgaWYgKCF0YXJnZXQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGFyZ2V0IGlzIG1pc3NlZCBmb3Igc3RlcCAke3N0ZXB9YCk7XG4gICAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlOYW1lKHN0ZXApLm9wdGlvbnMuY29udGludWVJZlRhcmdldEFic2VudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG91clNlcnZpY2UuZ2V0U3RlcEJ5TmFtZShzdGVwKS5pbmRleCArIDE7XG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS50b3RhbCkge1xuICAgICAgICAgIHRoaXMudG91clNlcnZpY2UubmV4dFN0ZXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSB0b3VyIGlzIHN0b3BwZWQgYmVjYXVzZSBvZiBubyB0YXJnZXRzIGlzIGZvdW5kICBmb3Igc3RlcCAke3N0ZXB9IGFuZCBuZXh0IG9uZXNgKTtcbiAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLnN0b3BUb3VyKCk7XG4gICAgICAgICAgdGhpcy5zdGVwVGFyZ2V0U2VydmljZS5zZXRUYXJnZXRTdWJqZWN0KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgcmVzZXRDbGFzc2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwO1xuICAgIGNvbnN0IHNvdXJjZSA9IChzdGVwICYmIHN0ZXAub3B0aW9ucykgfHwgdGhpcy50b3VyU2VydmljZS5nZXRTdGVwQnlJbmRleCgpLm9wdGlvbnM7XG4gICAgY29uc3QgeyBhcnJvd1RvVGFyZ2V0LCBhbmltYXRlZFN0ZXAsIHBsYWNlbWVudCwgY2xhc3NOYW1lIH0gPSBzb3VyY2U7XG4gICAgY29uc3QgYXJyb3dDbGFzcyA9IGFycm93VG9UYXJnZXQgPyAnd2l0aC1hcnJvdycgOiAnJztcbiAgICBjb25zdCBhbmltYXRpb25DbGFzcyA9IGFuaW1hdGVkU3RlcFxuICAgICAgPyAoc3RlcCA/ICdhbmltYXRpb24tb24nIDogJ2ZhZGUtb24nKVxuICAgICAgOiAoc3RlcCA/ICcnIDogJ2ZhZGUtb24nKTtcbiAgICB0aGlzLmNsYXNzID0gYCR7YXJyb3dDbGFzc30gJHtjbGFzc05hbWV9IHBvcy0ke3BsYWNlbWVudH0gJHthbmltYXRpb25DbGFzc31gLnRyaW0oKTtcbiAgfVxuICBwcml2YXRlIHNhdmVUYXJnZXQodGFyZ2V0OiBFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnN0ZXBUYXJnZXRTZXJ2aWNlLnJlc2l6ZVRhcmdldChcbiAgICAgIHRoaXMuc3RlcFRhcmdldFNlcnZpY2UuZ2V0U2l6ZUFuZFBvc2l0aW9uKHRhcmdldCksIHRoaXMuY3VycmVudFN0ZXAub3B0aW9ucy5zdGVwVGFyZ2V0UmVzaXplKTtcbiAgICB0aGlzLnRpbWVvdXRzW3RoaXMudGltZW91dHMubGVuZ3RoXSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZWZpbmVTdGVwUGxhY2VtZW50KCksIDApO1xuICB9XG4gIHByaXZhdGUgc2F2ZVN0ZXBEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG4gICAgdGhpcy50YXJnZXRCYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgfVxuICBwcml2YXRlIGRlZmluZVN0ZXBQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG91ci1zdGVwLW1vZGFsJyk7XG4gICAgaWYgKCFtb2RhbCkge1xuICAgICAgdGhpcy50aW1lb3V0c1t0aGlzLnRpbWVvdXRzLmxlbmd0aF0gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVmaW5lU3RlcFBsYWNlbWVudCgpLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RhbFJlY3QgPSBtb2RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLm1vZGFsSGVpZ2h0ID0gTWF0aC5yb3VuZChtb2RhbFJlY3QuaGVpZ2h0ID8gbW9kYWxSZWN0LmhlaWdodCA6IG1vZGFsUmVjdC5ib3R0b20gLSBtb2RhbFJlY3QudG9wKTtcbiAgICBjb25zdCBtb2RhbFdpZHRoID0gTWF0aC5yb3VuZChtb2RhbFJlY3Qud2lkdGggPyBtb2RhbFJlY3Qud2lkdGggOiBtb2RhbFJlY3QucmlnaHQgLSBtb2RhbFJlY3QubGVmdCk7XG4gICAgY29uc3QgeyBwbGFjZW1lbnQsIHNjcm9sbFRvIH0gPSB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnM7XG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSwgd2lkdGgsIGxlZnQsIHJpZ2h0IH0gPSB0aGlzLnRhcmdldDtcbiAgICBpZiAoL15kb3duJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgdG9wOiBib3R0b20gKyAyMCwgbGVmdDogTWF0aC5yb3VuZChsZWZ0IC0gbW9kYWxXaWR0aCAvIDIpIH07XG4gICAgfSBlbHNlIGlmICgvXmNlbnRlci1kb3duJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgdG9wOiBib3R0b20gKyAyMCwgbGVmdDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBtb2RhbFdpZHRoIC8gMikgfTtcbiAgICB9IGVsc2UgaWYgKC9edG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgdG9wOiB0b3AgLSB0aGlzLm1vZGFsSGVpZ2h0IC0gMjAsIGxlZnQ6IE1hdGgucm91bmQobGVmdCAtIG1vZGFsV2lkdGggLyAyKSB9O1xuICAgIH0gZWxzZSBpZiAoL15jZW50ZXItdG9wJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHsgdG9wOiB0b3AgLSB0aGlzLm1vZGFsSGVpZ2h0IC0gMjAsIGxlZnQ6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAyIC0gbW9kYWxXaWR0aCAvIDIpIH07XG4gICAgfSBlbHNlIGlmICgvXmxlZnQkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0geyBsZWZ0OiBsZWZ0IC0gbW9kYWxXaWR0aCAtIDIwLCB0b3AgfTtcbiAgICB9IGVsc2UgaWYgKC9ecmlnaHQkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0geyBsZWZ0OiByaWdodCArIHdpZHRoICsgMjAsIHRvcCB9O1xuICAgIH0gZWxzZSBpZiAoL15sZWZ0LXRvcCQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIGxlZnQ6IGxlZnQgLSBtb2RhbFdpZHRoIC0gMjAsIHRvcDogdG9wIC0gdGhpcy5tb2RhbEhlaWdodCArIDUwXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoL15yaWdodC10b3AkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICBsZWZ0OiByaWdodCArIHdpZHRoICsgMjAsIHRvcDogdG9wIC0gdGhpcy5tb2RhbEhlaWdodCArIDUwXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoL15yaWdodC1jZW50ZXIkL2kudGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB0aGlzLnN0ZXBNb2RhbFBvc2l0aW9uID0ge1xuICAgICAgICByaWdodDogNTAsXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gdGhpcy5tb2RhbEhlaWdodCAvIDIpXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoL15sZWZ0LWNlbnRlciQvaS50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHRoaXMuc3RlcE1vZGFsUG9zaXRpb24gPSB7XG4gICAgICAgIGxlZnQ6IDUwLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHRoaXMubW9kYWxIZWlnaHQgLyAyKVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKC9eY2VudGVyJC9pLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdGhpcy5zdGVwTW9kYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBtb2RhbFdpZHRoIC8gMiksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gdGhpcy5tb2RhbEhlaWdodCAvIDIpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcC5vcHRpb25zLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5zZXRGb2N1cyhtb2RhbCk7XG4gICAgfVxuICAgIGlmIChzY3JvbGxUbykge1xuICAgICAgdGhpcy5zY3JvbGxUbygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Rm9jdXMobW9kYWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnRvdXItYnRuLW5leHQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBlbmRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcudG91ci1idG4tZG9uZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChuZXh0QnRuKSB7XG4gICAgICBuZXh0QnRuLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChlbmRCdG4pIHtcbiAgICAgIGVuZEJ0bi5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHNjcm9sbFRvKCkge1xuICAgIGNvbnN0IHsgcGxhY2VtZW50LCBmaXhlZCB9ID0gdGhpcy5jdXJyZW50U3RlcC5vcHRpb25zO1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRhcmdldC5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHBsYWNlbWVudCAhPT0gJ3RvcCcgPyB0aGlzLnRhcmdldC50b3AgLSAxMDAgOiB0aGlzLnRhcmdldC50b3AgLSB0aGlzLm1vZGFsSGVpZ2h0IC0gNTA7XG4gICAgY29uc3QgYmVoYXZpb3IgPSB0aGlzLmN1cnJlbnRTdGVwLm9wdGlvbnMuc21vb3RoU2Nyb2xsID8gJ3Ntb290aCcgOiAnYXV0byc7XG4gICAgaWYgKCFmaXhlZCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbCh7IHRvcCwgbGVmdCwgYmVoYXZpb3IgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGwoeyB0b3A6IDAsIGxlZnQ6IDAsIGJlaGF2aW9yIH0pO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgb25OZXh0KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMubmV4dC5lbWl0KHtcbiAgICAgIHN0ZXBFdmVudDogJ25leHQnLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFN0ZXAuaW5kZXggKyAxLFxuICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgfSk7XG4gICAgdGhpcy50b3VyU2VydmljZS5uZXh0U3RlcCgpO1xuICB9XG4gIHB1YmxpYyBvblByZXYoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5wcmV2LmVtaXQoe1xuICAgICAgc3RlcEV2ZW50OiAncHJldicsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCAtIDEsXG4gICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKSxcbiAgICB9KTtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnByZXZTdGVwKCk7XG4gIH1cbiAgcHVibGljIG9uQ2xvc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXAuaW5kZXggIT09IHRoaXMuY3VycmVudFN0ZXAudG90YWwgLSAxKSB7XG4gICAgICB0aGlzLmJyZWFrLmVtaXQoe1xuICAgICAgICBzdGVwRXZlbnQ6ICdicmVhaycsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTdGVwLmluZGV4LFxuICAgICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbmUuZW1pdCh7XG4gICAgICAgIHN0ZXBFdmVudDogJ2RvbmUnLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U3RlcC5pbmRleCxcbiAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b3VyU2VydmljZS5zdG9wVG91cigpO1xuICB9XG59XG4iXX0=