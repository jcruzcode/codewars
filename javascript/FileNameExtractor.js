// extract portion of file name (6 kyu)
class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      const firstUnderscore = dirtyFileName.indexOf('_');
      const lastDot = dirtyFileName.lastIndexOf('.');
      return dirtyFileName.slice(firstUnderscore + 1, lastDot);
    }
}