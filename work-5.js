const age = require('./age.js');
// console.log(age);

// 틀 만들어주기
const a = (peopleAge, count) => {
  return `${peopleAge}${count}`;
};

const b = () => {
  const c = (Age) => {
    if (Age > '3') {
      return a(Age, '3보다 큽니다.');
    } else {
      return a(Age, '3보다 작습니다.');
    }
  };
  return `
  ${c('1')}
  `;
};

console.log(b());
