export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(input) {
    this.buffer = new Uint16Array(input);
  }

  toString() {
    try {
      return String.fromCharCode(...this.buffer);
    } catch (err) {
      throw new Error('bad data inside');
    }
  }
}
