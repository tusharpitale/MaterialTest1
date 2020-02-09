import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
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
    exports: [
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
