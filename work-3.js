const names = require('./names.js');
// console.log(names);

// 내용 들어갈 틀 만들어주기
const a = (family, FName) => {
  return `<${family}>${FName}`;
};

const b = () => {
  const c = (name) => {
    if (name === '이연승') {
      return `${a('본인', '본인입니다.')}`;
    } else {
      return `${a('가족', '가족입니다.')}`;
    }
  };

  return `
  ${c('정호연')}
  `;
};

console.log(b());
