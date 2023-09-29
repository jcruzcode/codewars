using System;
using System.Linq;

int[] numbers = { 6, 2, 1, 8, 10 };
Console.WriteLine(Kata.Sum(numbers));
public static class Kata
{
  public static int Sum(int[] numbers)
  {
    
    if ( numbers == null || numbers.Length == 0 || numbers.Length == 1 )
      return 0;
    
    Array.Sort(numbers);
    
    int sum = 0;
    for ( int i = 1; i < numbers.Length - 1; i++ )
      sum += numbers[i];
    
    return sum;
  }
}
