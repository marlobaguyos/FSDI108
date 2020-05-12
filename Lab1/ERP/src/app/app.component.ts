import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  myName = 'Marlo Baguyos'

  constructor(){
    console.log("hello, I'm the constructor")

    var name: string = "Marlo Baguyos"
    var age: number = 99;
    var found: boolean = false;
    var list: string[] = [];

    this.hello(this.title);

  }

  hello(name){
    console.log(name);
  }

  something(){
    console.log("Btn clicked");
    this.title="Whatever you want";
  }


}
