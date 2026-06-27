export const formatDate = (date) =>
  new Date(date).toLocaleString();

export const formatScore = (score) =>
  `${score}%`;

export const truncateText = (text, length = 120) =>
  text.length > length ? text.slice(0, length) + "..." : text;