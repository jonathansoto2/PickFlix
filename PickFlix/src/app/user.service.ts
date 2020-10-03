import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../../database/db_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService: DataService) { }

	getUsers(){
		return this.dataService.getUsers();
	}

	createUsers(
		name:string , email:string, password:string
	){
		return this.dataService.getPostUser('/', { name, email, password } );
	}
}
