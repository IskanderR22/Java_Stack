



import java.util.ArrayList;

public class CafeUtil{


    public void militaryHoursTest(){  // Void is used when you don't return anything at the end of the method 

        for(int i = 0; i < 24; i++){ // Using int to declare what data type i will be
            System.out.println(i);
        }
    }


    public void coffeeNotification(){

        for(int i = 0; i < 24; i++){
            System.out.println(String.format("It's %s:00,  Do you need a coffee break?", (int) i));
        }
    }


    public void specialsAlert(){

        for(int i = 6; i < 16; i++){
            if(i % 3 == 0 ){
                System.out.println("Buy one get one free for the next 15 minutes!");
            }
            else{
                System.out.println("Stay tuned for deals announced throughout the day.");
            }
        }
    }


    public int leadsAtDay10(){
        int sum = 0;
        for( int i = 1; i <= 10; i++){
            sum += i;
        }
        return sum;
    }


    public void displayMenu(String[] menu){ // Parameters need to be specific to what they will be receiving
        for(String item : menu){ // Advanced for loop
            System.out.println(item);
        }
    }


    public double getOrderTotal( double[] items){ // Parameters need to be specific to what they will be receiving
        
        float total = 0f; // Remember to add f to the end of float numbers

        for(double item : items){ // Advanced for loop
            total += (float)item;
        }
        return (double)total;
    }


    public double getHighestPrice( double[] items){ // Parameters need to be specific to what they will be receiving
        double highest = 0;

        for(double item : items){

            if(highest < item){
                highest = (double) item;
            }
        }
        return (double) highest;
    }


    // Returning an ArrayList that is all strings
    public ArrayList<String> raffleWinners(String[] customers){ // Parameters need to be specific to what they will be receiving

        ArrayList<String> winners = new ArrayList<String>(); // Creating a new ArrayList to return  
        for( int i = 3; i < customers.length; i+= 4){
                winners.add(customers[i]); // Adding to our winners ArrayList
        }
        return winners; // Return our new ArrayList
    }
}