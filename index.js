'use strict';
var parseMs = require('parse-ms');
var isFinite = require('is-finite');

module.exports = function (ms, opts) {
	if (!isFinite(ms)) {
		throw new TypeError('Expected a finite number');
	}

	if (ms < 1000) {
		return Math.ceil(ms) + 'ミリ秒';
	}

	opts = opts || {};
	var ret = [];

	var add = function (val, postfix) {
		if (val === 0) {
			return;
		}

		ret.push(val + postfix);
	};

	var parsed = parseMs(ms);

	add(parsed.days, '日');
	add(parsed.hours, '時間');
	add(parsed.minutes, '分');

	var sec = ms / 1000 % 60;
	var secDecimalDigits = 1;
	var secStr = sec.toFixed(secDecimalDigits).replace(/\.0$/, '');
	add(sec, '秒', secStr);

	return ret.join(opts.split || '');
};
