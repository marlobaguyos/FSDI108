import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';


    constructor(){
        console.log("hello, I'm the constructor");
        var name: string = "Sergio Inzunza";

        name = 9;
    }
}