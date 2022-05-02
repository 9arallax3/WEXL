export function roundUp(num, precision) {
    num = parseFloat(num);
    if (!precision) return num;
    return Math.round(num / precision) * precision;
  }