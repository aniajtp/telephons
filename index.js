function Phone(brand, price, color, weight){
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.weight = weight;
    }
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + ", weight is " + this.weight + "g" + " and the price is " + this.price + ".");
}
    var SamsungGalaxyS6 = new Phone('Galaxy P-30', 1239, 'gold', 138)
    var iPhone6s = new Phone('Apple', 2250, 'silver', 143)
    var OnePlusOne = new Phone('A001', 1399, 'black', 162)

    SamsungGalaxyS6.printInfo();
    iPhone6s.printInfo();
    OnePlusOne.printInfo();
