import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ERP';
    myName = 'Sergio Inzunza';


    constructor(){
        console.log("hello, I'm the constructor");

        var name: string = "Sergio Inzunza";
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