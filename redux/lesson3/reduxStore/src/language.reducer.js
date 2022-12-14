import { SETLANG } from './language.actions';

const initialState = {
  language: 'en',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLANG:
      return {
        language: action.payload.languageName,
      };
    default:
      return state;
  }
};

export default languageReducer;
