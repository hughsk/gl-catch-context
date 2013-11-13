# gl-catch-context [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Retrieve any newly created WebGL contexts as they're being created. Useful for
instrumentation.

## Usage ##

[![gl-catch-context](https://nodei.co/npm/gl-catch-context.png?mini=true)](https://nodei.co/npm/gl-catch-context)

### `glCatchContext(callback)` ###

Calls `callback(context)` when a new context is created. Make sure you require
this file before the rest of your code, or you won't catch it!

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/gl-catch-context/blob/master/LICENSE.md) for details.
