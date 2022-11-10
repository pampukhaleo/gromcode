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

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </main>
    );
  }
}

export default TodoList;