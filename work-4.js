let petnames = require('./petnames.js');
// console.log(petnames);

const a = (category, names) => {
  return `${category}${names}`;
};

const b = () => {
  const c = (pname) => {
    if (pname === '똘망이') {
      return `${a('강아지', '강아지입니다.')}`;
    }
    if (pname === '상근이') {
      return `${a('강아지', '상근이입니다.')}`;
    } else {
      return `${a('고양이', '고양이입니다.')}`;
    }
  };
  return `${c('')}`;
};

console.log(b());
