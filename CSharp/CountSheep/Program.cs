// 8 kyu - If you can't sleep, just count sheep!!
using System;

Console.WriteLine(Kata.CountSheep(4));
public static class Kata
{
  public static string CountSheep(int n)
  {
    string murmur = "";
    for ( int i = 1; i <= n; i++ )
    {
      murmur += $"{i} sheep...";
    }
    
    return murmur;
  }
}
