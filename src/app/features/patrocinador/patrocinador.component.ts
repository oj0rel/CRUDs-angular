import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { Patrocinador } from '../../core/models/patrocinador';
import { PatrocinadorService } from '../../shared/services/patrocinador/patrocinador.service';

@Component({
  selector: 'app-patrocinador',
  imports: [MatTableModule, MatPaginatorModule, RouterModule],
  templateUrl: './patrocinador.component.html',
  styleUrl: './patrocinador.component.css'
})

export class PatrocinadorComponent implements AfterViewInit, OnInit {

  patrocinadores = new MatTableDataSource<Patrocinador>();

  displayedColumns: string[] = ['id', 'nome', 'representanteNome', 'status', 'opcoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private patrocinadorService: PatrocinadorService) { }

  // Método para listar todos os patrocinadores
  obterListaPatrocinadores(){
    this.patrocinadorService.listarPatrocinadores().subscribe(data => {
      this.patrocinadores.data = data;
      console.log(this.patrocinadores.data);
    });
  }

  // Método para apagar participantes
  apagarPatrocinador(id:number) {
    this.patrocinadorService.apagar(id).subscribe(res =>
    {
      this.patrocinadores.data = this.patrocinadores.data.filter((item: Patrocinador) => item.id !== id);
      console.log("Patrocinador deletado com sucesso.");
    }
    )
  }

  ngOnInit(): void {
    this.obterListaPatrocinadores();
  }

  ngAfterViewInit(): void {
    this.patrocinadores.paginator = this.paginator;
  }
}
