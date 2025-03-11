import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-yt',
  imports: [],
  templateUrl: './button-yt.component.scss.component.html',
  styleUrl: './button-yt.component.scss.component.css'
})
export class ButtonYtComponentScssComponent {
  @Input() text: string = 'Button';
  @Output() onclick = new EventEmitter<void>();

  handleClick() {
    this.onclick.emit();
  }
}
