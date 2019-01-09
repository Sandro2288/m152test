import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclubitemComponent } from './nlclubitem.component';

describe('NlclubitemComponent', () => {
  let component: NlclubitemComponent;
  let fixture: ComponentFixture<NlclubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
