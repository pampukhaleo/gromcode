import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, deleteTask, fetchTasks, updateStatusTask } from './taskGateway';

class TodoList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.onFetchTasks();
  }

  onFetchTasks = () => {
    fetchTasks().then(result =>
      this.setState({
        tasks: result,
      }),
    );
  };

  onTaskCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask)
      .then(() => this.onFetchTasks());
  };

  onTaskDelete = id => {
    deleteTask(id)
      .then(() => this.onFetchTasks());
  };

  onTaskStatusUpdate = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateStatusTask(id, updatedTask)
      .then(() => this.onFetchTasks());
  };

  render() {
    const sortedTasks = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onTaskCreate={this.onTaskCreate} />
        <ul className="list">
          {sortedTasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onTaskDelete={this.onTaskDelete}
              onTaskStatusUpdate={this.onTaskStatusUpdate}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TodoList;
