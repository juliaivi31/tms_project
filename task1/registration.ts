export class registrationForm {
    firstName: string;
    lastName: string;
    age: number;
    phone: number;
    constructor(firstName: string, lastName: string, age: number, phone: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
    };
}
// const reg = new registrationForm("1", "2", 20, 21212);
// console.log(reg)