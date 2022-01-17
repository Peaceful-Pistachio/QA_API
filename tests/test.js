const server = require('../server.js');
let testServer = server.app.listen(3001);
const supertest = require('supertest');
const assert = require('assert');
const express = require('express');

const request = supertest(testServer);
const db = require('../model);

describe('Basic testing of tests and server:', () => {

  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })
})