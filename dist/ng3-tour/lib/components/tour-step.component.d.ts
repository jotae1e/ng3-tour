import { OnInit, EventEmitter, OnDestroy, ElementRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TourService, TourStepI } from '../services/tour.service';
import { StepSizeI, StepTargetService } from '../services/step-target.service';
export interface StepEventsI {
    onNext($event: Event): void;
    onPrev($event: Event): void;
    onClose($event: Event): void;
}
export declare class TourStepComponent implements OnInit, OnDestroy, StepEventsI {
    private readonly tourService;
    private readonly stepTargetService;
    private elem;
    private ref;
    class: string;
    targetElement: Element;
    target: StepSizeI;
    currentStep: TourStepI;
    steps$: Observable<TourStepI>;
    isBrowser: boolean;
    onDestroy: Subject<any>;
    timeouts: any[];
    stepModalPosition: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
    modalHeight: number;
    targetBackground: string;
    next: EventEmitter<any>;
    prev: EventEmitter<any>;
    done: EventEmitter<any>;
    break: EventEmitter<any>;
    constructor(tourService: TourService, stepTargetService: StepTargetService, elem: ElementRef, ref: ViewContainerRef, platformId: {});
    clickOutsideToClose($Event: Event): void;
    onResize(event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private subscribeToStepsStream;
    private checkTarget;
    private resetClasses;
    private saveTarget;
    private saveStepData;
    private defineStepPlacement;
    private setFocus;
    private scrollTo;
    onNext(event: Event): void;
    onPrev(event: Event): void;
    onClose(event: Event): void;
}
