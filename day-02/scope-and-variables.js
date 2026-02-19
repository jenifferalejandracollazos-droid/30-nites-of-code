// DAY 02 - Scope & Variables

// Example 1: var (function scope)
function testVar() {
    if (true) {
        var a = 5;
    }
    console.log(a); // 5
}

testVar();


// Example 2: let (block scope)
function testLet() {
    if (true) {
        let b = 10;
        console.log(b); // 10
    }
}

testLet();


// Example 3: Reassignment
let x = 1;

{
    x = 2; // modifies existing variable
}

console.log(x); // 2


// Example 4: Redeclaration inside block
{
    let x = 3;
    console.log(x); // 3
}

console.log(x); // 2
