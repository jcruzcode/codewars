Console.WriteLine(Kata.GetVolumeOfCuboid( 10.2, 5.3124, 3.14));
public class Kata {
  /****************************************************
  
  GetVolumeOfCuboid calculates and returns the volume
  of a cuboid based on the three parameters of 
  data type double: length, width, and height.
  
  *****************************************************/
  public static double GetVolumeOfCuboid(double length, double width, double height) {
    return length * width * height;
  }
}