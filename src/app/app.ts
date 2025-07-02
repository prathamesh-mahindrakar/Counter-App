import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'counterApp';

  count = 0;

  counterInc(){
    this.count = this.count+1;
  }

  counterDec(){
    if(this.count > 0){
      this.count = this.count-1;
    }
  }
  
  setInital(){
    this.count = 0;
  }


}
