module.exports = (theme) => ({
  ...theme("colors"),
  default: theme("colors.neutral.300", "currentColor"),
});
