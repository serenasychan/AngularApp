import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Serena chan';

  getLetters(): string[] {
    return [...this.name.toUpperCase()];
  }
}
