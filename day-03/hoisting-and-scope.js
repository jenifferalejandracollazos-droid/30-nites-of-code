// ===============================
// DAY 03 - HOISTING & SCOPE
// ===============================


/*
========================================
📌 EXPLICACIÓN EN ESPAÑOL
========================================

Hoisting es el comportamiento del motor de JavaScript donde
las declaraciones de variables y funciones se registran en memoria
antes de ejecutar el código línea por línea.

JavaScript trabaja en dos fases:

1. Fase de creación:
   - Registra variables
   - Registra funciones
   - Asigna memoria

2. Fase de ejecución:
   - Ejecuta el código línea por línea

Con "var":
- Se eleva la declaración.
- Se inicializa como undefined.

Con "let" y "const":
- También se elevan.
- Pero entran en la Temporal Dead Zone (TDZ).
- No pueden usarse antes de su declaración.

Las function declarations:
- Se elevan completamente.
- Se pueden llamar antes de declararse.
*/


/*
========================================
📌 EXPLANATION IN ENGLISH
========================================

Hoisting is the JavaScript engine behavior where
variable and function declarations are registered in memory
before the code executes line by line.

JavaScript runs in two phases:

1. Creation phase:
   - Variables are registered
   - Functions are registered
   - Memory is allocated

2. Execution phase:
   - Code runs line by line

With "var":
- The declaration is hoisted.
- It is initialized as undefined.

With "let" and "const":
- They are also hoisted.
- But they enter the Temporal Dead Zone (TDZ).
- They cannot be accessed before initialization.

Function declarations:
- Are fully hoisted.
- Can be called before being declared.
*/


// ===============================
// EXAMPLES
// ===============================


// Example 1: var hoisting
console.log(a); // undefined
var a = 10;


// Example 2: let hoisting (TDZ)
// console.log(b); // ReferenceError
let b = 20;


// Example 3: Function Declaration
saludar();

function saludar() {
    console.log("Hola / Hello");
}


// Example 4: Function Expression with var
// This produces TypeError
// because only the variable is hoisted
// saludar2();

var saludar2 = function() {
    console.log("Hi");
};


// Example 5: Shadowing example

var x = 1;

function test() {
    console.log(x); // undefined (local var shadows global)
    var x = 2;
}

test();


// Example 6: Scope chain example

var y = 5;

function showY() {
    console.log(y); // 5 (uses global scope)
}

showY();
