class Person  {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getUserDescription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

var me = new Person('Andrew', 25);
console.log(me);

var description = me.getUserDescription()
console.log(description);