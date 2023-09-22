Console.WriteLine(Kata.FakeBin("45385593107843568"));
public class Kata
{
    public static string FakeBin(string x)
    {
     
        string fakeBinary = "";
        for (int i = 0; i < x.Length; i++)
        {
            if ( x[i] == '0' || x[i] == '1' || x[i] == '2' || x[i] == '3' || x[i] == '4' )
                fakeBinary += "0";
            else
                fakeBinary += "1";
        }
        return fakeBinary;
    }
}