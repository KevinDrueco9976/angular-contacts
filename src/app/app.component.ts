import { user } from './../model/user-model';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { SeeDetailComponent } from './see-detail/see-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  public data: user[] = [];
  lockedimage: boolean = false;

 constructor(private http: HttpClient, private sanitizer: DomSanitizer, public dialog: MatDialog) {

 }

 ngOnInit() : void {
  const url ='https://jsonplaceholder.typicode.com/users';
  //Get Data from url
  this.http.get(url).subscribe((res)=>{
    this.data = <user[]>res;
    console.log(this.data)
  })

 }

 ngAfterViewInit(): void {

}

 randomPictureURL()
 {
    // let urlList: string[] = ['https://bootdey.com/img/Content/avatar/avatar1.png','https://bootdey.com/img/Content/avatar/avatar2.png','https://bootdey.com/img/Content/avatar/avatar3.png','https://bootdey.com/img/Content/avatar/avatar4.png','https://bootdey.com/img/Content/avatar/avatar5.png','https://bootdey.com/img/Content/avatar/avatar6.png']
    //To show that the link is safe
    //return this.sanitizer.bypassSecurityTrustResourceUrl(urlList[Math.floor(Math.random() * urlList.length)]);
    let imgList: string[] = ['../assets/img/avatar1.png','../assets/img/avatar2.png','../assets/img/avatar3.png','../assets/img/avatar4.png','../assets/img/avatar5.png','../assets/img/avatar6.png'];
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgList[Math.floor(Math.random() * imgList.length)]);

 }

 openDialog(id?: number): void {
  let userData: user | undefined = this.data.find(x => x.id == id);

  let dialogRef = this.dialog.open(SeeDetailComponent, {
    width: '600px',
    height: 'auto',
    data: { userData }
  });

  dialogRef.afterClosed().subscribe(result => {
    //console.log(result);
    // let index: number = this.data.findIndex(x => x.id == result.id);
    // this.data[index] = result;
    //Delete row
    // this.data.splice(index, 1);

  });
}

}
