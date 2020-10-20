import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Registro } from '../models/registro.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage,
              private NavCtrl: NavController,
              private iab: InAppBrowser) {

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
    const NuevoRegistro = new Registro(format, text);
    this.guardados.unshift(NuevoRegistro);

    console.log('lo que se esta guardando', this.guardados);
    this.storage.set('registro', this.guardados);
    this.abrirRegistro(NuevoRegistro);
  }
  abrirRegistro(registro: Registro){
    this.NavCtrl.navigateForward('/tabs/tab2');
    switch (registro.type){
      case 'http':
         this.iab.create(registro.text, '_system') ;


         break;
    }

  }
}
