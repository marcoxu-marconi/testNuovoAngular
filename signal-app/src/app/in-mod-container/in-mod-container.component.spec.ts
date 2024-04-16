import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InModContainerComponent } from './in-mod-container.component';

describe('InModContainerComponent', () => {
  let component: InModContainerComponent;
  let fixture: ComponentFixture<InModContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InModContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InModContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
