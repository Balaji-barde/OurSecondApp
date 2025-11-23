import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/students';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-std-curd1',
  templateUrl: './std-curd1.component.html',
  styleUrls: ['./std-curd1.component.scss'],
})
export class StdCurd1Component implements OnInit {
  isInEditMode: boolean = false;

  @ViewChild('fname') fnameRef!: ElementRef;
  @ViewChild('lname') lnameRef!: ElementRef;
  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('contact') contactRef!: ElementRef;

  clearForm() {
    this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
  }

  Snackbar(msg: string) {
    this._matsnackbar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }

  studentsArr: Array<Istudent> = [
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@gmail.com',
      contact: 9730424904,
      StdId: '123',
    },
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@gmail.com',
      contact: 9730424904,
      StdId: '122',
    },
  ];

  constructor(private _matsnackbar: MatSnackBar) {}

  ngOnInit(): void {}

  OnStdAdd() {
    let newStdObj: Istudent = {
      fname: this.fnameRef.nativeElement.value,
      lname: this.lnameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: +this.contactRef.nativeElement.value,
      StdId: this.uuid(),
    };
    this.studentsArr.unshift(newStdObj);
    this.clearForm();
    this.Snackbar(
      `The student with id ${newStdObj.StdId} is updated successfully!!!!! `
    );
  }

  onStdRemove(removeId: string) {
    // let getConfirm = confirm(`Are you sure, u want to remove this`);
    // if (getConfirm) {
    //   this.studentsArr = this.studentsArr.filter((t) => t.StdId !== removeId);
    //   this.clearForm();
    // }

    this.studentsArr = this.studentsArr.filter((t) => t.StdId !== removeId);
    this.clearForm();
  }

  onStdEdit(std: Istudent) {
    // console.log(std);
    this.isInEditMode = true;
    let Edit_Id = std.StdId;
    localStorage.setItem('Edit_Id', Edit_Id);
    console.log(Edit_Id);
    this.fnameRef.nativeElement.value = std.fname;
    this.lnameRef.nativeElement.value = std.lname;
    this.emailRef.nativeElement.value = std.email;
    this.contactRef.nativeElement.value = std.contact;
  }

  onStdUpdate() {
    let Std_Id = localStorage.getItem('Edit_Id');
    localStorage.removeItem('Edit_Id');

    if (Std_Id) {
      let Updated_obj: Istudent = {
        fname: this.fnameRef.nativeElement.value,
        lname: this.lnameRef.nativeElement.value,
        email: this.emailRef.nativeElement.value,
        contact: this.contactRef.nativeElement.value,
        StdId: Std_Id,
      };
      console.log(Updated_obj);
      let Get_Index = this.studentsArr.findIndex((std) => std.StdId === Std_Id);
      this.studentsArr[Get_Index] = Updated_obj;
      this.isInEditMode = false;

      this.Snackbar(
        `The student with id ${Updated_obj.StdId} is updated successfully!!!!! `
      );
    }
  }

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
