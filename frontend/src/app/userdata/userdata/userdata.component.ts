import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
 users: any[] = [];
  constructor( private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(data => {
      this.users =data
    })
  }

}
