// 8 kyu - Insert Values
using System.Linq;

int[] numbers = new int[] { 1, 2, 3 , 4 , 5 };  
foreach( int number in Solution.ArraysInversion.InvertValues(numbers) )
{
    Console.WriteLine(number);
}

namespace Solution
{
  public static class ArraysInversion
  {
    public static int[] InvertValues(int[] input)
    {
      int tempNumber = 0;
      int index = 0;
      
      foreach ( int number in input )
      {
        tempNumber = number;
        input[index] = -number;
        index++;
      }
      
      return input;
    }
  }
}
