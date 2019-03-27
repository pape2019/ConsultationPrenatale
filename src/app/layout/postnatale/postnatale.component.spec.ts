import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnataleComponent } from './postnatale.component';

describe('PostnataleComponent', () => {
  let component: PostnataleComponent;
  let fixture: ComponentFixture<PostnataleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnataleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnataleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
