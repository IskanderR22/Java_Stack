



// Every Java file no matter how small, must be a class.

// Your class name and file name should match, letter case and all! 


public class JavaBasic{

    // POINT OF ENTRY METHOD, ALL YOUR CODE GOES IN THIS METHOD
    public static void main(String[] args){ // Commit this to memory, this is key for Java to execute code
        system.out.println("Hello world"); // In Java the ; is necessary except where there is a curly brace

        // Primitive types:

        // int
        int age = 30; // Start with what data type it is then a variable and set a value 

        // boolean
        boolean flag = true; // or false bot lowercase 

        // float
        float amount = 30;

        // double  
        double another_price = 19.99;

        //Char
        char letter = 'a'; // Single quotes are used for single characters



        // Object data type 
        // String Double quotes are used for strings
        String name = "Iskander Rangel"; // String is capatalized because it is a class
        system.out.println(name.length()); // Using this method(function) to find the length of the string


        // Type Casting
        // Implicit Casting Going from one smaller data type to one larger data type, 1 to 1.0
        int price = 1;
        float new_price;
        new_price = price;
        system.out.println(price);
        system.out.println(new_price); // This will print out 1.0


        // Emplicit Casting Going from a larger data type to a smaller data type 
        double a = 1.0;
        int b;
        b = (int) a; // Telling Java we want to convert the double into an int 
        system.out.println(a);
        system.out.println(b);


        // Conditionals

        boolean raining = true;
        if(raining){
            system.out.println("Take an umbrella");
        }
        else if(some_condition){
            system.out.println("Something else");
        }
        else{
            system.out.println("It's sunny out, wear shorts");
        }

        // Double equals 
        String pineapple = "Ice";
        if(pineapple.equals("Ice")){
            system.out.println("Match);
        }

    }

}