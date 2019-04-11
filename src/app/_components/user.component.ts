import {ActivatedRoute, Router} from "@angular/router";
import {User} from "@app/_models";
import {UserService} from "@app/_services";
import {UserInterface} from "@app/_interfaces";

export class UserComponent {

  public userServ: UserService;
  public userComponent: UserComponent;
  public userInterface: UserInterface;

  public getUser(username: string) {
    // No Subscription
    this.userServ.getByName(username).subscribe((data: User) => this.userInterface =
      {username: data['username'],
        password: data['password']});
    console.log("test!");

  }

  public showUser(){
    this.userServ.getName().subscribe((data: User) => this.userInterface = {username: data['username'],
      password: data['password']})

  }
}
