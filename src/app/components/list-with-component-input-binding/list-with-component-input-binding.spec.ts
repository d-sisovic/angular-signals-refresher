import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithComponentInputBinding } from './list-with-component-input-binding';

describe('ListWithComponentInputBinding', () => {
  let component: ListWithComponentInputBinding;
  let fixture: ComponentFixture<ListWithComponentInputBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithComponentInputBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithComponentInputBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
