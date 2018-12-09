import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAddFormComponent } from './bulk-add-form.component';

describe('BulkAddFormComponent', () => {
  let component: BulkAddFormComponent;
  let fixture: ComponentFixture<BulkAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
