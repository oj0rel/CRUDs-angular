import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { PatrocinadorService } from '../../../shared/services/patrocinador/patrocinador.service';
import { PatrocinadorStatus } from '../../../shared/enums/patrocinador/patrocinadorStatus';


@Component({
  selector: 'app-patrocinador-ver',
  imports: [RouterModule],
  templateUrl: './patrocinador-ver.component.html',
  styleUrl: './patrocinador-ver.component.css'
})
export class PatrocinadorVerComponent implements OnInit {

  id!: number;
  patrocinador: any;

  statusOptions: { id: number, descricao: string }[] = [];

  constructor(private patrocinadorService: PatrocinadorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.statusOptions = Object.keys(PatrocinadorStatus)
      .filter(key => isNaN(Number(key)))
      .map(key => ({
        id: PatrocinadorStatus[key as keyof typeof PatrocinadorStatus],
        descricao: key
    }));

    this.obterPatrocinador(this.id);
  }

  obterPatrocinador(idPatrocinador: number) {
    this.patrocinadorService.buscar(idPatrocinador).subscribe({
      next: (res: any) => {
        this.patrocinador = res;
        console.log("Patrocinador carregado:", res);
      },
      error: (err) => {
        console.error("Erro ao buscar Patrocinador:", err);
      }
    });
  }
}
