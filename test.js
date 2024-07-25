import test from 'ava';
import {isLowPowerMode, isLowPowerModeSync} from './index.js';

test('async', async t => {
	t.false(await isLowPowerMode());
});

test('sync', t => {
	t.false(isLowPowerModeSync());
});
