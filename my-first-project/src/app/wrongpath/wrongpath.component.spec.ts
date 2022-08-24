import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongpathComponent } from './wrongpath.component';

describe('WrongpathComponent', () => {
  let component: WrongpathComponent;
  let fixture: ComponentFixture<WrongpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongpathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
