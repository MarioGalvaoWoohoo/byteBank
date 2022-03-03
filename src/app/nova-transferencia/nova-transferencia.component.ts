import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransmitir = new EventEmitter<any>();

  public valor: number;
  public destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(): void {
    console.log('Tranferencia solicitada');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir)
    .subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

}
