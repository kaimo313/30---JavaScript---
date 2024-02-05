// 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，返回一个取消函数 cancelFn。

// 在经过 cancelTimeMs 毫秒的延迟后，将调用返回的取消函数 cancelFn。

// setTimeout(cancelFn, cancelTimeMs)
// 函数 fn 应立即使用参数 args 调用，然后每隔 t 毫秒调用一次，直到在 cancelTimeMs 毫秒时调用 cancelFn。

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args);
    var timer = setInterval(() => {
        fn(...args);
    }, t);
    return () => clearInterval(timer);
};

const result = [];

const fn = (x) => x * 2;
const args = [4],
    t = 35,
    cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [
    //     {"time":0,"returned":8},
    //     {"time":35,"returned":8},
    //     {"time":70,"returned":8},
    //     {"time":105,"returned":8},
    //     {"time":140,"returned":8},
    //     {"time":175,"returned":8}
    // ]
}, cancelTimeMs + t + 15);
