import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() inputdata =new EventEmitter<any> ();
registerform!:FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) { 
this.registerform = this.fb.group({
  username:['', Validators.required],
  email:['', Validators.required],
  mobilenumber:['', Validators.required],
  password: ['',Validators.required],

})
  }

  ngOnInit(): void {
  }

  onsubmit(){
    // this.inputdata.emit(this.registerform.value)
    localStorage.setItem('val',JSON.stringify(this.registerform.value))
    console.log(this.registerform.value);
    // console.log(this.registerform.value);
    // this.registerform.reset();
    this.authservice.signup(this.registerform.value).subscribe(res =>{
      console.log(res);
    },
    (err)=> {
      console.log("signuperror",err)
    }
  )


  }
}