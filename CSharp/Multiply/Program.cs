/* 8 kyu - Simple multiplication */
Console.WriteLine(Multiplier.Multiply(3)); // 27
Console.WriteLine(Multiplier.Multiply(2)); // 16
Console.WriteLine(Multiplier.Multiply(8*9)); // 576
public class Multiplier
{
  public static int Multiply(int x) 
  {
    return x % 2 == 0 ? 8 * x : 9 * x;
  }
}
