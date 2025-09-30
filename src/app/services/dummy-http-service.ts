import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyHttpService {
  private readonly http = inject(HttpClient);

  async getSingleUser(): Promise<{ name: string; surname: string }> {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');

    const jsonData = await data.json();

    return { name: jsonData[0].title, surname: 'test' };
  }

  getSingleUser$(): Observable<{ name: string; surname: string }> {
    return this.http
      .get<{ title: string }[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response) => ({ name: response[0].title, surname: 'test' })));
  }
}
