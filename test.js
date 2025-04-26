import test from 'node:test';
import assert from 'node:assert';
import { targetFunc } from './targetmodule.js';

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
