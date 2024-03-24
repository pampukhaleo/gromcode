import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { connect } from 'react-redux';
import * as tasksAction from './tasks.actions';
import { sortedTasksListSelector } from './tasksSelector';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  onTaskCreate = text => {
    this.props.createTask(text);
  };

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onTaskCreate={this.onTaskCreate} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onTaskDelete={this.props.deleteTask}
              onTaskStatusUpdate={this.props.updateTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatchToPros = {
  getTasksList: tasksAction.fetchTasksListAC,
  updateTask: tasksAction.updateTaskAC,
  deleteTask: tasksAction.deleteTaskAC,
  createTask: tasksAction.createTaskAC,
};

const mapStateToProps = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(TodoList);
