module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["airbnb", "prettier","prettier/react"],
  "plugins": [
    "react",
  ],
  "rules": {
    "spaced-comment": 0,
    "no-underscore-dangle": 0,
    "trailing-comma": 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": 'webpack.config.js'
      }
    }
  }
};
