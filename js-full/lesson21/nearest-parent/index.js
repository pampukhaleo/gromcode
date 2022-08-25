'use strict';

export const getSection = num => {
  const span = document.querySelector(`span[data-number="${num}"]`)
  const parent = span.parentNode
  return parent.dataset.section
}