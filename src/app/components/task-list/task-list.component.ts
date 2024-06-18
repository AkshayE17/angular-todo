import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() taskList:any[]=[];
  @Output() important=new EventEmitter<any>();
  @Output() complete=new EventEmitter<any>();
  @Output() notimportant=new EventEmitter<any>();
  @Output() notcomplete=new EventEmitter<any>();
  @Output() delete=new EventEmitter<any>();

  markImportant(task:any){
    this.important.emit(task);
  }

  markComplete(task:any){
    this.complete.emit(task);

  }
  markNotImportant(task:any){
    this.notimportant.emit(task);
  }

 markNotComplete(task:any){
    this.notcomplete.emit(task)
 }

 Delete(task:any){
  this.delete.emit(task)
 }
}
