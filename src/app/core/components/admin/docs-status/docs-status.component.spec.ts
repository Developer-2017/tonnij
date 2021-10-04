import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsStatusComponent } from './docs-status.component';

describe('DocsStatusComponent', () => {
  let component: DocsStatusComponent;
  let fixture: ComponentFixture<DocsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
