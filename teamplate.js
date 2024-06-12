const day = require('./date.js');
// console.log(day);

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  const today = (textNode) => {
    if (textNode === day) {
      return `${tagComponent('h1', '오늘의 날짜와 같음')}`;
    } else {
      return `${tagComponent('h1', '오늘의 날짜와 다름')}`;
    }
  };

  return `
    ${today(12)}
    ${today(13)}
  `;
};
console.log(container());
