/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */

// Tell webpack to compile "bar", necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')([
  'bar',
  'components',
]);

module.exports = withTM();
