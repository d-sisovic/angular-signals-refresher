import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWith2WayModel } from './list-with-2-way-model';

describe('ListWith2WayModel', () => {
  let component: ListWith2WayModel;
  let fixture: ComponentFixture<ListWith2WayModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWith2WayModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWith2WayModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
