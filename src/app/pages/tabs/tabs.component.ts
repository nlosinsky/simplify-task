import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormConfigDataService } from '../../services/form-config-data.service';
import { StorageService } from '../../services/storage.service';
import { FormTabConfig } from '../../shared/models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {
  tab$: Observable<FormTabConfig>;
  formData$: Observable<any>;

  private ngUnsubscribe = new Subject();

  constructor(
    private formConfigDataService: FormConfigDataService,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.tab$ = this.formConfigDataService.getTargetTab();
    this.formData$ = this.storageService.getFormData();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onFormData(data) {
    this.storageService.saveFormData(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        alert('Data saved successfully!');
      });
  }
}
