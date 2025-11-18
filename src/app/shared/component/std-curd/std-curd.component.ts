import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/stdCurd';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-std-curd',
  templateUrl: './std-curd.component.html',
  styleUrls: ['./std-curd.component.scss'],
})
export class StdCurdComponent implements OnInit {
  isInEditMode: boolean = false;
  studentsArr: Array<Istd> = [
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@gmail.com',
      contact: 8888999977,
      StdId: '123',
    },
    {
      fname: 'may',
      lname: 'doe',
      email: 'md@gmail.com',
      contact: 8888999988,
      StdId: '124',
    },
  ];

  @ViewChild('fname') fnameRef!: ElementRef;
  @ViewChild('lname') lnameRef!: ElementRef;
  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('contact') contactRef!: ElementRef;

  constructor(private _matSnackbar: MatSnackBar) {}
  Snackbar(msg: string) {
    this._matSnackbar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }
  ngOnInit(): void {}

  // create
  onStdAdd() {
    // create new obj
    let newStdObj: Istd = {
      fname: this.fnameRef.nativeElement.value,
      lname: this.lnameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: +this.contactRef.nativeElement.value,
      StdId: this.uuid(),
    };
    // push the data in studentsArr
    this.studentsArr.push(newStdObj);
    this.Snackbar('The student added successfully!!!');
    // reset
    this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
  }
  // /////////////////////////////////////////

  //Edit
  //01 event bind
  //02 get the id
  onStdEdit(Std: Istd) {
    this.isInEditMode = true;
    console.log(Std.StdId); // here we will get an edit id
    let Edit_Id = Std.StdId;
    localStorage.setItem('Edit_Id', Std.StdId);

    // now we have to patch the data on controls by using
    //  viewchild
    this.fnameRef.nativeElement.value = Std.fname;
    this.lnameRef.nativeElement.value = Std.lname;
    this.emailRef.nativeElement.value = Std.email;
    this.contactRef.nativeElement.value = Std.contact;
  }

  ////////

  // UPDATE
  OnStdUpdate() {
    // 01 edit id(std id)
    let Std_Id = localStorage.getItem('Edit_Id');
    localStorage.removeItem('Edit_Id');
    //02.updated Obj
    if (Std_Id) {
      let Updated_Obj: Istd = {
        fname: this.fnameRef.nativeElement.value,
        lname: this.lnameRef.nativeElement.value,
        email: this.emailRef.nativeElement.value,
        contact: +this.contactRef.nativeElement.value,
        StdId: Std_Id,
      };
      console.log(Updated_Obj);
      // update in array
      let Get_Index = this.studentsArr.findIndex((std) => std.StdId === Std_Id);
      this.studentsArr[Get_Index] = Updated_Obj;
    }
    this.isInEditMode = false;
    this.Snackbar(`The student is ${Std_Id} updated successfully!!!!`);
    //reset
    this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
  }

  // remove
  onStdRemove(removeId: string) {
    let isConfirmed = confirm('Are you sure, you want to remove this student?');
    if (isConfirmed) {
      this.studentsArr = this.studentsArr.filter((t) => t.StdId !== removeId);
      this.Snackbar(`The student with ID ${removeId} removed successfully!!!!`);
    }
  }

  // --------- trackBy method added here ----------
  // Angular will use this to track rows in *ngFor: trackBy: trackByStdId
  trackByStdId(index: number, student: Istd): string {
    return student.StdId;
  }
  // ----------------------------------------------

  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  };
}
