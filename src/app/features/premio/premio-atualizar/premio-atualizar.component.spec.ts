import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioAtualizarComponent } from './premio-atualizar.component';

describe('PremioAtualizarComponent', () => {
  let component: PremioAtualizarComponent;
  let fixture: ComponentFixture<PremioAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremioAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
