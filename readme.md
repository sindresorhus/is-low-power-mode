# is-low-power-mode

> Check if the system is in low power mode

*Currently only supports macOS.*

This can be useful to save battery, for example, by avoiding expensive operations or reducing polling intervals.

## Install

```sh
npm install is-low-power-mode
```

## Usage

```js
import {isLowPowerMode} from 'is-low-power-mode';

console.log(await isLowPowerMode());
//=> false
```

## API

### `isLowPowerMode(): Promise<boolean>`
### `isLowPowerModeSync(): boolean`

Returns a boolean indicating whether the system is in low power mode.

Always returns false on non-macOS systems.
