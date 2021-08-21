

import java.util.HashMap; 
import java.util.Set; 


public class TestMap{ // Make the file name unique and not a bulit-in import

    public static void main(String[] args) {

        HashMap <String, String> trackList = new HashMap <String, String>(); // Creating a HashMap
        trackList.put("Hello", "Goodbye"); // Adding in our Key value pairs
        trackList.put("Bad", "Not like this"); // Adding in our Key value pairs
        trackList.put("Halo", "Angel"); // Adding in our Key value pairs
        trackList.put("Lose it", "Pasta"); // Adding in our Key value pairs

        // .get
        String trackName = trackList.get("Bad"); // Grabbing one specific key value from our HashMap
        System.out.println(trackName);


        Set<String> allSongs = trackList.keySet(); // Using keySet
        for(String key : allSongs) {  // Using a loop to itterate through out HashMap, key is the actual key name
            System.out.println( key + ": " + trackList.get(key) ); 
        }
    }   

}