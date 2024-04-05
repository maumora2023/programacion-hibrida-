import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonLabel, FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg]
})
export class CirculoComponent  implements OnInit {
radius: any;
result: any;
calculatePerimeter() {
throw new Error('Method not implemented.');
}
perimetroStr: string = "";
resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPermitro() {
    const perimetro = parseFloat(this.perimetroStr)
    const circulo = new Circulo(perimetro)
    const calcularPerimetro = circulo.calcularPerimetro()
    this.resultado = `El perímetro es ${calcularPerimetro} cm`
    }

}
