export const TOGGLE_OPTIONS = 'OPTIONS/TOGGLE_OPTIONS';

export const toggleOptions = optionsId => {
  return {
    type: TOGGLE_OPTIONS,
    payload: {
      optionsId,
    },
  };
};
