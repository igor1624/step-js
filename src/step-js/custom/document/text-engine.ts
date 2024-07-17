
class TextEngine {

  static createWords(text: string) {
    const words = <string[]>[];
    let i0 = 0;
    let i1 = 0;
    while (i1 < text.length) {
      if (text.charAt(i1) === ' ') {
        words.push(text.substring(i0, i1));
        i0 = i1 + 1;
      }
      i1++;
    }
    if (i1 > i0) {
      words.push(text.substring(i0, i1));
    }
    return words;
  }
}

export default TextEngine;
