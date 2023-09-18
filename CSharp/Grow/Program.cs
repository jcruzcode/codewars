/* 8 kyu - Beginner - Reduce but Grow */
int[] numbers = new int[] { 1,2,3,4,5 };
Console.WriteLine(Kata.Grow(numbers)); // 120
public class Kata
{
  public static int Grow(int[] x)
  {
    int product = 1;
    
    foreach ( int number in x )
    {
      product *= number;
    }
    
    return product;
  }
}
