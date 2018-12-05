import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  percent: number

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.percent = this.ngRedux.getState().percentCompleted
  }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      console.log(this.percent, this.ngRedux.getState().percentCompleted)
      if(this.percent !== this.ngRedux.getState().percentCompleted) this.percent = this.ngRedux.getState().percentCompleted
    })
  }

}
