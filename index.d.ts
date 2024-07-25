/**
Check if the system is in low power mode.

Always returns false on non-macOS systems.

@example
```
import {isLowPowerMode} from 'is-low-power-mode';

console.log(await isLowPowerMode());
//=> false
```
*/
export function isLowPowerMode(): Promise<boolean>;

/**
Check if the system is in low power mode.

Always returns false on non-macOS systems.

@example
```
import {isLowPowerModeSync} from 'is-low-power-mode';

console.log(isLowPowerModeSync());
//=> false
```
*/
export function isLowPowerModeSync(): boolean;
