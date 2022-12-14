import { SETLANG } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETLANG:
      return action.payload.languageName;
    default:
      return state;
  }
};

export default languageReducer;
