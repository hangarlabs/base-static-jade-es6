(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesExample = require("./modules/example");

var _modulesExample2 = _interopRequireDefault(_modulesExample);

// jQuery DOM Ready
$(function () {
  'use strict';

  var ex = new _modulesExample2['default']('Hangar Example');
  ex.speak();
});

},{"./modules/example":2}],2:[function(require,module,exports){
//imports/Example .js

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = (function () {
  function Example(name) {
    _classCallCheck(this, Example);

    this.name = name;
  }

  _createClass(Example, [{
    key: "speak",
    value: function speak() {
      console.warn(this.name);
    }
  }]);

  return Example;
})();

module.exports = Example; //set what can be imported from this file

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9yZ2VoL0RvY3VtZW50cy9oYW5nYXIvbm9uLWNtL2JiZG8tbnkvaHVtYW5hL3Byb2plY3QvYXBwL2Fzc2V0cy9lczYvbWFpbi5qcyIsIi9Vc2Vycy9qb3JnZWgvRG9jdW1lbnRzL2hhbmdhci9ub24tY20vYmJkby1ueS9odW1hbmEvcHJvamVjdC9hcHAvYXNzZXRzL2VzNi9tb2R1bGVzL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7Ozs7OEJBQ08sbUJBQW1COzs7OztBQUd2QyxDQUFDLENBQUMsWUFBTTtBQUNOLGNBQVksQ0FBQzs7QUFFYixNQUFJLEVBQUUsR0FBRyxnQ0FBWSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLElBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNaLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUNQRyxPQUFPO0FBQ0MsV0FEUixPQUFPLENBQ0UsSUFBSSxFQUFFOzBCQURmLE9BQU87O0FBRVQsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7R0FDbEI7O2VBSEcsT0FBTzs7V0FLTCxpQkFBRztBQUNQLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7U0FQRyxPQUFPOzs7QUFXYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcblxuLy8galF1ZXJ5IERPTSBSZWFkeVxuJCgoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgZXggPSBuZXcgRXhhbXBsZSgnSGFuZ2FyIEV4YW1wbGUnKTtcbiAgZXguc3BlYWsoKTtcbn0pO1xuIiwiLy9pbXBvcnRzL0V4YW1wbGUgLmpzXG5cbmNsYXNzIEV4YW1wbGUge1xuICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzcGVhayAoKSB7XG4gICAgY29uc29sZS53YXJuKHRoaXMubmFtZSk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlXG4iXX0=
