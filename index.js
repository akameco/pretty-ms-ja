'use strict';
const parseMs = require('parse-ms');
const isFinite = require('is-finite');

module.exports = (ms, opts) => {
	if (!isFinite(ms)) {
		throw new TypeError('Expected a finite number');
	}

	if (ms < 1000) {
		return Math.ceil(ms) + 'ミリ秒';
	}

	opts = opts || {};
	const ret = [];

	const add = function (val, postfix) {
		if (val === 0) {
			return;
		}

		ret.push(val + postfix);
	};

	const parsed = parseMs(ms);

	add(parsed.days, '日');
	add(parsed.hours, '時間');
	add(parsed.minutes, '分');

	const sec = ms / 1000 % 60;
	const secDecimalDigits = 1;
	const secStr = sec.toFixed(secDecimalDigits).replace(/\.0$/, '');
	add(sec, '秒', secStr);

	return ret.join(opts.split || '');
};
