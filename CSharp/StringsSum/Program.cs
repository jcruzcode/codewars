using System;

Console.WriteLine(Solution.Program.StringsSum("25", "10"));

namespace Solution
{
  public static class Program
  {
    public static string StringsSum(string s1, string s2)
    {
      if (s1 == "")
        s1 = "0";
      
      if (s2 == "")
        s2 = "0";
      
      int sum = Convert.ToInt32(s1) + Convert.ToInt32(s2);
      
      return sum.ToString();
    }
  }
}
