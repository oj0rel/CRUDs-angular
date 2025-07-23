import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { PremioService } from '../../../shared/services/premio/premio.service';
import { PremioStatus } from '../../../shared/enums/premio/premioStatus';
import { PremioCategoria } from '../../../shared/enums/premio/premioCategoria';

@Component({
  selector: 'app-premio-ver',
  imports: [RouterModule],
  templateUrl: './premio-ver.component.html',
  styleUrl: './premio-ver.component.css'
})

export class PremioVerComponent {
  
  id!: number;
  premio: any;

  statusOptions: { id: number, descricao: string }[] = [];
  categoriaOptions: { id: number, descricao: string }[] = [];

  constructor(private premioService: PremioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.statusOptions = Object.keys(PremioStatus)
      .filter(key => isNaN(Number(key)))
      .map(key => ({
        id: PremioStatus[key as keyof typeof PremioStatus],
        descricao: key
    }));

    this.categoriaOptions = Object.keys(PremioCategoria)
      .filter(key => isNaN(Number(key)))
      .map(key => ({
        id: PremioCategoria[key as keyof typeof PremioCategoria],
        descricao: key
    }));

    this.obterPremio(this.id);
  }

  obterPremio(idPremio: number) {
    this.premioService.buscar(idPremio).subscribe({
      next: (res: any) => {
        this.premio = res;
        console.log("Prêmio carregado:", res);
      },
      error: (err) => {
        console.error("Erro ao buscar Prêmio:", err);
      }
    });
  }
}
