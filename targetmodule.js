import { DateTime } from 'luxon';

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
