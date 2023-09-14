function sayHi(name:string = "none", lastname:string = "none"): string
{
    return "Hi " + name +" "+lastname;
}

console.info(sayHi("Wanchat", "Saenjaingam"));

function sum(a: number, b: number, ...rest: number[])
{
    return a + b + rest.reduce((a, b) => a + b, 0);
}
console.info(sum(1,2,3,4,5,6,7,8,9,10));

function add({ a, b }: { a: number, b: number })
{
    return a + b;
}

console.info(add({a:5, b:10}));