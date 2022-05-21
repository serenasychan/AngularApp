import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TileComponent } from '../components/tile/tile.component';
import { TileWriterComponent } from '../components/tile-writer/tile-writer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, TileComponent, TileWriterComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
