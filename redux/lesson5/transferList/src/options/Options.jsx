import React from 'react';

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(({ name, id }) => {
          return (
            <li key={id}>
              <button className="options__list-item" onClick={() => moveOption(id)}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Options;
