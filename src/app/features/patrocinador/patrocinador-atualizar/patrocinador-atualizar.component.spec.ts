import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorAtualizarComponent } from './patrocinador-atualizar.component';

describe('PatrocinadorAtualizarComponent', () => {
  let component: PatrocinadorAtualizarComponent;
  let fixture: ComponentFixture<PatrocinadorAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrocinadorAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinadorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
