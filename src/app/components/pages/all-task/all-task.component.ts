import { Component,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,DatePipe,PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
   

   newtask="";
   initialTaskList:any[]=[];
   taskList:any[]=[];
   httpService=inject(HttpService);
   stateService=inject(StateService);
   ngOnInit(){
     this.stateService.searchSubjext.subscribe((value)=>{
     if(value){
      this.taskList=this.initialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLocaleLowerCase()))
     }else{
      this.taskList=this.initialTaskList;
     }
     })
     this.getAllTasks();
   }

   addTask() {
    console.log("addTask", this.newtask);
    this.httpService.addTask(this.newtask).subscribe(() => {
      this.newtask = ""; // Clear the input field
      this.getAllTasks(); // Re-fetch the updated list of tasks
    });
  }
  

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.initialTaskList = this.taskList = result;
    });
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

    onDelete(task: any) {
      this.httpService.deleteTask(task.id).subscribe(() => {
        this.taskList = this.taskList.filter(t => t.id !== task.id);
        this.initialTaskList = this.initialTaskList.filter(t => t.id !== task.id);
      }, error => {
        console.error('Failed to delete task:', error);
      });
    }
}
