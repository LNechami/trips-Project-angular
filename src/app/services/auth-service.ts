import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router); 
  private currentUser: any = null; 

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/users');
  }

  login(username: string, password: string, onLoginFailed: () => void) {
    
    this.getUsers().subscribe((users) => {
      const user = users.find(u => u.name === username && u.password === password);

      if (user) {
        this.currentUser = user; 
        this.router.navigate(['/home']); 
      }//  else {
      //   onLoginFailed(); 
      // }
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }
}