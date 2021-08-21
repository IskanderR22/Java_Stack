

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        float mochaPrice = 3.5f; // Put an f at the end of your float variables
        float lattePrice = 4.5f; // Put an f at the end of your float variables
        float dripCoffee = 2.7f; // Put an f at the end of your float variables
        float cappucino = 4.7f; // Put an f at the end of your float variables

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        
        // Example:
        System.out.println(customer1 + readyMessage); // This is showing the two messages 

        if(isReadyOrder4 == true){ // This is setting a conditional and if it's true display the message
            System.out.println(customer4 + readyMessage + displayTotalMessage + cappucino);
        }

        if(isReadyOrder4 == true){ // This is setting a conditional and if it's true display the message
            System.out.println(customer2 + readyMessage + displayTotalMessage + lattePrice*2);
        }

        System.out.println(customer3 + displayTotalMessage + (lattePrice - dripCoffee));

        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
    }
}
