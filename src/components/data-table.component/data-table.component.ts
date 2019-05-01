import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ResidentsService } from 'src/services/residents/residents.service';
import { Residents, months } from 'src/services/residents/residents.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StateModel } from 'src/store/state.model';
import { saveResidents } from 'src/store/reducers/data-table.reducer';
import { map } from 'rxjs/operators';
import { DataResident } from 'src/models/data-resident';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  constructor(private store: Store<StateModel>,
              public residentsService: ResidentsService) {
    // this.store.dispatch({ type: saveResidents, payload: this.residents });
  }
  public columns: string[] = ['Owners Name', 'Tenants Name', 'Q1', 'Q2', 'Q3', 'Q4', 'Year'];
  public residents$: Observable<Residents> = this.residentsService.getResidents();

  public tableData = this.residentObjToArray(this.residents$);

  public residentObjToArray( residents: Observable<Residents> ): DataResident[] {

    const dataTable: DataResident[] = [];

    residents.subscribe( one => {

      const data: DataResident = {
        ownersName: '',
        tenantsName: '',
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        year: 0,
      };

      data.ownersName = one.ownersName;
      data.tenantsName = one.tenantsName;

      one.payment.map(contri => {
        data.year = contri.year;
        contri.months.map(contriMonth => {
          // Q1
          if (contriMonth.month === (months.Jan || months.Feb || months.Mar)) {
            data.q1 = + contriMonth.contribution;
          }

          // Q2
          if (contriMonth.month === (months.Apr || months.May || months.Jun)) {
            data.q2 = + contriMonth.contribution;
          }

          // Q3
          if (contriMonth.month === (months.Jul || months.Aug || months.Sep)) {
            data.q3 = + contriMonth.contribution;
          }

          // Q4
          if (contriMonth.month === (months.Oct || months.Nov || months.Dec)) {
            data.q4 = + contriMonth.contribution;
          }

        });
      });
      dataTable.push(data);
    });
    return dataTable;
  }

}
