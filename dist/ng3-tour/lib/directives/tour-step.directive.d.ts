import { AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepTargetService } from '../services/step-target.service';
import { TourService } from '../services/tour.service';
export declare class TourStepDirective implements AfterViewInit, OnDestroy {
    private elemRef;
    private readonly tour;
    private readonly stepTarget;
    name: string;
    private readonly onDestroy;
    subscription: Subscription;
    isBrowser: boolean;
    timeout: any;
    constructor(elemRef: ElementRef, tour: TourService, stepTarget: StepTargetService, platformId: {});
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
