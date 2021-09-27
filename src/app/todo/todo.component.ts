import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number;
  todo : Todo;
  constructor(private todoService : TodoDataService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    //console.log(this.id);
    this.todo = new Todo(this.id, "", false, new Date);
    if(this.id != -1) {
      this.todoService.retriveTodo("anirudh" ,this.id).subscribe(
        data => this.todo = data
      );
    }
  }


  //i dont have to reasign the values to todo while passing in update because on clicking the update button i coome to todo component and
  // here first method to be called is ngOnInit where i already save id to this.id from uri which is passed.and also i retrive the todo of that 
  //particular id by todo service this.retriveTodo(id).so, i just pass it stragiht as body for the put function in todoDataService.
  saveTodo(){
    if(this.todo.id == -1){
      this.todoService.addTodo("anirudh",this.todo).subscribe(
        data => {
          //console.log(data);
          this.router.navigate(["todos"]);
        }
      );
    }
    else{
      this.todoService.updateTodo("anirudh",this.id,this.todo).subscribe(
        data => {
           //console.log(data);
          this.router.navigate(["todos"]);
        }
      );
    }
  }
  
}
