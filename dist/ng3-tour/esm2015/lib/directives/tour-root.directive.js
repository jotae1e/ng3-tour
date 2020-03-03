/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, PLATFORM_ID, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { StepTargetService } from '../services/step-target.service';
import { TourStepComponent } from '../components/tour-step.component';
import { TourService } from '../services/tour.service';
// @dynamic
export class TourRootDirective {
    /**
     * @param {?} elem
     * @param {?} tourService
     * @param {?} targetService
     * @param {?} viewContainer
     * @param {?} componentFactory
     * @param {?} platformId
     */
    constructor(elem, tourService, targetService, viewContainer, componentFactory, 
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
    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }
        /** @type {?} */
        const parent = this.elem.nativeElement.parentNode;
        /** @type {?} */
        const children = Array.prototype.slice.apply(parent.childNodes);
        if (parent.localName !== 'app-root') {
            console.warn(`You placed ngIfTour directive in ${this.elem.nativeElement.localName} inside ${parent.localName}.
                Are you sure ${parent.localName} better choice then app-root?`);
        }
        /** @type {?} */
        const isTourTemplate = children.filter((/**
         * @param {?} c
         * @return {?}
         */
        (c) => c.localName === 'ng-tour-step-template')).length;
        /** @type {?} */
        let componentRef;
        if (isTourTemplate) {
            this.tourService.setPresets({ customTemplate: true });
        }
        else {
            this.targetService.getTargetSubject().pipe(takeUntil(this.onDestroy), map((/**
             * @param {?} step
             * @return {?}
             */
            (step) => {
                if (step && !this.isCreated) {
                    this.isCreated = true;
                    componentRef = this.viewContainer.createComponent(this.modalFactory);
                }
                else if (!step && this.isCreated) {
                    this.isCreated = false;
                    this.viewContainer.remove(this.viewContainer.indexOf(componentRef));
                }
                return step;
            }))).subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy.next();
    }
}
TourRootDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngIfTour]',
            },] }
];
/** @nocollapse */
TourRootDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TourService },
    { type: StepTargetService },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1yb290LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG91ci1yb290LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxNQUFNLEVBQ04sV0FBVyxFQUVYLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBRTNCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBTXJELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7OztJQU8xQixZQUNZLElBQWdCLEVBQ1AsV0FBd0IsRUFDeEIsYUFBZ0MsRUFDekMsYUFBK0IsRUFDL0IsZ0JBQTBDO0lBQ2xELFdBQVc7SUFDVSxVQUFjO1FBTjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDUCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFYdEQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDTixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQWE1QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUNELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7O2NBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVU7O2NBQzNDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMvRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsV0FBVyxNQUFNLENBQUMsU0FBUzsrQkFDMUYsTUFBTSxDQUFDLFNBQVMsK0JBQStCLENBQUMsQ0FBQztTQUN2RTs7Y0FDSyxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsRUFBQyxDQUFDLE1BQU07O1lBQ2xHLFlBQWlCO1FBQ3JCLElBQUksY0FBYyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQ3pCLEdBQUc7Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNkLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3hFO3FCQUFNLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBcERKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTthQUN6Qjs7OztZQWhCRyxVQUFVO1lBV04sV0FBVztZQUZYLGlCQUFpQjtZQVJyQixnQkFBZ0I7WUFDaEIsd0JBQXdCOzRDQTZCbkIsTUFBTSxTQUFDLFdBQVc7Ozs7SUFidkIsMkNBQXVCOzs7OztJQUN2QixzQ0FBZ0Q7O0lBQ2hELHVDQUFvQjs7SUFDcEIsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLHlDQUFrRDs7Ozs7SUFFOUMsaUNBQXdCOzs7OztJQUN4Qix3Q0FBeUM7Ozs7O0lBQ3pDLDBDQUFpRDs7Ozs7SUFDakQsMENBQXVDOzs7OztJQUN2Qyw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBPbkluaXQsXG4gICAgSW5qZWN0LFxuICAgIFBMQVRGT1JNX0lELFxuICAgIE9uRGVzdHJveSxcbiAgICBFbGVtZW50UmVmLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIENvbXBvbmVudEZhY3Rvcnlcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtTdGVwVGFyZ2V0U2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvc3RlcC10YXJnZXQuc2VydmljZSc7XG5pbXBvcnQge1RvdXJTdGVwQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL3RvdXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3VyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuIC8vIEBkeW5hbWljXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ0lmVG91cl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyUm9vdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjdXN0b21UZW1wbGF0ZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIGlzRW1iZWRkZWQ6IGJvb2xlYW47XG4gICAgaXNDcmVhdGVkOiBib29sZWFuO1xuICAgIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgICBtb2RhbEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VG91clN0ZXBDb21wb25lbnQ+O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldFNlcnZpY2U6IFN0ZXBUYXJnZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAvLyBAZHluYW1pY1xuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiB7fSkge1xuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgICAgICB0aGlzLm1vZGFsRmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeS5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUb3VyU3RlcENvbXBvbmVudCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkocGFyZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICBpZiAocGFyZW50LmxvY2FsTmFtZSAhPT0gJ2FwcC1yb290Jykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBZb3UgcGxhY2VkIG5nSWZUb3VyIGRpcmVjdGl2ZSBpbiAke3RoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmxvY2FsTmFtZX0gaW5zaWRlICR7cGFyZW50LmxvY2FsTmFtZX0uXG4gICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlICR7cGFyZW50LmxvY2FsTmFtZX0gYmV0dGVyIGNob2ljZSB0aGVuIGFwcC1yb290P2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVG91clRlbXBsYXRlID0gY2hpbGRyZW4uZmlsdGVyKChjOiBFbGVtZW50KSA9PiBjLmxvY2FsTmFtZSA9PT0gJ25nLXRvdXItc3RlcC10ZW1wbGF0ZScpLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvbXBvbmVudFJlZjogYW55O1xuICAgICAgICBpZiAoaXNUb3VyVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudG91clNlcnZpY2Uuc2V0UHJlc2V0cyh7Y3VzdG9tVGVtcGxhdGU6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2VydmljZS5nZXRUYXJnZXRTdWJqZWN0KCkucGlwZShcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm9uRGVzdHJveSksXG4gICAgICAgICAgICBtYXAoKHN0ZXA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGVwICYmICF0aGlzLmlzQ3JlYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQodGhpcy5tb2RhbEZhY3RvcnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0ZXAgJiYgdGhpcy5pc0NyZWF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLnJlbW92ZSh0aGlzLnZpZXdDb250YWluZXIuaW5kZXhPZihjb21wb25lbnRSZWYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgICB9KSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95Lm5leHQoKTtcbiAgICB9XG59XG4iXX0=