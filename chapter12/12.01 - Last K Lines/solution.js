const path = require('path');
const fs = require('fs');
const readline = require('readline');

const printLastKLines = async (file, k) => {
  const buffer = Array(k).fill(null);
  let size = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    buffer[size % k] = line;
    size += 1;
  }

  const start = size > k ? size % k : 0;
  const count = Math.min(size, k);

  for (let i = 0; i < count; i++) {
    console.log(buffer[(start + i) % k]);
  }
};

// TESTS

printLastKLines(path.join(__dirname, 'input.txt'), 2);
