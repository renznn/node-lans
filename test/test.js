/* eslint-disable no-undef */
'use strict';

// mocha 测试
// npm run test-mocha

// const expect = require('chai').expect;
// const add = require('../dist/index').add;

// describe('lans test', () => {
//   it('is test', () => {
//     const result = add(5, 6);
//     expect(result).to.equal(11);
//   });
// });

// jest 测试
// npm run test-jest
import { ss } from '../dist/index';

test('this is jest test', () => {
  // expect(add(1, 2)).toEqual(3);
  ss();
});
