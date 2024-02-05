// 请你编写一个函数，它接受一个异步函数 fn 和一个以毫秒为单位的时间 t。它应根据限时函数返回一个有 限时 效果的函数。
// 函数 fn 接受提供给 限时 函数的参数。

// 限时 函数应遵循以下规则：

// 如果 fn 在 t 毫秒的时间限制内完成，限时 函数应返回结果。
// 如果 fn 的执行超过时间限制，限时 函数应拒绝并返回字符串 "Time Limit Exceeded" 。

// 提示：

// 0 <= inputs.length <= 10
// 0 <= t <= 1000
// fn 返回一个 Promise 对象

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            var timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            try {
                var res = await fn(args);
                resolve(res);
            } catch (error) {
                reject(error);
            }
            clearTimeout(timer);
        });
    };
};

// var timeLimit = function (fn, t) {
//     return async function (...args) {
//         const timeLimitPromise = new Promise((resolve, reject) => {
//             setTimeout(() => reject("Time Limit Exceeded"), t);
//         });
//         const returnedPromise = fn(...args);
//         return Promise.race([timeLimitPromise, returnedPromise]);
//     };
// };

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
