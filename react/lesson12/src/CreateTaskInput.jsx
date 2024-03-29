import React from "react";
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleCreateBtnClick = () => {
    this.props.onTaskCreate(this.state.value)
  }

  render() {
    return (
      <div className="create-task">
        <input className="create-task__input"
               type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <button className="btn create-task__btn" onClick={this.handleCreateBtnClick}>Create</button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onTaskCreate: PropTypes.func
}

export default CreateTaskInput;
