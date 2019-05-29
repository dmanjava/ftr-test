import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyDialogueComponent } from './frequency-dialogue.component';

describe('FrequencyDialogueComponent', () => {
  let component: FrequencyDialogueComponent;
  let fixture: ComponentFixture<FrequencyDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
