// 请你编写一个名为 createHelloWorld 的函数。它应该返回一个新的函数，该函数总是返回 "Hello World" 。

/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};

const f = createHelloWorld();
console.log(f());
