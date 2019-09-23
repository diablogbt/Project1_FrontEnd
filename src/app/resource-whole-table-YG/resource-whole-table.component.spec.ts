import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YGResourceWholeTableComponent } from './resource-whole-table.component';

describe('YGResourceWholeTableComponent', () => {
  let component: YGResourceWholeTableComponent;
  let fixture: ComponentFixture<YGResourceWholeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YGResourceWholeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YGResourceWholeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
