import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButtons,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
IonCheckbox,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonToggle,
  IonIcon,
  IonFooter,
  ModalController,
  IonTextarea,
  NavParams,
  IonPopover,
  IonDatetime,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButtons,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonTextarea,
    IonToggle,
    IonIcon,
    IonItem,
    IonList,
    IonCheckbox,
    CommonModule,
    FormsModule,
  ],
})
export class ProductDetailComponent  implements OnInit {


  indexs:number = 0;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) { 

    this.indexs = navParams.get('index');
  }

  ngOnInit() {}

  save() {
    this.modalController.dismiss({}, 'ave');
  }
  
  close() {
    this.modalController.dismiss({}, 'close');
  }

}
