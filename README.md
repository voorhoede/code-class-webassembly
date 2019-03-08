# Code Class WebAssembly

## Run the project

In your terminal run:

```bash
./server
```

Or if the server file is not executable:

```bash
chmod u+x server
./server
```

Visit [http://localhost:8008/](http://localhost:8008/) in a browser supporting WebAssembly.

## Calculator
**MAKE SURE EMSCRIPTEN IS INSTALLED IN THE HOME DIRECTORTY OF THE PROJECT**

To compile `calculator.c` to `.wasm`, run:
```bash
emcc calculator/calculator.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o calculator/calculator.wasm
```

## Stringinator
**MAKE SURE EMSCRIPTEN IS INSTALLED IN THE HOME DIRECTORTY OF THE PROJECT**

To compile `calculator.c` to `.wasm`, run:
```bash
emcc stringinator/stringinator.c -O2 -s WASM=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["stringToUTF8", "UTF8ToString"]'  -o stringinator/stringinator.js
```