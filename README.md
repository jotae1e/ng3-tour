# ng3-Tour

An Angular Tour (ng3-tour) light library is **built entirely** in Angular and allows you easily master guide for your users through your site showing them all the sections and features including **lazily loaded**.

**For Angular 2+ (2, 4, 5, 6, 7, 8)**

## Installation

    npm install --save ng3-tour

## Usage 

1. Import the NgTourModule in your AppModule:
```
    @NgModule({
        declarations: [AppComponent],
        imports: [
                RouterModule.forRoot([]),
                NgTourModule.forRoot(),
                BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
    export class AppModule { }
```

2. Import the NgTourModule in your Feature Modules:
```
    @NgModule({
        declarations: [FeatureComponent],
        imports: [
            NgTourModule.forChild(),
        ],
        providers: [],
        })
    export class FeatureModule { }
```

3. Use **ngIfTour** directive inside **app.component.html**. A good choice is marking `<router-outlet>` with it.

```
    <route-outlet ngIfTour></route-outlet>
```

5. Mark your target HTML elements with the **ngTourStep** directive with a unique name.
```
    <div ngTourStep="first">...</div>
    <span ngTourStep="second">...</span>
```

5. Inject NgTourService in your Component (where Tour is being started).

```
@Component({
    selector: 'component-of-your-choice',
    templateUrl: './your.component.html'
})
export class ComponentOfYourChoice {
    constructor(private readonly tourService: TourService) { }
}
```

6. Create a configuration object and pass it as an argument to the startTour method

```
const tour = {
    steps: [
        {
            stepName: "first",
            route: "home",
            title: {
                'en-EN': 'My first feature',
                'ru-RU': 'Моя первая фича',
                'fr-FR': 'Mon premier long métrage',
            },
            description: "My first feature description", 
            options: {backdrop: true}
        },
        {
            stepName: "nextStep",
            route: "about",
            title: "My second feature name",
            description: "My second feature description",
            options:{placement: 'top', smoothScroll: true*}
        }
    ],
    tourOptions: {
        backdrop: false,
        placement: 'down'
    },
    ctrlBtns: {
         done: {
            'en-EN': 'done',
            'ru-RU': 'закр',
            'fr-FR': 'fini',
        },
        prev: {
            'en-EN': 'prev',
            'ru-RU': 'пред',
            'fr-FR': 'préc'
        },
        next: {
            'en-EN': 'next',
            'ru-RU': 'след',
            'fr-FR': 'proch',
        },
    }
}

**Keep in mind if you implement your own Step template, you can use your own Step properties besides required ('stepName' and 'route')**

@Component({...

ngOnInit() {
    this.tourService.startTour(tour);
}

of cause this also possible:

onClick() {
    this.tourService.startTour(tour);
}
```

### Customizing

If you want to use tour own Step template wrap it with `<ng-tour-step-template>` and place in **app.component.html**.  Mark the provided template with reference with assigned value 'step$' that gives you access to steps Stream. To handle controls event you could use tourEvent directive with corresponded input value (one of 'next', 'prev', 'close') 

```
    <ng-tour-step-template #refToExportAs="step$" tourStepData (next)="onNext($event)" (done)="onDone($event)">
        <div  class="tour-step-modal__content" *ngIf="refToExportAs.step$ | async as step">
            <div >
                <div class="tour-step-modal__header">
                    <h3 class="tour-step-modal__title"> 
                    {{step.title}}
                    </h3>
                    <button class="tour-btn-close" type="button" stepEvent="close" (break)="onBreak($event)" (done)="onDone($event)">
                    &times;
                    </button>
                </div>
                <div class="tour-step-modal__body">
                    <p class="tour-step-modal__description">
                    {{step.description}}
                    </p>
                    <p class="tour-step-modal__adds">
                    {{step.adds}}
                    </p>
                    <p class="tour-step-modal__adds">
                    {{step.customData}}
                    </p>
                    <p *ngIf="step.index===3" class="tour-step-modal__adds"> 
                    StepName of this step is {{step.StepName}}
                    </p>
                </div>
                <div class="tour-step-modal__footer">
                    <div *ngIf="!step.options.withoutCounter" class="tour-step-modal__counter">
                    {{step.index + 1}} of {{step.total}}
                    </div>
                    <button
                    *ngIf="!step.options.withoutPrev && step.index" 
                    type="button" 
                    class="tour-btn"
                    stepEvent="prev"
                    >
                    {{step.btnCtrls.prev}}
                    </button>
                    <button
                    *ngIf="step.index + 1 !== step.total"
                    type="button"
                    class="tour-btn tour-btn-next"
                    stepEvent="next"  
                    (next)="onNext($event)"
                    >
                    {{step.btnCtrls.next}}
                    </button>
                    <button
                    *ngIf="step.index + 1 === step.total"
                    type="button"
                    class="tour-btn tour-btn-done"
                    stepEvent="close"
                    (done)="onDone($event)"
                    >
                    {{step.btnCtrls.done}}
                    </button>
                </div>
            </div>
        </div>
    </ng-tour-step-template>
```
Keep in mind if you use **`<ng-tour-step-template>`** and **`ngIfTour`** at the same time 'customTemplate' option is set to true programmatically. If you omit  **`ngIfTour`** and want to use your own  Step template set this option to true manually. 


