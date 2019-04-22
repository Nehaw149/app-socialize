import { Component} from '@angular/core';
import { ResidentsService } from 'src/services/residents/residents.service';
import { Residents } from 'src/services/residents/residents.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StateModel } from 'src/store/state.model';
import { saveResidents } from 'src/store/reducers/data-table.reducer';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  public residents: Observable<Residents>;
  public columns: string[];

  constructor(private store: Store<StateModel>,
              public residentsService: ResidentsService) {
    this.residents = residentsService.getResidents();
    this.store.dispatch({ type: saveResidents });
    this.columns = ['Name', 'January', 'February', 'March', 'April', 'May'];
  }

}
