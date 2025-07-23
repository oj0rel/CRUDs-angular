import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioCriarComponent } from './premio-criar.component';

describe('PremioCriarComponent', () => {
  let component: PremioCriarComponent;
  let fixture: ComponentFixture<PremioCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremioCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
