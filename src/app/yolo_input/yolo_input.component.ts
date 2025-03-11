import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yolo-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <label for="yoloCount">Nombre de YOLO : </label>
      <input
        id="yoloCount"
        type="number"
        [(ngModel)]="count"
        min="0"
        (change)="updateCount()"
      />
    </div>
  `,
  styles: [`
    div {
      margin: 20px;
    }
    input {
      margin-left: 10px;
      padding: 5px;
    }
  `]
})
export class YoloInputComponent {
  count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  updateCount() {
    this.countChange.emit(this.count);
  }
}