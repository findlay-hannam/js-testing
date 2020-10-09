const numberLookup = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine'
];

function plainLanguageTime(hour, minute) {
  if (minute === 0) {
    return `${numberLookup[hour]} o'clock`;
  }
  if (minute === 15) {
    return `quarter past ${numberLookup[hour]}`;
  }
  if (minute === 30) {
    return `half past ${numberLookup[hour]}`;
  }
  if (minutes === 45) {
    return `quarter to ${numberLookup[hour + 1]}`
  }
  if (minutes < 30) {
    return `${numberLookup[minute]} minutes past ${numberLookup[hour]}`;
  }
  return `${numberLookup[60 - minute]} to ${numberLookup[hour + 1]}`;
}

module.exports = plainLanguageTime;