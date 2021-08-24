// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
// function sayHello() {
//     return "Say, Hello!";
// }

function sayHello(name) {
    if (name === undefined) {
        return "Say, Hello!";
    }
    return "Hello, " + name + "!";
}