## API reference

### Tour Properties
Tour configuration object contains steps array and could include common options, event handlers and set of control button names
Name | Required | Type | Destination | Default value
-----|----|----|------------|--------------
steps | yes | TourStep[] | This option define Tour Steps and its order | 
tourEvents | no | TourEventsI | define event handlers for 'tour start', 'tour break', 'tour end', 'next step', 'prev step' | 
tourOption | no | TourStepI | Set common options. Could be redefined with Step options
ctrlBtns | no | CtrlBtnsI | Set translations of the control buttons for any languages you want

### Tour Events
These events are functions witch is called within corresponded tourService methods. You can pass your own implementation of these functions within tourEvent property for example to collect some statistical data about user behavior. Keep in mind Tour Events unlike Step Events could fire without user activity in case continueIfTargetAbsent property is set to true (default value).

Name | Required | Props | Destination | 
-----|----|----|------------|----
tourStart | no | {tourEvent: string, tour?: TourI} | Add logic executed before the Tour will be started | 
tourBreak | no | {tourEvent: string, step?: number, history?: number[]} | Add logic executing before the Tour will be stoped untimely
tourEnd | no | {tourEvent: string, step?: number, history?: number[]} | Add logic executing before the Tour will be stopped after finishing (latest step was visited)
next | no | {tourEvent: string, step?: number, history?: number[]} | Add logic executing before the next step will be initiated
prev | no | {tourEvent: string, step?: number, history?: number[]} | Add logic executing before the previous step will be initiated


### Step Properties (StepOptions)
Name | Required | Type | Destination | Default value
-----|----|----|------------|--------------
stepName | yes | string | define unique name of the Step | 
route | yes | string | define route corresponded to the Step |
index | no | number |  'Index' value is set by TourService service according to the position of the Step in the Steps array | 
title | no | string | Set title of the current Step | ""
description | no | string | Set description of the current Step | ""
ctrlBtns | no | CtrlBtnsI | Set translations of the control buttons for any languages you want | [^1] see below 
options | no | StepOptionsI | To customize separate Step | described below
options: | | | |
className | no | string | Set custom class to the Step component | ""
themeColor| no | string | Define theme color | 'rgb(20, 60, 60)'
backdrop | no | boolean | Add backdrop if option set true | true
opacity| no | number | Define the backdrop opacity | .6
placement | no | string |  This option define position of step modal relative to target. Possible values: 'down', 'top', 'left', 'right', 'center' **( case no matter )** | "Down"
customTemplate | no | boolean | This option has by default value true if was used `<ng-tour-step-template>` and **ngIfTour** directive within same Component. (Value could be reset within Tour options or Step options). Otherwise, the default value of the option will be false. | true/false
withoutCounter | no | boolean | If true remove counter including a number of the step and total number of steps from the Step template | false
withoutPrev | no | boolean |If true remove 'Prev' control button from the Step template | false
arrowToTarget | no | boolean | If true add arrow in direction corresponded location of the Step target  | true
scrollTo | no | boolean | If value equals true, the window is scrolled to show Step target and modal (popup) | true
scrollSmooth | no | boolean | If true  option behavior of the window scroll is set to smooth | false
continueIfTargetAbsent | no | boolean | If true and the Step target is absent will initialize the next Step | true
animatedStep | no | boolean | If true add classes to control css animation | true
fixed | no | boolean | If value equals true position css property of the Step Component and Backdrop Component is set to the 'fixed', otherwise 'absolute' | false
animationDelay | no | number | Required in case of routing with lazy loaded Feature Modules. Delay defined in ms | 500
targetResize | no | number[] | Change size in px of the Step target window. Number with index 0 define Width. Number with index 1 if exist define Height differ from the Width | [0]
minWidth | no | string | Define min-width of the Step modal | '200px'
minHeight | no | string | Define min-height of the Step modal | '200px'
maxWidth | no | string | Define max-width of the Step modal | '400px'
maxHeight | no | string | Define max-height of the Step modal | '400px'
autofocus | no | boolean | If true 'next' and 'done' buttons obtain focus | true

