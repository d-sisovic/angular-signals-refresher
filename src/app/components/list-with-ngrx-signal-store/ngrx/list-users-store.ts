import { effect, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { toObservable } from '@angular/core/rxjs-interop';
import { DummyHttpService } from '../../../services/dummy-http-service';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withLinkedState,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

type UsersState = {
  users: { name: string; surname: string }[];
  isLoading: boolean;
  ascUsers: boolean;
  _privateUsers: { name: string; surname: string }[];
};

const initialState: UsersState = {
  users: [{ name: 'SignalName', surname: 'Signal Surname' }],
  isLoading: false,
  ascUsers: false,
  _privateUsers: []
};

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ users, ascUsers }) => ({
    usersCount: () => users().length,
    usersToPresent: () =>
      ascUsers()
        ? users().sort((a, b) => a.name.localeCompare(b.name))
        : users().sort((a, b) => b.name.localeCompare(a.name)),
  })),
  withLinkedState(({ users }) => ({
    selectedUser: () => users()[users().length - 1] ?? undefined,
  })),
  withProps(({ isLoading }) => ({
    dummyHttpService: inject(DummyHttpService),
    isLoading$: toObservable(isLoading),
  })),
  withMethods(({ dummyHttpService, ...store }) => ({
    addUser(user: { name: string; surname: string }): void {
      patchState(store, (state) => ({ ...state, users: [...state.users, user] }));
    },
    async addSingleUserFromHttp(): Promise<void> {
      patchState(store, { isLoading: true });

      const newSingleUser = await dummyHttpService.getSingleUser();

      patchState(store, { users: [...store.users(), newSingleUser] });
    },
    loadByObservable: rxMethod<void>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => dummyHttpService.getSingleUser$()),
        tap((singleUser) =>
          patchState(store, { isLoading: false, users: [...store.users(), singleUser] })
        )
      )
    ),
  })),
  withHooks({
    onInit(store) {
      console.log('on signal store init');
      const { destroy } = watchState(store, (state) => {
        console.log('[watchState] state', state);
      });

      effect(() => {
        const state = getState(store);
        // Will emit only once, even after quick multiple state changes
        console.log('state change', state);
      });

      setTimeout(() => destroy(), 5000);
    },
    onDestroy(store) {
      console.log('on signal store destroy');
    },
  })
);
