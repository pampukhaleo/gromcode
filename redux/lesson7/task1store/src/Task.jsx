import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, onTaskDelete, onTaskStatusUpdate }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onTaskStatusUpdate(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onTaskDelete(id)}></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  onTaskDelete: PropTypes.func,
  onTaskStatusUpdate: PropTypes.func,
};

export default Task;
