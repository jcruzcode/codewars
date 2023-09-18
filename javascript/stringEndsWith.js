/* 7 kyu - String ends with? */
function solution(str, ending){
    // This inner function escapes special characters for regex.
      function escapeRegex(string) {
          return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      }
      
      const regex = new RegExp(escapeRegex(ending) + '$');
      return regex.test(str);
}