const Faker = require('faker');
class FakeData {
    address_Country(){
        Faker.address.country();
        return this;
    }
    address_City(){
        Faker.address.city();
        return this;
    }
    address_Streetname(){
        Faker.address.streetName();
        return this;
    }
    address_latitude(){
        Faker.address.latitude();
        return this;
    }
    address_longtitude(){
        Faker.address.longitude();
        return this;
    }
    commerce_color(){
        Faker.commerce.color();
        return this;
    }
    commerce_department(){
        Faker.commerce.department();
        return this;
    }
    commerce_productName(){
        Faker.commerce.productName();
        return this;
    }
    commerce_price(){
        Faker.commerce.price();
        return this;
    }
    commerce_productAdjective(){
        Faker.commerce.productAdjective();
        return this;
    }
    commerce_productMaterial(){
        Faker.commerce.productMaterial();
        return this;
    }
    commerce_product(){
        Faker.commerce.product();
        return this;
    }
    commerce_productDescription(){
        Faker.commerce.productDescription();
        return this;
    }
    company_companyName(){
        Faker.company.companyName();
        return this;
    }
    date_past(){
        Faker.date.past();
        return this;
    }
    date_future(){
        Faker.date.future();
        return this;
    }
    date_between(){
        Faker.date.between();
        return this;
    }
    date_recent(){
        Faker.date.recent();
        return this;
    }
    time(){
        Faker.time.recent();
        return this;
    }
    unique(){
        Faker.unique();
        return this;
    }
    random_number(){
        Faker.random.number();
        return this;
    }
    random_float(){
        Faker.random.float();
        return this;
    }
    random_arrayElement(){
        Faker.random.arrayElement();
        return this;
    }
    random_arrayElements(){
        Faker.random.arrayElements();
        return this;
    }
    random_objectElement(){
        Faker.random.objectElement();
        return this;
    }
    random_word(){
        Faker.random.word();
        return this;
    }
    random_alphaNumeric(){
        Faker.random.alphaNumeric();
        return this;
    }
    random_alpha(){
        Faker.random.alpha();
        return this;
    }
    phone_phoneNumber(){
        Faker.phone.phoneNumber();
        return this;
    }
    name_firstName(){
        Faker.name.firstName();
        return this;
    }
    name_lastName(){
        Faker.name.lastName();
        return this;
    }
    name_findName(){
        Faker.name.findName();
        return this;
    }
}
module.exports = new FakeData();