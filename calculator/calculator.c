#include <emscripten.h>

extern float jsSqrt(int);

int EMSCRIPTEN_KEEPALIVE add(int value1, int value2) {
  return value1 + value2;
}

int EMSCRIPTEN_KEEPALIVE subtract(int value1, int value2) {
  return value1 - value2;
}

int EMSCRIPTEN_KEEPALIVE multiply(int value1, int value2) {
  return value1 * value2;
}

int EMSCRIPTEN_KEEPALIVE divide(int value1, int value2) {
  return value1 / value2;
}

int EMSCRIPTEN_KEEPALIVE squareRoot(int value) {
  return jsSqrt(value);
}