const _      = require('lodash');

const regexp = /^(\d{4}\-\d\d\-\d\d([T][\d:\.]*)?)([Z]|([+\-])(\d\d):?(\d\d))?$/;


module.exports = (string) => {
  if (!_.isString(string)) return null;
  const match = string.toUpperCase().match(regexp);
  if (!match[3] || match[3] === 'Z') {
    return 'GMT';
  } else {
    const sign = match[4];
    const hours = parseInt(match[5]);
    return `Etc/GMT${sign === '+' ? '-' : '+'}${hours}`;
  }
};