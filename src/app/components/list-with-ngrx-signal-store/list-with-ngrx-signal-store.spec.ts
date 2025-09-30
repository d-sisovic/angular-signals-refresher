import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithNgrxSignalStore } from './list-with-ngrx-signal-store';

describe('ListWithNgrxSignalStore', () => {
  let component: ListWithNgrxSignalStore;
  let fixture: ComponentFixture<ListWithNgrxSignalStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithNgrxSignalStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithNgrxSignalStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
