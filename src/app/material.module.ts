import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatRadioModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
  ]
})
export class MaterialModule {}
