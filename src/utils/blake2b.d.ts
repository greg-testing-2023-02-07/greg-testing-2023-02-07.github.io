declare module blake2b {
  declare namespace blake2b {
      function update(s: Uint8Array): blake2b;
      function digest(): Uint8Array;
  }
}
