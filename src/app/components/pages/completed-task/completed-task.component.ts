import { Component ,inject} from '@angular/core';
import { TaskListComponent } from '../../task-list/task-list.component';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [TaskListComponent,PageTitleComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {

  newtask="";
  taskList:any[]=[];
  httpService=inject(HttpService);
  ngOnInit(){
    this.getAllTasks();
  }

   getAllTasks(){
  this.httpService.getAllTasks().subscribe((result:any)=>{
   this.taskList=result.filter((x:any)=>x.complete==true);
  })
   }

   onComplete(task:any){
    task.complete=true;
    console.log("add as complete")
    this.httpService.updateTask(task).subscribe(()=>{

    })
  }

  onImportant(task:any){
 task.important=true;
 console.log("add as important")
 this.httpService.updateTask(task).subscribe(()=>{
      
 })
  }
  onNotComplete(task:any){
    task.complete=false;
    this.httpService.updateTask(task).subscribe(()=>{

    })
  }

  onNotImportant(task:any){
 task.important=false;
 this.httpService.updateTask(task).subscribe(()=>{
      
 })
  }
}
