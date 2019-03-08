const WASM_MODULE = Module

function reverseString() {
  const stringToReverse = 'Reverse me please!'
  const bufferSize = stringToReverse.length + 1
  const buffer = WASM_MODULE._malloc(bufferSize)

  stringToUTF8(stringToReverse, buffer, bufferSize)

  const reversedStringPointer = WASM_MODULE._reverse(buffer, bufferSize)
  const reversedString = UTF8ToString(reversedStringPointer)

  WASM_MODULE._free(buffer)

  return reversedString
}

function uppercaseString() {
  const stringToUppercase = 'Uppercase me please!'
  const bufferSize = stringToUppercase.length + 1
  const buffer = WASM_MODULE._malloc(bufferSize)

  stringToUTF8(stringToUppercase, buffer, bufferSize)

  const uppercaseStringPointer = WASM_MODULE._uppercase(buffer, bufferSize)
  const uppercaseString = UTF8ToString(uppercaseStringPointer)

  WASM_MODULE._free(buffer)

  return uppercaseString
}