import {NgModule} from '@angular/core';
import {MatButtonModule, MatMenuModule, MatIconModule, MatSortModule, MatSelectModule, } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatSelectModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatSelectModule]
})
export class MaterialModule {
}
