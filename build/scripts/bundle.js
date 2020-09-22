(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checker = require("./Checker.js");

var Cell = /*#__PURE__*/function () {
  function Cell() {
    _classCallCheck(this, Cell);

    this.isRevealed = false;
    this.isBomb = false;
    this.isFlaged = false;
    this.nb = 0;
  }

  _createClass(Cell, [{
    key: "inc",
    value: function inc() {
      this.nb++;
    }
  }, {
    key: "dec",
    value: function dec() {
      this.nb--;
    }
  }, {
    key: "bomb",
    value: function bomb() {
      this.isBomb = true;
    }
  }, {
    key: "unbomb",
    value: function unbomb() {
      this.isBomb = false;
    }
  }, {
    key: "reveal",
    value: function reveal() {
      this.isRevealed = true;
      return this.nb;
    }
  }, {
    key: "toggleReveal",
    value: function toggleReveal() {
      this.isRevealed = !this.isRevealed;
    }
  }, {
    key: "toggleFlag",
    value: function toggleFlag() {
      this.isRevealed = !this.isRevealed;
    }
  }]);

  return Cell;
}();

module.exports = Cell;

},{"./Checker.js":2}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checker = /*#__PURE__*/function () {
  function Checker(paramvalue) {
    var paramname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Checker);

    this.n = paramname;
    this.v = paramvalue;
    this.ok = true;
    this.msg = '';
    return this;
  }

  _createClass(Checker, [{
    key: "required",
    value: function required() {
      if (this.ok && (this.v === undefined || this.v === null)) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " is required");
        this.fire();
      }

      return this;
    }
  }, {
    key: "notEmpty",
    value: function notEmpty() {
      if (this.ok && (this.v.length < 1 || this.v === '')) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " is required");
        this.fire();
      }

      return this;
    }
  }, {
    key: "int",
    value: function int() {
      if (this.ok && !Number.isInteger(this.v)) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " must be an integer");
        this.fire();
      }

      return this;
    }
  }, {
    key: "string",
    value: function string() {
      if (this.ok && !(typeof this.v === 'string' || this.v instanceof String)) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " must be a string");
        this.fire();
      }

      return this;
    }
  }, {
    key: "bool",
    value: function bool() {
      if (this.ok && typeof this.v !== "boolean") {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " must be a boolean value");
        this.fire();
      }

      return this;
    }
  }, {
    key: "def",
    value: function def() {
      if (this.ok && this.v === undefined) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " should not be undefined");
        this.fire();
      }

      return this;
    }
  }, {
    key: "undef",
    value: function undef() {
      if (this.ok && this.v !== undefined) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " should be undefined");
        this.fire();
      }

      return this;
    }
  }, {
    key: "min",
    value: function min(i) {
      if (this.ok && this.v < i) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " must be greater than ").concat(i);
        this.fire();
      }

      return this;
    }
  }, {
    key: "max",
    value: function max(i) {
      if (this.ok && this.v > i) {
        this.ok = false;
        this.msg = "The parameter ".concat(this.n, " must be smaller than ").concat(i);
        this.fire();
      }

      return this;
    }
  }, {
    key: "between",
    value: function between(a, b) {
      return this.min(a).max(b);
    }
  }, {
    key: "fire",
    value: function fire() {
      if (!this.ok && this.msg != '') {
        throw new Error("[MinesweeperJS] ".concat(this.msg));
      }
    }
  }]);

  return Checker;
}();

module.exports = Checker;

},{}],3:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checker = require("./Checker.js");

var Cell = require("./Cell.js");

var minGirdSize = 9;
var maxGirdSize = 1000;

