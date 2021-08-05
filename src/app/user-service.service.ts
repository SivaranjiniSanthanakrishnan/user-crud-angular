import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpInstance: HttpClient) { 
  }
  getUsers() {
      return this.httpInstance.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(id) {
    return this.httpInstance.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  deleteUsers(id) {
    return this.httpInstance.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  addUser(data) {
    return this.httpInstance.post(`https://jsonplaceholder.typicode.com/users`, data);
  }
  updateUser(id, data) {
    return this.httpInstance.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }
}
