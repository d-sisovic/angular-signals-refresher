import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-list-with-linked-signal',
  imports: [],
  templateUrl: './list-with-linked-signal.html',
  styleUrl: './list-with-linked-signal.scss'
})
export class ListWithLinkedSignal {
  users = input.required();

  linkedSignalExample = linkedSignal<any>(() => this.users());

  onChangeLinkedSignal(): void {
    this.linkedSignalExample.set([]);
  }
}
