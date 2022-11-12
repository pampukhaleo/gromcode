import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

class TodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: 'Learn React',
        done: false
      },
      {
        id: 2,
        text: 'Lear HTML / CSS',
        done: true
      }
    ]
  }

  onTaskCreate = text => {
    const { tasks } = this.state
    const newTask = {
      id: Math.random(),
      text,
      done: false
    }
    const updatedTasks = tasks.concat(newTask)
    this.setState({
      tasks: updatedTasks
    })
  }

  onTaskDelete = id => {
    const { tasks } = this.state
    const updatedTasks = tasks
      .filter(task => task.id !== id)

    this.setState({
      tasks: updatedTasks
    })
  }

  onTaskStatusUpdate = id => {
    const { tasks } = this.state
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })

    this.setState({
      tasks: updatedTasks
    })
  }

  render() {
    const sortedTasks = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done)

    return (
      <main className="todo-list">
        <CreateTaskInput onTaskCreate={this.onTaskCreate} />
        <ul className="list">
          {sortedTasks.map(task => (
            <Task key={task.id} {...task}
                  onTaskDelete={this.onTaskDelete}
                  onTaskStatusUpdate={this.onTaskStatusUpdate}/>
          ))}
        </ul>
      </main>
    );
  }
}

export default TodoList;