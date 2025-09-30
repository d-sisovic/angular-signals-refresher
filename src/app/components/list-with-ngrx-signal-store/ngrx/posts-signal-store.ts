import { IPost } from './posts-store';
import { computed, effect, signal } from '@angular/core';
import { deepComputed, patchState, signalState } from '@ngrx/signals';

type SignalState = {
  posts: IPost[];
  isLoading: boolean;
};

const postsSignalState = signalState<SignalState>({
  posts: [],
  isLoading: false,
});

const postsStringifyed = computed(() => JSON.stringify(postsSignalState()));

effect(() => console.log('userState', postsSignalState()));

patchState(postsSignalState, { isLoading: false });

const limit = signal(25);
const offset = signal(0);
const totalItems = signal(100);

const pagination = deepComputed(() => ({
  currentPage: Math.floor(offset() / limit()) + 1,
  pageSize: limit(),
  totalPages: Math.ceil(totalItems() / limit()),
}));

console.log(pagination()); // logs: { currentPage: 1, pageSize: 25, totalPages: 4 }
console.log(pagination.currentPage()); // logs: 1
console.log(pagination.pageSize()); // logs: 25
console.log(pagination.totalPages()); // logs: 4
