import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages = [
    {
      title: 'Inception',
      description:
        'A mind-bending science fiction film directed by Christopher Nolan.',
      image:
        'https://www.themoviedb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    },
    {
      title: 'The Shawshank Redemption',
      description:
        'A powerful drama about the lives of two imprisoned men, directed by Frank Darabont.',
      image:
        'https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    },
   
    {
      title: 'The Dark Knight',
      description:
        'The second installment in Christopher Nolan’s Batman trilogy.',
      image:
        'https://www.themoviedb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    }
  ];

  getLanguages(): Observable<any[]> {
    return of(this.languages);
  }
}