var Grid = /*#__PURE__*/function () {
  // Should handle param errors
  // Every param is optional
  function Grid() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? minGirdSize : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? minGirdSize : _ref$height,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? "Untitled" : _ref$name,
        _ref$nbbombs = _ref.nbbombs,
        nbbombs = _ref$nbbombs === void 0 ? 10 : _ref$nbbombs;

    _classCallCheck(this, Grid);

    // Check parameters
    new Checker(width, 'width')["int"]().between(minGirdSize, maxGirdSize);
    new Checker(height, 'width')["int"]().between(minGirdSize, maxGirdSize);
    new Checker(name, 'name').string().notEmpty();
    new Checker(nbbombs, 'nbbomb')["int"]().min(Math.max(1, Math.floor(width * height / 100)));
    this.width = width;
    this.height = height;
    this.name = name;
    this.nbbombs = nbbombs;
    this.areBombsSet = false;
  }

  _createClass(Grid, [{
    key: "initMap",
    value: function initMap() {
      var _this = this;

      this.map = new Array(this.height).fill(0).map(function () {
        return new Array(_this.width).fill(0).map(function () {
          return new Cell();
        });
      });
      return this;
    }
  }, {
    key: "spawnBombs",
    value: function spawnBombs(clickedX, clickedY) {
      var _this2 = this;

      new Checker(clickedX, 'clickedX').required()["int"]().between(0, maxGirdSize - 1);
      new Checker(clickedY, 'clickedY').required()["int"]().between(0, maxGirdSize - 1);
      new Checker(this.map, 'map').def();
      if (this.areBombsSet) return this;

      var possibilities = _toConsumableArray(Array(this.width * this.height - 1).keys()),
          clickedIndex = clickedY * this.width + clickedX,
          bombsCoords = [],
          tmpBombIndex; // Choose bombs coords


      for (var i = 0; i < this.nbbombs; i++) {
        tmpBombIndex = possibilities.splice(Math.floor(Math.random() * possibilities.length), 1)[0];
        tmpBombIndex = tmpBombIndex == clickedIndex ? this.height * this.width : tmpBombIndex;
        bombsCoords.push(tmpBombIndex);
      } // Avoid bomb on the clicked cell


      tmpBombIndex = bombsCoords.indexOf(clickedIndex);

      if (tmpBombIndex > -1) {
        bombsCoords.splice(tmpBombIndex, 1);
        bombsCoords.push(this.width * this.height);
      } // Add bombs into the map


      bombsCoords.forEach(function (bombIndex) {
        return _this2.addBomb(bombIndex);
      });
      this.bombsSet = true;
      return this;
    }
  }, {
    key: "spawnRdmBombs",
    value: function spawnRdmBombs() {
      new Checker(this.map, 'map').def();
      var x = Math.floor(Math.random() * this.map.length);
      var y = Math.floor(Math.random() * this.map[0].length);
      return this.spawnBombs(x, y);
    }
  }, {
    key: "addBomb",
    value: function addBomb(bombIndex, y) {
      new Checker(this.map, 'map').def();

      if (y !== undefined) {
        new Checker(bombIndex, 'bombIndex').required()["int"]().between(0, this.width - 1);
        new Checker(y, 'y').required()["int"]().min(0).max(this.height - 1);
      } else {
        new Checker(bombIndex, 'bombIndex').required()["int"]().between(0, this.height * this.width - 1);
        new Checker(y, 'y').undef();
      }

      var x = y ? bombIndex : Math.floor(bombIndex / this.height);
      y = y ? y : bombIndex % this.width;

      for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++) {
          if (i >= 0 && j >= 0 && i < this.width && j < this.height && !(i == x && j == y)) {
            this.map[i][j].inc();
          }
        }
      }

      this.map[x][y].bomb();
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      var reveal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      new Checker(reveal, 'reveal').def().bool();
      new Checker(this.map, 'map').def();
      var output = "".concat(this.name, " (").concat(this.width, "x").concat(this.height, ", ").concat(this.nbbombs, " bombs) \n");
      this.map.forEach(function (line) {
        line.forEach(function (c) {
          if (reveal) {
            output += c.isRevealed ? "-" : " ";
          }

          output += c.isBomb ? "x " : c.nb + " ";
        });
        output += "\n";
      });
      console.log(output);
      return this;
    }
  }, {
    key: "reveal",
    value: function reveal(x, y) {
      new Checker(x, 'x')["int"]().min(0).max(this.width - 1);
      new Checker(y, 'y')["int"]().min(0).max(this.height - 1);
      new Checker(this.map, 'map').def();
      if (this.map[y][x].isRevealed) return;
      var nb = this.map[y][x].reveal();

      if (nb == 0) {
        if (x > 0) this.reveal(x - 1, y);
        if (y > 0) this.reveal(x, y - 1);
        if (x < this.width - 1) this.reveal(x + 1, y);
        if (y < this.height - 1) this.reveal(x, y + 1);
      }

      return this;
    }
  }]);

  return Grid;
}();

module.exports = Grid;

},{"./Cell.js":1,"./Checker.js":2}],4:[function(require,module,exports){
"use strict";

var Checker = require('./Checker');

var Cell = require('./Cell');

var Grid = require('./Grid');

console.log("Hello from play-minesweeperjs server v2");
var g = new Checker("me", "me");
console.log(g);
var g2 = new Grid({
  name: "exemple"
}).initMap().show();
module.exports = {
  Checker: Checker,
  Cell: Cell,
  Grid: Grid
};

},{"./Cell":1,"./Checker":2,"./Grid":3}]},{},[4]);
