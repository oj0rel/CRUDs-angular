import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { Premio } from '../../core/models/premio';
import { PremioService } from '../../shared/services/premio/premio.service';

@Component({
  selector: 'app-premio',
  imports: [MatTableModule, MatPaginatorModule, RouterModule],
  templateUrl: './premio.component.html',
  styleUrl: './premio.component.css'
})
export class PremioComponent implements AfterViewInit, OnInit {

  premios = new MatTableDataSource<Premio>();

  displayedColumns: string[] = ['id', 'descricao', 'ordemPremiacao', 'categoria', 'status', 'opcoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private premioService: PremioService) { }

  // Método para listar todos os premios
  obterListaPremios(){
    this.premioService.listarPatrocinadores().subscribe(data => {
      this.premios.data = data;
      console.log(this.premios.data);
    });
  }

  // Método para apagar premios
  apagarPremio(id:number) {
    this.premioService.apagar(id).subscribe(res =>
    {
      this.premios.data = this.premios.data.filter((item: Premio) => item.id !== id);
      console.log("Prêmio deletado com sucesso.");
    }
    )
  }

  ngOnInit(): void {
    this.obterListaPremios();
  }

  ngAfterViewInit(): void {
    this.premios.paginator = this.paginator;
  }
}
