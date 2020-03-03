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
export class AngularTourModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AngularTourModule,
            providers: [
                StepTargetService,
                TourService
            ]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: AngularTourModule,
            providers: []
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzMtdG91ci8iLCJzb3VyY2VzIjpbImxpYi9uZy10b3VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7O0FBd0J2RSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNQLGlCQUFpQjtnQkFDakIsV0FBVzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7SUFDSixDQUFDOzs7WUFwQ0YsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1RvdXJTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdG91ci1zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQge1RvdXJTdGVwQmFja0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3RvdXItc3RlcC1iYWNrL3RvdXItc3RlcC1iYWNrLmNvbXBvbmVudCc7XG5pbXBvcnQge1RvdXJTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvdG91ci1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RvdXJSb290RGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvdG91ci1yb290LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1N0ZXBUYXJnZXRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UnO1xuaW1wb3J0IHtUb3VyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy90b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdGVwRXZlbnRzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc3RlcC1ldmVudHMuZGlyZWN0aXZlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvdXJTdGVwQmFja0NvbXBvbmVudCxcbiAgICBUb3VyU3RlcENvbXBvbmVudCxcbiAgICBUb3VyU3RlcERpcmVjdGl2ZSxcbiAgICBUb3VyUm9vdERpcmVjdGl2ZSxcbiAgICBTdGVwRXZlbnRzRGlyZWN0aXZlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyU3RlcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVG91clN0ZXBCYWNrQ29tcG9uZW50LFxuICAgIFRvdXJTdGVwQ29tcG9uZW50LFxuICAgIFRvdXJTdGVwRGlyZWN0aXZlLFxuICAgIFRvdXJSb290RGlyZWN0aXZlLFxuICAgIFN0ZXBFdmVudHNEaXJlY3RpdmUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclRvdXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJUb3VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgU3RlcFRhcmdldFNlcnZpY2UsXG4gICAgICAgICAgVG91clNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZ01vZHVsZTogQW5ndWxhclRvdXJNb2R1bGUsXG4gICAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=