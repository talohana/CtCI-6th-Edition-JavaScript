const smalls = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];

const tens = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];

const bigs = ['', 'Thousand', 'Million', 'Billion'];

const hundred = 'Hundred';

const negative = 'Negative';

function convert(num) {
  if (num === 0) {
    return smalls[0];
  } else if (num < 0) {
    return negative + ' ' + convert(-1 * num);
  }

  const parts = [];
  let chunkCount = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      const chunk = convertChunk(num % 1000) + ' ' + bigs[chunkCount];

      parts.unshift(chunk);
    }

    num = Math.floor(num / 1000);
    chunkCount++;
  }

  return parts.join(', ');
}

function convertChunk(num) {
  const parts = [];

  if (num >= 100) {
    parts.push(smalls[Math.floor(num / 100)]);
    parts.push(hundred);
    num %= 100;
  }

  if (num >= 10 && num <= 19) {
    parts.push(smalls[num]);
  } else if (num >= 20) {
    parts.push(tens[Math.floor(num / 10)]);
    num %= 10;
  }

  if (num >= 1 && num <= 9) {
    parts.push(smalls[num]);
  }

  return parts.join(' ');
}

// TESTS

console.log(convert(1005));

console.log(convert(-58255));

console.log(convert(1000723));

console.log(convert(93010723));

console.log(convert(1993010723));

console.log(convert(-1993010723));
