import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectLoading } from './state/loading.selectors'

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent implements OnInit {
  loading$: Observable<boolean>

  constructor(private store: Store<{ products: object }>) {
    this.loading$ = store.select(selectLoading)
  }

  ngOnInit(): void {}
}
