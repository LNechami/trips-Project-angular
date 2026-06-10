import { Component,inject } from '@angular/core';
import {RouterLink, RouterOutlet,Router} from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private authService = inject(AuthService);
  private router = inject(Router);

  userName: string = '';

  ngOnInit() {
    
    const user = this.authService.getCurrentUser();

    console.log('User identity in Home component:', user);
    //-- בדיקה אם יש משתמש מחובר ועדכון שם המשתמש או ניתוב לעמוד ההתחברות
    //--בהערה עד שיסתדר הלוגין
  //   if (user) {
  //     this.userName = user.username || user.name; 
  //   } 
  //   else {
  //     this.router.navigate(['/login']);
  //   }
   }
}
