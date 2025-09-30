import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersStore } from './ngrx/list-users-store';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-with-ngrx-signal-store',
  imports: [JsonPipe, AsyncPipe],
  providers: [UsersStore],
  templateUrl: './list-with-ngrx-signal-store.html',
  styleUrl: './list-with-ngrx-signal-store.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListWithNgrxSignalStore {
  readonly usersStore = inject(UsersStore);

  onAddNewUser(): void {
    this.usersStore.addUser({ name: 'Monthy', surname: 'Python' });
  }
}
