import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../GetBuffer';

test('ArrayBufferConverter load() should fill buffer with Uint16Array', () => {
  const testArB = new ArrayBufferConverter();
  testArB.load(getBuffer());
  expect(testArB.buffer).toBeInstanceOf(Uint16Array);
});

test('ArrayBufferConverter toString() should throw an Err with empty buffer', () => {
  const testArB = new ArrayBufferConverter();
  expect(() => testArB.toString()).toThrowError('bad data inside');
});

test('ArrayBufferConverter toString() should return string', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const testArB = new ArrayBufferConverter();
  testArB.load(getBuffer());
  expect(testArB.toString()).toBe(data);
});
