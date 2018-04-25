const creditCardDetector = {
  blocks: {
    amex: [4, 6, 5],
    mastercard: [4, 4, 4, 4],
    visa: [4, 4, 4, 4],
    general: [4, 4, 4, 4],
  },
  re: {
    // starts with 34/37; 15 digits
    amex: /^3[47]\d{0,13}/,

    // starts with 51-55/2221–2720; 16 digits
    mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

    // starts with 4; 16 digits
    visa: /^4\d{0,15}/,
  },
};

export function getFormattedExpiryDate(value) {
  return value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      '0$1/', // To handle 3/ > 03/
    )
    .replace(
      /^(0[1-9]{1}|1[0-2]{1})$/g,
      '$1/', // 11 > 11/
    )
    .replace(
      /^([0-1]{1})([3-9]{1})$/g,
      '0$1/$2', // 13 > 01/3
    )
    .replace(
      /^(\d)\/(\d\d)$/g,
      '0$1/$2', // To handle 1/11 > 01/11
    )
    .replace(
      /^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g,
      '$1/$2', // 141 > 01/41
    )
    .replace(
      /^([0]{1,})\/|[0]{1,}$/g,
      '0', // To handle 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]{0,}$/g,
      '', // To allow only numbers and /
    )
    .replace(
      /\/\//g,
      '/', // Prevent entering more than 1 /
    );
}

export function getFormattedValue(value, blocks, blocksLength, delimiter) {
  let result = '';

  if (blocksLength === 0) {
    return value;
  }

  blocks.forEach(function(length, index) {
    if (value.length > 0) {
      let sub = value.slice(0, length),
        rest = value.slice(length);

      result += sub;
      if (sub.length === length && index < blocksLength - 1) {
        result += delimiter;
      }

      // update remaining string
      value = rest;
    }
  });

  return result;
}

export function getCreditCardInfo(value) {
  let {blocks, re} = creditCardDetector;

  for (let key in re) {
    if (re[key].test(value)) {
      let block = blocks[key];
      return {
        type: key,
        blocks: block,
      };
    }
  }
  return {
    type: 'unknown',
    blocks: blocks.general,
  };
}
