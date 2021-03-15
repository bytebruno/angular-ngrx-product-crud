import { animate, style, transition, trigger } from '@angular/animations'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { selectSnackbar } from './state/snackbar.selector'

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('state', [
      transition(':enter', [
        style({ bottom: '-100px', transform: 'translate(-50%,0) scale(0.3)' }),
        animate(
          '150ms cubic-bezier(0,0,0.2,1)',
          style({
            transform: 'translate(-50%,0%) scale(1)',
            opacity: 1,
            bottom: '20px',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms cubic-bezier(0.4,0.0,1,1)',
          style({
            transform: 'translate(-50%,0%) scale(0.3)',
            opacity: 0,
            bottom: '-100px',
          })
        ),
      ]),
    ]),
  ],
})
export class SnackbarComponent implements OnInit {
  snackbar = {
    show: false,
    message: 'This is snackbar',
    mode: 'success',
  }

  snackbar$!: Observable<any>
  notifier = new Subject()

  constructor(private cdr: ChangeDetectorRef, private store: Store) {}

  ngOnInit(): void {
    this.snackbar$ = this.store.select(selectSnackbar)
    this.snackbar$.pipe(takeUntil(this.notifier)).subscribe((snackbar) => {
      this.snackbar = { ...snackbar }
      this.cdr.detectChanges()
    })
  }

  ngOnDestroy() {
    this.notifier.next()
    this.notifier.complete()
  }
}
