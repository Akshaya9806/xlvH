export const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const generateId = () =>
  Math.random().toString(36).substring(2, 9);