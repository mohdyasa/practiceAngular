import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserServiceService } from './services/userService.service';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { CustomFilterPipe } from './pipes/customFilter.pipe';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { Ng2TableModule,NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import {
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule
} from '@angular/material';
@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      TableComponent,
      CustomFilterPipe,
      CustomTableComponent
    
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      FormsModule,
      Ng2TableModule,
      MatButtonModule,
      MatSidenavModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatGridListModule,
      MatFormFieldModule,
      MatDialogModule,
      MatTabsModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatToolbarModule,
      MatCardModule,
      MatChipsModule,
      MatListModule,
      MatTooltipModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatTableModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatSortModule,
      MatSnackBarModule,
      MatStepperModule
   ],
   providers: [
      UserServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
