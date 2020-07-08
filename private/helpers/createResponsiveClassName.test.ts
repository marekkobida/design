import decodeClassName from './decodeClassName';
import decodeResponsiveClassName from './decodeResponsiveClassName';

test('without the "right"', () => {
  // expect([ ...createResponsiveClassName('a'), ]).toStrictEqual([]);
});

test('array', () => {
  expect(decodeClassName([ 1, 2, [ 1, ], ], 3, '4')).toStrictEqual('1 2 1 3 4');
});

test('number', () => {
  expect(decodeClassName(1, 2)).toStrictEqual('1 2');
});

test('object', () => {
  expect(decodeClassName({ a: true, })).toStrictEqual('a');
  expect(decodeClassName({ a: false, })).toStrictEqual('');
  expect(decodeClassName({ a: false,  b: true, })).toStrictEqual('b');
});

test('string', () => {
  expect(decodeClassName('a', 'b')).toStrictEqual('a b');
  expect(decodeClassName('a b')).toStrictEqual('a b');
});

test('ad', () => {
  expect(decodeResponsiveClassName('a')).toStrictEqual([]);
  expect(decodeResponsiveClassName('left-', [ 1, { '#': 2, }, ])).toStrictEqual([ 'left-1', '#left-2', ]);
  expect(decodeResponsiveClassName('left-', { '#': 2, })).toStrictEqual([ '#left-2', ]);
});

test('ad', () => {
  expect(decodeResponsiveClassName('a')).toStrictEqual([]);
  expect(decodeResponsiveClassName('left-', [ 1, { '#': 2, }, ])).toStrictEqual([ 'left-1', '#left-2', ]);
  expect(decodeResponsiveClassName('left-', { '#': 2, })).toStrictEqual([ '#left-2', ]);
});

test('array', () => {
  expect(decodeClassName(3, '4', [ undefined, 1, [ undefined, ], ])).toStrictEqual('3 4 1');
});

test('array', () => {
  expect(decodeClassName(3, '4', [ undefined, 1, [ undefined, '', false, ], ])).toStrictEqual('3 4 1 ');
  expect(decodeClassName('1 2', undefined, '3')).toStrictEqual('1 2 3');
  expect(decodeClassName('1', undefined, '2')).toStrictEqual('1 2');
});

test('ad', () => {
  const a = decodeResponsiveClassName('left-', [ 1, { '#': 2, }, ]);

  console.log('cicka', a);
  expect(a).toStrictEqual([ 'left-1', '#left-2', ]);
});
