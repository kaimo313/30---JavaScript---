// 请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

// 记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

// 你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。

//  sum 接收两个整型参数 a 和 b ，并返回 a + b 。
//  fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
//  factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var cache = {};
    return function (...args) {
        var key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            var res = fn(...args);
            cache[key] = res;
            return res;
        }
    };
}

// var memoize = (fn, cache = {}) => (...args) => cache[args.join()] ?? (cache[args.join()] = fn(...args))

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
