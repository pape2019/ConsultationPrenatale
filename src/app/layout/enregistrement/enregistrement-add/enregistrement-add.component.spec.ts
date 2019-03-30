import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementAddComponent } from './enregistrement-add.component';

describe('EnregistrementAddComponent', () => {
  let component: EnregistrementAddComponent;
  let fixture: ComponentFixture<EnregistrementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
