


import java.util.ArrayList;
import java.util.Random;

public class PuzzleTest { // Class needs to be the same name as file
    
    public static void main(String[] args) {

        PuzzleJava generator = new PuzzleJava(); // Creating an instance of our PuzzleJava class to use it's methods
        ArrayList<Integer> randomRolls = generator.getTenRolls(); // This is asking to return a value that is an ArrayList
        System.out.println(randomRolls);
        
        //..
        // Write your other test cases here.
        //..

        System.out.println(generator.getRandLetter()); // This is calling the method in our PuzzleJAva file

        System.out.println(generator.getRandPassword());

        System.out.println(generator.getNewPasswords(10));
    }
}