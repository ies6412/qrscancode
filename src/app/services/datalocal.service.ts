import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor() { }

  GuardarRegistro(format: string, text: string){

    const guardado = new Registro(format, text);
    this.guardados.unshift(guardado);
    console.log('lo que se esta guardando', this.guardados);



  }
}
