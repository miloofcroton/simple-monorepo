/* eslint-disable @typescript-eslint/no-var-requires */

// Tell webpack to compile "bar", necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')([
  'bar',
]);

module.exports = withTM();
