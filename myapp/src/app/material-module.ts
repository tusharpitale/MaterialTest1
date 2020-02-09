import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
  } from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports : [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSliderModule,
        MatFormFieldModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports : [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSliderModule,
        MatFormFieldModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class MaterialModule {

}