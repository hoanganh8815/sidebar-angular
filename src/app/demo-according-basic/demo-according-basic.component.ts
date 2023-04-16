import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-according-basic',
  templateUrl: './demo-according-basic.component.html',
  styleUrls: ['./demo-according-basic.component.css']
})
export class DemoAccordingBasicComponent {
  public log(event:boolean){
    console.log(`According has been ${event ? 'opened': 'closed'}`);
  }
}
