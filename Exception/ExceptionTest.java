

import java.util.ArrayList;


public class ExceptionTest{

    public static void main(String[] args){


    ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13"); // This will cause an error because it is a string
        myList.add("hello world"); // This will cause an error because it is a string
        myList.add(48);
        myList.add("Goodbye World"); // This will cause an error because it is a string


        for(int i = 0; i < myList.size(); i++) {
            try{
                Integer castedValue = (Integer) myList.get(i); // Casting myList as an integer, will only accept integers
            }
            catch(Exception e){

                System.out.println("This is not an integer: " + i + " The value is: " + myList.get(i)); 
                // Catches the error and keeps running the code
            }
        
        }
    }
}