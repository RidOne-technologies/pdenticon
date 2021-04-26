# Pdenticon

 A library for generating polkadot identicons based on `@polkadot/ui-shared`

## Why
The intention behind is to create a wrapper around `@polkadot/ui-shared` to easily generate polkadot icons and consume it on an app or another library without needing to use bundler like webpack or rollup.

If you want to use the `@polkadot/ui-shared` or `@polkadot/*` library on an angular application for instance, you'll need to use webpack to run the app properly because Angular that use Typescript doesn't support yet `.mjs` files see [this](https://github.com/GoogleChromeLabs/idlize/issues/14)  and [this](https://github.com/microsoft/TypeScript/issues/27957) issue.

Also still in Angular we might run into some issues like [the following:](https://stackoverflow.com/questions/54162297/module-not-found-error-cant-resolve-crypto)  
`Module not found: Error: Can't resolve 'crypto'`

The reason above led to create this wrapper library to help generate easy polkadot identicon.

## Installation

```
npm i pdenticon
// or
yarn add pdenticon
```

## Usage

There is two functions availables

`renderPolkadotIdenticon` for generating polkadot icon html code and `renderBeachballIdenticon` for beachball html code

#### Importing 

```javascript
import {renderPolkadotIdenticon, renderBeachballIdenticon} from 'pdenticon'; // or import * as pdenticon from 'pdenticon';
```

#### Generating icons 
 For renderPolkadotIdenticon signature
```javascript
        renderPolkadotIdenticon(
            address, // account address
            className = '', // string
            isAlternative = false, // boolean
            size, // Preferred icons size in integer
            style // String
            );
```

 For renderBeachballIdenticon signature

```javascript
    renderBeachballIdenticon(
                address,// account address
                isAlternative = false,// boolean
                size, // Preferred icons size in integer
              );
```
