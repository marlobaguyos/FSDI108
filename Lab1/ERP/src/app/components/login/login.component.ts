import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName = '';
  password = '';
  allUsers = [];
  loginError = false;

  constructor(private data: DataService) {
    //get all users
    this.allUsers = data.userList;
  }

  login() {
    //travel the list of users
    //compare each user credentials with values from the form

    var found = false
    for (let i = 0; i < this.allUsers.length; i++){
      var user = this.allUsers[i];
      if(user.userName == this.userName && user.password == this.password){
        console.log("Logged in correctly!");
        found = true;
        this.loginError = false;
      }
      else{}
    }
    if(!found){
      console.error("Wrong credentials!!");
      this.loginError = true;
    }
  }

}
