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
var StepTargetService = /** @class */ (function () {
    function StepTargetService() {
        this.targetExist$ = new BehaviorSubject(null);
    }
    /**
     * @private
     * @return {?}
     */
    StepTargetService.prototype.maxHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.round(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight, window.innerHeight));
    };
    /**
     * @param {?} el
     * @return {?}
     */
    StepTargetService.prototype.getSizeAndPosition = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var targetRect = el.getBoundingClientRect();
        /** @type {?} */
        var bodyRect = document.body.getBoundingClientRect();
        /** @type {?} */
        var top = Math.round(targetRect.top - bodyRect.top);
        /** @type {?} */
        var left = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        var bottom = Math.round(targetRect.bottom - bodyRect.top);
        /** @type {?} */
        var right = Math.round(targetRect.left - bodyRect.left);
        /** @type {?} */
        var height = Math.round(targetRect.height || bottom - top);
        /** @type {?} */
        var width = Math.round(targetRect.width || right - left);
        /** @type {?} */
        var pageHeight = this.maxHeight();
        return { top: top, left: left, bottom: bottom, right: right, width: width, height: height, pageHeight: pageHeight };
    };
    /**
     * @param {?} target
     * @param {?} size
     * @return {?}
     */
    StepTargetService.prototype.resizeTarget = /**
     * @param {?} target
     * @param {?} size
     * @return {?}
     */
    function (target, size) {
        target.left -= size[0];
        target.right += size[0];
        target.top -= size[1] || size[0];
        target.bottom += size[1] || size[0];
        target.width += 2 * size[0];
        target.height += 2 * (size[1] || size[0]);
        return target;
    };
    /**
     * @return {?}
     */
    StepTargetService.prototype.getTargetSubject = /**
     * @return {?}
     */
    function () {
        return this.targetExist$;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StepTargetService.prototype.setTargetSubject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.targetExist$.next(value);
    };
    StepTargetService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StepTargetService.ctorParameters = function () { return []; };
    return StepTargetService;
}());
export { StepTargetService };
if (false) {
    /** @type {?} */
    StepTargetService.prototype.targetExist$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC10YXJnZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMy10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0ZXAtdGFyZ2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRCwrQkFRQzs7O0lBUEMsd0JBQVk7O0lBQ1oseUJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsMEJBQWM7O0lBQ2QsMkJBQWdCOztJQUNoQiwwQkFBZTs7SUFDZiwrQkFBbUI7O0FBR3JCO0lBR0U7UUFEQSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFzQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUNULHFDQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUMxQixRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQzFCLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFDMUIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBQ00sOENBQWtCOzs7O0lBQXpCLFVBQTBCLEVBQVc7O1lBQzdCLFVBQVUsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7O1lBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztZQUNoRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7O1lBQy9DLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFDbEQsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDOztZQUNyRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ25ELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQzs7WUFDdEQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztZQUNwRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNuQyxPQUFPLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFTSx3Q0FBWTs7Ozs7SUFBbkIsVUFBb0IsTUFBaUIsRUFBRSxJQUFjO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSw0Q0FBZ0I7OztJQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7OztJQUNNLDRDQUFnQjs7OztJQUF2QixVQUF3QixLQUEwQztRQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkEzQ0YsVUFBVTs7OztJQTRDWCx3QkFBQztDQUFBLEFBNUNELElBNENDO1NBM0NZLGlCQUFpQjs7O0lBQzVCLHlDQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGVwU2l6ZUkge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgcGFnZUhlaWdodDogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RlcFRhcmdldFNlcnZpY2Uge1xuICB0YXJnZXRFeGlzdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtzdGVwTmFtZTogc3RyaW5nLCB0YXJnZXQ6IEVsZW1lbnR9PihudWxsKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgcHJpdmF0ZSBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICApKTtcbiAgfVxuICBwdWJsaWMgZ2V0U2l6ZUFuZFBvc2l0aW9uKGVsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKHRhcmdldFJlY3QudG9wIC0gYm9keVJlY3QudG9wKTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZCh0YXJnZXRSZWN0LmxlZnQgLSBib2R5UmVjdC5sZWZ0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLnJvdW5kKHRhcmdldFJlY3QuYm90dG9tIC0gYm9keVJlY3QudG9wKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgucm91bmQodGFyZ2V0UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5yb3VuZCh0YXJnZXRSZWN0LmhlaWdodCB8fCBib3R0b20gLSB0b3ApO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5yb3VuZCh0YXJnZXRSZWN0LndpZHRoIHx8IHJpZ2h0IC0gbGVmdCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMubWF4SGVpZ2h0KCk7XG4gICAgcmV0dXJuIHt0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQsIHdpZHRoLCBoZWlnaHQsIHBhZ2VIZWlnaHR9O1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IFN0ZXBTaXplSSwgc2l6ZTogbnVtYmVyW10pOiBTdGVwU2l6ZUkge1xuICAgIHRhcmdldC5sZWZ0IC09IHNpemVbMF07XG4gICAgdGFyZ2V0LnJpZ2h0ICs9IHNpemVbMF07XG4gICAgdGFyZ2V0LnRvcCAtPSBzaXplWzFdIHx8IHNpemVbMF07XG4gICAgdGFyZ2V0LmJvdHRvbSArPSBzaXplWzFdIHx8IHNpemVbMF07XG4gICAgdGFyZ2V0LndpZHRoICs9IDIgKiBzaXplWzBdO1xuICAgIHRhcmdldC5oZWlnaHQgKz0gMiAqIChzaXplWzFdIHx8IHNpemVbMF0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFyZ2V0U3ViamVjdCgpOiBPYnNlcnZhYmxlPHtzdGVwTmFtZTogc3RyaW5nLCB0YXJnZXQ6IEVsZW1lbnR9PiB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXRFeGlzdCQ7XG4gIH1cbiAgcHVibGljIHNldFRhcmdldFN1YmplY3QodmFsdWU6IHtzdGVwTmFtZTogc3RyaW5nLCB0YXJnZXQ6IEVsZW1lbnR9KTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXRFeGlzdCQubmV4dCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==