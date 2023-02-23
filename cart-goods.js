"use strict";

const cart = {
    items: [
        // { name: "Peach", price: 55, },
        // { name: "Malone", price: 58, },
        // { name: "Apple", price: 63, },
        // {name: "Grape", price: 453,},
    ],
    getItems() {
        return this.items;
    },
    add(product) {
        console.table(this.items)
        for (let item of this.items) {

            if (item.name === product.name) {
                // console.log("This product is already in a cart:", product.name);
                item.quantity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.items.push(newProduct);
     },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            // const item = this.items[i];
            const { name } = items[i];
            
            if (productName === name) {
                console.log("Here it is:", productName);
                console.log("Element to find index:",i);
                items.splice(i,1);
            }
         
        }
     },
    clear() { 
        this.items = [];
    },
    countTotalPrice() { 
        const { items} = this;
        console.log(items);

        let total = 0;
        for (let {price,quantity} of items){
            total += price*quantity;
        }

        return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName, callback) {
        const { items } = this;
        for (let item of items) {
            if (productName===item.name) {
                item.quantity -= 1;
                console.log("Quantity of product was decreased:", productName)
            }
        }
        callback(productName);
    },
}

console.log(cart.getItems())

cart.add({ name: "Cherry", price: 72, })
cart.add({ name: "Cranberry", price: 90, })
cart.add({ name: "Watermalone", price: 431, })
cart.add({ name: "Cherry", price: 72 })
console.table(cart.items)

// cart.remove("Cherry" )
// console.log(cart.items)

// cart.clear();
// console.log(cart.getItems())

console.log("Total price is:", cart.countTotalPrice())

cart.decreaseQuantity("Watermalone", function toZeroQuantityGoodDelete(productName, remove) {
    for (let i = 0; i < cart.items.length; i += 1){
        
        if (cart.items[i].quantity === 0) {
            cart.items.splice(i, 1);
            
            console.log("This good with zero quantity:", productName);
            return;
        }
    }
})
console.table(cart.items)


