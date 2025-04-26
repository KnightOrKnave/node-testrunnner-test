import { DateTime } from 'luxon';
import { randomValue } from './targetRequiredModule.js';

export const targetFunc = () => {
  const t = DateTime.fromJSDate(new Date(2025, 4, 1));
  return {
    status: 'ok',
    code: 200,
    reqTime: t.toFormat('yyyy/MM/dd HH:mm:ss'),
  };
};

export const targetValidationFunc = (input) => {
  const isValid = /^[a-zA-Z]+$/.test(input);
  return isValid;
};

//モックしたい関数が外部
export const targetRandomFunc = () => {
  //randomValueが外部依存で入る
  const inVal = randomValue();
  console.log(inVal);
  if (inVal % 2 === 0) {
    return 'hoge';
  } else {
    return 'huga';
  }
};
