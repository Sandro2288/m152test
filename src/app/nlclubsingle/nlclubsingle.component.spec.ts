import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclubsingleComponent } from './nlclubsingle.component';

describe('NlclubsingleComponent', () => {
  let component: NlclubsingleComponent;
  let fixture: ComponentFixture<NlclubsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclubsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclubsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
