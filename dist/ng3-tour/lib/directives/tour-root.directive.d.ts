import { OnInit, OnDestroy, ElementRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { StepTargetService } from '../services/step-target.service';
import { TourStepComponent } from '../components/tour-step.component';
import { TourService } from '../services/tour.service';
export declare class TourRootDirective implements OnInit, OnDestroy {
    private elem;
    private readonly tourService;
    private readonly targetService;
    private viewContainer;
    private componentFactory;
    customTemplate: boolean;
    private readonly onDestroy;
    isEmbedded: boolean;
    isCreated: boolean;
    isBrowser: boolean;
    modalFactory: ComponentFactory<TourStepComponent>;
    constructor(elem: ElementRef, tourService: TourService, targetService: StepTargetService, viewContainer: ViewContainerRef, componentFactory: ComponentFactoryResolver, platformId: {});
    ngOnInit(): void;
    ngOnDestroy(): void;
}
