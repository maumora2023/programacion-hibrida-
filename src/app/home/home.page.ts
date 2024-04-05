import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonList,
  IonLabel,
  SelectCustomEvent // Cambio aquí
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonItem,
    TrianguloComponent,
    CirculoComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    CommonModule
  ]
})
export class HomePage {
  tipoFiguraGeometrica: string = "";

  constructor() {}

  circulo() {
    return this.tipoFiguraGeometrica === "circulo";
  }

  triangulo() {
    return this.tipoFiguraGeometrica === "triangulo";
  }

  manejarSelecciontipoFiguraGeometrica($event: SelectCustomEvent) { // Cambio aquí
    this.tipoFiguraGeometrica = $event.detail.value;
  }
}
