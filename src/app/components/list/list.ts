import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, of, timer } from 'rxjs';
import { ListWithSignalInput } from "../list-with-signal-input/list-with-signal-input";
import { ListWith2WayModel } from "../list-with-2-way-model/list-with-2-way-model";
import { RouterOutlet } from "@angular/router";
import { ListWithResourceHttpSignal } from "../list-with-resource-http-signal/list-with-resource-http-signal";
import { ListWithLinkedSignal } from "../list-with-linked-signal/list-with-linked-signal";

@Component({
  selector: 'app-list',
  imports: [AsyncPipe, ListWithSignalInput, ListWith2WayModel, RouterOutlet, ListWithResourceHttpSignal, ListWithLinkedSignal],
  templateUrl: './list.html',
  styleUrl: './list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {
  listItems = signal([{ name: 'Daniel', surname: 'Sisovic' }]);

  filteredList = computed(() => this.listItems());

  testSignalFromObservable = toSignal(of('test'));

  longPollingObservable$ = timer(0, 1000).pipe(
    map(() => {
      const date = new Date();

      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    })
  );

  longPollingSignal = toSignal(this.longPollingObservable$);

  logger = effect(() => {
    console.log(this.listItems());
  });

  inputModelItemParent = signal<string>('test of input parent');

  onAddNewUser(): void {
    this.listItems.update((previous) => [...previous, { name: 'Mark', surname: 'Younger Smith' }]);
  }
}
