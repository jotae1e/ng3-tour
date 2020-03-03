/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TourService } from '../services/tour.service';
// @dynamic
var StepEventsDirective = /** @class */ (function () {
    function StepEventsDirective(tourService, 
    // @dynamic
    platformId) {
        this.tourService = tourService;
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
        this.done = new EventEmitter();
        this.break = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.isBrowser) {
            return;
        }
        if (this.eventType === 'next') {
            this.handleNext();
        }
        if (this.eventType === 'prev') {
            this.handlePrev();
        }
        if (this.eventType === 'close') {
            this.handleClose();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StepEventsDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handler();
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handleNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            _this.next.emit({
                tourEvent: 'next',
                index: _this.tourService.getLastStep().index + 1,
                history: _this.tourService.getHistory()
            });
            _this.tourService.nextStep();
        });
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handlePrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            _this.prev.emit({
                tourEvent: 'next',
                index: _this.tourService.getLastStep().index - 1,
                history: _this.tourService.getHistory()
            });
            _this.tourService.prevStep();
        });
    };
    /**
     * @return {?}
     */
    StepEventsDirective.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.handler = (/**
         * @return {?}
         */
        function () {
            if (_this.tourService.getLastStep().index + 1 === _this.tourService.getLastStep().total) {
                _this.done.emit({
                    tourEvent: 'done',
                    index: _this.tourService.getLastStep().index,
                    history: _this.tourService.getHistory()
                });
            }
            else {
                _this.break.emit({
                    tourEvent: 'break',
                    index: _this.tourService.getLastStep().index,
                    history: _this.tourService.getHistory()
                });
            }
            _this.tourService.stopTour();
        });
    };
    StepEventsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[stepEvent]',
                },] }
    ];
    /** @nocollapse */
    StepEventsDirective.ctorParameters = function () { return [
        { type: TourService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    StepEventsDirective.propDecorators = {
        eventType: [{ type: Input, args: ['stepEvent',] }],
        next: [{ type: Output }],
        prev: [{ type: Output }],
        done: [{ type: Output }],
        break: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return StepEventsDirective;
}());
export { StepEventsDirective };
if (false) {
    /** @type {?} */
    StepEventsDirective.prototype.eventType;
    /** @type {?} */
    StepEventsDirective.prototype.isBrowser;
    /** @type {?} */
    StepEventsDirective.prototype.next;
    /** @type {?} */
    StepEventsDirective.prototype.prev;
    /** @type {?} */
    StepEventsDirective.prototype.done;
    /** @type {?} */
    StepEventsDirective.prototype.break;
    /** @type {?} */
    StepEventsDirective.prototype.handler;
    /**
     * @type {?}
     * @private
     */
    StepEventsDirective.prototype.tourService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1ldmVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zdGVwLWV2ZW50cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUVyRDtJQVlJLDZCQUNxQixXQUF3QjtJQUN6QyxXQUFXO0lBQ1UsVUFBYztRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5uQyxTQUFJLEdBQTRDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0Qsc0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7SUFDa0MscUNBQU87Ozs7SUFBMUMsVUFBMkMsS0FBWTtRQUNuRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUNELHdDQUFVOzs7SUFBVjtRQUFBLGlCQVNDO1FBUkcsT0FBTyxJQUFJLENBQUMsT0FBTzs7O1FBQUc7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEtBQUssRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDekMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUEsQ0FBQztJQUNOLENBQUM7Ozs7SUFDRCx3Q0FBVTs7O0lBQVY7UUFBQSxpQkFTQztRQVJHLE9BQU8sSUFBSSxDQUFDLE9BQU87OztRQUFHO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixLQUFLLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFDL0MsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2FBQ3pDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDTixDQUFDOzs7O0lBQ0QseUNBQVc7OztJQUFYO1FBQUEsaUJBaUJDO1FBaEJHLE9BQU8sSUFBSSxDQUFDLE9BQU87OztRQUFHO1lBQ2xCLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUNuRixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDWCxTQUFTLEVBQUUsTUFBTTtvQkFDakIsS0FBSyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSztvQkFDM0MsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUN6QyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixTQUFTLEVBQUUsT0FBTztvQkFDbEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSztvQkFDM0MsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUN6QyxDQUFDLENBQUM7YUFDTjtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDTixDQUFDOztnQkF4RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFKTyxXQUFXO2dEQWlCVixNQUFNLFNBQUMsV0FBVzs7OzRCQVh0QixLQUFLLFNBQUMsV0FBVzt1QkFHakIsTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFzQk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF5Q3JDLDBCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0F0RVksbUJBQW1COzs7SUFDNUIsd0NBQXNDOztJQUN0Qyx3Q0FBbUI7O0lBRW5CLG1DQUE2RTs7SUFDN0UsbUNBQXVEOztJQUN2RCxtQ0FBdUQ7O0lBQ3ZELG9DQUF3RDs7SUFDeEQsc0NBQW9COzs7OztJQUVoQiwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE9uSW5pdCxcbiAgICBJbmplY3QsXG4gICAgUExBVEZPUk1fSUQsXG4gICAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtUb3VyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcbi8vIEBkeW5hbWljXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzdGVwRXZlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcEV2ZW50c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCdzdGVwRXZlbnQnKSBldmVudFR5cGU6IHN0cmluZzsgLy8gcG9zc2libGUgdmFsdWVzICduZXh0JywgJ3ByZXYnLCAnY2xvc2UnXG4gICAgaXNCcm93c2VyOiBib29sZWFuO1xuXG4gICAgQE91dHB1dCgpIG5leHQ6IEV2ZW50RW1pdHRlcjx7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHJldjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRvbmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBicmVhazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgaGFuZGxlcjogKCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0b3VyU2VydmljZTogVG91clNlcnZpY2UsXG4gICAgICAgIC8vIEBkeW5hbWljXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHt9KSB7XG4gICAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSAncHJldicpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJldigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyKCk7XG4gICAgfVxuICAgIGhhbmRsZU5leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQuZW1pdCh7XG4gICAgICAgICAgICAgICAgdG91ckV2ZW50OiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS5pbmRleCArIDEsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50b3VyU2VydmljZS5uZXh0U3RlcCgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVQcmV2KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2LmVtaXQoe1xuICAgICAgICAgICAgICAgIHRvdXJFdmVudDogJ25leHQnLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnRvdXJTZXJ2aWNlLmdldExhc3RTdGVwKCkuaW5kZXggLSAxLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudG91clNlcnZpY2UucHJldlN0ZXAoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRMYXN0U3RlcCgpLmluZGV4ICsgMSA9PT0gdGhpcy50b3VyU2VydmljZS5nZXRMYXN0U3RlcCgpLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb25lLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB0b3VyRXZlbnQ6ICdkb25lJyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgdG91ckV2ZW50OiAnYnJlYWsnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy50b3VyU2VydmljZS5nZXRMYXN0U3RlcCgpLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3VyU2VydmljZS5zdG9wVG91cigpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==