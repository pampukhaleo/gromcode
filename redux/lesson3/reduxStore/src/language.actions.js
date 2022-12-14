export const SETLANG = 'LANGUAGE_SET';

export const setLanguage = languageName => ({
  type: SETLANG,
  payload: {
    languageName,
  },
});
