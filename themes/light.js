/**
 * This is a theme file for 马静's NextJS-based website
 *
 * You can change colors, fonts, and a few other things here.
 * While technically, you can change more, it is not recommended.
 * Best to stick to the examples in this light theme
 *
 * If you want to make your own theme, copy this file to a new name.
 * Then update the index.js to include it, and you're good to go.
 */

/*
 * We're using the TailwindCSS colors.
 * Let's include them so we can reference them by name.
 * For a full list, see: https://tailwindcss.com/docs/customizing-colors
 */
const colors = require('tailwindcss/colors')

module.exports = {
  /* FONTS
   *
   * This will apply to everything except code blocks
   * Note that we're using a system font stack here.
   * That means we're not loading any fonts in the browser,
   * but rather relying on what the user has available locally.
   */
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  /* COLORS
   *
   * These names are a bit 'bootstrap' like, which can be misleading.
   * We don't really use primary and secondary colors, nor do we have
   * a warning color and so on.
   * However, these names are used under the hood by TailwindCSS
   * and DaisyUI, so we're stuck with them.
   *
   * Read the descriptions below to understand what each color is used for.
   */

  // base-100: The default background color for a regular page
  'base-100': colors.stone['50'],
  // base-200: A slightly darker background color, used for hovers and so on
  'base-200': colors.stone['100'],
  // base-300: A shade midway between dark and light
  'base-300': colors.stone['500'],
  // base-content: The default text color for a regular page
  'base-content': colors.stone['700'],

  // primary: The main brand color and color of the primary button
  primary: colors.violet['600'],
  // primary-focus: The :hover color for the primary button
  'primary-focus': colors.violet['500'],
  // primary-content: The text color on a primary button
  'primary-content': colors.violet['50'],

  // secondary: The link color on default backgrounds (base-100)
  secondary: colors.teal['600'],
  // secondary-focus: The :hover link color for default backgrounds. Or:
  // secondary-focus: An alternative link color for on dark backgrounds
  'secondary-focus': colors.teal['500'],
  // secondary-content: The text color on a secondary button
  'secondary-content': colors.teal['50'],

  // accent: The accent color is used to highlight active things
  // Should be something is positive/neutral. Avoid red or orange.
  accent: colors.fuchsia['500'],
  // accent-focus: The :hover color for the accent button
  'accent-focus': colors.fuchsia['600'],
  // accent-content: The text color for the accent button
  'accent-content': colors.fuchsia['50'],

  // neutral: Used as the background for the footer and navigation on desktop
  // Should always be dark
  neutral: colors.stone['800'],
  // neutral-focus: Typically a shade lighter than neutral
  'neutral-focus': colors.stone['700'],
  // neutral-content: The text color on neutral backgrounds
  'neutral-content': colors.stone['50'],

  // info: Used rarely, can be another color best somewhat neutral looking
  // and should work with the default text color
  info: colors.sky['500'],
  // Text color on the info button
  '--btn-info-content': colors.sky[50],
  // success: Used rarely, but if it is it's in notifications indicating success
  // Typically some shade of green
  success: colors.green['600'],
  // Text color on the success button
  '--btn-success-content': colors.stone[50],
  // warning: Used rarely, but if it is it's in notifications indicating a warning
  // Typically some shade of orange
  warning: colors.orange['500'],
  // Text color on the warning button
  '--btn-warning-content': colors.stone[50],
  // error: Used rarely, but if it is it's in notifications indicating success
  // or the danger button
  // Typically some shade of red
  error: colors.red['600'],
  // Text color on the error button
  '--btn-error-content': colors.stone[50],

  /* THEME GRADIENT
   *
   * This is used as a border & loading indicator
   */
  '--theme-gradient': `repeating-linear-gradient(
    90deg,
    ${colors.red[400]} 0,
    ${colors.orange[400]} 11%,
    ${colors.yellow[400]} 22%,
    ${colors.lime[400]} 33%,
    ${colors.green[400]} 44%,
    ${colors.cyan[400]} 55%,
    ${colors.blue[400]} 66%,
    ${colors.indigo[400]} 77%,
    ${colors.violet[400]} 88%,
    ${colors.purple[400]} 100%
  )`,

  /* VARIOUS
   *
   * These are additional variables to control other aspects of the theme
   */
  // border-radius for cards and other big elements
  '--rounded-box': '0.5rem',
  // border-radius for buttons and similar elements
  '--rounded-btn': '0.5rem',
  // border-radius for badges and other small elements
  '--rounded-badge': '1.9rem',
  // bounce animation time for button
  '--animation-btn': '0.25s',
  // bounce animation time for checkbox, toggle, etc
  '--animation-input': '.4s',
  // default card-body padding
  '--padding-card': '2rem',
  // default text case for buttons
  '--btn-text-case': 'uppercase',
  // default padding for navbar
  '--navbar-padding': '.5rem',
  // default border size for button
  '--border-btn': '1px',
  // focus ring size for button and inputs
  '--focus-ring': '2px',
  // focus ring offset size for button and inputs
  '--focus-ring-offset': '2px',

}
