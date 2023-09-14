if(true && true)
{
    console.log('A')
}

if(false || true)
{
    console.log('B')
}

let x: number = 10, y = 20;

if(x < y)
{
    console.log('x < y');
}

x > y? console.log('true'): console.log('false');

let selectMenu : number = 1;
switch(selectMenu){
    case 0:
        console.log("A");
        break;
    case 1:
        console.log("B");
        break;
    case 2:
        console.log("C");
        break;
}