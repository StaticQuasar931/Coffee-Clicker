const assert = require('assert');
const { formatNumber } = require('../format');

assert.strictEqual(formatNumber(12345), '12,345');
console.log('formatNumber test passed');
