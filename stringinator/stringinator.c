#include <ctype.h>
#include <stdio.h>
#include <emscripten.h>

char * EMSCRIPTEN_KEEPALIVE reverse(char * stringPointer, int length) {
  EM_ASM(
    console.log('JS call in reverse');
  );

  printf("Hi from reverse!\n");

  if (stringPointer)
  {
    /* get range */
    char *start = stringPointer;
    char *end = start + length - 2; /* -1 for \0 */
    char temp;

    /* reverse */
    while (end > start)
    {
        /* swap */
        temp = (unsigned char) *start;
        *start = (unsigned char) *end;
        *end = (unsigned char) temp;

        /* move */
        ++start;
        --end;
    }
  }

  return stringPointer;
}

char * EMSCRIPTEN_KEEPALIVE uppercase(char * stringPointer, int length) {
  EM_ASM(
    console.log('JS call in uppercase');
  );

  printf("Hi from uppercase!\n");

  for(int i=0; i<length; i++) {
    stringPointer[i] = toupper((unsigned char) stringPointer[i]);
  }

  return stringPointer;
}