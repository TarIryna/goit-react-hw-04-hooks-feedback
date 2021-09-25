// import { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './Controls.module.css';

export default function Controls({ statNames, onBtnFeedback }) {
  return (
    <div className="container">
      <h1 className={s.title}>Please leave feedback</h1>
      <div className={s.buttonList}>
        {statNames.map(name => (
          <button className={s.button} key={name} onClick={() => onBtnFeedback(name)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
