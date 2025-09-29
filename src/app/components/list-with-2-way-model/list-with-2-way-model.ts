import { Component, model } from '@angular/core';

@Component({
  selector: 'app-list-with-2-way-model',
  imports: [],
  templateUrl: './list-with-2-way-model.html',
  styleUrl: './list-with-2-way-model.scss'
})
export class ListWith2WayModel {
  inputModel = model.required<string>({ alias: 'inputModelItem' });

  onInputChange(event: Event): void {
    this.inputModel.set((event.target as HTMLInputElement).value);
  }
}
