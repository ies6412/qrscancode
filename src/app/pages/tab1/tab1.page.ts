import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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


  constructor(private barcodeScanner: BarcodeScanner) {


  }

  Scanner(){

    this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
   }).catch(err => {
       console.log('Error', err);
   });

  }

}