defaultCtrlBtns: 

[^1]:  btns

    {
        done: {
        'en-EN': 'done',
        'ru-RU': 'закр',
        'fr-FR': 'fini',
        },
        prev: {
            'en-EN': 'prev',
            'ru-RU': 'пред',
            'fr-FR': 'préc'
        },
        next: {
            'en-EN': 'next',
            'ru-RU': 'след',
            'fr-FR': 'proch',
        },
    }


### Services

#### TourService methods: 
Name | Args |  Description | Return
-----|------|---------------------|--------
main | | |
startTour | tour: TourI | start Tour (The only necessary to use this lib) | void |
prevStep | | Call initStep with previous stepName | void 
nextStep | | Call initStep with next stepName | void 
stopTour | | stop Tour | void 
additional | | |
getStepStream | | Return the steps observable
resetStep | string | number, TourStepI | Change Step configuration
getHistory | | return array of the indexes of the passed Steps
getStepByName | string | return the Step with the given stepName
getStepByIndex | number | return the Step with the given index
getLastStep | | return the last initialized Step
isRouteChanged | | return true if the route property of the current Step differs from the previous one
getTourStatus | | return true if Tour started


### Directives 

#### ngIfTour 
This directive is similar to a structural one if it is used solo without `<ng-tour-step-template>`. In this case, **`ngIfTour`** adds provided `Step template` to the DOM  after the Tour is started and removes it after the Tour is stoped. If **`ngIfTour`** is used along with **`<ng-tour-step-template>`** (no matter which element was marked with directive **`<ng-tour-step-template>`** or some other) it make only one thing it set 'customTemplate' property to true.

#### ngTourStep 
This directive is required to mark Step target
@Input	| Required | Description | Values/Type
--------|----------|-------------|-------------
ngTourStep | yes | The value should be unique string | string

#### stepEvent
This directive binds listeners (with corresponded Tour methods) to Step's controls and emits corresponded events. It may come in handy if you want **to master your own Step template**.
@Input	| Required | Destination
--------|----------|-------|-------------
stepEvent | required | Possible values are 'next' , 'prev' and 'close'. Value predefines which handler will be implemented for the click event. 

@Output	| Props | Destination
--------|-------|-------------
next | {tourEvent: string, step: number, history: number[]} | Emit 'next' event with described props. The destination is the same as tourEvents have
prev | {tourEvent: string, step: number, history number[]} | Emit 'prev' event with described props.
break | {tourEvent: string, step: number, history: number[]} | Emit 'break' event with described props.
done | {tourEvent: string, step: number, history: number[]}| Emit 'done' event with described props.


### Components 

#### ng-tour-step-template
To add some logic :

Output | Props |     Description     
-----|------|---------------------
next | {tourEvent: string, step: number, history: number[]} | Emit 'next' event with described props. The destination is the same as tourEvents have  
prev | {tourEvent: string, step: number, history: number[]}  | Emit 'prev' event with described props.
break | {tourEvent: string, step: number, history: number[]} | Emit 'break' event with described props.
done | {tourEvent: string, step: number, history: number[]} | Emit 'done' event with described props.

### SCSS Customizing
You can easily redefine styles of the provided Step template in any scss files importing in style.scss file of your project. 

#### Main selectors
Selector | Corresponding DOM node
---------|-------------------------
.tour-step-modal | Step (includes provided template and custom template)
.tour-step-modal__content | provided Step template
.tour-step-modal__header | provided Step header (includes title and Close control)
.tour-btn-close | Close control
.tour-step-modal__title | provided Step title
.tour-step-modal__body | provided Step body (includes Step description)
.tour-step-modal__description | provided Step description
.tour-step-modal__footer | provided Step footer (includes Step controls Next, Prev, Done, and Counter)
.tour-step-modal__counter | Counter
.tour-btn-next | Next control
.tour-btn-prev | Prev control
.tour-btn-done | Done control
.tour-btn | Common selector for Step footer controls
