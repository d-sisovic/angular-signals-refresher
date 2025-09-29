import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSignalInput } from './list-with-signal-input';

describe('ListWithSignalInput', () => {
  let component: ListWithSignalInput;
  let fixture: ComponentFixture<ListWithSignalInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithSignalInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithSignalInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
