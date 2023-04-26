import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationBackComponent } from './reclamation-back.component';

describe('ReclamationBackComponent', () => {
  let component: ReclamationBackComponent;
  let fixture: ComponentFixture<ReclamationBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
