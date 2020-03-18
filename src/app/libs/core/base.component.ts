import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export abstract class BaseComponent implements OnDestroy {
  public destroy$: Subject<any> = new Subject();

  ngOnDestroy() {
    // Used this for simplicity, ideally I would impl ngrx actions that would handle memory leaks(similar to this)
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
