/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { TourStepBackComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLWJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b3VyLXN0ZXAtYmFjay90b3VyLXN0ZXAtYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXhEO0lBWUU7SUFBZ0IsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsK3dDQUE4Qzs7aUJBRS9DOzs7Ozs2QkFFRSxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7O0lBTVIsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHFCQUFxQjs7O0lBQ2hDLDJDQUE0Qjs7SUFDNUIsNkNBQWlEOztJQUNqRCx5Q0FBMEI7O0lBQzFCLHdDQUF5Qjs7SUFDekIsaURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctdG91ci1zdGVwLWJhY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vdG91ci1zdGVwLWJhY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3VyLXN0ZXAtYmFjay5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcEJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aGVtZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBCYWNrU2l6ZToge1twcm9wTmFtZTogc3RyaW5nXTogYW55fTtcbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZztcbiAgQElucHV0KCkgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKSB0YXJnZXRCYWNrZ3JvdW5kOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19