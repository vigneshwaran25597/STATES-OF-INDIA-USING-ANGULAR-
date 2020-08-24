import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhraComponent } from './andhra.component';

describe('AndhraComponent', () => {
  let component: AndhraComponent;
  let fixture: ComponentFixture<AndhraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndhraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndhraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
