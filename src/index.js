const plugin = require("tailwindcss/plugin");
const colors = require("./colors");
const spacing = require("./spacing");
const borderRadius = require("./borderRadius");
const borderWidth = require("./borderWidth");
const boxShadow = require("./boxShadow");
const fontFamily = require("./fontFamily");
const fontSize = require("./fontSize");
const fontWeight = require("./fontWeight");
const letterSpacing = require("./letterSpacing");
const lineHeight = require("./lineHeight");
const maxWidth = require("./maxWidth");
const scale = require("./scale");

module.exports = plugin.withOptions(
  function () {
    return function (options) {
      const { addUtilities, addVariant, theme, e, prefix, variants } = options;
    };
  },
  function (options = {}) {
    return {
      theme: {
        colors,
        spacing,
        borderRadius,
        borderWidth,
        boxShadow,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        lineHeight,
        maxWidth,
        scale,
      },
    };
  }
);
