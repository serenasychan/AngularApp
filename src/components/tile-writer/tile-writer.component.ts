import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tile-writer',
  templateUrl: './tile-writer.component.html',
  styleUrls: ['./tile-writer.component.css'],
})
export class TileWriterComponent implements OnInit {
  name = new FormControl('');

  @Output() textInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.name.valueChanges.subscribe((val) => this.textInput.emit(val));
    this.name.setValue('hello world');
  }
}
