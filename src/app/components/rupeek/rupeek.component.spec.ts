import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupeekComponent } from './rupeek.component';

describe('RupeekComponent', () => {
  let component: RupeekComponent;
  let fixture: ComponentFixture<RupeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
