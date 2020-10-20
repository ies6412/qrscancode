import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage,
              private NavCtrl: NavController) {

    this.CargarStorage();
    // this.storage.get('registro')
    // .then(registros => {
    //   this.guardados = registros || [];
    // });
  }
  async CargarStorage(){
    this.guardados = await this.storage.get('registro') || [];
  }

  async GuardarRegistro(format: string, text: string){

    await this.CargarStorage();
    const guardado = new Registro(format, text);
    this.guardados.unshift(guardado);

    console.log('lo que se esta guardando', this.guardados);
    this.storage.set('registro', this.guardados);




  }
  abrirRegistro(registro: Registro){
    this.NavCtrl.navigateForward('/tabs/tab2');
    switch (registro.type){
      case 'http':

        break;
    }

  }
}
