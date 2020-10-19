"use strict";
const expect = require("chai").expect;
const add = require("../dist/index").add;

describe("lans test", () => {
  it("is test", () => {
    const result = add(5, 6);
    expect(result).to.equal(12);
  });
});
