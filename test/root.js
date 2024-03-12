const fs = require('fs');
const jsdom = require('jsdom-global');

const path = require('path');
const chai = require('chai');

const { name, height, message } = require('../index.js');

const expect = chai.expect;

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Joe"', () => {
      expect(name).to.equal('Joe');
    });
  });

  describe('Height', () => {
    it('is 74', () => {
      expect(height).to.equal(74);
    });
  });

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).to.match(new RegExp(`${name} is ${height} inches tall`));
    });
  });
});
