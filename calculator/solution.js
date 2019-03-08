let WASM_CALCULATOR
let WASM_INSTANCE
let WASM_MODULE

function initWebAssemblyEnv() {
  const memory = new WebAssembly.Memory({initial: 256, maximum: 256})

  return {
    'abortStackOverflow': () => { throw new Error('overflow'); },
    'table': new WebAssembly.Table({initial: 0, maximum: 0, element: 'anyfunc'}),
    'tableBase': 0,
    '__table_base': 0,
    'memory': memory,
    'memoryBase': 1024,
    '__memory_base': 1024,
    'STACKTOP': 0,
    'STACK_MAX': memory.buffer.byteLength,
    _jsSqrt: Math.sqrt,
  }
}

fetch('/calculator/calculator.wasm')
  .then(response =>
    response.arrayBuffer()
  )
  .then(bytes =>
    WebAssembly.instantiate(bytes, {
      env: initWebAssemblyEnv()
    })
  )
  .then(({ instance, module }) => {
    WASM_INSTANCE = instance
    WASM_MODULE = module
    WASM_CALCULATOR = instance.exports
  })
  .catch(error => {
    console.log('Error instatiating WebAssembly module', error)
  })

// WebAssembly.instantiateStreaming(
//   fetch('/c/calculator.wasm'),
//   { env: initWebAssemblyEnv(),}
// )
//   .then(({ instance, module }) => {
//     WASM_CALCULATOR = instace.exports
//   })
//   .catch(error => {
//     console.log('Error instatiating WebAssembly module', error)
//   })
