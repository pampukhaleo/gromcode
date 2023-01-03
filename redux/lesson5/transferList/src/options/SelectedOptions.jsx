import { connect } from 'react-redux';

import { selectedListSelectors } from './options.selectots';
import Options from './Options.jsx';
import { toggleOptions } from './options.actions';

const mapState = state => {
  return {
    options: selectedListSelectors(state),
  };
};

const mapDispatch = {
  moveOption: toggleOptions,
};

export default connect(mapState, mapDispatch)(Options);
