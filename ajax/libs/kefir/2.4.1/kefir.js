/*! Kefir.js v2.4.1
 *  https://github.com/pozadi/kefir
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Kefir"] = factory();
	else
		root["Kefir"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Kefir = module.exports = {};
	Kefir.Kefir = Kefir;

	var Observable = Kefir.Observable = __webpack_require__(1);
	Kefir.Stream = __webpack_require__(2);
	Kefir.Property = __webpack_require__(3);

	// Create a stream
	// -----------------------------------------------------------------------------

	// () -> Stream
	Kefir.never = __webpack_require__(4);

	// (number, any) -> Stream
	Kefir.later = __webpack_require__(5);

	// (number, any) -> Stream
	Kefir.interval = __webpack_require__(6);

	// (number, Array<any>) -> Stream
	Kefir.sequentially = __webpack_require__(7);

	// (number, Function) -> Stream
	Kefir.fromPoll = __webpack_require__(8);

	// (number, Function) -> Stream
	Kefir.withInterval = __webpack_require__(9);

	// (Function) -> Stream
	Kefir.fromCallback = __webpack_require__(10);

	// (Function) -> Stream
	Kefir.fromNodeCallback = __webpack_require__(11);

	// Target = {addEventListener, removeEventListener}|{addListener, removeListener}|{on, off}
	// (Target, string, Function|undefined) -> Stream
	Kefir.fromEvents = __webpack_require__(12);

	// (Function) -> Stream
	Kefir.stream = __webpack_require__(13);

	// Create a property
	// -----------------------------------------------------------------------------

	// (any) -> Property
	Kefir.constant = __webpack_require__(14);

	// (any) -> Property
	Kefir.constantError = __webpack_require__(15);

	// (Promise) -> Property
	Kefir.fromPromise = __webpack_require__(16);

	// Convert observables
	// -----------------------------------------------------------------------------

	// (Stream|Property, Function|undefined) -> Property
	var toProperty = __webpack_require__(17);
	Observable.prototype.toProperty = function (fn) {
	  return toProperty(this, fn);
	};

	// (Stream|Property) -> Stream
	var changes = __webpack_require__(18);
	Observable.prototype.changes = function () {
	  return changes(this);
	};

	// Subscribe / add side effects
	// -----------------------------------------------------------------------------

	// (Stream|Property, Function|undefined) -> Promise
	var toPromise = __webpack_require__(19);
	Observable.prototype.toPromise = function (Promise) {
	  return toPromise(this, Promise);
	};

	// Modify an observable
	// -----------------------------------------------------------------------------

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var map = __webpack_require__(20);
	Observable.prototype.map = function (fn) {
	  return map(this, fn);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var filter = __webpack_require__(21);
	Observable.prototype.filter = function (fn) {
	  return filter(this, fn);
	};

	// (Stream, number) -> Stream
	// (Property, number) -> Property
	var take = __webpack_require__(22);
	Observable.prototype.take = function (n) {
	  return take(this, n);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var takeWhile = __webpack_require__(23);
	Observable.prototype.takeWhile = function (fn) {
	  return takeWhile(this, fn);
	};

	// (Stream) -> Stream
	// (Property) -> Property
	var last = __webpack_require__(24);
	Observable.prototype.last = function () {
	  return last(this);
	};

	// (Stream, number) -> Stream
	// (Property, number) -> Property
	var skip = __webpack_require__(25);
	Observable.prototype.skip = function (n) {
	  return skip(this, n);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var skipWhile = __webpack_require__(26);
	Observable.prototype.skipWhile = function (fn) {
	  return skipWhile(this, fn);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var skipDuplicates = __webpack_require__(27);
	Observable.prototype.skipDuplicates = function (fn) {
	  return skipDuplicates(this, fn);
	};

	// (Stream, Function|falsey, any|undefined) -> Stream
	// (Property, Function|falsey, any|undefined) -> Property
	var diff = __webpack_require__(28);
	Observable.prototype.diff = function (fn, seed) {
	  return diff(this, fn, seed);
	};

	// (Stream|Property, Function, any|undefined) -> Property
	var scan = __webpack_require__(29);
	Observable.prototype.scan = function (fn, seed) {
	  return scan(this, fn, seed);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var flatten = __webpack_require__(30);
	Observable.prototype.flatten = function (fn) {
	  return flatten(this, fn);
	};

	// (Stream, number) -> Stream
	// (Property, number) -> Property
	var delay = __webpack_require__(31);
	Observable.prototype.delay = function (wait) {
	  return delay(this, wait);
	};

	// Options = {leading: boolean|undefined, trailing: boolean|undefined}
	// (Stream, number, Options|undefined) -> Stream
	// (Property, number, Options|undefined) -> Property
	var throttle = __webpack_require__(32);
	Observable.prototype.throttle = function (wait, options) {
	  return throttle(this, wait, options);
	};

	// Options = {immediate: boolean|undefined}
	// (Stream, number, Options|undefined) -> Stream
	// (Property, number, Options|undefined) -> Property
	var debounce = __webpack_require__(33);
	Observable.prototype.debounce = function (wait, options) {
	  return debounce(this, wait, options);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var valuesToErrors = __webpack_require__(34);
	Observable.prototype.valuesToErrors = function (fn) {
	  return valuesToErrors(this, fn);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var errorsToValues = __webpack_require__(35);
	Observable.prototype.errorsToValues = function (fn) {
	  return errorsToValues(this, fn);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var mapErrors = __webpack_require__(36);
	Observable.prototype.mapErrors = function (fn) {
	  return mapErrors(this, fn);
	};

	// (Stream, Function|undefined) -> Stream
	// (Property, Function|undefined) -> Property
	var filterErrors = __webpack_require__(37);
	Observable.prototype.filterErrors = function (fn) {
	  return filterErrors(this, fn);
	};

	// (Stream) -> Stream
	// (Property) -> Property
	var endOnError = __webpack_require__(38);
	Observable.prototype.endOnError = function () {
	  return endOnError(this);
	};

	// (Stream) -> Stream
	// (Property) -> Property
	var skipValues = __webpack_require__(39);
	Observable.prototype.skipValues = function () {
	  return skipValues(this);
	};

	// (Stream) -> Stream
	// (Property) -> Property
	var skipErrors = __webpack_require__(40);
	Observable.prototype.skipErrors = function () {
	  return skipErrors(this);
	};

	// (Stream) -> Stream
	// (Property) -> Property
	var skipEnd = __webpack_require__(41);
	Observable.prototype.skipEnd = function () {
	  return skipEnd(this);
	};

	// (Stream, Function) -> Stream
	// (Property, Function) -> Property
	var beforeEnd = __webpack_require__(42);
	Observable.prototype.beforeEnd = function (fn) {
	  return beforeEnd(this, fn);
	};

	// (Stream, number, number|undefined) -> Stream
	// (Property, number, number|undefined) -> Property
	var slidingWindow = __webpack_require__(43);
	Observable.prototype.slidingWindow = function (max, min) {
	  return slidingWindow(this, max, min);
	};

	// Options = {flushOnEnd: boolean|undefined}
	// (Stream, Function|falsey, Options|undefined) -> Stream
	// (Property, Function|falsey, Options|undefined) -> Property
	var bufferWhile = __webpack_require__(44);
	Observable.prototype.bufferWhile = function (fn, options) {
	  return bufferWhile(this, fn, options);
	};

	// (Stream, Function) -> Stream
	// (Property, Function) -> Property
	var transduce = __webpack_require__(45);
	Observable.prototype.transduce = function (transducer) {
	  return transduce(this, transducer);
	};

	// (Stream, Function) -> Stream
	// (Property, Function) -> Property
	var withHandler = __webpack_require__(46);
	Observable.prototype.withHandler = function (fn) {
	  return withHandler(this, fn);
	};

	// Combine observables
	// -----------------------------------------------------------------------------

	// (Array<Stream|Property>, Function|undefiend) -> Stream
	// (Array<Stream|Property>, Array<Stream|Property>, Function|undefiend) -> Stream
	var combine = Kefir.combine = __webpack_require__(47);
	Observable.prototype.combine = function (other, combinator) {
	  return combine([this, other], combinator);
	};

	// (Array<Stream|Property>, Function|undefiend) -> Stream
	var zip = Kefir.zip = __webpack_require__(48);
	Observable.prototype.zip = function (other, combinator) {
	  return zip([this, other], combinator);
	};

	// (Array<Stream|Property>) -> Stream
	var merge = Kefir.merge = __webpack_require__(49);
	Observable.prototype.merge = function (other) {
	  return merge([this, other]);
	};

	// (Array<Stream|Property>) -> Stream
	var concat = Kefir.concat = __webpack_require__(50);
	Observable.prototype.concat = function (other) {
	  return concat([this, other]);
	};

	// () -> Pool
	var Pool = Kefir.Pool = __webpack_require__(51);
	Kefir.pool = function () {
	  return new Pool();
	};

	// (Function) -> Stream
	Kefir.repeat = __webpack_require__(52);

	// Options = {concurLim: number|undefined, queueLim: number|undefined, drop: 'old'|'new'|undefiend}
	// (Stream|Property, Function|falsey, Options|undefined) -> Stream
	var FlatMap = __webpack_require__(53);
	Observable.prototype.flatMap = function (fn) {
	  return new FlatMap(this, fn).setName(this, 'flatMap');
	};
	Observable.prototype.flatMapLatest = function (fn) {
	  return new FlatMap(this, fn, { concurLim: 1, drop: 'old' }).setName(this, 'flatMapLatest');
	};
	Observable.prototype.flatMapFirst = function (fn) {
	  return new FlatMap(this, fn, { concurLim: 1 }).setName(this, 'flatMapFirst');
	};
	Observable.prototype.flatMapConcat = function (fn) {
	  return new FlatMap(this, fn, { queueLim: -1, concurLim: 1 }).setName(this, 'flatMapConcat');
	};
	Observable.prototype.flatMapConcurLimit = function (fn, limit) {
	  return new FlatMap(this, fn, { queueLim: -1, concurLim: limit }).setName(this, 'flatMapConcurLimit');
	};

	// (Stream|Property, Function|falsey) -> Stream
	var FlatMapErrors = __webpack_require__(54);
	Observable.prototype.flatMapErrors = function (fn) {
	  return new FlatMapErrors(this, fn).setName(this, 'flatMapErrors');
	};

	// Combine two observables
	// -----------------------------------------------------------------------------

	// (Stream, Stream|Property) -> Stream
	// (Property, Stream|Property) -> Property
	var filterBy = __webpack_require__(55);
	Observable.prototype.filterBy = function (other) {
	  return filterBy(this, other);
	};

	// (Stream, Stream|Property, Function|undefiend) -> Stream
	// (Property, Stream|Property, Function|undefiend) -> Property
	var sampledBy2items = __webpack_require__(56);
	Observable.prototype.sampledBy = function (other, combinator) {
	  return sampledBy2items(this, other, combinator);
	};

	// (Stream, Stream|Property) -> Stream
	// (Property, Stream|Property) -> Property
	var takeWhileBy = __webpack_require__(57);
	Observable.prototype.takeWhileBy = function (other) {
	  return takeWhileBy(this, other);
	};

	// (Stream, Stream|Property) -> Stream
	// (Property, Stream|Property) -> Property
	var skipWhileBy = __webpack_require__(58);
	Observable.prototype.skipWhileBy = function (other) {
	  return skipWhileBy(this, other);
	};

	// (Stream, Stream|Property) -> Stream
	// (Property, Stream|Property) -> Property
	var skipUntilBy = __webpack_require__(59);
	Observable.prototype.skipUntilBy = function (other) {
	  return skipUntilBy(this, other);
	};

	// (Stream, Stream|Property) -> Stream
	// (Property, Stream|Property) -> Property
	var takeUntilBy = __webpack_require__(60);
	Observable.prototype.takeUntilBy = function (other) {
	  return takeUntilBy(this, other);
	};

	// Options = {flushOnEnd: boolean|undefined}
	// (Stream, Stream|Property, Options|undefined) -> Stream
	// (Property, Stream|Property, Options|undefined) -> Property
	var bufferBy = __webpack_require__(61);
	Observable.prototype.bufferBy = function (other, options) {
	  return bufferBy(this, other, options);
	};

	// Options = {flushOnEnd: boolean|undefined}
	// (Stream, Stream|Property, Options|undefined) -> Stream
	// (Property, Stream|Property, Options|undefined) -> Property
	var bufferWhileBy = __webpack_require__(62);
	Observable.prototype.bufferWhileBy = function (other, options) {
	  return bufferWhileBy(this, other, options);
	};

	// (Stream|Property, Stream|Property) -> Property
	var awaiting = __webpack_require__(63);
	Observable.prototype.awaiting = function (other) {
	  return awaiting(this, other);
	};

	// Deprecated
	// -----------------------------------------------------------------------------

	Kefir.DEPRECATION_WARNINGS = true;
	function deprecated(name, alt, fn) {
	  return function () {
	    if (Kefir.DEPRECATION_WARNINGS && typeof console !== 'undefined' && console.log) {

	      var message = 'Method `' + name + '` is deprecated, and to be removed in v3.0.0.\nUse `' + alt + '` instead.\nTo disable all warnings like this set `Kefir.DEPRECATION_WARNINGS = false`.';

	      console.log(message);
	    }
	    return fn.apply(this, arguments);
	  };
	}

	// () -> Emitter
	var Emitter = Kefir.Emitter = __webpack_require__(64);
	Kefir.emitter = deprecated('Kefir.emitter()', 'Kefir.stream()', function () {
	  return new Emitter();
	});

	// () -> Bus
	var Bus = Kefir.Bus = __webpack_require__(65);
	Kefir.bus = deprecated('Kefir.bus()', 'Kefir.pool() or Kefir.stream()', function () {
	  return new Bus();
	});

	// (Stream, Function, any|undefined) -> Stream
	// (Property, Function, any|undefined) -> Property
	var reduce = __webpack_require__(66);
	Observable.prototype.reduce = deprecated('.reduce(fn, seed)', '.scan(fn, seed).last()', function (fn, seed) {
	  return reduce(this, fn, seed);
	});

	// (Array<Stream|Property>, Array<Stream|Property>, Function|undefined) -> Stream
	var sampledByManyItems = __webpack_require__(67);
	Kefir.sampledBy = deprecated('Kefir.sampledBy()', 'Kefir.combine()', sampledByManyItems);

	// (number, Array<any>) -> Stream
	var repeatedly = __webpack_require__(68);
	Kefir.repeatedly = deprecated('Kefir.repeatedly()', 'Kefir.repeat(() => Kefir.sequentially(...)})', repeatedly);

	// (Stream, any) -> Stream
	// (Property, any) -> Property
	var mapTo = __webpack_require__(69);
	Observable.prototype.mapTo = deprecated('.mapTo()', '.map(() => value)', function (x) {
	  return mapTo(this, x);
	});

	// (Stream, Function) -> Stream
	// (Property, Function) -> Property
	var tap = __webpack_require__(70);
	Observable.prototype.tap = deprecated('.tap()', '.map((v) => {fn(v); return v})', function (fn) {
	  return tap(this, fn);
	});

	// (Stream, string) -> Stream
	// (Property, string) -> Property
	var pluck = __webpack_require__(71);
	Observable.prototype.pluck = deprecated('.pluck()', '.map((x) => x.foo)', function (propName) {
	  return pluck(this, propName);
	});

	// (Stream, string, Array) -> Stream
	// (Property, string, Array) -> Property
	var invoke = __webpack_require__(72);
	Observable.prototype.invoke = deprecated('.invoke()', '.map((x) => x.foo())', function (methodName) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return invoke(this, methodName, args);
	});

	// (Stream) -> Stream
	// (Property) -> Property
	var timestamp = __webpack_require__(73);
	Observable.prototype.timestamp = deprecated('.timestamp()', '.map((x) => {value: x, time: Date.now()})', function () {
	  return timestamp(this);
	});

	// (Array<Stream|Property>) -> Stream
	var and = __webpack_require__(74);
	Kefir.and = deprecated('Kefir.and()', 'Kefir.combine([a, b], (a, b) => a && b)', and);
	Observable.prototype.and = deprecated('.and()', '.combine(other, (a, b) => a && b)', function (other) {
	  return and([this, other]);
	});

	// (Array<Stream|Property>) -> Stream
	var or = __webpack_require__(75);
	Kefir.or = deprecated('Kefir.or()', 'Kefir.combine([a, b], (a, b) => a || b)', or);
	Observable.prototype.or = deprecated('.or()', '.combine(other, (a, b) => a || b)', function (other) {
	  return or([this, other]);
	});

	// (Stream) -> Stream
	// (Property) -> Property
	var not = __webpack_require__(76);
	Observable.prototype.not = deprecated('.not()', '.map((x) => !x)', function () {
	  return not(this);
	});

	// (Function, Function, Function|undefined) -> Stream
	var fromSubUnsub = __webpack_require__(77);
	Kefir.fromSubUnsub = deprecated('.fromSubUnsub()', 'Kefir.stream()', fromSubUnsub);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var extend = _require.extend;

	var _require2 = __webpack_require__(79);

	var VALUE = _require2.VALUE;
	var ERROR = _require2.ERROR;
	var ANY = _require2.ANY;
	var END = _require2.END;

	var _require3 = __webpack_require__(80);

	var Dispatcher = _require3.Dispatcher;
	var callSubscriber = _require3.callSubscriber;

	var _require4 = __webpack_require__(81);

	var findByPred = _require4.findByPred;

	function Observable() {
	  this._dispatcher = new Dispatcher();
	  this._active = false;
	  this._alive = true;
	  this._activating = false;
	  this._logHandlers = null;
	}

	extend(Observable.prototype, {

	  _name: 'observable',

	  _onActivation: function _onActivation() {},
	  _onDeactivation: function _onDeactivation() {},

	  _setActive: function _setActive(active) {
	    if (this._active !== active) {
	      this._active = active;
	      if (active) {
	        this._activating = true;
	        this._onActivation();
	        this._activating = false;
	      } else {
	        this._onDeactivation();
	      }
	    }
	  },

	  _clear: function _clear() {
	    this._setActive(false);
	    this._alive = false;
	    this._dispatcher = null;
	    this._logHandlers = null;
	  },

	  _emit: function _emit(type, x) {
	    switch (type) {
	      case VALUE:
	        return this._emitValue(x);
	      case ERROR:
	        return this._emitError(x);
	      case END:
	        return this._emitEnd();
	    }
	  },

	  _emitValue: function _emitValue(value) {
	    if (this._alive) {
	      this._dispatcher.dispatch({ type: VALUE, value: value, current: this._activating });
	    }
	  },

	  _emitError: function _emitError(value) {
	    if (this._alive) {
	      this._dispatcher.dispatch({ type: ERROR, value: value, current: this._activating });
	    }
	  },

	  _emitEnd: function _emitEnd() {
	    if (this._alive) {
	      this._dispatcher.dispatch({ type: END, current: this._activating });
	      this._clear();
	    }
	  },

	  _on: function _on(type, fn) {
	    if (this._alive) {
	      this._dispatcher.add(type, fn);
	      this._setActive(true);
	    } else {
	      callSubscriber(type, fn, { type: END, current: true });
	    }
	    return this;
	  },

	  _off: function _off(type, fn) {
	    if (this._alive) {
	      var count = this._dispatcher.remove(type, fn);
	      if (count === 0) {
	        this._setActive(false);
	      }
	    }
	    return this;
	  },

	  onValue: function onValue(fn) {
	    return this._on(VALUE, fn);
	  },
	  onError: function onError(fn) {
	    return this._on(ERROR, fn);
	  },
	  onEnd: function onEnd(fn) {
	    return this._on(END, fn);
	  },
	  onAny: function onAny(fn) {
	    return this._on(ANY, fn);
	  },

	  offValue: function offValue(fn) {
	    return this._off(VALUE, fn);
	  },
	  offError: function offError(fn) {
	    return this._off(ERROR, fn);
	  },
	  offEnd: function offEnd(fn) {
	    return this._off(END, fn);
	  },
	  offAny: function offAny(fn) {
	    return this._off(ANY, fn);
	  },

	  // A and B must be subclasses of Stream and Property (order doesn't matter)
	  ofSameType: function ofSameType(A, B) {
	    return A.prototype.getType() === this.getType() ? A : B;
	  },

	  setName: function setName(sourceObs, /* optional */selfName) {
	    this._name = selfName ? '' + sourceObs._name + '.' + selfName : sourceObs;
	    return this;
	  },

	  log: function log() {
	    var name = arguments[0] === undefined ? this.toString() : arguments[0];

	    var handler = function handler(event) {
	      var type = '<' + event.type + '' + (event.current ? ':current' : '') + '>';
	      if (event.type === END) {
	        console.log(name, type);
	      } else {
	        console.log(name, type, event.value);
	      }
	    };

	    if (this._alive) {
	      if (!this._logHandlers) {
	        this._logHandlers = [];
	      }
	      this._logHandlers.push({ name: name, handler: handler });
	    }

	    this.onAny(handler);

	    return this;
	  },

	  offLog: function offLog() {
	    var name = arguments[0] === undefined ? this.toString() : arguments[0];

	    if (this._logHandlers) {
	      var handlerIndex = findByPred(this._logHandlers, function (obj) {
	        return obj.name === name;
	      });
	      if (handlerIndex !== -1) {
	        this.offAny(this._logHandlers[handlerIndex].handler);
	        this._logHandlers.splice(handlerIndex, 1);
	      }
	    }

	    return this;
	  }

	});

	// extend() can't handle `toString` in IE8
	Observable.prototype.toString = function () {
	  return '[' + this._name + ']';
	};

	module.exports = Observable;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Observable = __webpack_require__(1);

	function Stream() {
	  Observable.call(this);
	}

	inherit(Stream, Observable, {

	  _name: 'stream',

	  getType: function getType() {
	    return 'stream';
	  }

	});

	module.exports = Stream;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var _require2 = __webpack_require__(79);

	var VALUE = _require2.VALUE;
	var ERROR = _require2.ERROR;
	var END = _require2.END;

	var _require3 = __webpack_require__(80);

	var callSubscriber = _require3.callSubscriber;

	var Observable = __webpack_require__(1);

	function Property() {
	  Observable.call(this);
	  this._currentEvent = null;
	}

	inherit(Property, Observable, {

	  _name: 'property',

	  _emitValue: function _emitValue(value) {
	    if (this._alive) {
	      if (!this._activating) {
	        this._dispatcher.dispatch({ type: VALUE, value: value, current: this._activating });
	      }
	      this._currentEvent = { type: VALUE, value: value, current: true };
	    }
	  },

	  _emitError: function _emitError(value) {
	    if (this._alive) {
	      if (!this._activating) {
	        this._dispatcher.dispatch({ type: ERROR, value: value, current: this._activating });
	      }
	      this._currentEvent = { type: ERROR, value: value, current: true };
	    }
	  },

	  _emitEnd: function _emitEnd() {
	    if (this._alive) {
	      if (!this._activating) {
	        this._dispatcher.dispatch({ type: END, current: this._activating });
	      }
	      this._clear();
	    }
	  },

	  _on: function _on(type, fn) {
	    if (this._alive) {
	      this._dispatcher.add(type, fn);
	      this._setActive(true);
	    }
	    if (this._currentEvent !== null) {
	      callSubscriber(type, fn, this._currentEvent);
	    }
	    if (!this._alive) {
	      callSubscriber(type, fn, { type: END, current: true });
	    }
	    return this;
	  },

	  getType: function getType() {
	    return 'property';
	  }

	});

	module.exports = Property;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);

	var neverS = new Stream();
	neverS._emitEnd();
	neverS._name = 'never';

	module.exports = function never() {
	  return neverS;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);

	var S = timeBased({

	  _name: 'later',

	  _init: function _init(_ref) {
	    var x = _ref.x;

	    this._x = x;
	  },

	  _free: function _free() {
	    this._x = null;
	  },

	  _onTick: function _onTick() {
	    this._emitValue(this._x);
	    this._emitEnd();
	  }

	});

	module.exports = function later(wait, x) {
	  return new S(wait, { x: x });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);

	var S = timeBased({

	  _name: 'interval',

	  _init: function _init(_ref) {
	    var x = _ref.x;

	    this._x = x;
	  },

	  _free: function _free() {
	    this._x = null;
	  },

	  _onTick: function _onTick() {
	    this._emitValue(this._x);
	  }

	});

	module.exports = function interval(wait, x) {
	  return new S(wait, { x: x });
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);

	var _require = __webpack_require__(81);

	var cloneArray = _require.cloneArray;

	var never = __webpack_require__(4);

	var S = timeBased({

	  _name: 'sequentially',

	  _init: function _init(_ref) {
	    var xs = _ref.xs;

	    this._xs = cloneArray(xs);
	  },

	  _free: function _free() {
	    this._xs = null;
	  },

	  _onTick: function _onTick() {
	    if (this._xs.length === 1) {
	      this._emitValue(this._xs[0]);
	      this._emitEnd();
	    } else {
	      this._emitValue(this._xs.shift());
	    }
	  }

	});

	module.exports = function sequentially(wait, xs) {
	  return xs.length === 0 ? never() : new S(wait, { xs: xs });
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);

	var S = timeBased({

	  _name: 'fromPoll',

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _onTick: function _onTick() {
	    var fn = this._fn;
	    this._emitValue(fn());
	  }

	});

	module.exports = function fromPoll(wait, fn) {
	  return new S(wait, { fn: fn });
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);
	var emitter = __webpack_require__(83);

	var S = timeBased({

	  _name: 'withInterval',

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	    this._emitter = emitter(this);
	  },

	  _free: function _free() {
	    this._fn = null;
	    this._emitter = null;
	  },

	  _onTick: function _onTick() {
	    var fn = this._fn;
	    fn(this._emitter);
	  }

	});

	module.exports = function withInterval(wait, fn) {
	  return new S(wait, { fn: fn });
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var stream = __webpack_require__(13);

	module.exports = function fromCallback(callbackConsumer) {

	  var called = false;

	  return stream(function (emitter) {

	    if (!called) {
	      callbackConsumer(function (x) {
	        emitter.emit(x);
	        emitter.end();
	      });
	      called = true;
	    }
	  }).setName('fromCallback');
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var stream = __webpack_require__(13);

	module.exports = function fromNodeCallback(callbackConsumer) {

	  var called = false;

	  return stream(function (emitter) {

	    if (!called) {
	      callbackConsumer(function (error, x) {
	        if (error) {
	          emitter.error(error);
	        } else {
	          emitter.emit(x);
	        }
	        emitter.end();
	      });
	      called = true;
	    }
	  }).setName('fromNodeCallback');
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fromSubUnsub = __webpack_require__(77);

	var pairs = [['addEventListener', 'removeEventListener'], ['addListener', 'removeListener'], ['on', 'off']];

	module.exports = function fromEvents(target, eventName, transformer) {
	  var sub = undefined,
	      unsub = undefined;

	  for (var i = 0; i < pairs.length; i++) {
	    if (typeof target[pairs[i][0]] === 'function' && typeof target[pairs[i][1]] === 'function') {
	      sub = pairs[i][0];
	      unsub = pairs[i][1];
	      break;
	    }
	  }

	  if (sub === undefined) {
	    throw new Error('target don\'t support any of ' + 'addEventListener/removeEventListener, addListener/removeListener, on/off method pair');
	  }

	  return fromSubUnsub(function (handler) {
	    return target[sub](eventName, handler);
	  }, function (handler) {
	    return target[unsub](eventName, handler);
	  }, transformer).setName('fromEvents');
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Stream = __webpack_require__(2);
	var emitter = __webpack_require__(83);

	function S(fn) {
	  Stream.call(this);
	  this._fn = fn;
	  this._unsubscribe = null;
	}

	inherit(S, Stream, {

	  _name: 'stream',

	  _onActivation: function _onActivation() {
	    var fn = this._fn;
	    this._unsubscribe = fn(emitter(this)) || null;

	    // fix https://github.com/pozadi/kefir/issues/35
	    if (!this._active) {
	      this._callUnsubscribe();
	    }
	  },

	  _callUnsubscribe: function _callUnsubscribe() {
	    if (this._unsubscribe !== null) {
	      this._unsubscribe();
	      this._unsubscribe = null;
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    this._callUnsubscribe();
	  },

	  _clear: function _clear() {
	    Stream.prototype._clear.call(this);
	    this._fn = null;
	  }

	});

	module.exports = function stream(fn) {
	  return new S(fn);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Property = __webpack_require__(3);

	// HACK:
	//   We don't call parent Class constructor, but instead putting all necessary
	//   properties into prototype to simulate ended Property
	//   (see Propperty and Observable classes).

	function P(value) {
	  this._currentEvent = { type: 'value', value: value, current: true };
	}

	inherit(P, Property, {
	  _name: 'constant',
	  _active: false,
	  _activating: false,
	  _alive: false,
	  _dispatcher: null,
	  _logHandlers: null
	});

	module.exports = function constant(x) {
	  return new P(x);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Property = __webpack_require__(3);

	// HACK:
	//   We don't call parent Class constructor, but instead putting all necessary
	//   properties into prototype to simulate ended Property
	//   (see Propperty and Observable classes).

	function P(value) {
	  this._currentEvent = { type: 'error', value: value, current: true };
	}

	inherit(P, Property, {
	  _name: 'constantError',
	  _active: false,
	  _activating: false,
	  _alive: false,
	  _dispatcher: null,
	  _logHandlers: null
	});

	module.exports = function constantError(x) {
	  return new P(x);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var stream = __webpack_require__(13);
	var toProperty = __webpack_require__(17);

	module.exports = function fromPromise(promise) {

	  var called = false;

	  var result = stream(function (emitter) {
	    if (!called) {
	      var onValue = function onValue(x) {
	        emitter.emit(x);
	        emitter.end();
	      };
	      var onError = function onError(x) {
	        emitter.error(x);
	        emitter.end();
	      };
	      var _promise = promise.then(onValue, onError);

	      // prevent libraries like 'Q' or 'when' from swallowing exceptions
	      if (_promise && typeof _promise.done === 'function') {
	        _promise.done();
	      }

	      called = true;
	    }
	  });

	  return toProperty(result, null).setName('fromPromise');
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createProperty = _require.createProperty;

	var P = createProperty('toProperty', {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._getInitialCurrent = fn;
	  },

	  _onActivation: function _onActivation() {
	    if (this._getInitialCurrent !== null) {
	      this._emitValue(this._getInitialCurrent());
	    }
	    this._source.onAny(this._$handleAny); // copied from patterns/one-source
	  }

	});

	module.exports = function toProperty(obs) {
	  var fn = arguments[1] === undefined ? null : arguments[1];

	  return new P(obs, { fn: fn });
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;

	var S = createStream('changes', {

	  _handleValue: function _handleValue(x) {
	    if (!this._activating) {
	      this._emitValue(x);
	    }
	  },

	  _handleError: function _handleError(x) {
	    if (!this._activating) {
	      this._emitError(x);
	    }
	  }

	});

	module.exports = function changes(obs) {
	  return new S(obs);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function getGlodalPromise() {
	  if (typeof Promise === 'function') {
	    return Promise;
	  } else {
	    throw new Error('There isn\'t default Promise, use shim or parameter');
	  }
	}

	module.exports = function (obs) {
	  var Promise = arguments[1] === undefined ? getGlodalPromise() : arguments[1];

	  var last = null;
	  return new Promise(function (resolve, reject) {
	    obs.onAny(function (event) {
	      if (event.type === 'end' && last !== null) {
	        (last.type === 'value' ? resolve : reject)(last.value);
	        last = null;
	      } else {
	        last = event;
	      }
	    });
	  });
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    this._emitValue(fn(x));
	  }

	};

	var S = createStream('map', mixin);
	var P = createProperty('map', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function map(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    if (fn(x)) {
	      this._emitValue(x);
	    }
	  }

	};

	var S = createStream('filter', mixin);
	var P = createProperty('filter', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function filter(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var n = _ref.n;

	    this._n = n;
	    if (n <= 0) {
	      this._emitEnd();
	    }
	  },

	  _handleValue: function _handleValue(x) {
	    this._n--;
	    this._emitValue(x);
	    if (this._n === 0) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('take', mixin);
	var P = createProperty('take', mixin);

	module.exports = function takeWhile(obs, n) {
	  return new (obs.ofSameType(S, P))(obs, { n: n });
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    if (fn(x)) {
	      this._emitValue(x);
	    } else {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('takeWhile', mixin);
	var P = createProperty('takeWhile', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function takeWhile(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _init: function _init() {
	    this._lastValue = NOTHING;
	  },

	  _free: function _free() {
	    this._lastValue = null;
	  },

	  _handleValue: function _handleValue(x) {
	    this._lastValue = x;
	  },

	  _handleEnd: function _handleEnd() {
	    if (this._lastValue !== NOTHING) {
	      this._emitValue(this._lastValue);
	    }
	    this._emitEnd();
	  }

	};

	var S = createStream('last', mixin);
	var P = createProperty('last', mixin);

	module.exports = function last(obs) {
	  return new (obs.ofSameType(S, P))(obs);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var n = _ref.n;

	    this._n = Math.max(0, n);
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._n === 0) {
	      this._emitValue(x);
	    } else {
	      this._n--;
	    }
	  }

	};

	var S = createStream('skip', mixin);
	var P = createProperty('skip', mixin);

	module.exports = function skip(obs, n) {
	  return new (obs.ofSameType(S, P))(obs, { n: n });
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    if (this._fn !== null && !fn(x)) {
	      this._fn = null;
	    }
	    if (this._fn === null) {
	      this._emitValue(x);
	    }
	  }

	};

	var S = createStream('skipWhile', mixin);
	var P = createProperty('skipWhile', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function skipWhile(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	    this._prev = NOTHING;
	  },

	  _free: function _free() {
	    this._fn = null;
	    this._prev = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    if (this._prev === NOTHING || !fn(this._prev, x)) {
	      this._prev = x;
	      this._emitValue(x);
	    }
	  }

	};

	var S = createStream('skipDuplicates', mixin);
	var P = createProperty('skipDuplicates', mixin);

	var eq = function eq(a, b) {
	  return a === b;
	};

	module.exports = function skipDuplicates(obs) {
	  var fn = arguments[1] === undefined ? eq : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;
	    var seed = _ref.seed;

	    this._fn = fn;
	    this._prev = seed;
	  },

	  _free: function _free() {
	    this._prev = null;
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._prev !== NOTHING) {
	      var fn = this._fn;
	      this._emitValue(fn(this._prev, x));
	    }
	    this._prev = x;
	  }

	};

	var S = createStream('diff', mixin);
	var P = createProperty('diff', mixin);

	function defaultFn(a, b) {
	  return [a, b];
	}

	module.exports = function diff(obs, fn) {
	  var seed = arguments[2] === undefined ? NOTHING : arguments[2];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn || defaultFn, seed: seed });
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var ERROR = _require2.ERROR;
	var NOTHING = _require2.NOTHING;

	var P = createProperty('scan', {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;
	    var seed = _ref.seed;

	    this._fn = fn;
	    if (seed !== NOTHING) {
	      this._emitValue(seed);
	    }
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._currentEvent !== null && this._currentEvent.type !== ERROR) {
	      var fn = this._fn;
	      x = fn(this._currentEvent.value, x);
	    }
	    this._emitValue(x);
	  }

	});

	module.exports = function scan(obs, fn) {
	  var seed = arguments[2] === undefined ? NOTHING : arguments[2];

	  return new P(obs, { fn: fn, seed: seed });
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    var xs = fn(x);
	    for (var i = 0; i < xs.length; i++) {
	      this._emitValue(xs[i]);
	    }
	  }

	};

	var S = createStream('flatten', mixin);
	var P = createProperty('flatten', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function flatten(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var _this = this;

	    var wait = _ref.wait;

	    this._wait = Math.max(0, wait);
	    this._buff = [];
	    this._$shiftBuff = function () {
	      return _this._emitValue(_this._buff.shift());
	    };
	  },

	  _free: function _free() {
	    this._buff = null;
	    this._$shiftBuff = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._activating) {
	      this._emitValue(x);
	    } else {
	      this._buff.push(x);
	      setTimeout(this._$shiftBuff, this._wait);
	    }
	  },

	  _handleEnd: function _handleEnd() {
	    var _this2 = this;

	    if (this._activating) {
	      this._emitEnd();
	    } else {
	      setTimeout(function () {
	        return _this2._emitEnd();
	      }, this._wait);
	    }
	  }

	};

	var S = createStream('delay', mixin);
	var P = createProperty('delay', mixin);

	module.exports = function delay(obs, wait) {
	  return new (obs.ofSameType(S, P))(obs, { wait: wait });
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var now = __webpack_require__(85);

	var mixin = {

	  _init: function _init(_ref) {
	    var _this = this;

	    var wait = _ref.wait;
	    var leading = _ref.leading;
	    var trailing = _ref.trailing;

	    this._wait = Math.max(0, wait);
	    this._leading = leading;
	    this._trailing = trailing;
	    this._trailingValue = null;
	    this._timeoutId = null;
	    this._endLater = false;
	    this._lastCallTime = 0;
	    this._$trailingCall = function () {
	      return _this._trailingCall();
	    };
	  },

	  _free: function _free() {
	    this._trailingValue = null;
	    this._$trailingCall = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._activating) {
	      this._emitValue(x);
	    } else {
	      var curTime = now();
	      if (this._lastCallTime === 0 && !this._leading) {
	        this._lastCallTime = curTime;
	      }
	      var remaining = this._wait - (curTime - this._lastCallTime);
	      if (remaining <= 0) {
	        this._cancelTrailing();
	        this._lastCallTime = curTime;
	        this._emitValue(x);
	      } else if (this._trailing) {
	        this._cancelTrailing();
	        this._trailingValue = x;
	        this._timeoutId = setTimeout(this._$trailingCall, remaining);
	      }
	    }
	  },

	  _handleEnd: function _handleEnd() {
	    if (this._activating) {
	      this._emitEnd();
	    } else {
	      if (this._timeoutId) {
	        this._endLater = true;
	      } else {
	        this._emitEnd();
	      }
	    }
	  },

	  _cancelTrailing: function _cancelTrailing() {
	    if (this._timeoutId !== null) {
	      clearTimeout(this._timeoutId);
	      this._timeoutId = null;
	    }
	  },

	  _trailingCall: function _trailingCall() {
	    this._emitValue(this._trailingValue);
	    this._timeoutId = null;
	    this._trailingValue = null;
	    this._lastCallTime = !this._leading ? 0 : now();
	    if (this._endLater) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('throttle', mixin);
	var P = createProperty('throttle', mixin);

	module.exports = function throttle(obs, wait) {
	  var _ref2 = arguments[2] === undefined ? {} : arguments[2];

	  var _ref2$leading = _ref2.leading;
	  var leading = _ref2$leading === undefined ? true : _ref2$leading;
	  var _ref2$trailing = _ref2.trailing;
	  var trailing = _ref2$trailing === undefined ? true : _ref2$trailing;

	  return new (obs.ofSameType(S, P))(obs, { wait: wait, leading: leading, trailing: trailing });
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var now = __webpack_require__(85);

	var mixin = {

	  _init: function _init(_ref) {
	    var _this = this;

	    var wait = _ref.wait;
	    var immediate = _ref.immediate;

	    this._wait = Math.max(0, wait);
	    this._immediate = immediate;
	    this._lastAttempt = 0;
	    this._timeoutId = null;
	    this._laterValue = null;
	    this._endLater = false;
	    this._$later = function () {
	      return _this._later();
	    };
	  },

	  _free: function _free() {
	    this._laterValue = null;
	    this._$later = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._activating) {
	      this._emitValue(x);
	    } else {
	      this._lastAttempt = now();
	      if (this._immediate && !this._timeoutId) {
	        this._emitValue(x);
	      }
	      if (!this._timeoutId) {
	        this._timeoutId = setTimeout(this._$later, this._wait);
	      }
	      if (!this._immediate) {
	        this._laterValue = x;
	      }
	    }
	  },

	  _handleEnd: function _handleEnd() {
	    if (this._activating) {
	      this._emitEnd();
	    } else {
	      if (this._timeoutId && !this._immediate) {
	        this._endLater = true;
	      } else {
	        this._emitEnd();
	      }
	    }
	  },

	  _later: function _later() {
	    var last = now() - this._lastAttempt;
	    if (last < this._wait && last >= 0) {
	      this._timeoutId = setTimeout(this._$later, this._wait - last);
	    } else {
	      this._timeoutId = null;
	      if (!this._immediate) {
	        this._emitValue(this._laterValue);
	        this._laterValue = null;
	      }
	      if (this._endLater) {
	        this._emitEnd();
	      }
	    }
	  }

	};

	var S = createStream('debounce', mixin);
	var P = createProperty('debounce', mixin);

	module.exports = function debounce(obs, wait) {
	  var _ref2 = arguments[2] === undefined ? {} : arguments[2];

	  var _ref2$immediate = _ref2.immediate;
	  var immediate = _ref2$immediate === undefined ? false : _ref2$immediate;

	  return new (obs.ofSameType(S, P))(obs, { wait: wait, immediate: immediate });
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    var result = fn(x);
	    if (result.convert) {
	      this._emitError(result.error);
	    } else {
	      this._emitValue(x);
	    }
	  }

	};

	var S = createStream('valuesToErrors', mixin);
	var P = createProperty('valuesToErrors', mixin);

	var defFn = function defFn(x) {
	  return { convert: true, error: x };
	};

	module.exports = function valuesToErrors(obs) {
	  var fn = arguments[1] === undefined ? defFn : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleError: function _handleError(x) {
	    var fn = this._fn;
	    var result = fn(x);
	    if (result.convert) {
	      this._emitValue(result.value);
	    } else {
	      this._emitError(x);
	    }
	  }

	};

	var S = createStream('errorsToValues', mixin);
	var P = createProperty('errorsToValues', mixin);

	var defFn = function defFn(x) {
	  return { convert: true, value: x };
	};

	module.exports = function errorsToValues(obs) {
	  var fn = arguments[1] === undefined ? defFn : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleError: function _handleError(x) {
	    var fn = this._fn;
	    this._emitError(fn(x));
	  }

	};

	var S = createStream('mapErrors', mixin);
	var P = createProperty('mapErrors', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function mapErrors(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleError: function _handleError(x) {
	    var fn = this._fn;
	    if (fn(x)) {
	      this._emitError(x);
	    }
	  }

	};

	var S = createStream('filterErrors', mixin);
	var P = createProperty('filterErrors', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function filterErrors(obs) {
	  var fn = arguments[1] === undefined ? id : arguments[1];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _handleError: function _handleError(x) {
	    this._emitError(x);
	    this._emitEnd();
	  }

	};

	var S = createStream('endOnError', mixin);
	var P = createProperty('endOnError', mixin);

	module.exports = function endOnError(obs) {
	  return new (obs.ofSameType(S, P))(obs);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {
	  _handleValue: function _handleValue() {}
	};

	var S = createStream('skipValues', mixin);
	var P = createProperty('skipValues', mixin);

	module.exports = function skipValues(obs) {
	  return new (obs.ofSameType(S, P))(obs);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {
	  _handleError: function _handleError() {}
	};

	var S = createStream('skipErrors', mixin);
	var P = createProperty('skipErrors', mixin);

	module.exports = function skipErrors(obs) {
	  return new (obs.ofSameType(S, P))(obs);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {
	  _handleEnd: function _handleEnd() {}
	};

	var S = createStream('skipEnd', mixin);
	var P = createProperty('skipEnd', mixin);

	module.exports = function skipEnd(obs) {
	  return new (obs.ofSameType(S, P))(obs);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._fn = fn;
	  },

	  _free: function _free() {
	    this._fn = null;
	  },

	  _handleEnd: function _handleEnd() {
	    var fn = this._fn;
	    this._emitValue(fn());
	    this._emitEnd();
	  }

	};

	var S = createStream('beforeEnd', mixin);
	var P = createProperty('beforeEnd', mixin);

	module.exports = function beforeEnd(obs, fn) {
	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(81);

	var slide = _require2.slide;

	var mixin = {

	  _init: function _init(_ref) {
	    var min = _ref.min;
	    var max = _ref.max;

	    this._max = max;
	    this._min = min;
	    this._buff = [];
	  },

	  _free: function _free() {
	    this._buff = null;
	  },

	  _handleValue: function _handleValue(x) {
	    this._buff = slide(this._buff, x, this._max);
	    if (this._buff.length >= this._min) {
	      this._emitValue(this._buff);
	    }
	  }

	};

	var S = createStream('slidingWindow', mixin);
	var P = createProperty('slidingWindow', mixin);

	module.exports = function slidingWindow(obs, max) {
	  var min = arguments[2] === undefined ? 0 : arguments[2];

	  return new (obs.ofSameType(S, P))(obs, { min: min, max: max });
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;
	    var flushOnEnd = _ref.flushOnEnd;

	    this._fn = fn;
	    this._flushOnEnd = flushOnEnd;
	    this._buff = [];
	  },

	  _free: function _free() {
	    this._buff = null;
	  },

	  _flush: function _flush() {
	    if (this._buff !== null && this._buff.length !== 0) {
	      this._emitValue(this._buff);
	      this._buff = [];
	    }
	  },

	  _handleValue: function _handleValue(x) {
	    this._buff.push(x);
	    var fn = this._fn;
	    if (!fn(x)) {
	      this._flush();
	    }
	  },

	  _handleEnd: function _handleEnd() {
	    if (this._flushOnEnd) {
	      this._flush();
	    }
	    this._emitEnd();
	  }

	};

	var S = createStream('bufferWhile', mixin);
	var P = createProperty('bufferWhile', mixin);

	var id = function id(x) {
	  return x;
	};

	module.exports = function bufferWhile(obs, fn) {
	  var _ref2 = arguments[2] === undefined ? {} : arguments[2];

	  var _ref2$flushOnEnd = _ref2.flushOnEnd;
	  var flushOnEnd = _ref2$flushOnEnd === undefined ? true : _ref2$flushOnEnd;

	  return new (obs.ofSameType(S, P))(obs, { fn: fn || id, flushOnEnd: flushOnEnd });
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	function xformForObs(obs) {
	  return {

	    '@@transducer/step': function transducerStep(res, input) {
	      obs._emitValue(input);
	      return null;
	    },

	    '@@transducer/result': function transducerResult(res) {
	      obs._emitEnd();
	      return null;
	    }

	  };
	}

	var mixin = {

	  _init: function _init(_ref) {
	    var transducer = _ref.transducer;

	    this._xform = transducer(xformForObs(this));
	  },

	  _free: function _free() {
	    this._xform = null;
	  },

	  _handleValue: function _handleValue(x) {
	    if (this._xform['@@transducer/step'](null, x) !== null) {
	      this._xform['@@transducer/result'](null);
	    }
	  },

	  _handleEnd: function _handleEnd() {
	    this._xform['@@transducer/result'](null);
	  }

	};

	var S = createStream('transduce', mixin);
	var P = createProperty('transduce', mixin);

	module.exports = function transduce(obs, transducer) {
	  return new (obs.ofSameType(S, P))(obs, { transducer: transducer });
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var emitter = __webpack_require__(83);

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;

	    this._handler = fn;
	    this._emitter = emitter(this);
	  },

	  _free: function _free() {
	    this._handler = null;
	    this._emitter = null;
	  },

	  _handleAny: function _handleAny(event) {
	    this._handler(this._emitter, event);
	  }

	};

	var S = createStream('withHandler', mixin);
	var P = createProperty('withHandler', mixin);

	module.exports = function withHandler(obs, fn) {
	  return new (obs.ofSameType(S, P))(obs, { fn: fn });
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);

	var _require = __webpack_require__(79);

	var VALUE = _require.VALUE;
	var ERROR = _require.ERROR;
	var NOTHING = _require.NOTHING;

	var _require2 = __webpack_require__(78);

	var inherit = _require2.inherit;

	var _require3 = __webpack_require__(81);

	var concat = _require3.concat;
	var fillArray = _require3.fillArray;

	var _require4 = __webpack_require__(86);

	var spread = _require4.spread;

	var never = __webpack_require__(4);

	function defaultErrorsCombinator(errors) {
	  var latestError = undefined;
	  for (var i = 0; i < errors.length; i++) {
	    if (errors[i] !== undefined) {
	      if (latestError === undefined || latestError.index < errors[i].index) {
	        latestError = errors[i];
	      }
	    }
	  }
	  return latestError.error;
	}

	function Combine(active, passive, combinator) {
	  var _this = this;

	  Stream.call(this);
	  this._activeCount = active.length;
	  this._sources = concat(active, passive);
	  this._combinator = combinator ? spread(combinator, this._sources.length) : function (x) {
	    return x;
	  };
	  this._aliveCount = 0;
	  this._latestValues = new Array(this._sources.length);
	  this._latestErrors = new Array(this._sources.length);
	  fillArray(this._latestValues, NOTHING);
	  this._emitAfterActivation = false;
	  this._endAfterActivation = false;
	  this._latestErrorIndex = 0;

	  this._$handlers = [];

	  var _loop = function (i) {
	    _this._$handlers.push(function (event) {
	      return _this._handleAny(i, event);
	    });
	  };

	  for (var i = 0; i < this._sources.length; i++) {
	    _loop(i);
	  }
	}

	inherit(Combine, Stream, {

	  _name: 'combine',

	  _onActivation: function _onActivation() {
	    this._aliveCount = this._activeCount;

	    // we need to suscribe to _passive_ sources before _active_
	    // (see https://github.com/pozadi/kefir/issues/98)
	    for (var i = this._activeCount; i < this._sources.length; i++) {
	      this._sources[i].onAny(this._$handlers[i]);
	    }
	    for (var i = 0; i < this._activeCount; i++) {
	      this._sources[i].onAny(this._$handlers[i]);
	    }

	    if (this._emitAfterActivation) {
	      this._emitAfterActivation = false;
	      this._emitIfFull();
	    }
	    if (this._endAfterActivation) {
	      this._emitEnd();
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    var length = this._sources.length,
	        i = undefined;
	    for (i = 0; i < length; i++) {
	      this._sources[i].offAny(this._$handlers[i]);
	    }
	  },

	  _emitIfFull: function _emitIfFull() {
	    var hasAllValues = true;
	    var hasErrors = false;
	    var length = this._latestValues.length;
	    var valuesCopy = new Array(length);
	    var errorsCopy = new Array(length);;

	    for (var i = 0; i < length; i++) {
	      valuesCopy[i] = this._latestValues[i];
	      errorsCopy[i] = this._latestErrors[i];

	      if (valuesCopy[i] === NOTHING) {
	        hasAllValues = false;
	      }

	      if (errorsCopy[i] !== undefined) {
	        hasErrors = true;
	      }
	    }

	    if (hasAllValues) {
	      var combinator = this._combinator;
	      this._emitValue(combinator(valuesCopy));
	    }
	    if (hasErrors) {
	      this._emitError(defaultErrorsCombinator(errorsCopy));
	    }
	  },

	  _handleAny: function _handleAny(i, event) {

	    if (event.type === VALUE || event.type === ERROR) {

	      if (event.type === VALUE) {
	        this._latestValues[i] = event.value;
	        this._latestErrors[i] = undefined;
	      }
	      if (event.type === ERROR) {
	        this._latestValues[i] = NOTHING;
	        this._latestErrors[i] = {
	          index: this._latestErrorIndex++,
	          error: event.value
	        };
	      }

	      if (i < this._activeCount) {
	        if (this._activating) {
	          this._emitAfterActivation = true;
	        } else {
	          this._emitIfFull();
	        }
	      }
	    } else {
	      // END

	      if (i < this._activeCount) {
	        this._aliveCount--;
	        if (this._aliveCount === 0) {
	          if (this._activating) {
	            this._endAfterActivation = true;
	          } else {
	            this._emitEnd();
	          }
	        }
	      }
	    }
	  },

	  _clear: function _clear() {
	    Stream.prototype._clear.call(this);
	    this._sources = null;
	    this._latestValues = null;
	    this._latestErrors = null;
	    this._combinator = null;
	    this._$handlers = null;
	  }

	});

	module.exports = function combine(active, _x, combinator) {
	  var passive = arguments[1] === undefined ? [] : arguments[1];

	  if (typeof passive === 'function') {
	    combinator = passive;
	    passive = [];
	  }
	  return active.length === 0 ? never() : new Combine(active, passive, combinator);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);

	var _require = __webpack_require__(79);

	var VALUE = _require.VALUE;
	var ERROR = _require.ERROR;
	var END = _require.END;

	var _require2 = __webpack_require__(78);

	var inherit = _require2.inherit;

	var _require3 = __webpack_require__(81);

	var map = _require3.map;
	var cloneArray = _require3.cloneArray;

	var _require4 = __webpack_require__(86);

	var spread = _require4.spread;

	var never = __webpack_require__(4);

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function Zip(sources, combinator) {
	  var _this = this;

	  Stream.call(this);

	  this._buffers = map(sources, function (source) {
	    return isArray(source) ? cloneArray(source) : [];
	  });
	  this._sources = map(sources, function (source) {
	    return isArray(source) ? never() : source;
	  });

	  this._combinator = combinator ? spread(combinator, this._sources.length) : function (x) {
	    return x;
	  };
	  this._aliveCount = 0;

	  this._$handlers = [];

	  var _loop = function (i) {
	    _this._$handlers.push(function (event) {
	      return _this._handleAny(i, event);
	    });
	  };

	  for (var i = 0; i < this._sources.length; i++) {
	    _loop(i);
	  }
	}

	inherit(Zip, Stream, {

	  _name: 'zip',

	  _onActivation: function _onActivation() {

	    // if all sources are arrays
	    while (this._isFull()) {
	      this._emit();
	    }

	    var length = this._sources.length;
	    this._aliveCount = length;
	    for (var i = 0; i < length && this._active; i++) {
	      this._sources[i].onAny(this._$handlers[i]);
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    for (var i = 0; i < this._sources.length; i++) {
	      this._sources[i].offAny(this._$handlers[i]);
	    }
	  },

	  _emit: function _emit() {
	    var values = new Array(this._buffers.length);
	    for (var i = 0; i < this._buffers.length; i++) {
	      values[i] = this._buffers[i].shift();
	    }
	    var combinator = this._combinator;
	    this._emitValue(combinator(values));
	  },

	  _isFull: function _isFull() {
	    for (var i = 0; i < this._buffers.length; i++) {
	      if (this._buffers[i].length === 0) {
	        return false;
	      }
	    }
	    return true;
	  },

	  _handleAny: function _handleAny(i, event) {
	    if (event.type === VALUE) {
	      this._buffers[i].push(event.value);
	      if (this._isFull()) {
	        this._emit();
	      }
	    }
	    if (event.type === ERROR) {
	      this._emitError(event.value);
	    }
	    if (event.type === END) {
	      this._aliveCount--;
	      if (this._aliveCount === 0) {
	        this._emitEnd();
	      }
	    }
	  },

	  _clear: function _clear() {
	    Stream.prototype._clear.call(this);
	    this._sources = null;
	    this._buffers = null;
	    this._combinator = null;
	    this._$handlers = null;
	  }

	});

	module.exports = function zip(observables, combinator /* Function | falsey */) {
	  return observables.length === 0 ? never() : new Zip(observables, combinator);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var AbstractPool = __webpack_require__(87);
	var never = __webpack_require__(4);

	function Merge(sources) {
	  AbstractPool.call(this);
	  this._addAll(sources);
	  this._initialised = true;
	}

	inherit(Merge, AbstractPool, {

	  _name: 'merge',

	  _onEmpty: function _onEmpty() {
	    if (this._initialised) {
	      this._emitEnd();
	    }
	  }

	});

	module.exports = function merge(observables) {
	  return observables.length === 0 ? never() : new Merge(observables);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var repeat = __webpack_require__(52);

	module.exports = function concat(observables) {
	  return repeat(function (index) {
	    return observables.length > index ? observables[index] : false;
	  }).setName('concat');
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var AbstractPool = __webpack_require__(87);

	function Pool() {
	  AbstractPool.call(this);
	}

	inherit(Pool, AbstractPool, {

	  _name: 'pool',

	  plug: function plug(obs) {
	    this._add(obs);
	    return this;
	  },

	  unplug: function unplug(obs) {
	    this._remove(obs);
	    return this;
	  }

	});

	module.exports = Pool;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Stream = __webpack_require__(2);

	var _require2 = __webpack_require__(79);

	var END = _require2.END;

	function S(generator) {
	  var _this = this;

	  Stream.call(this);
	  this._generator = generator;
	  this._source = null;
	  this._inLoop = false;
	  this._iteration = 0;
	  this._$handleAny = function (event) {
	    return _this._handleAny(event);
	  };
	}

	inherit(S, Stream, {

	  _name: 'repeat',

	  _handleAny: function _handleAny(event) {
	    if (event.type === END) {
	      this._source = null;
	      this._getSource();
	    } else {
	      this._emit(event.type, event.value);
	    }
	  },

	  _getSource: function _getSource() {
	    if (!this._inLoop) {
	      this._inLoop = true;
	      var generator = this._generator;
	      while (this._source === null && this._alive && this._active) {
	        this._source = generator(this._iteration++);
	        if (this._source) {
	          this._source.onAny(this._$handleAny);
	        } else {
	          this._emitEnd();
	        }
	      }
	      this._inLoop = false;
	    }
	  },

	  _onActivation: function _onActivation() {
	    if (this._source) {
	      this._source.onAny(this._$handleAny);
	    } else {
	      this._getSource();
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    if (this._source) {
	      this._source.offAny(this._$handleAny);
	    }
	  },

	  _clear: function _clear() {
	    Stream.prototype._clear.call(this);
	    this._generator = null;
	    this._source = null;
	    this._$handleAny = null;
	  }

	});

	module.exports = function (generator) {
	  return new S(generator);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(79);

	var VALUE = _require.VALUE;
	var ERROR = _require.ERROR;
	var END = _require.END;

	var _require2 = __webpack_require__(78);

	var inherit = _require2.inherit;

	var AbstractPool = __webpack_require__(87);

	function FlatMap(source, fn, options) {
	  var _this = this;

	  AbstractPool.call(this, options);
	  this._source = source;
	  this._fn = fn;
	  this._mainEnded = false;
	  this._lastCurrent = null;
	  this._$handleMain = function (event) {
	    return _this._handleMain(event);
	  };
	}

	inherit(FlatMap, AbstractPool, {

	  _onActivation: function _onActivation() {
	    AbstractPool.prototype._onActivation.call(this);
	    if (this._active) {
	      this._source.onAny(this._$handleMain);
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    AbstractPool.prototype._onDeactivation.call(this);
	    this._source.offAny(this._$handleMain);
	    this._hadNoEvSinceDeact = true;
	  },

	  _handleMain: function _handleMain(event) {

	    if (event.type === VALUE) {
	      // Is latest value before deactivation survived, and now is 'current' on this activation?
	      // We don't want to handle such values, to prevent to constantly add
	      // same observale on each activation/deactivation when our main source
	      // is a `Kefir.conatant()` for example.
	      var sameCurr = this._activating && this._hadNoEvSinceDeact && this._lastCurrent === event.value;
	      if (!sameCurr) {
	        this._add(event.value, this._fn);
	      }
	      this._lastCurrent = event.value;
	      this._hadNoEvSinceDeact = false;
	    }

	    if (event.type === ERROR) {
	      this._emitError(event.value);
	    }

	    if (event.type === END) {
	      if (this._isEmpty()) {
	        this._emitEnd();
	      } else {
	        this._mainEnded = true;
	      }
	    }
	  },

	  _onEmpty: function _onEmpty() {
	    if (this._mainEnded) {
	      this._emitEnd();
	    }
	  },

	  _clear: function _clear() {
	    AbstractPool.prototype._clear.call(this);
	    this._source = null;
	    this._lastCurrent = null;
	    this._$handleMain = null;
	  }

	});

	module.exports = FlatMap;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(79);

	var VALUE = _require.VALUE;
	var ERROR = _require.ERROR;
	var END = _require.END;

	var _require2 = __webpack_require__(78);

	var inherit = _require2.inherit;

	var FlatMap = __webpack_require__(53);

	function FlatMapErrors(source, fn) {
	  FlatMap.call(this, source, fn);
	}

	inherit(FlatMapErrors, FlatMap, {

	  // Same as in FlatMap, only VALUE/ERROR flipped
	  _handleMain: function _handleMain(event) {

	    if (event.type === ERROR) {
	      var sameCurr = this._activating && this._hadNoEvSinceDeact && this._lastCurrent === event.value;
	      if (!sameCurr) {
	        this._add(event.value, this._fn);
	      }
	      this._lastCurrent = event.value;
	      this._hadNoEvSinceDeact = false;
	    }

	    if (event.type === VALUE) {
	      this._emitValue(event.value);
	    }

	    if (event.type === END) {
	      if (this._isEmpty()) {
	        this._emitEnd();
	      } else {
	        this._mainEnded = true;
	      }
	    }
	  }

	});

	module.exports = FlatMapErrors;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    if (this._lastSecondary !== NOTHING && this._lastSecondary) {
	      this._emitValue(x);
	    }
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd() {
	    if (this._lastSecondary === NOTHING || !this._lastSecondary) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('filterBy', mixin);
	var P = createProperty('filterBy', mixin);

	module.exports = function filterBy(primary, secondary) {
	  return new (primary.ofSameType(S, P))(primary, secondary);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var combine = __webpack_require__(47);

	var id2 = function id2(_, x) {
	  return x;
	};

	module.exports = function sampledBy(passive, active, combinator) {
	  var _combinator = combinator ? function (a, b) {
	    return combinator(b, a);
	  } : id2;
	  return combine([active], [passive], _combinator).setName(passive, 'sampledBy');
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    if (this._lastSecondary !== NOTHING) {
	      this._emitValue(x);
	    }
	  },

	  _handleSecondaryValue: function _handleSecondaryValue(x) {
	    this._lastSecondary = x;
	    if (!this._lastSecondary) {
	      this._emitEnd();
	    }
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd() {
	    if (this._lastSecondary === NOTHING) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('takeWhileBy', mixin);
	var P = createProperty('takeWhileBy', mixin);

	module.exports = function takeWhileBy(primary, secondary) {
	  return new (primary.ofSameType(S, P))(primary, secondary);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init() {
	    this._hasFalseyFromSecondary = false;
	  },

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    if (this._hasFalseyFromSecondary) {
	      this._emitValue(x);
	    }
	  },

	  _handleSecondaryValue: function _handleSecondaryValue(x) {
	    this._hasFalseyFromSecondary = this._hasFalseyFromSecondary || !x;
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd() {
	    if (!this._hasFalseyFromSecondary) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('skipWhileBy', mixin);
	var P = createProperty('skipWhileBy', mixin);

	module.exports = function skipWhileBy(primary, secondary) {
	  return new (primary.ofSameType(S, P))(primary, secondary);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    if (this._lastSecondary !== NOTHING) {
	      this._emitValue(x);
	    }
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd() {
	    if (this._lastSecondary === NOTHING) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('skipUntilBy', mixin);
	var P = createProperty('skipUntilBy', mixin);

	module.exports = function skipUntilBy(primary, secondary) {
	  return new (primary.ofSameType(S, P))(primary, secondary);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _handleSecondaryValue: function _handleSecondaryValue(x) {
	    this._emitEnd();
	  }

	};

	var S = createStream('takeUntilBy', mixin);
	var P = createProperty('takeUntilBy', mixin);

	module.exports = function takeUntilBy(primary, secondary) {
	  return new (primary.ofSameType(S, P))(primary, secondary);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var mixin = {

	  _init: function _init() {
	    var _ref = arguments[0] === undefined ? {} : arguments[0];

	    var _ref$flushOnEnd = _ref.flushOnEnd;
	    var flushOnEnd = _ref$flushOnEnd === undefined ? true : _ref$flushOnEnd;

	    this._buff = [];
	    this._flushOnEnd = flushOnEnd;
	  },

	  _free: function _free() {
	    this._buff = null;
	  },

	  _flush: function _flush() {
	    if (this._buff !== null && this._buff.length !== 0) {
	      this._emitValue(this._buff);
	      this._buff = [];
	    }
	  },

	  _handlePrimaryEnd: function _handlePrimaryEnd() {
	    if (this._flushOnEnd) {
	      this._flush();
	    }
	    this._emitEnd();
	  },

	  _onActivation: function _onActivation() {
	    this._primary.onAny(this._$handlePrimaryAny);
	    if (this._alive && this._secondary !== null) {
	      this._secondary.onAny(this._$handleSecondaryAny);
	    }
	  },

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    this._buff.push(x);
	  },

	  _handleSecondaryValue: function _handleSecondaryValue(x) {
	    this._flush();
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd(x) {
	    if (!this._flushOnEnd) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('bufferBy', mixin);
	var P = createProperty('bufferBy', mixin);

	module.exports = function bufferBy(primary, secondary, options /* optional */) {
	  return new (primary.ofSameType(S, P))(primary, secondary, options);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(88);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _init: function _init() {
	    var _ref = arguments[0] === undefined ? {} : arguments[0];

	    var _ref$flushOnEnd = _ref.flushOnEnd;
	    var flushOnEnd = _ref$flushOnEnd === undefined ? true : _ref$flushOnEnd;

	    this._buff = [];
	    this._flushOnEnd = flushOnEnd;
	  },

	  _free: function _free() {
	    this._buff = null;
	  },

	  _flush: function _flush() {
	    if (this._buff !== null && this._buff.length !== 0) {
	      this._emitValue(this._buff);
	      this._buff = [];
	    }
	  },

	  _handlePrimaryEnd: function _handlePrimaryEnd() {
	    if (this._flushOnEnd) {
	      this._flush();
	    }
	    this._emitEnd();
	  },

	  _handlePrimaryValue: function _handlePrimaryValue(x) {
	    this._buff.push(x);
	    if (this._lastSecondary !== NOTHING && !this._lastSecondary) {
	      this._flush();
	    }
	  },

	  _handleSecondaryEnd: function _handleSecondaryEnd(x) {
	    if (!this._flushOnEnd && (this._lastSecondary === NOTHING || this._lastSecondary)) {
	      this._emitEnd();
	    }
	  }

	};

	var S = createStream('bufferWhileBy', mixin);
	var P = createProperty('bufferWhileBy', mixin);

	module.exports = function bufferWhileBy(primary, secondary, options /* optional */) {
	  return new (primary.ofSameType(S, P))(primary, secondary, options);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var merge = __webpack_require__(49);
	var map = __webpack_require__(20);
	var skipDuplicates = __webpack_require__(27);
	var toProperty = __webpack_require__(17);

	var f = function f() {
	  return false;
	};
	var t = function t() {
	  return true;
	};

	module.exports = function awaiting(a, b) {
	  var result = merge([map(a, t), map(b, f)]);
	  result = skipDuplicates(result);
	  result = toProperty(result, f);
	  return result.setName(a, 'awaiting');
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Stream = __webpack_require__(2);

	function Emitter() {
	  Stream.call(this);
	}

	inherit(Emitter, Stream, {

	  _name: 'emitter',

	  emit: function emit(x) {
	    this._emitValue(x);
	    return this;
	  },

	  error: function error(x) {
	    this._emitError(x);
	    return this;
	  },

	  end: function end() {
	    this._emitEnd();
	    return this;
	  },

	  emitEvent: function emitEvent(event) {
	    this._emit(event.type, event.value);
	  }

	});

	module.exports = Emitter;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var AbstractPool = __webpack_require__(87);

	function Bus() {
	  AbstractPool.call(this);
	}

	inherit(Bus, AbstractPool, {

	  _name: 'bus',

	  plug: function plug(obs) {
	    this._add(obs);
	    return this;
	  },
	  unplug: function unplug(obs) {
	    this._remove(obs);
	    return this;
	  },

	  emit: function emit(x) {
	    this._emitValue(x);
	    return this;
	  },
	  error: function error(x) {
	    this._emitError(x);
	    return this;
	  },
	  end: function end() {
	    this._emitEnd();
	    return this;
	  },
	  emitEvent: function emitEvent(event) {
	    this._emit(event.type, event.value);
	  }

	});

	module.exports = Bus;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(84);

	var createStream = _require.createStream;
	var createProperty = _require.createProperty;

	var _require2 = __webpack_require__(79);

	var NOTHING = _require2.NOTHING;

	var mixin = {

	  _init: function _init(_ref) {
	    var fn = _ref.fn;
	    var seed = _ref.seed;

	    this._fn = fn;
	    this._result = seed;
	  },

	  _free: function _free() {
	    this._fn = null;
	    this._result = null;
	  },

	  _handleValue: function _handleValue(x) {
	    var fn = this._fn;
	    this._result = this._result === NOTHING ? x : fn(this._result, x);
	  },

	  _handleEnd: function _handleEnd() {
	    if (this._result !== NOTHING) {
	      this._emitValue(this._result);
	    }
	    this._emitEnd();
	  }

	};

	var S = createStream('reduce', mixin);
	var P = createProperty('reduce', mixin);

	module.exports = function reduce(obs, fn) {
	  var seed = arguments[2] === undefined ? NOTHING : arguments[2];

	  return new (obs.ofSameType(S, P))(obs, { fn: fn, seed: seed });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var combine = __webpack_require__(47);

	var _require = __webpack_require__(86);

	var apply = _require.apply;

	var _require2 = __webpack_require__(81);

	var circleShift = _require2.circleShift;

	module.exports = function sampledBy(passive, active, combinator) {

	  var _combinator = combinator;

	  // we need to flip `passive` and `active` in combinator function
	  if (passive.length > 0) {
	    _combinator = function () {
	      var args = circleShift(arguments, passive.length);
	      return combinator ? apply(combinator, null, args) : args;
	    };
	  }

	  return combine(active, passive, _combinator).setName('sampledBy');
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var timeBased = __webpack_require__(82);

	var _require = __webpack_require__(81);

	var cloneArray = _require.cloneArray;

	var S = timeBased({

	  _name: 'repeatedly',

	  _init: function _init(_ref) {
	    var xs = _ref.xs;

	    this._xs = cloneArray(xs);
	    this._i = -1;
	  },

	  _onTick: function _onTick() {
	    if (this._xs.length > 0) {
	      this._i = (this._i + 1) % this._xs.length;
	      this._emitValue(this._xs[this._i]);
	    }
	  }

	});

	module.exports = function repeatedly(wait, xs) {
	  return new S(wait, { xs: xs });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);

	module.exports = function mapTo(obs, x) {
	  return map(obs, function () {
	    return x;
	  }).setName(obs, 'mapTo');
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);

	module.exports = function tap(obs, fn) {
	  return map(obs, function (x) {
	    fn(x);return x;
	  }).setName(obs, 'tap');
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);

	module.exports = function pluck(obs, propName) {
	  return map(obs, function (x) {
	    return x[propName];
	  }).setName(obs, 'pluck');
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);

	var _require = __webpack_require__(86);

	var apply = _require.apply;

	module.exports = function invoke(obs, methodName, args) {

	  var fn = args.length === 0 ? function (x) {
	    return x[methodName]();
	  } : function (x) {
	    return apply(x[methodName], x, args);
	  };

	  return map(obs, fn).setName(obs, 'invoke');
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);
	var now = __webpack_require__(85);

	module.exports = function timestamp(obs) {
	  return map(obs, function (x) {
	    return { value: x, time: now() };
	  }).setName(obs, 'timestamp');
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var combine = __webpack_require__(47);

	function fn() {
	  var i = undefined;
	  for (i = 0; i < arguments.length; i++) {
	    if (!arguments[i]) {
	      return arguments[i];
	    }
	  }
	  return arguments[i - 1];
	}

	module.exports = function and(observables) {
	  return combine(observables, [], fn).setName('and');
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var combine = __webpack_require__(47);

	function fn() {
	  var i = undefined;
	  for (i = 0; i < arguments.length; i++) {
	    if (arguments[i]) {
	      return arguments[i];
	    }
	  }
	  return arguments[i - 1];
	}

	module.exports = function or(observables) {
	  return combine(observables, [], fn).setName('or');
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(20);

	module.exports = function not(obs) {
	  return map(obs, function (x) {
	    return !x;
	  }).setName(obs, 'not');
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var stream = __webpack_require__(13);

	var _require = __webpack_require__(86);

	var apply = _require.apply;

	module.exports = function fromSubUnsub(sub, unsub, transformer /* Function | falsey */) {
	  return stream(function (emitter) {

	    var handler = transformer ? function () {
	      emitter.emit(apply(transformer, this, arguments));
	    } : emitter.emit;

	    sub(handler);
	    return function () {
	      return unsub(handler);
	    };
	  }).setName('fromSubUnsub');
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function createObj(proto) {
	  var F = function F() {};
	  F.prototype = proto;
	  return new F();
	}

	function extend(target /*, mixin1, mixin2...*/) {
	  var length = arguments.length,
	      i = undefined,
	      prop = undefined;
	  for (i = 1; i < length; i++) {
	    for (prop in arguments[i]) {
	      target[prop] = arguments[i][prop];
	    }
	  }
	  return target;
	}

	function inherit(Child, Parent /*, mixin1, mixin2...*/) {
	  var length = arguments.length,
	      i = undefined;
	  Child.prototype = createObj(Parent.prototype);
	  Child.prototype.constructor = Child;
	  for (i = 2; i < length; i++) {
	    extend(Child.prototype, arguments[i]);
	  }
	  return Child;
	}

	module.exports = { extend: extend, inherit: inherit };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.NOTHING = ['<nothing>'];
	exports.END = 'end';
	exports.VALUE = 'value';
	exports.ERROR = 'error';
	exports.ANY = 'any';

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var extend = _require.extend;

	var _require2 = __webpack_require__(79);

	var VALUE = _require2.VALUE;
	var ERROR = _require2.ERROR;
	var ANY = _require2.ANY;

	var _require3 = __webpack_require__(81);

	var concat = _require3.concat;
	var removeByPred = _require3.removeByPred;

	function callSubscriber(type, fn, event) {
	  if (type === ANY) {
	    fn(event);
	  } else if (type === event.type) {
	    if (type === VALUE || type === ERROR) {
	      fn(event.value);
	    } else {
	      fn();
	    }
	  }
	}

	function Dispatcher() {
	  this._items = [];
	}

	extend(Dispatcher.prototype, {

	  add: function add(type, fn) {
	    this._items = concat(this._items, [{ type: type, fn: fn }]);
	    return this._items.length;
	  },

	  remove: function remove(type, fn) {
	    this._items = removeByPred(this._items, function (x) {
	      return x.type === type && x.fn === fn;
	    });
	    return this._items.length;
	  },

	  dispatch: function dispatch(event) {
	    for (var i = 0, items = this._items; i < items.length; i++) {
	      callSubscriber(items[i].type, items[i].fn, event);
	    }
	  }

	});

	module.exports = { callSubscriber: callSubscriber, Dispatcher: Dispatcher };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function concat(a, b) {
	  var result = undefined,
	      length = undefined,
	      i = undefined,
	      j = undefined;
	  if (a.length === 0) {
	    return b;
	  }
	  if (b.length === 0) {
	    return a;
	  }
	  j = 0;
	  result = new Array(a.length + b.length);
	  length = a.length;
	  for (i = 0; i < length; i++, j++) {
	    result[j] = a[i];
	  }
	  length = b.length;
	  for (i = 0; i < length; i++, j++) {
	    result[j] = b[i];
	  }
	  return result;
	}

	function circleShift(arr, distance) {
	  var length = arr.length,
	      result = new Array(length),
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    result[(i + distance) % length] = arr[i];
	  }
	  return result;
	}

	function find(arr, value) {
	  var length = arr.length,
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    if (arr[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function findByPred(arr, pred) {
	  var length = arr.length,
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    if (pred(arr[i])) {
	      return i;
	    }
	  }
	  return -1;
	}

	function cloneArray(input) {
	  var length = input.length,
	      result = new Array(length),
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    result[i] = input[i];
	  }
	  return result;
	}

	function remove(input, index) {
	  var length = input.length,
	      result = undefined,
	      i = undefined,
	      j = undefined;
	  if (index >= 0 && index < length) {
	    if (length === 1) {
	      return [];
	    } else {
	      result = new Array(length - 1);
	      for (i = 0, j = 0; i < length; i++) {
	        if (i !== index) {
	          result[j] = input[i];
	          j++;
	        }
	      }
	      return result;
	    }
	  } else {
	    return input;
	  }
	}

	function removeByPred(input, pred) {
	  return remove(input, findByPred(input, pred));
	}

	function map(input, fn) {
	  var length = input.length,
	      result = new Array(length),
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    result[i] = fn(input[i]);
	  }
	  return result;
	}

	function forEach(arr, fn) {
	  var length = arr.length,
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    fn(arr[i]);
	  }
	}

	function fillArray(arr, value) {
	  var length = arr.length,
	      i = undefined;
	  for (i = 0; i < length; i++) {
	    arr[i] = value;
	  }
	}

	function contains(arr, value) {
	  return find(arr, value) !== -1;
	}

	function slide(cur, next, max) {
	  var length = Math.min(max, cur.length + 1),
	      offset = cur.length - length + 1,
	      result = new Array(length),
	      i = undefined;
	  for (i = offset; i < length; i++) {
	    result[i - offset] = cur[i];
	  }
	  result[length - 1] = next;
	  return result;
	}

	module.exports = {
	  concat: concat,
	  circleShift: circleShift,
	  find: find,
	  findByPred: findByPred,
	  cloneArray: cloneArray,
	  remove: remove,
	  removeByPred: removeByPred,
	  map: map,
	  forEach: forEach,
	  fillArray: fillArray,
	  contains: contains,
	  slide: slide
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var Stream = __webpack_require__(2);

	module.exports = function timeBased(mixin) {

	  function AnonymousStream(wait, options) {
	    var _this = this;

	    Stream.call(this);
	    this._wait = wait;
	    this._intervalId = null;
	    this._$onTick = function () {
	      return _this._onTick();
	    };
	    this._init(options);
	  }

	  inherit(AnonymousStream, Stream, {

	    _init: function _init(options) {},
	    _free: function _free() {},

	    _onTick: function _onTick() {},

	    _onActivation: function _onActivation() {
	      this._intervalId = setInterval(this._$onTick, this._wait);
	    },

	    _onDeactivation: function _onDeactivation() {
	      if (this._intervalId !== null) {
	        clearInterval(this._intervalId);
	        this._intervalId = null;
	      }
	    },

	    _clear: function _clear() {
	      Stream.prototype._clear.call(this);
	      this._$onTick = null;
	      this._free();
	    }

	  }, mixin);

	  return AnonymousStream;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function emitter(obs) {
	  return {
	    emit: function emit(x) {
	      return obs._emitValue(x);
	    },
	    error: function error(x) {
	      return obs._emitError(x);
	    },
	    end: function end() {
	      return obs._emitEnd();
	    },
	    emitEvent: function emitEvent(e) {
	      return obs._emit(e.type, e.value);
	    }
	  };
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);
	var Property = __webpack_require__(3);

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var _require2 = __webpack_require__(79);

	var VALUE = _require2.VALUE;
	var ERROR = _require2.ERROR;
	var END = _require2.END;

	function createConstructor(BaseClass, name) {
	  return function AnonymousObservable(source, options) {
	    var _this = this;

	    BaseClass.call(this);
	    this._source = source;
	    this._name = '' + source._name + '.' + name;
	    this._init(options);
	    this._$handleAny = function (event) {
	      return _this._handleAny(event);
	    };
	  };
	}

	function createClassMethods(BaseClass) {
	  return {

	    _init: function _init(options) {},
	    _free: function _free() {},

	    _handleValue: function _handleValue(x) {
	      this._emitValue(x);
	    },
	    _handleError: function _handleError(x) {
	      this._emitError(x);
	    },
	    _handleEnd: function _handleEnd() {
	      this._emitEnd();
	    },

	    _handleAny: function _handleAny(event) {
	      switch (event.type) {
	        case VALUE:
	          return this._handleValue(event.value);
	        case ERROR:
	          return this._handleError(event.value);
	        case END:
	          return this._handleEnd();
	      }
	    },

	    _onActivation: function _onActivation() {
	      this._source.onAny(this._$handleAny);
	    },
	    _onDeactivation: function _onDeactivation() {
	      this._source.offAny(this._$handleAny);
	    },

	    _clear: function _clear() {
	      BaseClass.prototype._clear.call(this);
	      this._source = null;
	      this._$handleAny = null;
	      this._free();
	    }

	  };
	}

	function createStream(name, mixin) {
	  var S = createConstructor(Stream, name);
	  inherit(S, Stream, createClassMethods(Stream), mixin);
	  return S;
	}

	function createProperty(name, mixin) {
	  var P = createConstructor(Property, name);
	  inherit(P, Property, createClassMethods(Property), mixin);
	  return P;
	}

	module.exports = { createStream: createStream, createProperty: createProperty };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = Date.now ? function () {
	  return Date.now();
	} : function () {
	  return new Date().getTime();
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function spread(fn, length) {
	  switch (length) {
	    case 0:
	      return function (a) {
	        return fn();
	      };
	    case 1:
	      return function (a) {
	        return fn(a[0]);
	      };
	    case 2:
	      return function (a) {
	        return fn(a[0], a[1]);
	      };
	    case 3:
	      return function (a) {
	        return fn(a[0], a[1], a[2]);
	      };
	    case 4:
	      return function (a) {
	        return fn(a[0], a[1], a[2], a[3]);
	      };
	    default:
	      return function (a) {
	        return fn.apply(null, a);
	      };
	  }
	}

	function apply(fn, c, a) {
	  var aLength = a ? a.length : 0;
	  if (c == null) {
	    switch (aLength) {
	      case 0:
	        return fn();
	      case 1:
	        return fn(a[0]);
	      case 2:
	        return fn(a[0], a[1]);
	      case 3:
	        return fn(a[0], a[1], a[2]);
	      case 4:
	        return fn(a[0], a[1], a[2], a[3]);
	      default:
	        return fn.apply(null, a);
	    }
	  } else {
	    switch (aLength) {
	      case 0:
	        return fn.call(c);
	      default:
	        return fn.apply(c, a);
	    }
	  }
	}

	module.exports = { spread: spread, apply: apply };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);

	var _require = __webpack_require__(79);

	var VALUE = _require.VALUE;
	var ERROR = _require.ERROR;

	var _require2 = __webpack_require__(78);

	var inherit = _require2.inherit;

	var _require3 = __webpack_require__(81);

	var concat = _require3.concat;
	var forEach = _require3.forEach;
	var findByPred = _require3.findByPred;
	var find = _require3.find;
	var remove = _require3.remove;
	var cloneArray = _require3.cloneArray;

	var id = function id(x) {
	  return x;
	};

	function AbstractPool() {
	  var _this = this;

	  var _ref = arguments[0] === undefined ? {} : arguments[0];

	  var _ref$queueLim = _ref.queueLim;
	  var queueLim = _ref$queueLim === undefined ? 0 : _ref$queueLim;
	  var _ref$concurLim = _ref.concurLim;
	  var concurLim = _ref$concurLim === undefined ? -1 : _ref$concurLim;
	  var _ref$drop = _ref.drop;
	  var drop = _ref$drop === undefined ? 'new' : _ref$drop;

	  Stream.call(this);

	  this._queueLim = queueLim < 0 ? -1 : queueLim;
	  this._concurLim = concurLim < 0 ? -1 : concurLim;
	  this._drop = drop;
	  this._queue = [];
	  this._curSources = [];
	  this._$handleSubAny = function (event) {
	    return _this._handleSubAny(event);
	  };
	  this._$endHandlers = [];
	  this._currentlyAdding = null;

	  if (this._concurLim === 0) {
	    this._emitEnd();
	  }
	}

	inherit(AbstractPool, Stream, {

	  _name: 'abstractPool',

	  _add: function _add(obj, toObs /* Function | falsey */) {
	    toObs = toObs || id;
	    if (this._concurLim === -1 || this._curSources.length < this._concurLim) {
	      this._addToCur(toObs(obj));
	    } else {
	      if (this._queueLim === -1 || this._queue.length < this._queueLim) {
	        this._addToQueue(toObs(obj));
	      } else if (this._drop === 'old') {
	        this._removeOldest();
	        this._add(obj, toObs);
	      }
	    }
	  },

	  _addAll: function _addAll(obss) {
	    var _this2 = this;

	    forEach(obss, function (obs) {
	      return _this2._add(obs);
	    });
	  },

	  _remove: function _remove(obs) {
	    if (this._removeCur(obs) === -1) {
	      this._removeQueue(obs);
	    }
	  },

	  _addToQueue: function _addToQueue(obs) {
	    this._queue = concat(this._queue, [obs]);
	  },

	  _addToCur: function _addToCur(obs) {
	    if (this._active) {
	      // Optimization for the .flatMap(x => Kefir.constant(...)) case.
	      // We could just did following here, but it would be ~5x slower:
	      //
	      //     this._curSources = concat(this._curSources, [obs]);
	      //     this._subscribe(obs);
	      //
	      this._currentlyAdding = obs;
	      obs.onAny(this._$handleSubAny);
	      this._currentlyAdding = null;
	      if (obs._alive) {
	        this._curSources = concat(this._curSources, [obs]);
	        if (this._active) {
	          this._subToEnd(obs);
	        }
	      }
	    } else {
	      this._curSources = concat(this._curSources, [obs]);
	    }
	  },

	  _subToEnd: function _subToEnd(obs) {
	    var _this3 = this;

	    var onEnd = function onEnd() {
	      return _this3._removeCur(obs);
	    };
	    this._$endHandlers.push({ obs: obs, handler: onEnd });
	    obs.onEnd(onEnd);
	  },

	  _subscribe: function _subscribe(obs) {
	    obs.onAny(this._$handleSubAny);

	    // it can become inactive in responce of subscribing to `obs.onAny` above
	    if (this._active) {
	      this._subToEnd(obs);
	    }
	  },

	  _unsubscribe: function _unsubscribe(obs) {
	    obs.offAny(this._$handleSubAny);

	    var onEndI = findByPred(this._$endHandlers, function (obj) {
	      return obj.obs === obs;
	    });
	    if (onEndI !== -1) {
	      obs.offEnd(this._$endHandlers[onEndI].handler);
	      this._$endHandlers.splice(onEndI, 1);
	    }
	  },

	  _handleSubAny: function _handleSubAny(event) {
	    if (event.type === VALUE || event.type === ERROR) {
	      this._emit(event.type, event.value);
	    }
	  },

	  _removeQueue: function _removeQueue(obs) {
	    var index = find(this._queue, obs);
	    this._queue = remove(this._queue, index);
	    return index;
	  },

	  _removeCur: function _removeCur(obs) {
	    if (this._active) {
	      this._unsubscribe(obs);
	    }
	    var index = find(this._curSources, obs);
	    this._curSources = remove(this._curSources, index);
	    if (index !== -1) {
	      if (this._queue.length !== 0) {
	        this._pullQueue();
	      } else if (this._curSources.length === 0) {
	        this._onEmpty();
	      }
	    }
	    return index;
	  },

	  _removeOldest: function _removeOldest() {
	    this._removeCur(this._curSources[0]);
	  },

	  _pullQueue: function _pullQueue() {
	    if (this._queue.length !== 0) {
	      this._queue = cloneArray(this._queue);
	      this._addToCur(this._queue.shift());
	    }
	  },

	  _onActivation: function _onActivation() {
	    for (var i = 0, sources = this._curSources; i < sources.length && this._active; i++) {
	      this._subscribe(sources[i]);
	    }
	  },

	  _onDeactivation: function _onDeactivation() {
	    for (var i = 0, sources = this._curSources; i < sources.length; i++) {
	      this._unsubscribe(sources[i]);
	    }
	    if (this._currentlyAdding !== null) {
	      this._unsubscribe(this._currentlyAdding);
	    }
	  },

	  _isEmpty: function _isEmpty() {
	    return this._curSources.length === 0;
	  },

	  _onEmpty: function _onEmpty() {},

	  _clear: function _clear() {
	    Stream.prototype._clear.call(this);
	    this._queue = null;
	    this._curSources = null;
	    this._$handleSubAny = null;
	    this._$endHandlers = null;
	  }

	});

	module.exports = AbstractPool;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(2);
	var Property = __webpack_require__(3);

	var _require = __webpack_require__(78);

	var inherit = _require.inherit;

	var _require2 = __webpack_require__(79);

	var VALUE = _require2.VALUE;
	var ERROR = _require2.ERROR;
	var END = _require2.END;
	var NOTHING = _require2.NOTHING;

	function createConstructor(BaseClass, name) {
	  return function AnonymousObservable(primary, secondary, options) {
	    var _this = this;

	    BaseClass.call(this);
	    this._primary = primary;
	    this._secondary = secondary;
	    this._name = '' + primary._name + '.' + name;
	    this._lastSecondary = NOTHING;
	    this._$handleSecondaryAny = function (event) {
	      return _this._handleSecondaryAny(event);
	    };
	    this._$handlePrimaryAny = function (event) {
	      return _this._handlePrimaryAny(event);
	    };
	    this._init(options);
	  };
	}

	function createClassMethods(BaseClass) {
	  return {
	    _init: function _init(options) {},
	    _free: function _free() {},

	    _handlePrimaryValue: function _handlePrimaryValue(x) {
	      this._emitValue(x);
	    },
	    _handlePrimaryError: function _handlePrimaryError(x) {
	      this._emitError(x);
	    },
	    _handlePrimaryEnd: function _handlePrimaryEnd() {
	      this._emitEnd();
	    },

	    _handleSecondaryValue: function _handleSecondaryValue(x) {
	      this._lastSecondary = x;
	    },
	    _handleSecondaryError: function _handleSecondaryError(x) {
	      this._emitError(x);
	    },
	    _handleSecondaryEnd: function _handleSecondaryEnd() {},

	    _handlePrimaryAny: function _handlePrimaryAny(event) {
	      switch (event.type) {
	        case VALUE:
	          return this._handlePrimaryValue(event.value);
	        case ERROR:
	          return this._handlePrimaryError(event.value);
	        case END:
	          return this._handlePrimaryEnd(event.value);
	      }
	    },
	    _handleSecondaryAny: function _handleSecondaryAny(event) {
	      switch (event.type) {
	        case VALUE:
	          return this._handleSecondaryValue(event.value);
	        case ERROR:
	          return this._handleSecondaryError(event.value);
	        case END:
	          this._handleSecondaryEnd(event.value);
	          this._removeSecondary();
	      }
	    },

	    _removeSecondary: function _removeSecondary() {
	      if (this._secondary !== null) {
	        this._secondary.offAny(this._$handleSecondaryAny);
	        this._$handleSecondaryAny = null;
	        this._secondary = null;
	      }
	    },

	    _onActivation: function _onActivation() {
	      if (this._secondary !== null) {
	        this._secondary.onAny(this._$handleSecondaryAny);
	      }
	      if (this._active) {
	        this._primary.onAny(this._$handlePrimaryAny);
	      }
	    },
	    _onDeactivation: function _onDeactivation() {
	      if (this._secondary !== null) {
	        this._secondary.offAny(this._$handleSecondaryAny);
	      }
	      this._primary.offAny(this._$handlePrimaryAny);
	    },

	    _clear: function _clear() {
	      BaseClass.prototype._clear.call(this);
	      this._primary = null;
	      this._secondary = null;
	      this._lastSecondary = null;
	      this._$handleSecondaryAny = null;
	      this._$handlePrimaryAny = null;
	      this._free();
	    }

	  };
	}

	function createStream(name, mixin) {
	  var S = createConstructor(Stream, name);
	  inherit(S, Stream, createClassMethods(Stream), mixin);
	  return S;
	}

	function createProperty(name, mixin) {
	  var P = createConstructor(Property, name);
	  inherit(P, Property, createClassMethods(Property), mixin);
	  return P;
	}

	module.exports = { createStream: createStream, createProperty: createProperty };

/***/ }
/******/ ])
});
;