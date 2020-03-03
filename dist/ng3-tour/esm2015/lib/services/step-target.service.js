/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 */
export function StepSizeI() { }
if (false) {
    /** @type {?} */
    StepSizeI.prototype.top;
    /** @type {?} */
    StepSizeI.prototype.left;
    /** @type {?} */
    StepSizeI.prototype.bottom;
    /** @type {?} */
    StepSizeI.prototype.right;
    /** @type {?|undefined} */
    StepSizeI.prototype.height;
    /** @type {?|undefined} */
    StepSizeI.prototype.width;
    /** @type {?} */
    StepSizeI.prototype.pageHeight;
}
export class StepTargetService {
    constructor() {
        this.targetExist$ = new BehaviorSubject(null);
    }
    /**
     * @private
     * @return {?}
     */
    maxHeight() {
        return Math.round(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight, window.innerHeight));
    }
    /**
     * @param {?} el
     * @return {?}
     */
    getSizeAndPosition(el) {
        /** @type {?} */
        const targetRect = el.getBoundingClientRect();
        /** @type {?} */
        const bodyRect = document.body.getBoundingClientRect();
        /** @type {?} */
        const top = Math.round(targetRect.top - bodyRect.top);
        /** @type {?} */
        const left = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        const bottom = Math.round(targetRect.bottom - bodyRect.top);
        /** @type {?} */
        const right = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        const height = Math.round(targetRect.height || bottom - top);
        /** @type {?} */
        const width = Math.round(targetRect.width || right - left);
        /** @type {?} */
        const pageHeight = this.maxHeight();
        return { top, left, bottom, right, width, height, pageHeight };
    }
    /**
     * @param {?} target
     * @param {?} size
     * @return {?}
     */
    resizeTarget(target, size) {
        target.left -= size[0];
        target.right += size[0];
        target.top -= size[1] || size[0];
        target.bottom += size[1] || size[0];
        target.width += 2 * size[0];
        target.height += 2 * (size[1] || size[0]);
        return target;
    }
    /**
     * @return {?}
     */
    getTargetSubject() {
        return this.targetExist$;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTargetSubject(value) {
        this.targetExist$.next(value);
    }
}
StepTargetService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StepTargetService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    StepTargetService.prototype.targetExist$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC10YXJnZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRCwrQkFRQzs7O0lBUEMsd0JBQVk7O0lBQ1oseUJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsMEJBQWM7O0lBQ2QsMkJBQWdCOztJQUNoQiwwQkFBZTs7SUFDZiwrQkFBbUI7O0FBSXJCLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUI7UUFEQSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFzQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUNULFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQzFCLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFDMUIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUMxQixRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFDckMsTUFBTSxDQUFDLFdBQVcsQ0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDTSxrQkFBa0IsQ0FBQyxFQUFXOztjQUM3QixVQUFVLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztjQUN2QyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDOztjQUMvQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O2NBQ2xELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Y0FDckQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztjQUNuRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7O2NBQ3RELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7Y0FDcEQsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVNLFlBQVksQ0FBQyxNQUFpQixFQUFFLElBQWM7UUFDbkQsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDTSxnQkFBZ0IsQ0FBQyxLQUEwQztRQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUEzQ0YsVUFBVTs7Ozs7O0lBRVQseUNBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBTaXplSSB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBwYWdlSGVpZ2h0OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwVGFyZ2V0U2VydmljZSB7XG4gIHRhcmdldEV4aXN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e3N0ZXBOYW1lOiBzdHJpbmcsIHRhcmdldDogRWxlbWVudH0+KG51bGwpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBwcml2YXRlIG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICkpO1xuICB9XG4gIHB1YmxpYyBnZXRTaXplQW5kUG9zaXRpb24oZWw6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQodGFyZ2V0UmVjdC50b3AgLSBib2R5UmVjdC50b3ApO1xuICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKHRhcmdldFJlY3QubGVmdCAtIGJvZHlSZWN0LmxlZnQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgucm91bmQodGFyZ2V0UmVjdC5ib3R0b20gLSBib2R5UmVjdC50b3ApO1xuICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5yb3VuZCh0YXJnZXRSZWN0LmxlZnQgLSBib2R5UmVjdC5sZWZ0KTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLnJvdW5kKHRhcmdldFJlY3QuaGVpZ2h0IHx8IGJvdHRvbSAtIHRvcCk7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLnJvdW5kKHRhcmdldFJlY3Qud2lkdGggfHwgcmlnaHQgLSBsZWZ0KTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQoKTtcbiAgICByZXR1cm4ge3RvcCwgbGVmdCwgYm90dG9tLCByaWdodCwgd2lkdGgsIGhlaWdodCwgcGFnZUhlaWdodH07XG4gIH1cblxuICBwdWJsaWMgcmVzaXplVGFyZ2V0KHRhcmdldDogU3RlcFNpemVJLCBzaXplOiBudW1iZXJbXSk6IFN0ZXBTaXplSSB7XG4gICAgdGFyZ2V0LmxlZnQgLT0gc2l6ZVswXTtcbiAgICB0YXJnZXQucmlnaHQgKz0gc2l6ZVswXTtcbiAgICB0YXJnZXQudG9wIC09IHNpemVbMV0gfHwgc2l6ZVswXTtcbiAgICB0YXJnZXQuYm90dG9tICs9IHNpemVbMV0gfHwgc2l6ZVswXTtcbiAgICB0YXJnZXQud2lkdGggKz0gMiAqIHNpemVbMF07XG4gICAgdGFyZ2V0LmhlaWdodCArPSAyICogKHNpemVbMV0gfHwgc2l6ZVswXSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYXJnZXRTdWJqZWN0KCk6IE9ic2VydmFibGU8e3N0ZXBOYW1lOiBzdHJpbmcsIHRhcmdldDogRWxlbWVudH0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldEV4aXN0JDtcbiAgfVxuICBwdWJsaWMgc2V0VGFyZ2V0U3ViamVjdCh2YWx1ZToge3N0ZXBOYW1lOiBzdHJpbmcsIHRhcmdldDogRWxlbWVudH0pOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldEV4aXN0JC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19