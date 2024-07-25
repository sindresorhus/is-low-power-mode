import process from 'node:process';
import {execFile, execFileSync} from 'unicorn-magic';

const regex = /lowpowermode +1/;

export async function isLowPowerMode() {
	if (process.platform !== 'darwin') {
		return false;
	}

	const {stdout} = await execFile('/usr/bin/pmset', ['-g']);
	return regex.test(stdout);
}

export function isLowPowerModeSync() {
	if (process.platform !== 'darwin') {
		return false;
	}

	const stdout = execFileSync('/usr/bin/pmset', ['-g']);
	return regex.test(stdout);
}
