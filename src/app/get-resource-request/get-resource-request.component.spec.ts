import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResourceRequestComponent } from './get-resource-request.component';

describe('GetResourceRequestComponent', () => {
  let component: GetResourceRequestComponent;
  let fixture: ComponentFixture<GetResourceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResourceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
