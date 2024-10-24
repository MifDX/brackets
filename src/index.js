module.exports = function check(str, bracketsConfig) {
  const parentheses = '()';
  const braces = '{}';
  const squareBrackets = '[]';
  const straightBrackets = '||';
  
while (
  str.includes(parentheses) ||
  str.includes(braces) ||
  str.includes(squareBrackets) ||
  str.includes(straightBrackets)) 
  {str = str.replaceAll(parentheses, '')
  .replaceAll(braces, '')
  .replaceAll(squareBrackets, '')
  .replaceAll(straightBrackets, '')
}
return !str;
};