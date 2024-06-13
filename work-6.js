const shop = require('./shop.js');
// console.log(shop);

// 틀 만들어주기

let a = (tag, product) => {
  return `<${tag}>${product}</${tag}>`;
};

let b = () => {
  let c = (PName) => {
    if (PName === '연필') {
      return a('h1', '연필입니다');
    } else {
      return a('h2', '연필이아닙니다');
    }
  };
  return `${c('연필')}`;
};

console.log(b());
