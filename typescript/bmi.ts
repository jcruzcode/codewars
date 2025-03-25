/*
======== Calculate BMI (8 kyu) ========
Write function bmi that calculates body mass index (bmi = weight / height ** 2).

if bmi <= 18.5 return 'Underweight'

if bmi <= 25.0 return 'Normal'

if bmi <= 30.0 return 'Overweight'

if bmi > 30 return 'Obese'

1) Parameters - Two positive numbers, weight and height.
2) Return - A string specifying the BMI classification.
3) Examples - see tests
4) Pseudocode - see comments

*/
export function bmi(weight: number, height: number): string {
  const BMI = weight / height ** 2; // calculate BMI
  // Determine BMI classification and returu as a string
  return BMI <= 18.5
    ? "Underweight"
    : BMI <= 25.0
    ? "Normal"
    : BMI <= 30.0
    ? "Overweight"
    : "Obese";
}

// Tests
console.log(bmi(80, 1.8), "Normal");
