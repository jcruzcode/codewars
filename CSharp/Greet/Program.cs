// 8 kyu - Grasshopper - Personalized Message

Console.WriteLine(Kata.Greet("Jonathan", "Bobby")); // Hello guest
Console.WriteLine(Kata.Greet("Andrew", "Bobby")); // Hello guest
Console.WriteLine(Kata.Greet("Bobby", "Bobby")); // Hello boss
public class Kata
{
  public static string Greet(string name, string owner)
  {
    if ( name == owner ) {
      return "Hello boss";
    } else {
      return "Hello guest";
    }
  }  
}
