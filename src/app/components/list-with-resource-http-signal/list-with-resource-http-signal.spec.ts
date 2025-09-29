import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithResourceHttpSignal } from './list-with-resource-http-signal';

describe('ListWithResourceHttpSignal', () => {
  let component: ListWithResourceHttpSignal;
  let fixture: ComponentFixture<ListWithResourceHttpSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithResourceHttpSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithResourceHttpSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
