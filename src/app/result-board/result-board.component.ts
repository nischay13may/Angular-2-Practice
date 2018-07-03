import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-result-board',
  templateUrl: './result-board.component.html',
  styleUrls: ['./result-board.component.css']
})

export class ResultBoardComponent implements OnInit {

  @Input() resultData: any;

  compute(resultData:any) : any {
  	let max=0;
  	let index=-1;
  	for(let i=0;i<resultData.length;i++)
  	{
  		if(resultData[i].marks.Maths>=20 && resultData[i].marks.English>=20 && resultData[i].marks.Science>=20)
  		{
  			let totalSum=resultData[i].marks.Maths+resultData[i].marks.English+resultData[i].marks.Science;
  			if(totalSum>max)
  			{	
  				max=totalSum;
  				index=i;
  			}
  			resultData[i].status="Pass";
  		}
  		else
  		{
  			resultData[i].status="Fail";
  		}
  		
  	}
  	if(index!=-1)
  	{
  		resultData[index].status="Topper";
  	}
    return resultData;

  }
  
  constructor() { this.resultData=this.compute(this.resultData); }

  ngOnInit() {
  }

}
