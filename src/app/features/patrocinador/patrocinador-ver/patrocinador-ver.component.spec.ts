import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorVerComponent } from './patrocinador-ver.component';

describe('PatrocinadorVerComponent', () => {
  let component: PatrocinadorVerComponent;
  let fixture: ComponentFixture<PatrocinadorVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrocinadorVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinadorVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
