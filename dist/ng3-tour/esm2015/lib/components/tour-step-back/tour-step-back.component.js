/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TourStepBackComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TourStepBackComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-tour-step-back',
                template: "<div\n    class=\"tour-step-backdrop\"\n    [style.height.px]=\"stepBackSize.pageHeight\"\n    [style.position]=\"position\"\n    [style.opacity]=\"opacity\"\n>\n  <div class=\"tour-step-backdrop__container\" >\n    <div \n      class=\"tour-step-backdrop__top\"\n      [style.height.px]=\"stepBackSize.top\"\n      [style.background]=\"themeColor\"\n    ></div>\n    <div \n      class=\"tour-step-backdrop__middle\"\n      [style.height.px]=\"stepBackSize.height\"\n    >\n      <div \n        class=\"tour-step-backdrop__left\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.width.px]=\"stepBackSize.left\"\n        [style.background]=\"themeColor\"\n      ></div>\n      <div\n        class=\"target-window\"\n        [style.width.px]=\"stepBackSize.width\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.background]=\"targetBackground\"\n      >\n      </div>\n      <div\n        class=\"tour-step-backdrop__right\"\n        [style.height.px]=\"stepBackSize.height\"\n        [style.background]=\"themeColor\"\n      ></div>\n    </div>\n    <div\n      class=\"tour-step-backdrop__bottom\"\n      [style.background]=\"themeColor\"\n      [style.height.px]=\"stepBackSize.pageHeight-stepBackSize.bottom\"\n    ></div>\n  </div>\n</div>\n",
                styles: [".tour-step-backdrop{position:absolute;top:0;left:0;width:100%;z-index:1000}.tour-step-backdrop__container{position:absolute;top:0;left:0;height:100%;width:100%}.tour-step-backdrop__container .tour-step-backdrop__bottom,.tour-step-backdrop__container .tour-step-backdrop__left,.tour-step-backdrop__container .tour-step-backdrop__right,.tour-step-backdrop__container .tour-step-backdrop__top{position:relative}.tour-step-backdrop__container .tour-step-backdrop__top{width:100%}.tour-step-backdrop__container .tour-step-backdrop__middle{width:100%;display:flex;flex-wrap:nowrap}.tour-step-backdrop__container .tour-step-backdrop__middle .tour-step-backdrop__right{width:100%}.tour-step-backdrop__container .tour-step-backdrop__middle .target-window{flex-shrink:0;background:0 0}.tour-step-backdrop__container .tour-step-backdrop__middle .tour-step-backdrop__left{flex-shrink:0}.tour-step-backdrop__container .tour-step-backdrop__bottom{width:100%}"]
            }] }
];
/** @nocollapse */
TourStepBackComponent.ctorParameters = () => [];
TourStepBackComponent.propDecorators = {
    themeColor: [{ type: Input }],
    stepBackSize: [{ type: Input }],
    position: [{ type: Input }],
    opacity: [{ type: Input }],
    targetBackground: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLWJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b3VyLXN0ZXAtYmFjay90b3VyLXN0ZXAtYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3hELE1BQU0sT0FBTyxxQkFBcUI7SUFPaEMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiwrd0NBQThDOzthQUUvQzs7Ozs7eUJBRUUsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7O0lBSk4sMkNBQTRCOztJQUM1Qiw2Q0FBaUQ7O0lBQ2pELHlDQUEwQjs7SUFDMUIsd0NBQXlCOztJQUN6QixpREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy10b3VyLXN0ZXAtYmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3VyLXN0ZXAtYmFjay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvdXItc3RlcC1iYWNrLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwQmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRoZW1lQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc3RlcEJhY2tTaXplOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9O1xuICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpIHRhcmdldEJhY2tncm91bmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=