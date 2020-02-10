import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  name: string;
  animal: string;

  constructor(public dialog: MatDialog) {
    this.title = this.getTitle();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('this dialog was closed');
      this.animal = results;
    });
  }

  getTitle(): string {
    return 'my-app2';
  }
}
