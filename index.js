function Phone(brand, price, color){
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
    var SamsungGalaxyS6 = new Phone('Galaxy P-30', 'gold', 1239)
    var iPhone6s = new Phone('Apple', 'silver', 2250)
    var OnePlusOne = new Phone('A001', 'black', 1399)

    iPhone6s.printInfo();
