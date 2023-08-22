import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTextComponent } from './TitleTextComponent';

describe('TitleTextComponent', () => {
  let component: TitleTextComponent;
  let fixture: ComponentFixture<TitleTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleTextComponent]
    });
    fixture = TestBed.createComponent(TitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
