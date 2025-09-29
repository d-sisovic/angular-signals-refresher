import { Routes } from '@angular/router';
import { List } from './components/list/list';
import { ListWithComponentInputBinding } from './components/list-with-component-input-binding/list-with-component-input-binding';

export const routes: Routes = [
  {
    component: List,
    path: '',
    children: [
      {
        component: ListWithComponentInputBinding,
        path: ':entityId'
      }
    ]
  }
];
