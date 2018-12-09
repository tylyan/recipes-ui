import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPointComponent } from './tag-point.component';

describe('TagPointComponent', () => {
  let component: TagPointComponent;
  let fixture: ComponentFixture<TagPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
