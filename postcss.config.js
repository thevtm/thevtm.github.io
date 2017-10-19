/*
 *      ____             __  ________________
 *     / __ \____  _____/ /_/ ____/ ___/ ___/
 *    / /_/ / __ \/ ___/ __/ /    \__ \\__ \
 *   / ____/ /_/ (__  ) /_/ /___ ___/ /__/ /
 *  /_/    \____/____/\__/\____//____/____/
 */

module.exports = {
  parser: 'sugarss',

  plugins: {
    'postcss-import': { },
    'postcss-cssnext': { },
    'postcss-nested': { },
    'postcss-simple-vars': { },
    'cssnano': { }
  }
}
