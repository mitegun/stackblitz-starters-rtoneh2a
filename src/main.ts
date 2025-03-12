import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { YoloInputComponent } from './app/yolo_input/yolo_input.component';
import { YoloDisplayComponent } from './app/yolo_display/yolo_display.component';
import { ButtonYtComponentScssComponent } from './app/features/button-yt.component.scss/button-yt.component.scss.component';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ButtonYtComponentScssComponent,YoloInputComponent, YoloDisplayComponent],
  template: `
    <h1>Hello from {{ name | uppercase}}!</h1>
    
    <h2 >Title: {{ title }}</h2>
    <h3>First Name: {{ first_name }}</h3>
    <p (click)="incrementTitle()">Test</p>
    <h1>Hello, from CYTECH</h1>
    <div class="container">
    <h1>YOLO Generator</h1>
    <app-yolo-input (countChange)="updateYoloCount($event)"></app-yolo-input>
    <app-yolo-display [count]="yoloCount"></app-yolo-display>
    </div>
    <img [src]="imgUrl2" alt="Illustration" />
    <img [src]="imageUrl" alt="Illustration" />
    <img [src]="imgUrl2" alt="Illustration" />
    <img [src]="imageUrl" alt="Illustration" />


    <input type = "text" [(ngModel)]="first_name"/>
    <app-button-yt (onClick)="alert()">zaza</app-button-yt>
  `,
})
export class App {
  name = 'Malik le roi';
  title = 2025;
  first_name = 'Goat';
  imageUrl =
    'https://i.pinimg.com/736x/60/10/5e/60105e6105e39cb5e84f4dccfdd45819.jpg';
  imgUrl2 = "https://media.tenor.com/en7VKL_SExsAAAAM/skibidi-male04-spin.gif"
  incrementTitle() {
    this.title++;
    this.updateYear(this.title)
  }
  updateYear(year:number){
    console.log('year:',year)
    this.title = year
  }
  alert(){
    alert("hello gros bg")
  }
  yoloCount: number = 0;

  updateYoloCount(count: number) {
    this.yoloCount = count;
  }
}

bootstrapApplication(App);
