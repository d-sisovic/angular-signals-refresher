import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-list-with-resource-http-signal',
  imports: [],
  templateUrl: './list-with-resource-http-signal.html',
  styleUrl: './list-with-resource-http-signal.scss',
})
export class ListWithResourceHttpSignal {
  query = signal<string>('');

  posts = resource<{ id: number; title: string }[], Record<string, string>>({
    params: () => ({ query: this.query() }),
    loader: async ({ params, abortSignal }) => {
      const query = params['query'];

      const data = await fetch('https://jsonplaceholder.typicode.com/posts' + `/${query}`, {
        signal: abortSignal
      });

      return await data.json();
    },
  });

  constructor() {
    this.posts.isLoading();
  }
}
