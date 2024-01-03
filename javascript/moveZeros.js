// Moving Zeros To The End (5 kyu)
function moveZeros(arr) {
  const zeros = arr.filter((item) => item === 0);
  const rest = arr.filter((element) => element !== 0);
  return rest.concat(zeros);
}
