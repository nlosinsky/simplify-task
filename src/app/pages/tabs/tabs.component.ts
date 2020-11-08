import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormTabConfig } from '../../models';
import { FormConfigDataService } from '../../services/form-config-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  tab$: Observable<FormTabConfig>;

  constructor(
    private formConfigDataService: FormConfigDataService
  ) {}

  ngOnInit() {
    this.tab$ = this.formConfigDataService.getTargetTab();
  }
}
