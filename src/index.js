import plugin from "tailwindcss/plugin";
import spacing from "./spacing";
import colors from "./colors";
import screens from "./screens";
import borderRadius from "./borderRadius";
import borderWidth from "./borderWidth";
import boxShadow from "./boxShadow";
import fontFamily from "./fontFamily";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import letterSpacing from "./letterSpacing";
import lineHeight from "./lineHeight";
import maxWidth from "./maxWidth";
import scale from "./scale";

module.exports = plugin.withOptions(function () {
  return {
    theme: {
      screens,
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
});
