module.exports = {
  "env": {
    "es6": true,
    "commonjs": true,
    "browser": true,
    "node": true,
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
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".sass"],
        "moduleDirectory": ['node_modules', 'src/'],
      }
    },
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "spaced-comment": 0,
    "no-underscore-dangle": 0,
    "trailing-comma": 0,
    "import/prefer-default-export": "off",
  }
};
