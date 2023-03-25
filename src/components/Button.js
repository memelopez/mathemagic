// /src/components/Button.js

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;
  let classes4btn = 'calcBtn';
  if (value === '0') {
    classes4btn = 'calcBtn span2';
  }
  if (value === '+' || value === 'x' || value === '-' || value === '=' || value === '÷') {
    classes4btn = 'calcBtn orangeBtn';
  }
  return (
    <button className={classes4btn} type="button">
      {value}
    </button>
  );
}

Button.defaultProps = {
  value: '-1',
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
