import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  languages: any[] = [];

  constructor(private languageService: LanguageService, private authService: AuthService, private router: Router) {
    this.loadLanguages();
  }

  private loadLanguages() {
    this.languageService.getLanguages().subscribe(
      (data) => {
        this.languages = data;
      },
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }

  logout() {
    // Call the logout method from your AuthService
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
