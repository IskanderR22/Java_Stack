
public class Car{
    // Attributes & Member variables
    
    private String make; // Private modifiers can only be accessed by the Car class Car method
    private String engine; // this is the same as self. in Python
    private int model_year;
    private double price;

    // Constructor Methods
    public Car(){ // Overloading methods
        System.out.println("Contructor method with no arguments");
        this.make = "Default make";
        this.engine = "V4";
        this.model_year = 0;
        this.price = 0.00;
    }
    public Car(String make, String engine, int model_year, double price){ // Always declare what data type
        System.out.println("Your car is being instantiated")
        this.make = make;
        this.engine = engine;
        this.model_year = model_year;
        this.price = price;
    }

    // Getter(Read) and Setter(Create/Update) Methods
    public String getMake(){
        return this.make;
    }

    public String getEngine(){
    return this.engine;
    }

    public int getModelYear(){
        return this.model_year;
    }

    public double getPrice(){
        return this.price;
    }


    // Setters are always void, they don't return anything
    public void setMake(String make){
        this.make = make;
    }

    public void setEngine(String engine){
        this.engine = engine;
    }

    public void setModelYear(int model_year){
        this.model_year = model_year;
    }

    public void setPrice(double price){
        if(price < 0){
            System.out.println("You can't set negative price!")
        }
        else{
            this.price = price;
        }
    }

// Everything above these is standard

    // Other methods that aren't standard but can be made

    public void depreciateValue(){
        this.price = this.price / 2;
    }




}