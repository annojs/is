#!/usr/bin/env node
var suite = require('suite.js');
var is = require('./annois');

suite(is.defined, [
    'foo', true,
    undefined, false,
    3, true,
    null, true
]);

suite(is.boolean, [
    'foo', false,
    undefined, false,
    true, true,
    false, true,
    4, false
]);

suite(is.number, [
    4, true,
    2.4, true,
    0, true,
    undefined, false,
    false, false,
    'bar', false
]);

suite(is.fn, [
    is.fn, true,
    'foo', false,
    noop, true,
    4, false,
    [], false,
    {}, false
]);

suite(is.array, [
    [], true,
    ['a'], true,
    ['b', 'a'], true,
    false, false,
    'foo', false,
    4, false,
    false, false,
    true, false
]);

suite(is.object, [
    {}, true,
    noop, false,
    false, false,
    true, false,
    [], false,
    'foo', false,
    4, false
]);

suite(is.string, [
    'foo', true,
    'f', true,
    4, false,
    noop, false,
    {}, false,
    [], false
]);

suite(is.any, [
    undefined, true,
    'foo', true,
    4, true,
    noop, true,
    true, true,
    false, true,
    [], true,
    {}, true
]);

suite(is.character, [
    'foo', false,
    'f', true,
    4, false,
    false, false,
    '3', true,
    undefined, false,
    [], false,
    {}, false
]);

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/isNaN
suite(is.nan, [
    NaN, true,
    {}, false,
    undefined, false,
    true, false,
    null, false,
    0, false,
    'foo', false,
    [], false
]);

// TODO: test generators

function noop() {}