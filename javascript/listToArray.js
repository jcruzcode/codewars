// LinkedList -> Array (7 kyu)
function listToArray(list) {
  const arr = [];

  for (let node = list; node; node = node.next) {
    arr.push(node.value);
  }

  return arr;
}