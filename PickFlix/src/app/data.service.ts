import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

	private USER_URL : string;

  constructor(private http : HttpClient)
	{ 
		this.USER_URL = environment.ROOT_URL + environment.user_apiPath;
	}

	getUsers(): any{
		return this.http.get(this.USER_URL);
	}

	getPostUser(uri: string, payload: Object){
		return this.http.post(this.USER_URL , payload);
	}

}
