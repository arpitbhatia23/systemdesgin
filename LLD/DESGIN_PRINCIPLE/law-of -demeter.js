/*
Law of Demeter (LoD)
1. Definition
The Law of Demeter states that an object should communicate only with its immediate collaborators and avoid reaching through other objects to access their internal details.

In simple words, a class should talk to the objects it directly knows, rather than navigating through chains of objects.
*/

/*
Coding Challenge — Order Delivery System
Requirements
Class 1 — Address
- Constructor accepts city and street.
- Store both properties.
- getAddressDetails() returns street and city.
Class 2 — Customer
- Constructor accepts name and address (an Address object).
- Store both.
- getName() returns the customer name.
- getCity() returns the customer's city using the Address object.
Class 3 — Order
- Constructor accepts orderId and customer (a Customer object).
- Store both.
- getCustomerName() returns the customer name.
- getDeliveryCity() returns the delivery city.
*/

class Address {
  constructor({ street, city }) {
    this.street = street;
    this.city = city;
  }
  getAddressDetails() {
    return {
      street: this.street,
      city: this.city,
    };
  }
}

class Customer {
  constructor(name, address) {
    this.address = address;
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getCity() {
    return this.address.getAddressDetails().city;
  }
}

class Order {
  constructor(orderId, customer) {
    this.orderId = orderId;
    this.customer = customer;
  }
  getCustomerName() {
    return this.customer.getName();
  }
  getDeliveryCity() {
    return this.customer.getCity();
  }
}

const address = new Address({ street: "Model Town", city: "ludhiana" });
console.log(address.getAddressDetails());
const customer = new Customer("Rahul", address);

const order = new Order("ORD101", customer);

console.log(order.getCustomerName());
console.log(order.getDeliveryCity());
