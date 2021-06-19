import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsutilityComponent } from './documentsutility.component';

describe('DocumentsutilityComponent', () => {
  let component: DocumentsutilityComponent;
  let fixture: ComponentFixture<DocumentsutilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsutilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsutilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
