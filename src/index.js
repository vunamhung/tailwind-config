const plugin = require("tailwindcss/plugin");
const colors = require("./colors");
const spacing = require("./spacing");
const borderRadius = require("./borderRadius");
const borderColor = require("./borderColor");
const borderWidth = require("./borderWidth");
const boxShadow = require("./boxShadow");
const fontFamily = require("./fontFamily");
const fontSize = require("./fontSize");
const fontWeight = require("./fontWeight");
const letterSpacing = require("./letterSpacing");
const lineHeight = require("./lineHeight");
const maxWidth = require("./maxWidth");
const minWidth = require("./minWidth");
const maxHeight = require("./maxHeight");
const minHeight = require("./minHeight");
const scale = require("./scale");
const zIndex = require("./zIndex");

module.exports = plugin.withOptions(
  function () {
    return function (options) {
      const { addUtilities, addVariant, theme, e, prefix, variants } = options;

      const escape = e || ((x) => x);
      const pseudoElements = [
        "after",
        "backdrop ",
        "before",
        "cue",
        "first-letter",
        "first-line",
        "grammar-error ",
        "marker ",
        "placeholder ",
        "selection",
      ];
      pseudoElements.forEach((pseudo) => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`;
          });
        });
      });

      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });

      addUtilities(
        {
          ".empty-content": {
            content: "''",
          },
        },
        ["before"]
      );
      addUtilities(
        {
          ".col-span-full": {
            "grid-column": "1 / -1",
          },
        },
        ["responsive"]
      );
      addUtilities(
        {
          ".hide": {
            display: "none",
          },
          ".show": {
            display: "block",
          },
        },
        ["responsive", "important"]
      );
    };
  },
  function (options = {}) {
    return {
      theme: {
        colors,
        spacing,
        borderRadius,
        borderColor,
        borderWidth,
        boxShadow,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        lineHeight,
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        scale,
        zIndex,
      },
    };
  }
);
