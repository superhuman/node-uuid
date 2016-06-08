var buffer = new Uint8Array(16);
var byteToHex = [];

// Maps for number <-> hex string conversion
for (var i = 0; i < 256; i++) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

// **`v4()` - Generate random UUID**
function v4() {

  crypto.getRandomValues(buffer);

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  buffer[6] = (buffer[6] & 0x0f) | 0x40;
  buffer[8] = (buffer[8] & 0x3f) | 0x80;

  var i = 0;
  return  byteToHex[buffer[i++]] + byteToHex[buffer[i++]] +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] + '-' +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] + '-' +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] + '-' +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] + '-' +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]] +
          byteToHex[buffer[i++]] + byteToHex[buffer[i++]];
}

module.exports.v4 = v4;
