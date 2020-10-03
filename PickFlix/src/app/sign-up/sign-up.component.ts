import { Component, OnInit } from '@angular/core';
import User from '../shared/models/users';
import { UserService } from '../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {


	Users: any;
	
  constructor(
	  private userService: UserService,
	  private router: Router
  ) { }

  ngOnInit() {
	  this.userService.getUsers()
	  .subscribe((Response) => {
		  this.Users = Response
		console.log(this.Users)
		console.log(Response)
	  })
  }

  addUser(nameInput, emailInput, passwordInput){
    console.log("Component.ts console log: " + nameInput, emailInput, passwordInput);
    this.userService.createUsers(nameInput, emailInput, passwordInput)
    .subscribe((user: User) => this.router.navigate(['/']));
  }

}
