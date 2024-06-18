import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   
  httpClient=inject(HttpClient)
  constructor() { }
  
  addTask(task:string){
    return  this.httpClient.post("http://localhost:3000/task",{
       title:task
     })
 }

 getAllTasks(){
  return this.httpClient.get("http://localhost:3000/task")
 }

 updateTask(task:any){
  return this.httpClient.put("http://localhost:3000/task/"+task.id,task)
 }

 deleteTask(taskId: string) {
  const url = `http://localhost:3000/task/${taskId}`;
  return this.httpClient.delete(url).pipe(
    catchError(error => {
      console.error('There was an error!', error);
      return throwError(error);
    })
  );
}
}
