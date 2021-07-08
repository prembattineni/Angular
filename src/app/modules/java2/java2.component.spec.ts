import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Java2Component } from './java2.component';

describe('Java2Component', () => {
  let component: Java2Component;
  let fixture: ComponentFixture<Java2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Java2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Java2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
