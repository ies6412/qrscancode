import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  swideroption: {
    allowSlidePrev: false,
    allowSlideNext: false
   };

  ionViewWillEnter(){

    this.Scanner();
  }
  ionViewDidEnter(){

    console.log('didenter');
  }

  ionViewDidLeave(){

    console.log('Leaveenter');
  }
  ionViewWillLeave(){

    console.log('ha salido');
  }


  constructor(private barcodeScanner: BarcodeScanner,
              private datalocal: DatalocalService) {

                 }

  Scanner(){

    this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    if (!barcodeData.cancelled){
       this.datalocal.GuardarRegistro(barcodeData.format, barcodeData.text);

     }


   }).catch(err => {
       console.log('Error', err);
       // para hacer pruebas... desde la compu... simulamos que no hay errores
       this.datalocal.GuardarRegistro('QRcode', 'http://fernando-herrera.com');
   });

  }

}
