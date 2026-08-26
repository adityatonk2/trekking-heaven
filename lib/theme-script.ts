/**
 * Runs before first paint (inlined in <body>) so a returning visitor's saved
 * theme choice applies immediately — no flash of the wrong theme. When no
 * choice has been saved, the CSS `prefers-color-scheme` media query handles
 * the default, so this script does nothing and stays silent.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;
