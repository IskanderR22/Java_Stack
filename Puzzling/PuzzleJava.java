


import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava{ // Class needs to be the same name as file

    public ArrayList<Integer> getTenRolls(){

        ArrayList<Integer> randNums = new ArrayList<Integer>();

        // To use methods from the Random library you will need to create an instance of Random
        Random randMachine = new Random();
        for(int i = 1; i<=10; i++){

            int newNum = randMachine.nextInt(20) + 1; // Setting the range of our random machine, we add one because originally
            randNums.add(newNum);
        }
        return randNums;
    }




    public char getRandLetter(){ 

        char[] alph = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

        Random randMachine = new Random();

            int newLetter = randMachine.nextInt(26); // Setting the range of our random machine

        return alph[newLetter];
    }

    public String getRandPassword(){ 

        char[] alph = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        String password = "";

        Random randMachine = new Random();
        for(int i = 1; i <= 8; i++){ // Creating 8 passwords

            int newLetter = randMachine.nextInt(26); // Setting the range of our random machine
            password += alph[newLetter];
    }

        return password;
    }



    public ArrayList<String> getNewPasswords(int length){ 

        ArrayList<String> passList = new ArrayList<String>();

        for(int i = 0; i < length; i++){
            passList.add(getRandPassword()); // Using our other method to create random passwords, Line 37
        }
        return passList;
    }

}