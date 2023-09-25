// 8 kyu - Reversed Sequence
using System;

int[] test = Kata.ReverseSeq(5);

foreach (int element in test)
{
    Console.WriteLine(element);
}

public static class Kata
{
  public static int[] ReverseSeq(int n)
  {
    int[] reverse = new int[n];
    int index = 0;
    
    for ( int i = n; i >= 1; i-- )
    {
      reverse[index] = i;
      index++;
    }
    
    return reverse;
  }
}