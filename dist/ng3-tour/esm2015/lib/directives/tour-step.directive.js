/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { StepTargetService } from '../services/step-target.service';
import { TourService } from '../services/tour.service';
// @dynamic
export class TourStepDirective {
    /**
     * @param {?} elemRef
     * @param {?} tour
     * @param {?} stepTarget
     * @param {?} platformId
     */
    constructor(elemRef, tour, stepTarget, 
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
    ngAfterViewInit() {
        if (!this.isBrowser) {
            return;
        }
        this.tour.getStepsStream().pipe(takeUntil(this.onDestroy), map((/**
         * @param {?} stepName
         * @return {?}
         */
        (stepName) => {
            if (!stepName || this.name !== stepName) {
                return stepName;
            }
            else {
                /** @type {?} */
                const target = this.elemRef.nativeElement;
                /** @type {?} */
                const delay = this.tour.isRouteChanged()
                    ? this.tour.getStepByName(stepName).options.delay
                    : 0;
                this.timeout = setTimeout((/**
                 * @return {?}
                 */
                () => this.stepTarget.setTargetSubject({ target, stepName })), delay);
                return stepName;
            }
        }))).subscribe();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy.next();
        clearTimeout(this.timeout);
    }
}
TourStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTourStep]'
            },] }
];
/** @nocollapse */
TourStepDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TourService },
    { type: StepTargetService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TourStepDirective.propDecorators = {
    name: [{ type: Input, args: ['ngTourStep',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG91ci1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBNEIsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBZSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBTXJELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFNNUIsWUFDVSxPQUFtQixFQUNWLElBQWlCLEVBQ2pCLFVBQTZCO0lBQzlDLFdBQVc7SUFDVSxVQUFjO1FBSjNCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDVixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBUC9CLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBVTVDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDekIsR0FBRzs7OztRQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZDLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNOztzQkFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhOztzQkFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUs7b0JBQ2pELENBQUMsQ0FBQyxDQUFDO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsR0FBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0YsT0FBTyxRQUFRLENBQUM7YUFDakI7UUFDSCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFYeUUsVUFBVTtZQU01RSxXQUFXO1lBRFgsaUJBQWlCOzRDQWtCcEIsTUFBTSxTQUFDLFdBQVc7OzttQkFWcEIsS0FBSyxTQUFDLFlBQVk7Ozs7SUFBbkIsaUNBQWtDOzs7OztJQUNsQyxzQ0FBZ0Q7O0lBQ2hELHlDQUEyQjs7SUFDM0Isc0NBQW1COztJQUNuQixvQ0FBYTs7Ozs7SUFFWCxvQ0FBMkI7Ozs7O0lBQzNCLGlDQUFrQzs7Ozs7SUFDbEMsdUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSW5qZWN0LCBQTEFURk9STV9JRCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7U3RlcFRhcmdldFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UnO1xuaW1wb3J0IHtUb3VyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ1RvdXJTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgVG91clN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ25nVG91clN0ZXAnKSBuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgaXNCcm93c2VyOiBib29sZWFuO1xuICB0aW1lb3V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdXI6IFRvdXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RlcFRhcmdldDogU3RlcFRhcmdldFNlcnZpY2UsXG4gICAgLy8gQGR5bmFtaWNcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiB7fSkge1xuICAgICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG91ci5nZXRTdGVwc1N0cmVhbSgpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kpLFxuICAgICAgbWFwKChzdGVwTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghc3RlcE5hbWUgfHwgdGhpcy5uYW1lICE9PSBzdGVwTmFtZSkge1xuICAgICAgICAgIHJldHVybiBzdGVwTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMudG91ci5pc1JvdXRlQ2hhbmdlZCgpXG4gICAgICAgICAgICA/IHRoaXMudG91ci5nZXRTdGVwQnlOYW1lKHN0ZXBOYW1lKS5vcHRpb25zLmRlbGF5XG4gICAgICAgICAgICA6IDA7XG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnN0ZXBUYXJnZXQuc2V0VGFyZ2V0U3ViamVjdCh7dGFyZ2V0LCBzdGVwTmFtZX0pLCBkZWxheSk7XG4gICAgICAgICAgcmV0dXJuIHN0ZXBOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKSkuc3Vic2NyaWJlKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCgpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG59XG4iXX0=