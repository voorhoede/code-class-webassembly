let WASM_CALCULATOR;

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
  .then(response => response.arrayBuffer())

  // your code here ⊂(◉‿◉)つ

  .catch(error => {
    console.log('Error instatiating WebAssembly module', error)
  })