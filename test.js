import test from 'ava';
import fn from './';

test('should prettify milliseconds', t => {
	t.is(fn(0), '0ミリ秒');
	t.is(fn(0.1), '1ミリ秒');
	t.is(fn(1), '1ミリ秒');
	t.is(fn(1000 + 400), '1.4秒');
	t.is(fn((1000 * 2) + 400), '2.4秒');
	t.is(fn(1000 * 55), '55秒');
	t.is(fn(1000 * 67), '1分7秒');
	t.is(fn(1000 * 60 * 67), '1時間7分');
	t.is(fn(1000 * 60 * 60 * 12), '12時間');
	t.is(fn(1000 * 60 * 60 * 40), '1日16時間');
	t.is(fn(1000 * 60 * 60 * 999), '41日15時間');
});

test('should have a split option', t => {
	t.is(fn(1000 * 67, {split: ' '}), '1分 7秒');
	t.is(fn(1000 * 60 * 67, {split: ' '}), '1時間 7分');
	t.is(fn(1000 * 60 * 60 * 40, {split: ' '}), '1日 16時間');
});

test('should throw on invalid', t => {
	t.throws(() => fn('foo'));
	t.throws(() => fn(NaN));
	t.throws(() => fn(Infinity));
});
