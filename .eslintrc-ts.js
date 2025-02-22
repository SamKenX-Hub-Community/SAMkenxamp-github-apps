/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS-IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  'plugins': [
    '@typescript-eslint',
    'notice',
    'prettier',
    'sort-imports-es6-autofix',
  ],
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-es6.js'
  ],
  "ignorePatterns": [
    "node_modules/",
    "dist/"
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    "ecmaFeatures": {
      "modules": true
    },
  },
  'rules': {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    // Allow function overloading
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // TODO(#1103): Migrate to @typescript-eslint/naming-convention option
    '@typescript-eslint/camelcase': 'off',

    'indent': 'off',
    'no-unused-vars': 'off',
    'semi': 'off',
  },
};
