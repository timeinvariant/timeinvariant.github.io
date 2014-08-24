(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var $ = require("jquery");
var _ = require("lodash");
var printf = require("printf");
var angular = require("angular");

var MAX_WORDS = 100;

function SearchController($scope, $timeout, dataProvider) {
	var that = this;

	var words;

	this.searchText = "";

	dataProvider.getData().then(function(data) {
		words = data;

		init();
	});

	function init() {
		that.getResults = function() {
			var target;
			var targetLength;

			if (that.searchText.indexOf("starts with ") === 0) {
				target = that.searchText.replace("starts with ", "");

				return _.first(_.where(words, function(word) {
					return word.indexOf(target) === 0;
				}), MAX_WORDS);
			}

			if (that.searchText.indexOf("ends with ") === 0) {
				target = that.searchText.replace("ends with ", "");
				targetLength = target.length;

				return _.first(_.where(words, function(word) {
					return word.indexOf(target, word.length - targetLength) !== -1;
				}), MAX_WORDS);
			}

			return _.first(_.where(words, function(word) {
				return word.indexOf(that.searchText) > -1;
			}), MAX_WORDS);
		};
	}
}

SearchController.$inject = ["$scope", "$timeout", "WordDataProvider"];

angular
	.module("word-search")
	.controller("SearchController", SearchController);
},{"angular":false,"jquery":false,"lodash":"9TlSmm","printf":"NMp+Hb"}],2:[function(require,module,exports){
"use strict";

var $ = require("jquery");
var _ = require("lodash");
var angular = require("angular");

function WordDataProvider($q) {
	this.getData = function() {
		var deferred = $q.defer();

		$.getJSON("words.json", function(data) {
			deferred.resolve(data.words);
		});

		return deferred.promise;
	};
}

WordDataProvider.$inject = ["$q"];

angular
	.module("word-search")
	.service("WordDataProvider", WordDataProvider);
},{"angular":false,"jquery":false,"lodash":"9TlSmm"}],3:[function(require,module,exports){
"use strict";

var angular = require("angular");

var app = angular.module("word-search", []);

app.config(function() {	
});

app.run(function() {
});
},{"angular":false}]},{},[3,1,2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx3b3JkLXNlYXJjaFxcbm9kZV9tb2R1bGVzXFxncnVudC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L2NvZGUvd29yZC1zZWFyY2gvc3JjL2pzL1NlYXJjaENvbnRyb2xsZXIuanMiLCJEOi9jb2RlL3dvcmQtc2VhcmNoL3NyYy9qcy9Xb3JkRGF0YVByb3ZpZGVyLmpzIiwiRDovY29kZS93b3JkLXNlYXJjaC9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG52YXIgcHJpbnRmID0gcmVxdWlyZShcInByaW50ZlwiKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcclxuXHJcbnZhciBNQVhfV09SRFMgPSAxMDA7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hDb250cm9sbGVyKCRzY29wZSwgJHRpbWVvdXQsIGRhdGFQcm92aWRlcikge1xyXG5cdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0dmFyIHdvcmRzO1xyXG5cclxuXHR0aGlzLnNlYXJjaFRleHQgPSBcIlwiO1xyXG5cclxuXHRkYXRhUHJvdmlkZXIuZ2V0RGF0YSgpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0d29yZHMgPSBkYXRhO1xyXG5cclxuXHRcdGluaXQoKTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRcdHRoYXQuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGFyZ2V0O1xyXG5cdFx0XHR2YXIgdGFyZ2V0TGVuZ3RoO1xyXG5cclxuXHRcdFx0aWYgKHRoYXQuc2VhcmNoVGV4dC5pbmRleE9mKFwic3RhcnRzIHdpdGggXCIpID09PSAwKSB7XHJcblx0XHRcdFx0dGFyZ2V0ID0gdGhhdC5zZWFyY2hUZXh0LnJlcGxhY2UoXCJzdGFydHMgd2l0aCBcIiwgXCJcIik7XHJcblxyXG5cdFx0XHRcdHJldHVybiBfLmZpcnN0KF8ud2hlcmUod29yZHMsIGZ1bmN0aW9uKHdvcmQpIHtcclxuXHRcdFx0XHRcdHJldHVybiB3b3JkLmluZGV4T2YodGFyZ2V0KSA9PT0gMDtcclxuXHRcdFx0XHR9KSwgTUFYX1dPUkRTKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoYXQuc2VhcmNoVGV4dC5pbmRleE9mKFwiZW5kcyB3aXRoIFwiKSA9PT0gMCkge1xyXG5cdFx0XHRcdHRhcmdldCA9IHRoYXQuc2VhcmNoVGV4dC5yZXBsYWNlKFwiZW5kcyB3aXRoIFwiLCBcIlwiKTtcclxuXHRcdFx0XHR0YXJnZXRMZW5ndGggPSB0YXJnZXQubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gXy5maXJzdChfLndoZXJlKHdvcmRzLCBmdW5jdGlvbih3b3JkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gd29yZC5pbmRleE9mKHRhcmdldCwgd29yZC5sZW5ndGggLSB0YXJnZXRMZW5ndGgpICE9PSAtMTtcclxuXHRcdFx0XHR9KSwgTUFYX1dPUkRTKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIF8uZmlyc3QoXy53aGVyZSh3b3JkcywgZnVuY3Rpb24od29yZCkge1xyXG5cdFx0XHRcdHJldHVybiB3b3JkLmluZGV4T2YodGhhdC5zZWFyY2hUZXh0KSA+IC0xO1xyXG5cdFx0XHR9KSwgTUFYX1dPUkRTKTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5TZWFyY2hDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCIkdGltZW91dFwiLCBcIldvcmREYXRhUHJvdmlkZXJcIl07XHJcblxyXG5hbmd1bGFyXHJcblx0Lm1vZHVsZShcIndvcmQtc2VhcmNoXCIpXHJcblx0LmNvbnRyb2xsZXIoXCJTZWFyY2hDb250cm9sbGVyXCIsIFNlYXJjaENvbnRyb2xsZXIpOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG52YXIgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XHJcblxyXG5mdW5jdGlvbiBXb3JkRGF0YVByb3ZpZGVyKCRxKSB7XHJcblx0dGhpcy5nZXREYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHRcdCQuZ2V0SlNPTihcIndvcmRzLmpzb25cIiwgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEud29yZHMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblx0fTtcclxufVxyXG5cclxuV29yZERhdGFQcm92aWRlci4kaW5qZWN0ID0gW1wiJHFcIl07XHJcblxyXG5hbmd1bGFyXHJcblx0Lm1vZHVsZShcIndvcmQtc2VhcmNoXCIpXHJcblx0LnNlcnZpY2UoXCJXb3JkRGF0YVByb3ZpZGVyXCIsIFdvcmREYXRhUHJvdmlkZXIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJ3b3JkLXNlYXJjaFwiLCBbXSk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24oKSB7XHRcbn0pO1xuXG5hcHAucnVuKGZ1bmN0aW9uKCkge1xufSk7Il19
