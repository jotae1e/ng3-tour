import {Injectable, isDevMode} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

import {StepTargetService} from './step-target.service';

export interface TourI {
  steps: TourStepI[];
  tourOptions?: StepOptionsI;
  withoutLogs?: boolean;
  tourEvents?: TourEventsI;
}

export interface TourStepI {
  stepName: string;
  route?: string;
  index?: number;
  title?: string | {[propName: string]: any};
  description?: string | {[propName: string]: any};
  options?: StepOptionsI;
  ctrlBtns?: CtrlBtnsI;
  [propName: string]: any;
}

export interface CtrlBtnsI {
  prev?: {[propsName: string]: any};
  next?: {[propsName: string]: any};
  done?: {[propsName: string]: any};
  [propsName: string]: any;
}

export const defaultCtrlBtns = {
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

export interface StepOptionsI {
  className?: string;
  withoutCounter?: boolean;
  withoutPrev?: boolean;
  customTemplate?: boolean;
  themeColor?: string;
  opacity?: number;
  placement?: string;
  arrowToTarget?: boolean;
  backdrop?: boolean;
  animatedStep?: boolean;
  smoothScroll?: boolean;
  scrollTo?: boolean;
  fixed?: boolean;
  minWidth?: string; // Step min-width
  minHeight?: string; // Step min-height
  maxWidth?: string; // Step max-width
  maxHeight?: string; // Step max-height
  continueIfTargetAbsent?: boolean; // init next step if target is not found for current one
  stepTargetResize?: number[]; // change size of a 'window' for step target
  delay?: number; // for the case of the lazily loaded or animated routes
  autofocus?: boolean;
  i18nBtn?: CtrlBtnsI;
}

export const defaultOptions: StepOptionsI = {
  className: '',
  continueIfTargetAbsent: true,
  withoutCounter: false,
  withoutPrev: false,
  customTemplate: false,
  smoothScroll: false,
  scrollTo: true,
  themeColor: 'rgb(20, 60, 60)',
  opacity: .6,
  placement: 'down',
  arrowToTarget: true,
  stepTargetResize: [0],
  delay: 500,
  animatedStep: true,
  fixed: false,
  backdrop: true,
  minWidth: '150px',
  minHeight: '150px',
  maxWidth: '400px',
  maxHeight: '400px',
  autofocus: true,
};

export class StepOptions implements StepOptionsI {
  className?: string;
  withoutCounter?: boolean;
  withoutPrev?: boolean;
  customTemplate?: boolean;
  themeColor?: string;
  opacity?: number;
  placement: string;
  arrowToTarget?: boolean;
  backdrop?: boolean;
  animatedStep?: boolean;
  smoothScroll?: boolean;
  scrollTo?: boolean;
  continueIfTargetAbsent?: boolean;
  stepTargetResize?: number[];
  delay?: number;
  fixed?: boolean;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  autofocus?: boolean;
  constructor(options: StepOptionsI = defaultOptions) {
    const {
      className,
      continueIfTargetAbsent,
      withoutCounter,
      withoutPrev,
      customTemplate,
      smoothScroll,
      scrollTo,
      themeColor,
      opacity,
      placement,
      arrowToTarget,
      stepTargetResize,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      delay,
      animatedStep,
      fixed,
      backdrop,
      autofocus,
    } = options;
    this.className = className;
    this.placement = placement;
    this.arrowToTarget = arrowToTarget;
    this.themeColor = themeColor;
    this.opacity = opacity;
    this.backdrop = backdrop;
    this.customTemplate = customTemplate;
    this.withoutCounter = withoutCounter;
    this.withoutPrev = withoutPrev;
    this.continueIfTargetAbsent = continueIfTargetAbsent;
    this.stepTargetResize = stepTargetResize;
    this.maxHeight = maxHeight;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.minWidth = minWidth;
    this.delay = delay;
    this.animatedStep = animatedStep;
    this.smoothScroll = smoothScroll;
    this.scrollTo = scrollTo;
    this.fixed = fixed;
    this.autofocus = autofocus;
  }
}
export type TourEvent =  (props: {
  tourEvent: string,
  step?: number | string,
  history?: number[],
  tour?: TourI,
}) => void;

export interface TourEventsI {
  tourStart?: TourEvent;
  tourEnd?: TourEvent;
  tourBreak?: TourEvent;
  next?: TourEvent;
  prev?: TourEvent;
}

export const defaultTourEvent: TourEvent = (props) => {};
export const TourDefaultEvents = {
  tourStart: defaultTourEvent,
  tourEnd: defaultTourEvent,
  tourBreak: defaultTourEvent,
  next: defaultTourEvent,
  prev: defaultTourEvent,
};

@Injectable()
export class TourService {
  private steps: TourStepI[];
  private tourStarted = false;
  private stepsStream$ = new BehaviorSubject<any>(null);
  private history = [];
  private routeChanged = false;
  private presets: StepOptionsI = {};
 // private tourStart = TourDefaultEvents.tourStart;
  private tourBreak = TourDefaultEvents.tourBreak;
  private tourEnd = TourDefaultEvents.tourEnd;
  private next = TourDefaultEvents.next;
  private prev = TourDefaultEvents.prev;
  private lang = navigator.language;
  constructor(private router: Router, private readonly targetService: StepTargetService) {
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.stopTour = this.stopTour.bind(this);
  }

  private validateOptions(tour: TourI): boolean {
    const regExpr = /^top$|^down$|^left$|^right$|^center$/i;
    let isValid = true;
    tour.steps.forEach((step: TourStepI) => {
      if (step.options && step.options.placement) {
        isValid = regExpr.test(step.options.placement);
      }
    });
    if (tour.tourOptions.placement) {
      isValid = regExpr.test(tour.tourOptions.placement);
    }
    return isValid;
  }
  private setSteps(tour: TourI): void {
    const options = new StepOptions({...defaultOptions, ...this.presets, ...tour.tourOptions});
    this.steps = tour.steps.map((x, i) => {
      x.index = i;
      if (x.description && typeof x.description === 'object') {
        x.description = this.defineLocalName(x.description);
      }
      if (x.title && typeof x.title === 'object') {
        x.title = this.defineLocalName(x.title)
      }
      x.options = x.options ? {...options, ...x.options} : options;
      x.total = tour.steps.length;
      x.btnCtrls = this.defineLocalBtnNames(x.btnCtrls || defaultCtrlBtns)
      return x;
    });
    if (isDevMode()) {
      console.log('mode: ', isDevMode())
      console.log('ng3-tour is initiated with steps:');
      console.log(this.steps);
    }
  }

  private defineLocalName(prop: any): string {
    if (prop.hasOwnProperty(this.lang)) return prop[this.lang];
    if(prop.hasOwnProperty('en-EN')) return prop['en-EN'];
    const res = Object.values(prop)[0];
    if (typeof res === 'string') return res;
    console.error(`Tour configuration error with ${JSON.stringify(prop)}`)
    return 'Error'
  }
  private defineLocalBtnNames(btns: CtrlBtnsI): CtrlBtnsI {
    const btnCtrls = {};
    for (let prop in btns) {
      if (btns.hasOwnProperty(prop)) {
        if (typeof btns[prop] === 'string') {
          btnCtrls[prop] = btns[prop];
        } else if (typeof btns[prop] === 'object' && this.lang in btns[prop]) {
          btnCtrls[prop] = btns[prop][this.lang]
        } else {
          const res = Object.values(prop)[0];
          if (typeof res === 'string') {
            btnCtrls[prop] = res;
          } else {
            console.error(`Tour configuration error with ${JSON.stringify(btns)}`);
            btnCtrls[prop] = 'Error'
          }  
        }
      }
    }
    return btnCtrls;
  }
  private initStep(step: number): void {
    const previousStep = this.history.length ? this.getLastStep() : {route: null};
    const newtStep = this.steps[step];
    this.routeChanged = previousStep.route !== newtStep.route;
    this.history.push(step);
    if (newtStep.route && this.routeChanged) {
      this.router.navigate([newtStep.route]);
    }
    this.stepsStream$.next(newtStep.stepName);
  }

  public getHistory() {
    return this.history;
  }
  public setPresets(presets: StepOptionsI): void {
    this.presets = {...this.presets, ...presets};
  }
  public resetStep(stepName: string | number, step: TourStepI) {
    const index = typeof stepName === 'number' ? stepName : this.getStepByName(stepName).index;
    this.steps[index] = {...step};
  }
  public getStepByName(stepName: string): TourStepI {
    return this.steps.filter(step => step.stepName === stepName)[0];
  }
  public getStepByIndex(index = 0): TourStepI {
    return this.steps[index];
  }
  public getLastStep(): TourStepI {
    if (this.history.length) return this.steps[this.history.slice(-1)[0]];
    return null;
  }
  public getStepsStream(): Observable<string> {
    return this.stepsStream$;
  }
  public isRouteChanged() {
    return this.routeChanged;
  }
  private setTourStatus(status: boolean): void {
    this.tourStarted = status;
  }
  public getTourStatus() {
    return this.tourStarted;
  }
  public startTour(tour: TourI) {
    if (!this.validateOptions(tour)) {
      throw new Error('Placement option of the ng3-tour or one of it step is invalid');
    }
    const {tourBreak, tourStart, tourEnd, next, prev} = {...TourDefaultEvents, ...tour.tourEvents};
    tourStart({tourEvent: 'Tour start', tour});
    this.tourBreak = tourBreak;
    this.tourEnd = tourEnd;
    this.next = next;
    this.prev = prev;
    this.setTourStatus(true);
    this.setSteps(tour);
    this.initStep(0);
  }
  public stopTour() {
    const index = this.getLastStep().index;
    const latestStepIndex = this.steps.length - 1;
    if ( index < latestStepIndex) {
      this.tourBreak({tourEvent: 'Tour break', step: index, history: this.history});
    } else if (latestStepIndex === index) {
      this.tourEnd({tourEvent: 'Tour end', step: index, history: this.history});
    }
    this.setTourStatus(false);
    this.steps.length = 0;
    this.stepsStream$.next(null);
    this.history.length = 0;
    this.targetService.setTargetSubject(null);
  }
  public nextStep() {
    const step = this.getLastStep().index + 1;
    this.next({tourEvent: 'Init next', step, history: this.history});
    this.initStep(step);
  }
  public prevStep() {
    const step = this.getLastStep().index - 1;
    this.prev({tourEvent: 'Init prev', step, history: this.history});
    this.initStep(step);
  }
}
