import createClassName from './createClassName';
import createResponsiveClassName from './createResponsiveClassName';

test('without the "right"', () => {
  // expect([ ...createResponsiveClassName('a'), ]).toStrictEqual([]);
});

test('array', () => {
  expect(createClassName([ 1, 2, [ 1, ], ], 3, '4')).toStrictEqual('1 2 1 3 4');
});

test('number', () => {
  expect(createClassName(1, 2)).toStrictEqual('1 2');
});

test('object', () => {
  expect(createClassName({ a: true, })).toStrictEqual('a');
  expect(createClassName({ a: false, })).toStrictEqual('');
  expect(createClassName({ a: false,  b: true, })).toStrictEqual('b');
});

test('string', () => {
  expect(createClassName('a', 'b')).toStrictEqual('a b');
  expect(createClassName('a b')).toStrictEqual('a b');
});

test('ad', () => {
  expect(createResponsiveClassName('a')).toStrictEqual([]);
  expect(createResponsiveClassName('left-', [ 1, { '#': 2, }, ])).toStrictEqual([ 'left-1', '#left-2', ]);
  expect(createResponsiveClassName('left-', { '#': 2, })).toStrictEqual([ '#left-2', ]);
});

test('ad', () => {
  expect(createResponsiveClassName('a')).toStrictEqual([]);
  expect(createResponsiveClassName('left-', [ 1, { '#': 2, }, ])).toStrictEqual([ 'left-1', '#left-2', ]);
  expect(createResponsiveClassName('left-', { '#': 2, })).toStrictEqual([ '#left-2', ]);
});

test('array', () => {
  expect(createClassName(3, '4', [ undefined, 1, [ undefined, ], ])).toStrictEqual('3 4 1');
});

test('array', () => {
  expect(createClassName(3, '4', [ undefined, 1, [ undefined, '', false, ], ])).toStrictEqual('3 4 1 ');
  expect(createClassName('1 2', undefined, '3')).toStrictEqual('1 2 3');
  expect(createClassName('1', undefined, '2')).toStrictEqual('1 2');
});
