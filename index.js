var gonzales = require('gonzales-pe');

module.exports = function (text, syntax) {
  // Make sure GPE is loaded.
  console.log('Check GPE is ok.');
  // Should output an object with three functions.
  console.log(gonzales);
  // Should output function's content.
  console.log(gonzales.cssToAST.toString());

  text = text.toString();

  // Should return parse tree.
  return gonzales.cssToAST({css: text, syntax: syntax});
};
