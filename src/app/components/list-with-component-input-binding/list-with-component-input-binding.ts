import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-with-component-input-binding',
  imports: [],
  templateUrl: './list-with-component-input-binding.html',
  styleUrl: './list-with-component-input-binding.scss'
})
export class ListWithComponentInputBinding {
  entityId = input<string>();
}
