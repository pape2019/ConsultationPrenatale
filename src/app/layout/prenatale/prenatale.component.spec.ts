import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenataleComponent } from './prenatale.component';

describe('PrenataleComponent', () => {
  let component: PrenataleComponent;
  let fixture: ComponentFixture<PrenataleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenataleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenataleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
