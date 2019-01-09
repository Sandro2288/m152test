import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclublistComponent } from './nlclublist.component';

describe('NlclublistComponent', () => {
  let component: NlclublistComponent;
  let fixture: ComponentFixture<NlclublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
