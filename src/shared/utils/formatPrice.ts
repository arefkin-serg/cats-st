const DECORATION_SUM_IF_PRICE_LESS = 9007199254740992;
const SEPARATE_AFTER = 3;
const FLOAT_PART_LENGTH = 2;

export const formatPrice = (price: number, minValueWhenDecorate = DECORATION_SUM_IF_PRICE_LESS): string => {
  const [intPart, floatPart] = `${price / 100}`.split('.');
  return `${decorateIntPart(intPart)}${normalizeFloatPart(floatPart, price < minValueWhenDecorate)}`;
};

const decorateIntPart = (v: string): string => {
  // eslint-disable-next-line functional/immutable-data
  return v
    .split('')
    .reverse()
    .map((item, index) => `${item}${index > 0 && index % SEPARATE_AFTER === 0 ? ',' : ''}`)
    .reverse()
    .join('');
};

const normalizeFloatPart = (v: string | undefined, shouldAddZero = false): string => {
  if (!v && shouldAddZero) {
    return `.00`;
  }

  if (!v) {
    return ``;
  }

  if (v.length === 1) {
    return `.${v}0`;
  }

  if (v.length > FLOAT_PART_LENGTH) {
    return `${v[0]}${v[1]}`;
  }

  return `.${v}`;
};
