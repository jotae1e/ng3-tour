import { EventEmitter, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
export declare class StepEventsDirective implements OnInit {
    private readonly tourService;
    eventType: string;
    isBrowser: boolean;
    next: EventEmitter<{
        [propName: string]: any;
    }>;
    prev: EventEmitter<any>;
    done: EventEmitter<any>;
    break: EventEmitter<any>;
    handler: () => void;
    constructor(tourService: TourService, platformId: {});
    ngOnInit(): void;
    onClick(event: Event): void;
    handleNext(): () => void;
    handlePrev(): () => void;
    handleClose(): () => void;
}
