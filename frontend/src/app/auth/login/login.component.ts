import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
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
