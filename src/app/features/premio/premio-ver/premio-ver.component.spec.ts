import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioVerComponent } from './premio-ver.component';

describe('PremioVerComponent', () => {
  let component: PremioVerComponent;
  let fixture: ComponentFixture<PremioVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremioVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
