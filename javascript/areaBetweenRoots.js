// Original Kata in TypeScript
// The area between the vertex of the parabola and x-axis (6 kyu)
function areaBetweenRoots(a, b, c) {
  // Vertex of paraboa lies on x-axis
  if (b === 0) return 0;

  const sign = b ** 2 - 4 * a * c;
  // Imaginary roots
  if (sign < 0) return 0;

  // Real roots
  const posRoot = (-b + Math.sqrt(sign)) / (2 * a);
  const negRoot = (-b - Math.sqrt(sign)) / (2 * a);

  // Anti-derivative at upperbound
  const fPos = a * (posRoot ** 3 / 3) + b * (posRoot ** 2 / 2) + c * posRoot;
  // Anti-derivative at lowerbound
  const fNeg = a * (negRoot ** 3 / 3) + b * (negRoot ** 2 / 2) + c * negRoot;

  // Defininte Integral from fNeg to fPos, assuming a > 0
  const defIntegral = fPos - fNeg;

  // Handles both a > 0 and a < 0
  return Math.abs(defIntegral);
}
