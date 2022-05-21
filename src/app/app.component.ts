import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  _name: string = '';
  setName(name: string) {
    this._name = name;
  }

  getLetters(): string[] {
    return this._name.length > 0 ? [...this._name.toUpperCase()] : [];
  }
}
