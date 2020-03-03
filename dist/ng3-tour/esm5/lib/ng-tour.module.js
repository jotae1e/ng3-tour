/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TourStepComponent } from './components/tour-step.component';
import { TourStepBackComponent } from './components/tour-step-back/tour-step-back.component';
import { TourStepDirective } from './directives/tour-step.directive';
import { TourRootDirective } from './directives/tour-root.directive';
import { StepTargetService } from './services/step-target.service';
import { TourService } from './services/tour.service';
import { StepEventsDirective } from './directives/step-events.directive';
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
export { AngularTourModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzMtdG91ci8iLCJzb3VyY2VzIjpbImxpYi9uZy10b3VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7O0FBR3ZFO0lBQUE7SUFxQ0EsQ0FBQzs7OztJQWZRLHlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLFdBQVc7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBQ00sMEJBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztJQUNKLENBQUM7O2dCQXBDRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQWlCRCx3QkFBQztDQUFBLEFBckNELElBcUNDO1NBaEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtUb3VyU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3RvdXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3VyU3RlcEJhY2tDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy90b3VyLXN0ZXAtYmFjay90b3VyLXN0ZXAtYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3VyU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3RvdXItc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUb3VyUm9vdERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3RvdXItcm9vdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTdGVwVGFyZ2V0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9zdGVwLXRhcmdldC5zZXJ2aWNlJztcbmltcG9ydCB7VG91clNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7U3RlcEV2ZW50c0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3N0ZXAtZXZlbnRzLmRpcmVjdGl2ZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUb3VyU3RlcEJhY2tDb21wb25lbnQsXG4gICAgVG91clN0ZXBDb21wb25lbnQsXG4gICAgVG91clN0ZXBEaXJlY3RpdmUsXG4gICAgVG91clJvb3REaXJlY3RpdmUsXG4gICAgU3RlcEV2ZW50c0RpcmVjdGl2ZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG91clN0ZXBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRvdXJTdGVwQmFja0NvbXBvbmVudCxcbiAgICBUb3VyU3RlcENvbXBvbmVudCxcbiAgICBUb3VyU3RlcERpcmVjdGl2ZSxcbiAgICBUb3VyUm9vdERpcmVjdGl2ZSxcbiAgICBTdGVwRXZlbnRzRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUb3VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbmd1bGFyVG91ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgIFN0ZXBUYXJnZXRTZXJ2aWNlLFxuICAgICAgICAgIFRvdXJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJUb3VyTW9kdWxlLFxuICAgICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19