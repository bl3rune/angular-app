import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffComponent } from './diff.component';

describe('DiffComponent', () => {
  let component: DiffComponent;
  let fixture: ComponentFixture<DiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get distinct elements', () => {
    component.diff('a\nb\nb\nc\nc','a\nb\nc\nd\nd');
    expect(component.output).toEqual(['=::a', '=::b', '-::b', '=::c', '-::c', '+::d', '+::d']);
  });
});
