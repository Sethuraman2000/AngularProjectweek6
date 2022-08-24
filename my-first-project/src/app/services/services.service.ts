import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }

  public logInUserFromRemote(user:User):Observable<any>
  {
    return this._http.post("http://localhost:6060/login",user);

  }
  
}
