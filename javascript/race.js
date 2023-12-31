// Tortoise Racing (6 kyu)
function race(v1, v2, g) {
  if (v1 >= v2) return null;

  const time = g / (v2 - v1);
  let seconds = time * 3600;

  const hours = Math.floor(time);
  seconds -= hours * 3600;

  const mins = Math.floor(seconds / 60);
  seconds -= mins * 60;

  const secs = Math.floor(seconds);

  return [hours, mins, secs];
}
