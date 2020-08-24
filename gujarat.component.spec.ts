import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratComponent } from './gujarat.component';

describe('GujaratComponent', () => {
  let component: GujaratComponent;
  let fixture: ComponentFixture<GujaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
