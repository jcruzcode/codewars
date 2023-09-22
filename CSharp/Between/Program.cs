// 8 kyu - What is between them?
public class Kata {
  
  /*********************************************************
   
   The method Between takes two integers (a, b, where a < b) 
   and return an array of all integers between the input 
   parameters, including them.
   
  **********************************************************/
  public static int[] Between(int a, int b) {
    int[] numbers = new int[ b - a + 1 ];
    int index = 0;
    
    for ( int i = a; i <= b; i++ ) 
    {
      numbers[index] = i; 
      index++;
    }
    
    return numbers;
  }
}

