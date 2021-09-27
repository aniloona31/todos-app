import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
} //create class todo here each variable passed as argument is now a  member variable of the class.

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
    // todos = [
    //   new Todo(1, "to learn cpp", false, new Date() ),
    //   new Todo(2, "to learn eee", false, new Date() ),
    //   new Todo(3, "to learn maths", false, new Date() )
    //   // { id : 1, description : "to learn cpp" },
    //   // { id : 2, description : "to do eee" },
    //   // { id : 3, description : "to do maths" }
    // ]
  
  constructor(private todoService : TodoDataService, private route : Router) { }

  message : string = "";
  ngOnInit(): void {
    this.refreshData();
  }

  deleteTodo(id : number){
    //console.log(`delete todo ${id}called`);
    this.todoService.deleteTodo("anirudh",id).subscribe(
      response => {
        //console.log(response);
        this.message = "Delete Succesfull";
        this.refreshData();
      }
    );
    // this.refreshData();
  }

  updateTodo(id) { 
    //console.log("update called");
    this.route.navigate(["todo",id]);
  }

  refreshData(){
    this.todoService.retriveAllData("anirudh").subscribe(
      response => {
        //console.log("i got  my todos from api.");
        //console.log(response);
        this.todos = response;
        //console.log(this.todos);
        //console.log(this.todos.length);
        //console.log(typeof this.todos);
      }
    );
  }

  addNewTodo(){
    this.route.navigate(["todo",-1]);
  }
}
