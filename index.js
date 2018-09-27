function Phone(brand, price, color){
        this.brand = brand;
        this.color = color;
        this.price = price;
        ;
    }
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
    var SamsungGalaxyS6 = new Phone('Galaxy P-30', 1239, 'gold',)
    var iPhone6s = new Phone('Apple', 2250, 'silver')
    var OnePlusOne = new Phone('A001', 1399, 'black')

    SamsungGalaxyS6.printInfo();
    iPhone6s.printInfo();
    OnePlusOne.printInfo();
