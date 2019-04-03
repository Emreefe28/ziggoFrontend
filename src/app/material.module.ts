import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatDividerModule],
  exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatDividerModule],
})
export class MaterialModule { }
