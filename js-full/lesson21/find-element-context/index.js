'use strict'

export const getTitle = () => {
  const title = document.querySelector('.title')
  return title.textContent
}

console.log(getTitle());

export const getDescription = () => {
  const description = document.querySelector('.about')
  return description.innerHTML
}

console.log(getDescription());

export const getPlans = () => {
  const plans = document.querySelector('.plans')
  return plans.innerHTML
}

export const getGoal = () => {
  const goal = document.querySelector('.goal')
  return goal.outerHTML
}