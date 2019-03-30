import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementEditComponent } from './enregistrement-edit.component';

describe('EnregistrementEditComponent', () => {
  let component: EnregistrementEditComponent;
  let fixture: ComponentFixture<EnregistrementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
