import { connect } from 'react-redux';

import { availableListSelectors } from './options.selectots';
import Options from './Options.jsx';
import { toggleOptions } from './options.actions';

const mapState = state => {
  return {
    options: availableListSelectors(state),
  };
};

const mapDispatch = {
  moveOption: toggleOptions,
};

export default connect(mapState, mapDispatch)(Options);
