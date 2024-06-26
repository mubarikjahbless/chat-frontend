import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage } from './sign-up.page';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
