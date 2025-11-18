import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss'],
})
export class TwoWayDataBindingComponent implements OnInit {
  //o1
  @ViewChild('productName')
  productNameRef!: ElementRef;
  searchProductName!: string;
  onSearch() {
    console.log(this.productNameRef.nativeElement.value);
    this.searchProductName = this.productNameRef.nativeElement.value;
  }

  //02

  searchItems: string = '';
  onSearched() {
    console.log(this.searchItems);
  }

//03
@ViewChild('prodCatg') prodCatgRef!:ElementRef

searchValue:string='';
   searchPro(){
 console.log(this.prodCatgRef)// eleref
 console.log(this.prodCatgRef.nativeElement.value)
 this.searchValue=this.prodCatgRef.nativeElement.value
   }

  constructor() {}

  ngOnInit(): void {}
}

