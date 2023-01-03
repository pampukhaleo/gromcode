export const NEXT = 'USERS/NEXT';
export const PREV = 'USERS/PREV';

export const goNext = () => ({
  type: NEXT,
});

export const goPrev = () => ({
  type: PREV,
});
