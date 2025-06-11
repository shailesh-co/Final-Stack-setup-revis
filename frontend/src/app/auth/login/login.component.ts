import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { MyserviceService } from 'src/app/services/myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() sendinput!:string;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    console.log(this.sendinput)
  }
  onSubmit(data:any){
    this.authservice.loginfun(data.value).subscribe(res=>{
     console.log('Login success:', res);
    
    },
    (err) => {
        console.log("login error",err)
      })
   
  }
}
