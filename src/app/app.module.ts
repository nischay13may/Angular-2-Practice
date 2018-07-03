import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultBoardComponent } from './result-board/result-board.component';
import { ResultService } from './result.service';


@NgModule({
  declarations: [
    AppComponent,
    ResultBoardComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
