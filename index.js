var Context = window.WebGLRenderingContext
var slice = Array.prototype.slice
var instrumented = false
var callbacks = []
var glContextTypes = [
    'webgl'
  , 'experimental-webgl'
  , 'moz-webgl'
  , 'webkit-3d'
  , '3d'
]

module.exports = bootstrapWebGLInstrumentation

function bootstrapWebGLInstrumentation(created) {
  if (!created) created = function noop(){}
  callbacks.push(created)
  if (instrumented) return
  instrumented = true

  var original = HTMLCanvasElement.prototype.getContext
  HTMLCanvasElement.prototype.getContext = function(ctxType) {
    var result = original.apply(this, slice.call(arguments))
    var isGLContext = glContextTypes.indexOf(ctxType) !== -1

    if (isGLContext) {
      for (var i = 0; i < callbacks.length; i += 1) {
        callbacks[i](result, ctxType)
      }
    }

    return result
  }
}
