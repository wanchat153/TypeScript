class Human{
    name: string = ''
    age: number = 0

    sayHello(){
        return "Hello I'm "+ this.name + " and " + this.age + "years old."
    }
}

const user1: any = new Human()
user1.name = 'Wanchat'
user1.age = 24
console.log(user1.sayHello())