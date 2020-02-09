import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

import { DataSource } from '@angular/cdk/table';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];

  dataSource = new PostDataSource(this.dataService);

  ngOnInit() {
  }

  deletePost(id) {
    this.dataService.deletePost(id);
    this.dataSource = new PostDataSource(this.dataService);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });

  }

}

export class PostDataSource extends DataSource<any> {

  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {

  }

}
