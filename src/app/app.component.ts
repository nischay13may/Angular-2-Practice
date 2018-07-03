import { Component } from '@angular/core';
import { Result } from './result-board/result';
import { ResultService } from './result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results: any;
  getStudentResult():void
  {
  	this.resultService.getResult().subscribe((data)=>this.results=data);
  }
  constructor(private resultService: ResultService) { 
  }
}
