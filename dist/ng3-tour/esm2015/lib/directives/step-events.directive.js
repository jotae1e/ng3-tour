/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TourService } from '../services/tour.service';
// @dynamic
export class StepEventsDirective {
    /**
     * @param {?} tourService
     * @param {?} platformId
     */
    constructor(tourService, 
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
    ngOnInit() {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.handler();
    }
    /**
     * @return {?}
     */
    handleNext() {
        return this.handler = (/**
         * @return {?}
         */
        () => {
            this.next.emit({
                tourEvent: 'next',
                index: this.tourService.getLastStep().index + 1,
                history: this.tourService.getHistory()
            });
            this.tourService.nextStep();
        });
    }
    /**
     * @return {?}
     */
    handlePrev() {
        return this.handler = (/**
         * @return {?}
         */
        () => {
            this.prev.emit({
                tourEvent: 'next',
                index: this.tourService.getLastStep().index - 1,
                history: this.tourService.getHistory()
            });
            this.tourService.prevStep();
        });
    }
    /**
     * @return {?}
     */
    handleClose() {
        return this.handler = (/**
         * @return {?}
         */
        () => {
            if (this.tourService.getLastStep().index + 1 === this.tourService.getLastStep().total) {
                this.done.emit({
                    tourEvent: 'done',
                    index: this.tourService.getLastStep().index,
                    history: this.tourService.getHistory()
                });
            }
            else {
                this.break.emit({
                    tourEvent: 'break',
                    index: this.tourService.getLastStep().index,
                    history: this.tourService.getHistory()
                });
            }
            this.tourService.stopTour();
        });
    }
}
StepEventsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[stepEvent]',
            },] }
];
/** @nocollapse */
StepEventsDirective.ctorParameters = () => [
    { type: TourService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
StepEventsDirective.propDecorators = {
    eventType: [{ type: Input, args: ['stepEvent',] }],
    next: [{ type: Output }],
    prev: [{ type: Output }],
    done: [{ type: Output }],
    break: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1ldmVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmczLXRvdXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zdGVwLWV2ZW50cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUtyRCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQVM1QixZQUNxQixXQUF3QjtJQUN6QyxXQUFXO0lBQ1UsVUFBYztRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5uQyxTQUFJLEdBQTRDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7O0lBQ2tDLE9BQU8sQ0FBQyxLQUFZO1FBQ25ELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU87OztRQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDWCxTQUFTLEVBQUUsTUFBTTtnQkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTthQUN6QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQSxDQUFDO0lBQ04sQ0FBQzs7OztJQUNELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPOzs7UUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDekMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUEsQ0FBQztJQUNOLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTzs7O1FBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDWCxTQUFTLEVBQUUsTUFBTTtvQkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSztvQkFDM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUN6QyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixTQUFTLEVBQUUsT0FBTztvQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSztvQkFDM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUN6QyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUM7SUFDTixDQUFDOzs7WUF4RUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7O1lBSk8sV0FBVzs0Q0FpQlYsTUFBTSxTQUFDLFdBQVc7Ozt3QkFYdEIsS0FBSyxTQUFDLFdBQVc7bUJBR2pCLE1BQU07bUJBQ04sTUFBTTttQkFDTixNQUFNO29CQUNOLE1BQU07c0JBc0JOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE1QmpDLHdDQUFzQzs7SUFDdEMsd0NBQW1COztJQUVuQixtQ0FBNkU7O0lBQzdFLG1DQUF1RDs7SUFDdkQsbUNBQXVEOztJQUN2RCxvQ0FBd0Q7O0lBQ3hELHNDQUFvQjs7Ozs7SUFFaEIsMENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPbkluaXQsXG4gICAgSW5qZWN0LFxuICAgIFBMQVRGT1JNX0lELFxuICAgIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7VG91clNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3RvdXIuc2VydmljZSc7XG4vLyBAZHluYW1pY1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc3RlcEV2ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBFdmVudHNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgnc3RlcEV2ZW50JykgZXZlbnRUeXBlOiBzdHJpbmc7IC8vIHBvc3NpYmxlIHZhbHVlcyAnbmV4dCcsICdwcmV2JywgJ2Nsb3NlJ1xuICAgIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKSBuZXh0OiBFdmVudEVtaXR0ZXI8e1twcm9wTmFtZTogc3RyaW5nXTogYW55fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHByZXY6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYnJlYWs6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGhhbmRsZXI6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlLFxuICAgICAgICAvLyBAZHluYW1pY1xuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiB7fSkge1xuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByZXYoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ldmVudFR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcigpO1xuICAgIH1cbiAgICBoYW5kbGVOZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0LmVtaXQoe1xuICAgICAgICAgICAgICAgIHRvdXJFdmVudDogJ25leHQnLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnRvdXJTZXJ2aWNlLmdldExhc3RTdGVwKCkuaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudG91clNlcnZpY2UubmV4dFN0ZXAoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlUHJldigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldi5lbWl0KHtcbiAgICAgICAgICAgICAgICB0b3VyRXZlbnQ6ICduZXh0JyxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy50b3VyU2VydmljZS5nZXRMYXN0U3RlcCgpLmluZGV4IC0gMSxcbiAgICAgICAgICAgICAgICBoaXN0b3J5OiB0aGlzLnRvdXJTZXJ2aWNlLmdldEhpc3RvcnkoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLnByZXZTdGVwKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGhhbmRsZUNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS5pbmRleCArIDEgPT09IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS50b3RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9uZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgdG91ckV2ZW50OiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnRvdXJTZXJ2aWNlLmdldExhc3RTdGVwKCkuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHRoaXMudG91clNlcnZpY2UuZ2V0SGlzdG9yeSgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHRvdXJFdmVudDogJ2JyZWFrJyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudG91clNlcnZpY2UuZ2V0TGFzdFN0ZXAoKS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeTogdGhpcy50b3VyU2VydmljZS5nZXRIaXN0b3J5KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG91clNlcnZpY2Uuc3RvcFRvdXIoKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=