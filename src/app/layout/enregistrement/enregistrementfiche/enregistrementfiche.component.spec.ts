import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementficheComponent } from './enregistrementfiche.component';

describe('EnregistrementficheComponent', () => {
  let component: EnregistrementficheComponent;
  let fixture: ComponentFixture<EnregistrementficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
