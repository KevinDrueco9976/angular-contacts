import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user } from 'src/model/user-model';


@Component({
  selector: 'app-see-detail',
  templateUrl: './see-detail.component.html',
  styleUrls: ['./see-detail.component.scss']
})
export class SeeDetailComponent implements OnInit, AfterViewInit {

  userData: user = {};

  constructor(public dialogRef: MatDialogRef<SeeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {

    }

    ngOnInit(): void {
      this.userData = this.data.userData;
    }

    ngAfterViewInit(): void {

    }

  onCancel()
  {
    this.dialogRef.close();
  }
}
