import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceAuthorizationComponent } from './maintenance-authorization.component';

describe('MaintenanceAuthorizationComponent', () => {
  let component: MaintenanceAuthorizationComponent;
  let fixture: ComponentFixture<MaintenanceAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
