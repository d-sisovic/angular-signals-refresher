import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithLinkedSignal } from './list-with-linked-signal';

describe('ListWithLinkedSignal', () => {
  let component: ListWithLinkedSignal;
  let fixture: ComponentFixture<ListWithLinkedSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithLinkedSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithLinkedSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
