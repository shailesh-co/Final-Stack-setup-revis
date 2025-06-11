import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './services/myservice.service';
import { interval, observable, Observable, timer } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
Parentmsg  =" I m from Parent component";
inputinfo :any ;
userinfo :any;
userform! : FormGroup
  na ="";
  title = 'frontend';
  show=false
  details = ['angular','css','javascript'];
  users = ['admin', 'customer', 'wendor']

  parantmsg = "from parent msg"
   userRole: string = 'admin';
 
  constructor(public router:Router, private myservice:MyserviceService , private fb :FormBuilder){
    this.userform = this.fb.group({
      username:['', ],
      number: ['',],
      usermail:['',]
    })
  }
  onformclick(){
    this.userform;
    console.log(this.userform)
    console.log(this.userform.value)
  };
  ngOnInit(): void {
 const storedData = localStorage.getItem('val');
  if (storedData) {
    this.userinfo = JSON.parse(storedData);
    console.log("Parsed userinfo:", this.userinfo);
  } else {
    this.userinfo = [];
    console.log("No data found in localStorage.");
  }
  }

  onSubmit( val:any) {

    if(val.status =="VALID"){
        console.log(val.value)
    }
    else {
      console.log("form empty")
    }
 console.log(val)
 
  }
 
 



}
