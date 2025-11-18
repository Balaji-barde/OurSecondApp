import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  //01.EleREf
  // onSearchProd(prodEle: HTMLInputElement) {
  //   // here we dont need of eve because we want data from input so we can use of 1.eleRef 2 viewchild
  //   console.log('clicked btn');
  //   console.log(prodEle); //input element
  //   let val: string = prodEle.value;
  // }

  @ViewChild('prodcutName')
  prodcutNameRef!: ElementRef;

  onSearch() {
    console.log(this.prodcutNameRef.nativeElement.value);
  }
  ///

  onSearchBtn(productRef: HTMLInputElement) {
    console.log(productRef);
    let val: string = productRef.value;
    console.log(val);
  }

  constructor() {}

  ngOnInit(): void {}
}
