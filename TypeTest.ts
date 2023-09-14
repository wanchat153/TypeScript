var myName: string = "M";
console.log(myName);
console.log(typeof(myName));

var money: number = 100;
console.log(money);
console.log(typeof(money));

console.log(null === undefined) //false
console.log(null == undefined) //true
console.log(null === null) //true

// var name:string = "?"
// var age: number;
// var canVote = true;
// var i;

//All in One Data Type
//var ใช้งานได้ทุกที่
//let ใช้งานได้แค่ภายในขอบเขต
//const ค่าคงที่ ข้อมูลนั้นๆ ไม่ได้ถูแก้ไขอะไรเลย

let myArray: number[] = [1, 2, 3];

console.log(myArray[2]);
console.log(myArray.pop());
console.log(myArray.push(2));

//tuple
//let employee: [number, string, boolean] = [[1 , "Wanchat", true];
let employee: [number, string, boolean][] = [[1 , "Wanchat", true], [2 , "M", false]];
console.log(employee[1])
employee.push([3 , "A", false]);

//Enum
enum WorkStatus{
    Task = 1,
    Working,
    Done
}

console.log(WorkStatus.Done);