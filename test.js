import test, { describe, it } from 'node:test';
import assert from 'node:assert';
import { targetFunc, targetValidationFunc } from './targetmodule.js';

test('first test', () => {
  const act = targetFunc();
  console.debug(act);
  assert.strictEqual(act.status, 'ok');
});

//ng skip
test.skip('first ng test', () => {
  const act = targetFunc();
  assert.strictEqual(act.status, 'ng');
});

test('compare json', () => {
  const expect = {
    status: 'ok',
    code: 200,
    reqTime: '2025/05/01 00:00:00',
  };

  const acctual = targetFunc();

  assert.deepEqual(expect, acctual);
});

//deepEqualだと通るが、deepStrigtEqual だと通らない
test.skip('compare json ng', () => {
  const expect = {
    status: 'ok',
    code: 201,
    reqTime: '2025/05/01 00:00:00',
  };

  const acctual = targetFunc();

  assert.deepStrictEqual(expect, acctual);
});

//英字のみのバリデーションテスト
describe('multi loop testdescribe', () => {
  let cases = [
    ['a', true],
    ['aaaaaaaa', true],
    ['abc123', false],
    ['abc-xyz', false],
    ['', false],
  ];

  for (const [input, expResult] of cases) {
    it(`case ${input} should ${expResult}`, () => {
      const actRes = targetValidationFunc(input);
      assert.strictEqual(actRes, expResult);
    });
  }
});
