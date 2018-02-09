import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctComponent } from './distinct.component';

describe('DistinctComponent', () => {
  let component: DistinctComponent;
  let fixture: ComponentFixture<DistinctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get distinct elements', () => {
    component.distinct('a\nb\nb\nc\nc');
    expect(component.output).toEqual('a\nb\nc');
  });
});
