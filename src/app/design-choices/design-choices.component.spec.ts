import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignChoicesComponent } from './design-choices.component';

describe('DesignChoicesComponent', () => {
  let component: DesignChoicesComponent;
  let fixture: ComponentFixture<DesignChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
