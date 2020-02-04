import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelimiterComponent } from './delimiter.component';
import { OutputBlockComponent } from '../core/output-block/output-block.component';

describe('DelimiterComponent', () => {
  let component: DelimiterComponent;
  let fixture: ComponentFixture<DelimiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelimiterComponent, OutputBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delimit', () => {
    component.replace('a b c', ' ', '/');
    expect(component.output).toEqual('a/b/c');
  });
});
