import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestCustomersListComponent } from './oldest-customers-list.component';

describe('OldestCustomersListComponent', () => {
  let component: OldestCustomersListComponent;
  let fixture: ComponentFixture<OldestCustomersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldestCustomersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestCustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
