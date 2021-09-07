import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient ) { }
  getUsers () {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  addUsers (data) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', data)
  }
  deleteUser(id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  updateUser(data, id) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
  }
  getUser (id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
