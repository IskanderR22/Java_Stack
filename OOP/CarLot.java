
public class CarLot{ // Point of entry
    public static void main(String[] args){
        // Instantiate a car
        Car samers_car = new Car("Hyundai", "V4", 2014, 6000.00);
// Class becomes the date type // Calling the contructor method
        Car empty_car = new Car();
        // Calling the method with no parameters

 // System.out.println(samers_car.make); This won't compile
 // Because the variables are Private
        System.out.println(samers_car.make.getMake());
        // Using the Getter method

        samers_car.setMake("Honda") 
        // Changing the make using the Setter method
        System.out.println(samers_car.make.getMake());


        System.out.println(samers_car.getPrice());
        samers_car.depreciateValue();
        System.out.println(samers_car.getPrice());
    }
}