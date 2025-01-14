import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWSComponent } from './aws.component';

describe('AWSComponent', () => {
  let component: AWSComponent;
  let fixture: ComponentFixture<AWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AWSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
