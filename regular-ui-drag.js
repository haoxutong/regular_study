(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI2"] = factory(require("regularjs"));
	else
		root["RGUI2"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rguiUiBase = __webpack_require__(1);

	Object.keys(_rguiUiBase).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiBase[key];
	    }
	  });
	});

	var _rguiUiChart = __webpack_require__(7);

	Object.keys(_rguiUiChart).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiChart[key];
	    }
	  });
	});

	var _rguiUiDrag = __webpack_require__(19);

	Object.keys(_rguiUiDrag).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiDrag[key];
	    }
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._ = exports.Component = undefined;

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _util = __webpack_require__(5);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Component = _component2.default;
	exports._ = _util2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(3);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	var _filter = __webpack_require__(4);

	var _filter2 = _interopRequireDefault(_filter);

	var _directive = __webpack_require__(6);

	var _directive2 = _interopRequireDefault(_directive);

	var _util = __webpack_require__(5);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Component
	 * @extends Regular
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Component = _regularjs2.default.extend({
	    /**
	     * @protected
	     */
	    config: function config() {
	        this.defaults({
	            readonly: false,
	            disabled: false,
	            visible: true,
	            'class': ''
	        });
	        this.supr();
	    },

	    /**
	     * @method defaults(...options) 设置`this.data`的默认值
	     * @protected
	     * @param  {object} ...options 若干默认选项。从左到右依次进行，不会覆盖已经设置过的值。
	     * @return {object} data 返回`this.data`
	     */
	    defaults: function defaults() {
	        for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
	            options[_key] = arguments[_key];
	        }

	        return _util2.default.defaults.apply(_util2.default, [this.data].concat(options));
	    },

	    /**
	     * @protected
	     */
	    watch: function watch() {
	        // just for override
	        // recommand putting all `this.$watch` here.
	    }
	}).filter(_filter2.default).directive(_directive2.default);

	exports.default = Component;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(5);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filter = {
	    dateFormat: _util2.default.dateFormat,
	    format: _util2.default.format
	};

	exports.default = filter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _regularjs = __webpack_require__(3);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dom = _regularjs2.default.dom;

	// Polyfill
	if (!_regularjs2.default.prototype.$once) {
	    _regularjs2.default.prototype.$once = function (event, fn) {
	        var call = function call() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            fn && fn.apply(this, args);
	            this.$off(event, call);
	        };
	        return this.$on(event, call);
	    };
	}

	var _ = {
	    noop: _regularjs2.default.util.noop,
	    /**
	     * @method defaults(target,...sources) 设置默认值。不会覆盖目标对象中已经设置的值（除`undefined`）。
	     * @public
	     * @param  {object} target 目标对象
	     * @param  {object} ...sources 默认对象。从左到右依次进行，不会覆盖已经设置过的值。
	     * @return {object} target 返回目标对象
	     */
	    defaults: function defaults(target) {
	        for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            sources[_key2 - 1] = arguments[_key2];
	        }

	        sources.forEach(function (source) {
	            for (var key in source) {
	                if (source.hasOwnProperty(key) && target[key] === undefined) target[key] = source[key];
	            }
	        });
	        return target;
	    },

	    /**
	     * @method createBoolDirective(func) 创建一个布尔指令。简化了实现原生regular指令中的`$watch`等过程。
	     * @public
	     * @param  {function} func(elem,value) 简化指令函数。`elem`表示应用该指令的元素，`value`表示实时改变的值。
	     * @return {Directive} 返回一个指令
	     */
	    createBoolDirective: function createBoolDirective(func) {
	        return function (elem, value) {
	            var _this = this;

	            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {
	                this.$watch(value, function (value, oldValue) {
	                    if (!value === !oldValue) return;
	                    func.call(_this, elem, value);
	                });
	            } else if (value === undefined || value === '') func.call(this, elem, true);else func.call(this, elem, !!value);
	        };
	    },

	    /**
	     * @method createBoolClassDirective(boolClass) 创建一个布尔样式指令。自动添加/删除CSS类。
	     * @public
	     * @param  {string} boolClass 需要控制的CSS类
	     * @return {Directive} 返回一个指令
	     */
	    createBoolClassDirective: function createBoolClassDirective(boolClass) {
	        return _.createBoolDirective(function (elem, value) {
	            dom[value ? 'addClass' : 'delClass'](elem, boolClass);
	        });
	    },

	    /**
	     * @method format(value,type,...args) 日期格式化
	     * @public
	     * @param  {Date|number} date 需要格式化的值
	     * @param  {string} format 格式。默认为`yyyy-MM-dd HH:mm`。
	     * @return {Directive} 返回生成的字符串
	     */
	    dateFormat: function () {
	        var MAPS = {
	            yyyy: function yyyy(date) {
	                return date.getFullYear();
	            },
	            MM: function MM(date) {
	                return String(date.getMonth() + 1).padStart(2, '0');
	            },
	            dd: function dd(date) {
	                return String(date.getDate()).padStart(2, '0');
	            },
	            HH: function HH(date) {
	                return String(date.getHours()).padStart(2, '0');
	            },
	            mm: function mm(date) {
	                return String(date.getMinutes()).padStart(2, '0');
	            },
	            ss: function ss(date) {
	                return String(date.getSeconds()).padStart(2, '0');
	            }
	        };

	        var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');

	        return function (value) {
	            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd HH:mm';

	            if (!value) return '';
	            value = new Date(value);

	            return format.replace(trunk, function (capture) {
	                return MAPS[capture](value);
	            });
	        };
	    }(),
	    /**
	     * @method format(value,type,...args) 格式化
	     * @public
	     * @param  {string} value 需要格式化的值
	     * @param  {string} type 格式化类型，目前仅支持`date`
	     * @param  {string} ...args 其他参数
	     * @return {Directive} 返回生成的字符串
	     */
	    format: function format(value, type) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	            args[_key3 - 2] = arguments[_key3];
	        }

	        return _[type + 'Format'].apply(_, [value].concat(args));
	    }
	};

	exports.default = _;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(5);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var directive = {};

	directive['z-crt'] = _util2.default.createBoolClassDirective('z-crt');
	directive['z-sel'] = _util2.default.createBoolClassDirective('z-sel');
	directive['z-chk'] = _util2.default.createBoolClassDirective('z-chk');
	directive['z-act'] = _util2.default.createBoolClassDirective('z-act');
	directive['z-dis'] = _util2.default.createBoolClassDirective('z-dis');

	directive['r-show'] = _util2.default.createBoolDirective(function (elem, value) {
	    elem.style.display = value ? 'block' : '';
	});

	directive['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {
	    value && setTimeout(function () {
	        return elem.focus();
	    }, 0);
	});

	exports.default = directive;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DonutChart = exports.PieChart = exports.LineChart = exports.BarChart = exports.Chart = undefined;

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	var _barChart = __webpack_require__(10);

	var _barChart2 = _interopRequireDefault(_barChart);

	var _lineChart = __webpack_require__(13);

	var _lineChart2 = _interopRequireDefault(_lineChart);

	var _pieChart = __webpack_require__(15);

	var _pieChart2 = _interopRequireDefault(_pieChart);

	var _donutChart = __webpack_require__(17);

	var _donutChart2 = _interopRequireDefault(_donutChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Chart = _chart2.default;
	exports.BarChart = _barChart2.default;
	exports.LineChart = _lineChart2.default;
	exports.PieChart = _pieChart2.default;
	exports.DonutChart = _donutChart2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(1);

	var _index = __webpack_require__(9);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Chart
	 * @extends Component
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string='100%'}           options.data.width               => 图表宽度
	 * @param {string='480px'}          options.data.height              => 图表高度
	 * @param {string=''}               options.data.title               => 标题
	 * @param {string=''}               options.data.titleTemplate      @=> 标题模板
	 * @param {string=''}               options.data.contentTemplate    @=> 内容模板，继承中使用
	 * @param {Array}                   options.data.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
	 * @param {boolean=false}           options.data.border              => 是否显示边框
	 * @param {boolean=true}            options.data.legend              => 是否显示图例
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Chart = _rguiUiBase.Component.extend({
	    name: 'chart',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            width: '100%',
	            height: '480px',
	            title: '',
	            titleTemplate: '',
	            contentTemplate: '',
	            data: undefined,
	            border: false,
	            legend: true
	        });
	        this.supr();
	        this.watch();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    watch: function watch() {
	        var _this = this;

	        // 自动绘制
	        this.$watch('data', function (data) {
	            if (data && data.length) _this.draw();
	        });
	    },

	    /**
	     * @protected
	     */
	    draw: function draw() {
	        this.$emit('draw', {
	            sender: this
	        });
	    }
	});

	exports.default = Chart;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-chart ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"r-class","value":{"type":"expression","body":"{'m-chart-border':c._sg_('border', d, e),'z-loading':(!c._sg_('data', d, e)),'z-empty':c._sg_('data', d, e)&&(!c._sg_('length', c._sg_('data', d, e)))}","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['width: ',c._sg_('width', d, e),'; height: ',c._sg_('height', d, e),';'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"if","test":{"type":"expression","body":"c._sg_('titleTemplate', d, e)","constant":false,"setbody":"c._ss_('titleTemplate',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_tt"}],"children":[{"type":"template","content":{"type":"expression","body":"c._sg_('titleTemplate', d, e)","constant":false,"setbody":"c._ss_('titleTemplate',p_,d, '=', 1)"}}]},{"type":"text","text":"\n    "}],"alternate":[{"type":"if","test":{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_tt"}],"children":[{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"}]},{"type":"text","text":"\n    "}],"alternate":[]}]},{"type":"text","text":"\n    "},{"type":"if","test":{"type":"expression","body":"c._sg_('captionTemplate', d, e)","constant":false,"setbody":"c._ss_('captionTemplate',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_caption"}],"children":[{"type":"template","content":{"type":"expression","body":"c._sg_('captionTemplate', d, e)","constant":false,"setbody":"c._ss_('captionTemplate',p_,d, '=', 1)"}}]},{"type":"text","text":"\n    "}],"alternate":[{"type":"if","test":{"type":"expression","body":"c._sg_('caption', d, e)","constant":false,"setbody":"c._ss_('caption',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_caption"}],"children":[{"type":"expression","body":"c._sg_('caption', d, e)","constant":false,"setbody":"c._ss_('caption',p_,d, '=', 1)"}]},{"type":"text","text":"\n    "}],"alternate":[]}]},{"type":"text","text":"\n    "},{"type":"if","test":{"type":"expression","body":"c._sg_('legend', d, e)","constant":false,"setbody":"c._ss_('legend',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_legend"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['chart_legend_item chart_legend_item-',c._sg_('key', c._sg_('sery', d, e))].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('hidden', c._sg_('sery', d, e))","constant":false,"setbody":"c._ss_('hidden',p_,c._sg_('sery', d, e), '=', 0)"}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._ss_('hidden',(!c._sg_('hidden', c._sg_('sery', d, e))),c._sg_('sery', d, e), '=', 0)","constant":false,"setbody":"c._ss_('hidden',p_,c._sg_('sery', d, e), '=', 0)"}}],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('sery', d, e))||c._sg_('key', c._sg_('sery', d, e))","constant":false,"setbody":false}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "}],"alternate":[]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"chart_ct"},{"type":"attribute","name":"ref","value":"content"}],"children":[{"type":"text","text":"\n        "},{"type":"template","content":{"type":"expression","body":"c._sg_('contentTemplate', d, e)","constant":false,"setbody":"c._ss_('contentTemplate',p_,d, '=', 1)"}},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(11);

	var _index2 = _interopRequireDefault(_index);

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	var _util = __webpack_require__(12);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * @class BarChart
	 * @extends Chart
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string='100%'}           options.data.width               => 图表宽度
	 * @param {string='480px'}          options.data.height              => 图表高度
	 * @param {string=''}               options.data.title               => 标题
	 * @param {string=''}               options.data.titleTemplate      @=> 标题模板
	 * @param {string=''}               options.data.tooltipTemplate    @=> 工具提示模板
	 * @param {Array}                   options.data.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
	 * @param {Object}                  options.data.xAxis               => 横坐标信息
	 * @param {Object}                  options.data.yAxis               => 纵坐标信息
	 * @param {Array=[]}                options.data.series              => 序列信息
	 * @param {boolean=false}           options.data.border              => 是否显示边框
	 * @param {boolean=true}            options.data.legend              => 是否显示图例
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string='m-barChart'}     options.data.class               => 补充class
	 */
	var BarChart = _chart2.default.extend({
	    name: 'barChart',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            // @inherited width: '100%',
	            // @inherited height: '480px',
	            // @inherited title: '',
	            // @inherited titleTemplate: '',
	            contentTemplate: _index2.default,
	            class: 'm-barChart',
	            data: undefined,
	            xAxis: {},
	            yAxis: {
	                min: undefined,
	                max: undefined
	            },
	            series: [],
	            _xAxis: { data: [] },
	            _yAxis: { data: [] },
	            tooltipTemplate: ''
	        });
	        this.supr();
	    },
	    draw: function draw() {
	        var _this = this;

	        if (!this.data.data || !this.data.data.length) return;

	        // 堆叠模式
	        if (this.data.stack) {
	            this.data.data.forEach(function (item) {
	                if (item.total !== undefined) return;

	                item.total = 0;
	                _this.data.series.forEach(function (sery) {
	                    return item.total += item[sery.key];
	                });
	            });
	        }

	        //
	        // 确定横坐标
	        //
	        {
	            var _xAxis = this.data._xAxis;

	            _xAxis.count = this.data.xAxis.count || 12;
	            // 柱状图数据全部显示，暂不考虑收缩间隔的情况
	            _xAxis.data = this.data.data.map(function (item) {
	                return item[_this.data.xAxis.key];
	            });
	        }

	        //
	        // 确定纵坐标
	        //
	        {
	            var _yAxis = this.data._yAxis;

	            // 如果没有设置最小值和最大值，则寻找
	            if (this.data.yAxis.min !== undefined) _yAxis.min = this.data.yAxis.min;else if (this.data.stack) _yAxis.min = Math.min.apply(Math, _toConsumableArray(this.data.data.map(function (item) {
	                return item.total;
	            })));else {
	                _yAxis.min = Math.min.apply(Math, _toConsumableArray(this.data.series.map(function (sery) {
	                    return Math.min.apply(Math, _toConsumableArray(_this.data.data.map(function (item) {
	                        return item[sery.key];
	                    })));
	                })));
	            }
	            if (this.data.yAxis.max !== undefined) _yAxis.max = this.data.yAxis.max;else if (this.data.stack) _yAxis.max = Math.max.apply(Math, _toConsumableArray(this.data.data.map(function (item) {
	                return item.total;
	            })));else {
	                _yAxis.max = Math.max.apply(Math, _toConsumableArray(this.data.series.map(function (sery) {
	                    return Math.max.apply(Math, _toConsumableArray(_this.data.data.map(function (item) {
	                        return item[sery.key];
	                    })));
	                })));
	            }

	            _yAxis.count = this.data.yAxis.count || 8;
	            var tick = _util2.default.roundToFirst((_yAxis.max - _yAxis.min) / _yAxis.count) || 1;
	            _yAxis.min = Math.floor(_yAxis.min / tick) * tick;
	            _yAxis.max = Math.ceil(_yAxis.max / tick) * tick;

	            // 如果最小值和最大值相等，则强行区分
	            if (_yAxis.min === _yAxis.max) _yAxis.max = _yAxis.min + _yAxis.count;

	            _yAxis.data = [];
	            for (var i = _yAxis.min; i <= _yAxis.max; i += tick) {
	                _yAxis.data.push(i);
	            }
	        }

	        this.supr();
	    },
	    format: function format(value) {
	        return value;
	    }
	});

	exports.default = BarChart;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_grid"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_xAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_xAxis', d, e), '=', 0)"},"alternate":[],"variable":"xLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_line barChart_line-y"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('xLabel_index', d, e)/c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e))),'%;'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_line barChart_line-y"},{"type":"attribute","name":"style","value":"left: 100%;"}],"children":[]},{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_yAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_yAxis', d, e), '=', 0)"},"alternate":[],"variable":"yLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_line barChart_line-x"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['bottom: ',100*c._sg_('yLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_yAxis', d, e)))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_axis barChart_axis-x"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_xAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_xAxis', d, e), '=', 0)"},"alternate":[],"variable":"xLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_label barChart_label-x"},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('xLabel', d, e)","constant":false,"setbody":"c._ss_('xLabel',p_,d, '=', 1)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('xLabel_index', d, e)/c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e))),'%; width: ',100/c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e))),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n        \n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('xLabelTemplate', d, e)","constant":false,"setbody":"c._ss_('xLabelTemplate',p_,d, '=', 1)"},"consequent":[{"type":"template","content":{"type":"expression","body":"c._sg_('xLabelTemplate', d, e)","constant":false,"setbody":"c._ss_('xLabelTemplate',p_,d, '=', 1)"}}],"alternate":[{"type":"expression","body":"c._sg_('xLabel', d, e)","constant":false,"setbody":"c._ss_('xLabel',p_,d, '=', 1)"}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_label barChart_label-xName"}],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('xAxis', d, e))","constant":false,"setbody":"c._ss_('name',p_,c._sg_('xAxis', d, e), '=', 0)"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_axis barChart_axis-y"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_yAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_yAxis', d, e), '=', 0)"},"alternate":[],"variable":"yLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_label barChart_label-y"},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('yLabel', d, e)","constant":false,"setbody":"c._ss_('yLabel',p_,d, '=', 1)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['bottom: ',100*c._sg_('yLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_yAxis', d, e)))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"expression","body":"c['format'](c._sg_('yLabel', d, e))","constant":false,"setbody":false}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_label barChart_label-yName"}],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('yAxis', d, e))","constant":false,"setbody":"c._ss_('name',p_,c._sg_('yAxis', d, e), '=', 0)"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_layer"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', d, e)","constant":false,"setbody":"c._ss_('data',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_piece"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('item_index', d, e)/c._sg_('length', c._sg_('data', d, e)),'%; width: ',100/c._sg_('length', c._sg_('data', d, e)),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"(!c._sg_('stack', d, e))","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n            "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_bar"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['height: ',100*(c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e))-c._sg_('min', c._sg_('_yAxis', d, e)))/c._sg_('max', c._sg_('_yAxis', d, e)),'%'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_value"}],"children":[{"type":"expression","body":"c['format'](c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}]},{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"u-tooltip u-tooltip-right-top"}],"children":[{"type":"text","text":"\n                    "},{"type":"if","test":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"},"consequent":[{"type":"template","content":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"}}],"alternate":[{"type":"expression","body":"c._sg_('name', c._sg_('sery', d, e))||c._sg_('key', c._sg_('sery', d, e))","constant":false,"setbody":false},{"type":"text","text":": "},{"type":"expression","body":"c['format'](c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}],"alternate":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_bar barChart_bar-stack"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['height: ',100*(c._sg_('total', c._sg_('item', d, e))-c._sg_('min', c._sg_('_yAxis', d, e)))/c._sg_('max', c._sg_('_yAxis', d, e)),'%'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n                "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"barChart_bar barChart_bar-static"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['height: ',100*(c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))/c._sg_('total', c._sg_('item', d, e)),'%'].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"u-tooltip u-tooltip-right-top"}],"children":[{"type":"text","text":"\n                    "},{"type":"if","test":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n                        "},{"type":"template","content":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"}},{"type":"text","text":"\n                    "}],"alternate":[{"type":"text","text":"\n                        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n                        "},{"type":"element","tag":"div","attrs":[],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('sery', d, e))||c._sg_('key', c._sg_('sery', d, e))","constant":false,"setbody":false},{"type":"text","text":": "},{"type":"expression","body":"c['format'](c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}]},{"type":"text","text":"\n                        "}]},{"type":"text","text":"\n                    "}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    roundToFirst: function roundToFirst(num) {
	        if (num >= 1) {
	            var power = Math.pow(10, String(Math.round(num)).length - 1);
	            return Math.round(num / power) * power;
	        } else if (num > 0) return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);else // 不解决0或负数
	            return num;
	    },
	    getFixedCount: function getFixedCount(num) {
	        var m = String(num).match(/\.\d+/);
	        return m ? m[0].length - 1 : 0;
	    }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	var _util = __webpack_require__(12);

	var _util2 = _interopRequireDefault(_util);

	var _regularjs = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var TICKES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 40, 50, 100, 200, 500, 1000, 1];

	/**
	 * @class LineChart
	 * @extends Chart
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string='100%'}           options.data.width               => 图表宽度
	 * @param {string='480px'}          options.data.height              => 图表高度
	 * @param {string=''}               options.data.title               => 标题
	 * @param {string=''}               options.data.titleTemplate      @=> 标题模板
	 * @param {string=''}               options.data.tooltipTemplate    @=> 工具提示模板
	 * @param {Array}                   options.data.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
	 * @param {Object}                  options.data.xAxis               => 横坐标信息
	 * @param {Object}                  options.data.yAxis               => 纵坐标信息
	 * @param {Array=[]}                options.data.series              => 序列信息
	 * @param {boolean=false}           options.data.smooth              => 是否用光滑曲线
	 * @param {boolean=false}           options.data.fill                => 是否填充区域
	 * @param {boolean=false}           options.data.border              => 是否显示边框
	 * @param {boolean=true}            options.data.legend              => 是否显示图例
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string='m-lineChart'}    options.data.class               => 补充class
	 */
	var LineChart = _chart2.default.extend({
	    name: 'lineChart',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            // @inherited width: '100%',
	            // @inherited height: '480px',
	            // @inherited title: '',
	            // @inherited titleTemplate: '',
	            _width: undefined,
	            _height: undefined,
	            contentTemplate: _index2.default,
	            class: 'm-lineChart',
	            smooth: false,
	            fill: false,
	            data: undefined,
	            xAxis: {},
	            yAxis: {
	                min: undefined,
	                max: undefined
	            },
	            series: [],
	            _xAxis: { data: [] },
	            _yAxis: { data: [] },
	            tooltipTemplate: ''
	        });
	        this.supr();

	        this._onResize = this._onResize.bind(this);
	        _regularjs.dom.on(window, 'resize', this._onResize);
	    },
	    destroy: function destroy() {
	        _regularjs.dom.off(window, 'resize', this._onResize);
	        this.supr();
	    },

	    /**
	     * @private
	     */
	    _getSize: function _getSize() {
	        if (!this.$refs) return;

	        this.data._width = this.$refs.grid && this.$refs.grid.offsetWidth;
	        this.data._height = this.$refs.grid && this.$refs.grid.offsetHeight;
	    },

	    /**
	     * @private
	     */
	    _onResize: function _onResize() {
	        this._getSize();
	        this.$update();
	    },
	    draw: function draw() {
	        var _this = this;

	        if (!this.data.data || !this.data.data.length) return;

	        this._getSize();

	        //
	        // 确定横坐标
	        //
	        {
	            var _xAxis = this.data._xAxis;
	            _xAxis.count = this.data.xAxis.count || 12;
	            var pieceCounts = this.data.data.length - 1;
	            var tick = pieceCounts / _xAxis.count;
	            if (tick !== parseInt(tick)) {
	                tick = 1;
	                while (!(pieceCounts / tick <= _xAxis.count && pieceCounts % tick === 0)) {
	                    for (var i = 0; i < TICKES.length; i++) {
	                        tick = TICKES[i];
	                        if (pieceCounts / tick <= _xAxis.count && pieceCounts % tick === 0) break;
	                    }

	                    // 如果不能整除，则补充空数据
	                    if (tick === 1) {
	                        this.data.data.push({ hidden: true });
	                        pieceCounts++;
	                    } else break;
	                }
	            }

	            _xAxis.tick = tick;
	            _xAxis.data = [];
	            this.data.data.forEach(function (item, index) {
	                return index % tick === 0 && _xAxis.data.push(item[_this.data.xAxis.key]);
	            });
	        }

	        //
	        // 确定纵坐标
	        //
	        {
	            var _yAxis = this.data._yAxis;

	            // 如果没有设置最小值和最大值，则寻找
	            if (this.data.yAxis.min !== undefined) _yAxis.min = this.data.yAxis.min;else {
	                _yAxis.min = Math.min.apply(Math, _toConsumableArray(this.data.series.map(function (sery) {
	                    return Math.min.apply(Math, _toConsumableArray(_this.data.data.map(function (item) {
	                        return item[sery.key] !== undefined ? item[sery.key] : Infinity;
	                    })));
	                }))); // 支持空数据
	            }
	            if (this.data.yAxis.max !== undefined) _yAxis.max = this.data.yAxis.max;else {
	                _yAxis.max = Math.max.apply(Math, _toConsumableArray(this.data.series.map(function (sery) {
	                    return Math.max.apply(Math, _toConsumableArray(_this.data.data.map(function (item) {
	                        return item[sery.key] !== undefined ? item[sery.key] : -Infinity;
	                    })));
	                }))); // 支持空数据
	            }

	            _yAxis.count = this.data.yAxis.count || 8;
	            var _tick = _util2.default.roundToFirst((_yAxis.max - _yAxis.min) / _yAxis.count) || 1;
	            var fixedCount = _util2.default.getFixedCount(_tick);
	            _yAxis.min = Math.floor(_yAxis.min / _tick) * _tick;
	            _yAxis.max = Math.ceil(_yAxis.max / _tick) * _tick;

	            // 如果最小值和最大值相等，则强行区分
	            if (_yAxis.min === _yAxis.max) _yAxis.max = _yAxis.min + _yAxis.count;

	            _yAxis.data = [];
	            for (var _i = _yAxis.min; _i <= _yAxis.max; _i += _tick) {
	                _yAxis.data.push(_i.toFixed(fixedCount));
	            } // 防止+的时候出现无限小数的情况
	        }

	        setTimeout(function () {
	            _this._getSize();
	            _this.$update();
	        });

	        this.supr();
	    },
	    _getD: function _getD(sery, type) {
	        var _this2 = this;

	        if (!this.data._width || !this.data._height || !this.data.data || !this.data._xAxis.data.length || !this.data._yAxis.data.length) return;
	        if (this.data.data.length <= 1) // 一个点无需绘制线条
	            return;

	        var width = this.data._width;
	        var height = this.data._height;
	        var delta = width / (this.data.data.length - 1) / 2;

	        var points = this.data.data.map(function (item, index) {
	            if (isNaN(item[sery.key])) // 处理空数据的情况
	                return null;else {
	                return [width * index / (_this2.data.data.length - 1), height * (1 - (item[sery.key] - _this2.data._yAxis.min) / (_this2.data._yAxis.max - _this2.data._yAxis.min))];
	            }
	        });
	        points.push(null); // 起始点也可以看作间断结束，最后一个null看作间断开始

	        var cmds = [];
	        var discontinued = true;
	        for (var i = 0; i < points.length; i++) {
	            var point = points[i];
	            var cmd = '';

	            if (!point) {
	                if (!discontinued) {
	                    // discontinue start
	                    discontinued = true;
	                    if (type === 'area') cmd = 'V ' + height;
	                }
	            } else {
	                var pointStr = point.join(',');
	                if (discontinued) {
	                    // discontinue end
	                    discontinued = false;
	                    if (type !== 'area') cmd = 'M ' + pointStr;else {
	                        var bottomPointStr = [point[0], height].join(',');
	                        cmd = 'M ' + bottomPointStr + ' L ' + pointStr;
	                    }

	                    var nextPoint = points[i + 1];
	                    if (this.data.smooth && nextPoint) {
	                        var helperPointStr = [point[0] + delta, point[1]].join(',');
	                        var nextHelperPointStr = [nextPoint[0] - delta, nextPoint[1]].join(',');
	                        cmd += ' C ' + helperPointStr + ' ' + nextHelperPointStr + ' ' + nextPoint.join(',');
	                        i++;
	                    }
	                } else {
	                    if (!this.data.smooth) cmd = 'L ' + pointStr;else {
	                        var _helperPointStr = [point[0] - delta, point[1]].join(',');
	                        cmd = 'S ' + _helperPointStr + ' ' + pointStr;
	                    }
	                }
	            }

	            cmds.push(cmd);
	        }

	        return cmds.join(' ');
	    },
	    _getTopOne: function _getTopOne(item) {
	        return Math.max.apply(Math, _toConsumableArray(this.data.series.map(function (sery) {
	            return item[sery.key];
	        })));
	    },
	    format: function format(value) {
	        return value;
	    }
	});

	exports.default = LineChart;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_grid"},{"type":"attribute","name":"ref","value":"grid"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_xAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_xAxis', d, e), '=', 0)"},"alternate":[],"variable":"xLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_line lineChart_line-y"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('xLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e)))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_yAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_yAxis', d, e), '=', 0)"},"alternate":[],"variable":"yLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_line lineChart_line-x"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['bottom: ',100*c._sg_('yLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_yAxis', d, e)))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_axis lineChart_axis-x"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_xAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_xAxis', d, e), '=', 0)"},"alternate":[],"variable":"xLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_label lineChart_label-x"},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('xLabel', d, e)","constant":false,"setbody":"c._ss_('xLabel',p_,d, '=', 1)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('xLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e)))-1),'%; width: ',100/c._sg_('length', c._sg_('data', c._sg_('_xAxis', d, e))),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n        \n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('xLabelTemplate', d, e)","constant":false,"setbody":"c._ss_('xLabelTemplate',p_,d, '=', 1)"},"consequent":[{"type":"template","content":{"type":"expression","body":"c._sg_('xLabelTemplate', d, e)","constant":false,"setbody":"c._ss_('xLabelTemplate',p_,d, '=', 1)"}}],"alternate":[{"type":"expression","body":"c._sg_('xLabel', d, e)","constant":false,"setbody":"c._ss_('xLabel',p_,d, '=', 1)"}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_label lineChart_label-xName"}],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('xAxis', d, e))","constant":false,"setbody":"c._ss_('name',p_,c._sg_('xAxis', d, e), '=', 0)"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_axis lineChart_axis-y"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', c._sg_('_yAxis', d, e))","constant":false,"setbody":"c._ss_('data',p_,c._sg_('_yAxis', d, e), '=', 0)"},"alternate":[],"variable":"yLabel","body":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_label lineChart_label-y"},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('yLabel', d, e)","constant":false,"setbody":"c._ss_('yLabel',p_,d, '=', 1)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['bottom: ',100*c._sg_('yLabel_index', d, e)/(c._sg_('length', c._sg_('data', c._sg_('_yAxis', d, e)))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"expression","body":"c['format'](c._sg_('yLabel', d, e))","constant":false,"setbody":false}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_label lineChart_label-yName"}],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('yAxis', d, e))","constant":false,"setbody":"c._ss_('name',p_,c._sg_('yAxis', d, e), '=', 0)"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_layer lineChart_layer-svg"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"svg","attrs":[{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"c._sg_('hidden', c._sg_('sery', d, e))","constant":false,"setbody":"c._ss_('hidden',p_,c._sg_('sery', d, e), '=', 0)"}}],"children":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('fill', d, e)","constant":false,"setbody":"c._ss_('fill',p_,d, '=', 1)"},"consequent":[{"type":"element","tag":"path","attrs":[{"type":"attribute","name":"class","value":"lineChart_area"},{"type":"attribute","name":"d","value":{"type":"expression","body":"c['_getD'](c._sg_('sery', d, e),'area')","constant":false,"setbody":false}}]}],"alternate":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"path","attrs":[{"type":"attribute","name":"class","value":"lineChart_line"},{"type":"attribute","name":"d","value":{"type":"expression","body":"c['_getD'](c._sg_('sery', d, e))","constant":false,"setbody":false}}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_layer"}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', d, e)","constant":false,"setbody":"c._ss_('data',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n    "},{"type":"if","test":{"type":"expression","body":"(!c._sg_('hidden', c._sg_('item', d, e)))","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_piece"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',100*c._sg_('item_index', d, e)/(c._sg_('length', c._sg_('data', d, e))-1),'%; width: ',100/(c._sg_('length', c._sg_('data', d, e))-1),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e))!==undefined","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_point"},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"c._sg_('hidden', c._sg_('sery', d, e))","constant":false,"setbody":"c._ss_('hidden',p_,c._sg_('sery', d, e), '=', 0)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['bottom: ',100*(c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e))-c._sg_('min', c._sg_('_yAxis', d, e)))/(c._sg_('max', c._sg_('_yAxis', d, e))-c._sg_('min', c._sg_('_yAxis', d, e))),'%;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"lineChart_value"}],"children":[{"type":"expression","body":"c['format'](c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n            "}],"alternate":[]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"expression","body":"c._ss_('__percent',100*(c._sg_('max', c._sg_('_yAxis', d, e))-c['_getTopOne'](c._sg_('item', d, e)))/(c._sg_('max', c._sg_('_yAxis', d, e))-c._sg_('min', c._sg_('_yAxis', d, e))),d, '=', 1)","constant":false,"setbody":"c._ss_('__percent',p_,d, '=', 1)"},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-tooltip u-tooltip-',c._sg_('item_index', d, e)>=c._sg_('length', c._sg_('data', d, e))/2?'left':'right','-',c._sg_('__percent', d, e)<50?'top':'bottom'].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"style","value":{"type":"expression","body":"c._sg_('__percent', d, e)<50?'top: '+c._sg_('__percent', d, e)+'%':'bottom: '+(100-c._sg_('__percent', d, e))+'%'","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n                "},{"type":"template","content":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"}},{"type":"text","text":"\n            "}],"alternate":[{"type":"text","text":"\n                "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('series', d, e)","constant":false,"setbody":"c._ss_('series',p_,d, '=', 1)"},"alternate":[],"variable":"sery","body":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('sery', d, e))||c._sg_('key', c._sg_('sery', d, e))","constant":false,"setbody":false},{"type":"text","text":": "},{"type":"expression","body":"c['format'](c._sg_(c._sg_('key', c._sg_('sery', d, e)), c._sg_('item', d, e)))","constant":false,"setbody":false}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "}],"alternate":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(16);

	var _index2 = _interopRequireDefault(_index);

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class PieChart
	 * @extends Chart
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string='100%'}           options.data.width               => 图表宽度
	 * @param {string='480px'}          options.data.height              => 图表高度
	 * @param {string=''}               options.data.title               => 标题
	 * @param {string=''}               options.data.titleTemplate      @=> 标题模板
	 * @param {string=''}               options.data.tooltipTemplate    @=> 工具提示模板
	 * @param {Array}                   options.data.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
	 * @param {boolean=false}           options.data.border              => 是否显示边框
	 * @param {boolean=true}            options.data.legend              => 是否显示图例
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string='m-donutChart'}   options.data.class               => 补充class
	 */
	var PieChart = _chart2.default.extend({
	    name: 'pieChart',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            contentTemplate: _index2.default,
	            class: 'm-pieChart',
	            RADIUS: 30
	        });
	        this.supr();
	    },
	    watch: function watch() {
	        var _this = this;

	        this.$watch('data', function (data) {
	            _this.data.series = data;
	            data && data.reduce(function (prev, current) {
	                current._pos = prev._pos + prev.percent;
	                return current;
	            }, { percent: 0, _pos: 0 });
	        });
	    },
	    _getPosition: function _getPosition(pos, length) {
	        pos = pos || 0;
	        length = length || this.data.RADIUS;
	        var arc = Math.PI * 2 * pos * 0.01;
	        return { x: length * Math.sin(arc), y: -length * Math.cos(arc) };
	    },
	    _getD: function _getD(item) {
	        var start = this._getPosition(item._pos);
	        var end = this._getPosition(item._pos + item.percent);

	        var d = '';
	        d += 'M ';
	        d += start.x + ',' + start.y;
	        d += ' A ' + this.data.RADIUS + ',' + this.data.RADIUS + ' 0 ';
	        d += item.percent > 50 ? 1 : 0;
	        d += ' 1 ';
	        d += end.x + ',' + end.y;
	        d += ' L 0,0 Z';

	        return d;
	    },
	    _getTextStyle: function _getTextStyle(item) {
	        var middle = this._getPosition(item._pos + item.percent / 2);
	        var height = this.data.height.replace('px', '');
	        middle.x *= height / 100 / 2;
	        middle.y *= height / 100 / 2;

	        var result = ['margin-left: ' + middle.x + 'px', 'margin-top: ' + middle.y + 'px'];

	        return result.join('; ');
	    },
	    _onMouseOver: function _onMouseOver(item) {
	        this.data.current = item;
	    }
	});

	exports.default = PieChart;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports =[{"type":"element","tag":"svg","attrs":[{"type":"attribute","name":"ref","value":"svg"},{"type":"attribute","name":"viewBox","value":"0 0 100 100"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"g","attrs":[{"type":"attribute","name":"transform","value":"translate(50, 50)"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', d, e)","constant":false,"setbody":"c._ss_('data',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('percent', c._sg_('item', d, e))===100","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n                "},{"type":"element","tag":"circle","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['pieChart_item pieChart_item-',c._sg_('key', c._sg_('item', d, e)),' ',c._sg_('current', d, e)===c._sg_('item', d, e)?'z-crt':''].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"cx","value":"0"},{"type":"attribute","name":"cy","value":"0"},{"type":"attribute","name":"r","value":{"type":"expression","body":"c._sg_('RADIUS', d, e)","constant":false,"setbody":"c._ss_('RADIUS',p_,d, '=', 1)"}}]},{"type":"text","text":"\n            "}],"alternate":[{"type":"text","text":"\n                "},{"type":"element","tag":"path","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['pieChart_item pieChart_item-',c._sg_('key', c._sg_('item', d, e)),' ',c._sg_('current', d, e)===c._sg_('item', d, e)?'z-crt':''].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"d","value":{"type":"expression","body":"c['_getD'](c._sg_('item', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-mouseover","value":{"type":"expression","body":"c['_onMouseOver'](c._sg_('item', d, e))","constant":false,"setbody":false}}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', d, e)","constant":false,"setbody":"c._ss_('data',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"pieChart_text"},{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)===c._sg_('item', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"style","value":{"type":"expression","body":"c['_getTextStyle'](c._sg_('item', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"expression","body":"c._sg_('item', d, e)?c._sg_('percent', c._sg_('item', d, e))+'%':''","constant":false,"setbody":false},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"u-tooltip u-tooltip-right-top"}],"children":[{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n            "},{"type":"template","content":{"type":"expression","body":"c._sg_('tooltipTemplate', d, e)","constant":false,"setbody":"c._ss_('tooltipTemplate',p_,d, '=', 1)"}},{"type":"text","text":"\n        "}],"alternate":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[],"children":[{"type":"expression","body":"c._sg_('name', c._sg_('item', d, e))||c._sg_('key', c._sg_('item', d, e))","constant":false,"setbody":false},{"type":"text","text":": "},{"type":"expression","body":"c._sg_('percent', c._sg_('item', d, e))","constant":false,"setbody":"c._ss_('percent',p_,c._sg_('item', d, e), '=', 0)"},{"type":"text","text":"%"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}]

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(18);

	var _index2 = _interopRequireDefault(_index);

	var _chart = __webpack_require__(8);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class DonutChart
	 * @extends PieChart
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string='100%'}           options.data.width               => 图表宽度
	 * @param {string='480px'}          options.data.height              => 图表高度
	 * @param {string=''}               options.data.title               => 标题
	 * @param {string=''}               options.data.titleTemplate      @=> 标题模板
	 * @param {string=''}               options.data.tooltipTemplate    @=> 工具提示模板
	 * @param {Array}                   options.data.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
	 * @param {Array=[]}                options.data.series              => 序列信息
	 * @param {boolean=false}           options.data.border              => 是否显示边框
	 * @param {boolean=true}            options.data.legend              => 是否显示图例
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string='m-donutChart'}   options.data.class               => 补充class
	 */
	var DonutChart = _chart2.default.extend({
	    name: 'donutChart',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            contentTemplate: _index2.default,
	            class: 'm-donutChart',
	            RADIUS: 30
	        });
	        this.supr();
	    },
	    watch: function watch() {
	        var _this = this;

	        this.$watch('data', function (data) {
	            _this.data.series = data;
	            data && data.reduce(function (prev, current) {
	                current._pos = prev._pos + prev.percent;
	                return current;
	            }, { percent: 0, _pos: 0 });
	        });
	    },
	    _getPosition: function _getPosition(pos, length) {
	        pos = pos || 0;
	        length = length || this.data.RADIUS;
	        var arc = Math.PI * 2 * pos * 0.01;
	        return { x: length * Math.sin(arc), y: -length * Math.cos(arc) };
	    },
	    _getD: function _getD(item) {
	        var start = this._getPosition(item._pos);
	        var end = this._getPosition(item._pos + item.percent);

	        var d = '';
	        d += 'M ';
	        d += start.x + ',' + start.y;
	        d += ' A ' + this.data.RADIUS + ',' + this.data.RADIUS + ' 0 ';
	        d += item.percent > 50 ? 1 : 0;
	        d += ' 1 ';
	        d += end.x + ',' + end.y;

	        return d;
	    },
	    _onMouseOver: function _onMouseOver(item) {
	        this.data.current = item;
	    }
	});

	exports.default = DonutChart;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports =[{"type":"element","tag":"svg","attrs":[{"type":"attribute","name":"viewBox","value":"0 0 100 100"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"g","attrs":[{"type":"attribute","name":"transform","value":"translate(50, 50)"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('data', d, e)","constant":false,"setbody":"c._ss_('data',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"path","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['donutChart_item donutChart_item-',c._sg_('key', c._sg_('item', d, e)),' ',c._sg_('current', d, e)===c._sg_('item', d, e)?'z-crt':''].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"d","value":{"type":"expression","body":"c['_getD'](c._sg_('item', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-mouseover","value":{"type":"expression","body":"c['_onMouseOver'](c._sg_('item', d, e))","constant":false,"setbody":false}}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"circle","attrs":[{"type":"attribute","name":"cx","value":"0"},{"type":"attribute","name":"cy","value":"0"},{"type":"attribute","name":"r","value":"30"}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"donutChart_text"}],"children":[{"type":"if","test":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"},"consequent":[{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}}],"alternate":[{"type":"expression","body":"c._sg_('current', d, e)?c._sg_('percent', c._sg_('current', d, e))+'%':''","constant":false,"setbody":false}]}]}]

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Movable = exports.Droppable = exports.Draggable = undefined;

	var _draggable = __webpack_require__(20);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _droppable = __webpack_require__(23);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _movable = __webpack_require__(24);

	var _movable2 = _interopRequireDefault(_movable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Draggable = _draggable2.default;
	exports.Droppable = _droppable2.default;
	exports.Movable = _movable2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(1);

	var _manager = __webpack_require__(21);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Draggable
	 * @extends Component
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='clone'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，拖拽时拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {var}                     options.data.value               => 拖拽时需要传递的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Draggable = _rguiUiBase.Component.extend({
	    name: 'draggable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            proxy: 'clone',
	            value: undefined,
	            'class': 'z-draggable',
	            sourceClass: 'z-dragSource',
	            proxyClass: 'z-dragProxy'
	        });
	        this.supr();

	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.cancel = this.cancel.bind(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        _regularjs.dom.on(inner, 'mousedown', this._onMouseDown);
	        this.supr();

	        this.$watch('disabled', function (disabled) {
	            return _regularjs.dom[disabled ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	    },

	    /**
	     * @method _getProxy() 获取拖拽代理
	     * @private
	     * @return {Element} 拖拽代理元素
	     */
	    _getProxy: function _getProxy() {
	        var proxy = void 0;
	        var source = _regularjs.dom.element(this);

	        if (typeof this.data.proxy === 'function') proxy = this.data.proxy();else if (this.data.proxy instanceof Element) proxy = this.data.proxy;else if (this.data.proxy === 'self') proxy = source;else if (this.data.proxy === 'clone') {
	            proxy = source.cloneNode(true);
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            var size = _regularjs.dom.getSize(source);
	            proxy.style.width = size.width + 'px';
	            proxy.style.height = size.height + 'px';
	            source.parentElement.appendChild(proxy);
	        } else if (this.data.proxy instanceof Draggable.Proxy) {
	            proxy = _regularjs.dom.element(this.data.proxy.$body());
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            document.body.appendChild(proxy);
	        }

	        proxy && this._initProxy(proxy);
	        return proxy;
	    },

	    /**
	     * @method _setProxyFixed() 将拖拽代理的position设置fixed并设置初始位置
	     * @param  {Element} proxy 拖拽代理元素
	     * @param  {position=...} position 拖拽代理的初始位置
	     * @private
	     * @return {void}
	     */
	    _setProxyFixed: function _setProxyFixed(proxy) {
	        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { left: 0, top: 0 };

	        proxy.style.left = position.left + 'px';
	        proxy.style.top = position.top + 'px';
	        proxy.style.zIndex = '9999';
	        proxy.style.position = 'fixed';
	        proxy.style.display = '';
	    },

	    /**
	     * @method _initProxy() 初始化拖拽代理
	     * @private
	     * @return {void}
	     */
	    _initProxy: function _initProxy(proxy) {
	        // 如果position为static，则设置为relative，保证可以移动
	        if (_regularjs.dom.getComputedStyle(proxy, 'position') === 'static') proxy.style.position = 'relative';
	    },

	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.disabled) return;

	        var e = $event.event;
	        // 阻止浏览器的默认行为，特别是IE的选择行为
	        $event.preventDefault();

	        // 鼠标坐标从MouseDown开始算，防止出现第一次移动的误差
	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            startX: e.clientX,
	            startY: e.clientY,
	            dragX: 0,
	            dragY: 0
	        });

	        _regularjs.dom.on(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.on(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @private
	     */
	    _onMouseMove: function _onMouseMove($event) {
	        var e = $event.event;
	        $event.preventDefault();

	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            dragX: e.clientX - _manager2.default.startX,
	            dragY: e.clientY - _manager2.default.startY
	        });

	        if (_manager2.default.dragging === false) this._onMouseMoveStart(e);else this._onMouseMoving(e);
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e, override) {
	        var proxy = this._getProxy();

	        // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
	        // 获取初始的left和top值
	        var computedStyle = proxy ? _regularjs.dom.getComputedStyle(proxy) : {};
	        if (!computedStyle.left || computedStyle.left === 'auto') computedStyle.left = '0px';
	        if (!computedStyle.top || computedStyle.top === 'auto') computedStyle.top = '0px';

	        Object.assign(_manager2.default, {
	            dragging: true,
	            proxy: proxy,
	            value: this.data.value,
	            startLeft: +computedStyle.left.slice(0, -2),
	            startTop: +computedStyle.top.slice(0, -2),
	            droppable: undefined
	        });

	        _manager2.default.left = _manager2.default.startLeft;
	        _manager2.default.top = _manager2.default.startTop;

	        !override && this._dragStart();
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理后续鼠标移动事件
	     * @param  {MouseEvent} e 鼠标事件
	     * @private
	     * @return {void}
	     */
	    _onMouseMoving: function _onMouseMoving(e) {
	        // 拖拽约束
	        var next = this.restrict(_manager2.default);
	        // 设置位置
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.left = next.left + 'px';
	            _manager2.default.proxy.style.top = next.top + 'px';
	        }
	        // 更新当前位置
	        _manager2.default.left = next.left;
	        _manager2.default.top = next.top;

	        this._drag();
	        if (!_manager2.default.dragging) return;

	        // for Droppable
	        var pointElement = null;
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.display = 'none';
	            pointElement = document.elementFromPoint(e.clientX, e.clientY);
	            _manager2.default.proxy.style.display = '';
	        } else pointElement = document.elementFromPoint(e.clientX, e.clientY);

	        var pointDroppable = null;
	        while (pointElement) {
	            pointDroppable = _manager2.default.droppables.find(function (droppable) {
	                return _regularjs.dom.element(droppable) === pointElement;
	            });

	            if (pointDroppable) break;else pointElement = pointElement.parentElement;
	        }

	        if (_manager2.default.droppable !== pointDroppable) {
	            _manager2.default.droppable && _manager2.default.droppable._dragLeave(this);
	            if (!_manager2.default.dragging) return;
	            pointDroppable && pointDroppable._dragEnter(this);
	            if (!_manager2.default.dragging) return;
	            _manager2.default.droppable = pointDroppable;
	        }

	        // dragEnter之后也要dragOver
	        pointDroppable && pointDroppable._dragOver(this);
	    },

	    /**
	     * @method restrict(manager) 拖拽约束函数
	     * @protected
	     * @param  {params} 拖拽参数
	     * @return {left, top} 拖拽代理元素计算后的left和top位置
	     */
	    restrict: function restrict(params) {
	        return {
	            left: params.startLeft + params.dragX,
	            top: params.startTop + params.dragY
	        };
	    },

	    /**
	     * @private
	     */
	    _onMouseUp: function _onMouseUp($event) {
	        if (_manager2.default.dragging) {
	            _manager2.default.droppable && _manager2.default.droppable._drop(this);
	            this.cancel();
	        }

	        _regularjs.dom.off(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.off(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @method cancel() 取消拖拽操作
	     * @public
	     * @return {void}
	     */
	    cancel: function cancel() {
	        this._dragEnd();

	        Object.assign(_manager2.default, {
	            dragging: false,
	            value: undefined,
	            proxy: undefined,
	            range: undefined,
	            screenX: 0,
	            screenY: 0,
	            clientX: 0,
	            clientY: 0,
	            pageX: 0,
	            pageY: 0,
	            startX: 0,
	            startY: 0,
	            dragX: 0,
	            dragY: 0,
	            startLeft: 0,
	            startTop: 0,
	            left: 0,
	            top: 0,
	            droppable: undefined
	        });
	    },

	    /**
	     * @private
	     */
	    _dragStart: function _dragStart() {
	        var source = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(source, this.data.sourceClass);
	        _manager2.default.proxy && _regularjs.dom.addClass(_manager2.default.proxy, this.data.proxyClass);

	        /**
	         * @event dragstart 拖拽开始时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragstart', Object.assign({
	            sender: this,
	            origin: this,
	            source: source,
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drag: function _drag() {
	        /**
	         * @event drag 正在拖拽时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('drag', Object.assign({
	            sender: this,
	            origin: this,
	            source: _regularjs.dom.element(this),
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragEnd: function _dragEnd() {
	        var source = this._watchers !== null ? _regularjs.dom.element(this) : null;
	        source && _regularjs.dom.delClass(source, this.data.sourceClass);

	        /**
	         * @event dragend 拖拽结束时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         */
	        this.$emit('dragend', Object.assign({
	            sender: this,
	            origin: this,
	            source: source
	        }, _manager2.default));

	        if (_manager2.default.proxy) {
	            if (this.data.proxy instanceof Draggable.Proxy || this.data.proxy === 'clone') _manager2.default.proxy.parentElement.removeChild(_manager2.default.proxy);

	            _regularjs.dom.delClass(_manager2.default.proxy, this.data.proxyClass);
	        }
	    }
	});

	Draggable.Proxy = _rguiUiBase.Component.extend({
	    name: 'draggable.proxy',
	    /**
	     * @protected
	     */
	    init: function init() {
	        if (this.$outer instanceof Draggable) this.$outer.data.proxy = this;
	    }
	});

	exports.default = Draggable;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(22);

	var manager = {
	    dragging: false,
	    value: undefined,
	    proxy: undefined,
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    startX: 0,
	    startY: 0,
	    dragX: 0,
	    dragY: 0,
	    startLeft: 0,
	    startTop: 0,
	    dragLeft: 0,
	    dragTop: 0,
	    droppable: undefined,
	    droppables: []
	};

	exports.default = manager;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(3);

	Object.assign(_regularjs.dom, {
	    getPosition: function getPosition(elem) {
	        var doc = elem && elem.ownerDocument;
	        var docElem = doc.documentElement;
	        var body = doc.body;

	        var box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { left: 0, top: 0 };

	        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	        var clientTop = docElem.clientTop || body.clientTop || 0;

	        return { left: box.left - clientLeft, top: box.top - clientTop };
	    },
	    getSize: function getSize(elem) {
	        var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'outside';

	        if (mode === 'inside') return { width: elem.clientWidth, height: elem.clientHeight };else if (mode === 'center') return { width: (elem.clientWidth + elem.offsetWidth) / 2, height: (elem.offsetHeight + elem.clientHeight) / 2 };else if (mode === 'outside') return { width: elem.offsetWidth, height: elem.offsetHeight };
	    },
	    getDimension: function getDimension(elem, mode) {
	        return Object.assign(this.getSize(elem, mode), this.getPosition(elem));
	    },
	    isInRect: function isInRect(position, dimension) {
	        if (!position || !dimension) return false;

	        return position.left > dimension.left && position.left < dimension.left + dimension.width && position.top > dimension.top && position.top < dimension.top + dimension.height;
	    },
	    getComputedStyle: function getComputedStyle(elem, property) {
	        var computedStyle = elem.currentStyle || window.getComputedStyle(elem, null);
	        return property ? computedStyle[property] : computedStyle;
	    }
	});

	exports.default = _regularjs.dom;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(1);

	var _manager = __webpack_require__(21);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Droppable
	 * @extends Component
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=  拖放后传递过来的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-droppable'}    options.data.class               => 可放置时（即disabled=false）给元素附加此class
	 * @param {string='z-dragTarget'}   options.data.dragTarget          => 拖拽在该元素上方时给该元素附加此class
	 */
	var Droppable = _rguiUiBase.Component.extend({
	    name: 'droppable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            data: null,
	            'class': 'z-droppable',
	            dragTarget: 'z-dragTarget'
	        });
	        this.supr();

	        _manager2.default.droppables.push(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        this.$watch('disabled', function (disabled) {
	            return _regularjs.dom[disabled ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        _manager2.default.droppables.splice(_manager2.default.droppables.indexOf(this), 1);
	        this.supr();
	    },

	    /**
	     * @private
	     */
	    _dragEnter: function _dragEnter(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(element, this.data.dragTarget);

	        /**
	         * @event dragenter 拖拽进入该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragenter', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragLeave: function _dragLeave(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);

	        /**
	         * @event dragleave 拖拽离开该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragleave', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragOver: function _dragOver(origin) {
	        var element = _regularjs.dom.element(this);
	        var dimension = _regularjs.dom.getDimension(element);

	        /**
	         * @event dragover 拖拽在该元素上方时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragover', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drop: function _drop(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);
	        var dimension = _regularjs.dom.getDimension(element);

	        this.data.value = origin.data.value;
	        this.$update();

	        /**
	         * @event drop 拖拽放置时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         */
	        this.$emit('drop', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height
	        }, _manager2.default));
	    }
	});

	exports.default = Droppable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _draggable = __webpack_require__(20);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _manager = __webpack_require__(21);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Movable
	 * @extends Draggable
	 * @param {Object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='self'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，表示拖拽时会拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {string='both'}           options.data.axis                => 拖拽代理移动时限制的轴向，`both`表示可以在任意方向上移动，`horizontal`表示限制在水平方向上移动，`vertical`表示限制在垂直方向上移动。
	 * @param {Object={x:0,y:0}}        options.data.grid                => 拖拽代理移动时限制的网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。
	 * @param {string|object|function}  options.data.range              @=> 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界，也可以传一个函数。当值为`offsetParent`，代理元素限制在offsetParent中移动，仅适用于`position`为`absolute`的情况；当值为`parent`；当值为`window`时，拖拽时代理元素限制在window中移动，仅适用于`position`为`fixed`的情况。
	 * @param {string=inside}           options.data.rangeMode           => 拖拽范围模式，默认为`inside`，表示在拖拽范围内侧移动，`center`表示在拖拽范围边缘及内侧移动。
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Movable = _draggable2.default.extend({
	    name: 'movable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.defaults({
	            proxy: 'self',
	            // value: undefined,
	            // 'class': 'z-draggable',
	            // sourceClass: 'z-dragSource',
	            // proxyClass: 'z-dragProxy'
	            axis: 'both',
	            grid: { x: 0, y: 0 },
	            range: undefined,
	            rangeMode: 'inside'
	        });
	        this.supr();
	    },

	    /**
	     * @method _getRange(proxy) 获取拖拽范围
	     * @private
	     * @param  {Element} proxy 拖拽代理元素
	     * @return {Element} 拖拽范围元素
	     */
	    _getRange: function _getRange(proxy) {
	        var range = void 0;

	        if (_typeof(this.data.range) === 'object') range = this.data.range;else if (typeof this.data.range === 'function') range = this.data.range();else if (this.data.range === 'offsetParent') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'absolute') proxy.style.position = 'absolute';

	            var offsetParent = proxy.offsetParent;
	            range = Object.assign({ left: 0, top: 0 }, _regularjs.dom.getSize(offsetParent, this.data.rangeMode));
	        } else if (this.data.range === 'window') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'fixed') proxy.style.position = 'fixed';

	            range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
	        }

	        if (range) {
	            if (range.width !== undefined && range.height !== undefined) {
	                range.right = range.left + range.width;
	                range.bottom = range.top + range.height;
	            } else if (range.right !== undefined && range.bottom !== undefined) {
	                range.width = range.right - range.left;
	                range.height = range.bottom - range.top;
	            }
	        }

	        return range;
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @override
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e) {
	        this.supr(e, true);
	        if (_manager2.default.proxy) _manager2.default.range = this._getRange(_manager2.default.proxy);
	        this._dragStart();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    restrict: function restrict(params) {
	        var next = this.supr(params);

	        // 范围约束
	        if (params.range) {
	            if (this.data.rangeMode === 'inside') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - _manager2.default.proxy.offsetWidth);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - _manager2.default.proxy.offsetHeight);
	            } else if (this.data.rangeMode === 'center') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
	            } else if (this.data.rangeMode === 'outside') {
	                next.left = Math.min(Math.max(params.range.left - _manager2.default.proxy.offsetWidth, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top - _manager2.default.proxy.offsetHeight, next.top), params.range.bottom);
	            }
	        }

	        // 网格约束
	        var grid = this.data.grid;
	        grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
	        grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

	        // 轴向约束
	        if (this.data.axis === 'vertical') next.left = params.startLeft;
	        if (this.data.axis === 'horizontal') next.top = params.startTop;

	        return next;
	    }
	});

	exports.default = Movable;

/***/ })
/******/ ])
});
;