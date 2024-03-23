import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { createTask, deleteTask, updateStatusTask } from './taskGateway';
import { connect } from 'react-redux';
import * as tasksAction from './tasks.actions';
import { tasksSelectors } from './tasks.selectors';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }
  onTaskCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.onFetchTasks());
  };
  onTaskDelete = id => {
    deleteTask(id).then(() => this.onFetchTasks());
  };
  onTaskStatusUpdate = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateStatusTask(id, updatedTask).then(() => this.onFetchTasks());
  };
  render() {
    const sortedTasks = this.props.tasks.slice().sort((a, b) => a.done - b.done);

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

const mapDispatchToPros = {
  getTasksList: tasksAction.fetchTasksListAC,
};
const mapStateToProps = state => {
  return {
    tasks: tasksSelectors(state),
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(TodoList);
