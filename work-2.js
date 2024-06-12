const component = () => {
  let obj = {
    name: '이연승',
    age: 30,
    job: '무직',
  };

  let innerFunc = () => {
    if (obj.age > 20) {
      return '여름엔 역시 맥주가 최고지!';
    } else {
      return '여름엔 역시 요구르트가 최고지!';
    }
  };

  let anotherFunc = () => {
    if (obj.job === '무직') {
      return '이 냥반 문제 있네';
    } else {
      return '진실을 알고 있군';
    }
  };

  return `
  <h1>${obj.name}</h1>  
  <h2>${innerFunc}</h2>
  <h3>${anotherFunc}</h3>
  `;
};
