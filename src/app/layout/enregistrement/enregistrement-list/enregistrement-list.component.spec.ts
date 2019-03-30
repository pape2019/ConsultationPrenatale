import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementListComponent } from './enregistrement-list.component';

describe('EnregistrementListComponent', () => {
  let component: EnregistrementListComponent;
  let fixture: ComponentFixture<EnregistrementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
