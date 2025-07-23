import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rotas do Patrocinador
  {
    path: 'patrocinador',
    loadComponent: () => import ('./features/patrocinador/patrocinador.component').then(mod => mod.PatrocinadorComponent)
  },
  {
    path: 'patrocinador-atualizar/:id',
    loadComponent: () => import ('./features/patrocinador/patrocinador-atualizar/patrocinador-atualizar.component').then(mod => mod.PatrocinadorAtualizarComponent)
  },
  {
    path: 'patrocinador-criar',
    loadComponent: () => import ('./features/patrocinador/patrocinador-criar/patrocinador-criar.component').then(mod => mod.PatrocinadorCriarComponent)
  },
  {
    path: 'patrocinador-ver/:id',
    loadComponent: () => import ('./features/patrocinador/patrocinador-ver/patrocinador-ver.component').then(mod => mod.PatrocinadorVerComponent)
  },
  //Rotas do Premio
  {
    path: 'premio',
    loadComponent: () => import ('./features/premio/premio.component').then(mod => mod.PremioComponent)
  },
  {
    path: 'premio-atualizar/:id',
    loadComponent: () => import ('./features/premio/premio-atualizar/premio-atualizar.component').then(mod => mod.PremioAtualizarComponent)
  },
  {
    path: 'premio-criar',
    loadComponent: () => import ('./features/premio/premio-criar/premio-criar.component').then(mod => mod.PremioCriarComponent)
  },
  {
    path: 'premio-ver/:id',
    loadComponent: () => import ('./features/premio/premio-ver/premio-ver.component').then(mod => mod.PremioVerComponent)
  }
];
