import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYtComponentScssComponent } from './button-yt.component.scss.component';

describe('ButtonYtComponentScssComponent', () => {
  let component: ButtonYtComponentScssComponent;
  let fixture: ComponentFixture<ButtonYtComponentScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonYtComponentScssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonYtComponentScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
