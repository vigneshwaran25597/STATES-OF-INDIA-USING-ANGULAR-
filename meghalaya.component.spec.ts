import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeghalayaComponent } from './meghalaya.component';

describe('MeghalayaComponent', () => {
  let component: MeghalayaComponent;
  let fixture: ComponentFixture<MeghalayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeghalayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeghalayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
