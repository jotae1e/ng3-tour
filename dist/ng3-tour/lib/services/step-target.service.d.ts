import { BehaviorSubject, Observable } from 'rxjs';
export interface StepSizeI {
    top: number;
    left: number;
    bottom: number;
    right: number;
    height?: number;
    width?: number;
    pageHeight: number;
}
export declare class StepTargetService {
    targetExist$: BehaviorSubject<{
        stepName: string;
        target: Element;
    }>;
    constructor();
    private maxHeight;
    getSizeAndPosition(el: Element): {
        top: number;
        left: number;
        bottom: number;
        right: number;
        width: number;
        height: number;
        pageHeight: number;
    };
    resizeTarget(target: StepSizeI, size: number[]): StepSizeI;
    getTargetSubject(): Observable<{
        stepName: string;
        target: Element;
    }>;
    setTargetSubject(value: {
        stepName: string;
        target: Element;
    }): void;
}
