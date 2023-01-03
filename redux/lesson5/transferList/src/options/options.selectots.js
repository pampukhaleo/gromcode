import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const availableListSelectors = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);

export const selectedListSelectors = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);
