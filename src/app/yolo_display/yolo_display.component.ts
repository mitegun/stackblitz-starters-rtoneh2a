import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yolo-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="yolo-container">
      <p *ngFor="let item of yoloArray">YOLO!</p>
    </div>
  `,
  styles: [`
    .yolo-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 20px;
    }
    p {
      margin: 0;
      padding: 10px 20px;
      background-color: #f0f0f0;
      border-radius: 4px;
      transition: transform 0.2s;
    }
    p:hover {
      transform: scale(1.1);
    }
  `]
})
export class YoloDisplayComponent {
  @Input() set count(value: number) {
    this.yoloArray = Array(value).fill(null);
  }
  yoloArray: any[] = [];
}