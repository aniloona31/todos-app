import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = "this is my first application"
  name : string ="";
  customMessage : string ="";
  errorMessage : string ="";
  //ActivatedRoute is  the depency we have to inject to pass something as a parameter to next  page.
  constructor( private route:ActivatedRoute, private welcomeService:WelcomeDataService) { }

  ngOnInit(): void {
    //this.message=5 ,it will give error as by type script i defined it as  string.
    // console.log(this.route.snapshot.params["name"])  //route is the variable snapshot is to take the value and params is map and name is its key.
    //console.log(this.message)
    this.name = this.route.snapshot.params["name"];
  }
  

getWelcomeMessage(){
    //console.log("welcom message called");
    this.welcomeService.executableHelloWorldBeanService().subscribe(
      response => this.handleWelcomeMessage(response),
      error => this.handleErrorMessage(error)
    );
    //shows that we got an osrevalble in return to our call

    //console.log("the last line")
    //what we did above is arrow function which calls another function and passes responce to it.
}

  //responce is a variable that stores the responce it gets from subscribe and it passed to another function
  //for handling by an arrow function.
    
  handleWelcomeMessage(response){

    this.customMessage = response.message; 
    //it gets the responce and prints in my console.
    
    //i have created the return type of http.get in service as HelloWorldBean whis is a class
    //that i created there of type the responce would come and than i create a constructor hence 
    //message is variable of that class HelloWorldBean and i can use it here with responce.message.
  }

  handleErrorMessage(error){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);//this prints the message passed back by the api and stored in our class.
    this.errorMessage = error.error.message;
  }

  getWelcomeMessageWithParameter(){
    //console.log("welcom message called");
    this.welcomeService.executableHelloWorlServiceWithPathVariable(this.name).subscribe(
      response => this.handleWelcomeMessage(response),
      error => this.handleErrorMessage(error)
    );
    
}

}
