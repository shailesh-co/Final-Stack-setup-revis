import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productform! :FormGroup
  constructor( public fb :FormBuilder) {

    this.productform =this.fb.group({
      productnamename :['', Validators.required],
      address: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    console.log("on init")
  }
  onsubmit(){
    this.productform
    console.log("i m here", this.productform)
  }
}
