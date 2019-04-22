import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ResidentsService } from 'src/services/residents/residents.service';
import { DataTableComponent } from 'src/components/data-table.component/data-table.component';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from 'src/store/reducers/data-table.reducer';

@NgModule({
  declarations: [
    DataTableComponent,
    AppComponent,
  ],
  providers: [ResidentsService],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    StoreModule.forRoot({reducer: dataReducer}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
