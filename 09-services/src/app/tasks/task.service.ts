import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  deleteTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    console.log('this.tasks BEFORE', this.tasks);
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
    console.log('this.tasks AFTER', this.tasks);
  }
}
