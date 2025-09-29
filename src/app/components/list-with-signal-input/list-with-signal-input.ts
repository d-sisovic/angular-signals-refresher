import { JsonPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-list-with-signal-input',
  imports: [JsonPipe],
  templateUrl: './list-with-signal-input.html',
  styleUrl: './list-with-signal-input.scss'
})
export class ListWithSignalInput {
  items = input.required<{ name: string, surname: string }[]>({ alias: 'items' });

  itemsSignalFromInput = computed(() => `Computed value: ${JSON.stringify(this.items())}`);
}
