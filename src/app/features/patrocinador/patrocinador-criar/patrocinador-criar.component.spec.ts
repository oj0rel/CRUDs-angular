import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorCriarComponent } from './patrocinador-criar.component';

describe('PatrocinadorCriarComponent', () => {
  let component: PatrocinadorCriarComponent;
  let fixture: ComponentFixture<PatrocinadorCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrocinadorCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinadorCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
