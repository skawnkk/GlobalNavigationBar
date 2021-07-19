export default function checkLength(str) {
  if (str.length < 8) return str;
  str = str.slice(0, 10) + '․․․';
  return str;
}
