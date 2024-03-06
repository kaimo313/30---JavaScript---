## 30 天 JavaScript 挑战

专为 JavaScript 初学者设计

掌握必备 JavaScript 技能

前端人，前端魂，刷完 JS 即入门!
    
题目地址：[https://leetcode.cn/studyplan/30-days-of-javascript/](https://leetcode.cn/studyplan/30-days-of-javascript/)

个人学习笔记：[https://github.com/kaimo313/30-days-of-javascript](https://github.com/kaimo313/30-days-of-javascript)

### 【001】2667. 创建 Hello World 函数

```javascript
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

```

### 【002】2620. 计数器

```javascript
// 给定一个整型参数 n，请你编写并返回一个 counter 函数。
// 这个 counter 函数最初返回 n，每次调用它时会返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

```

### 【003】2704. 相等还是不相等

```javascript
// 请你编写一个名为 expect 的函数，用于帮助开发人员测试他们的代码。
// 它应该接受任何值 val 并返回一个包含以下两个函数的对象。

// toBe(val) 接受另一个值并在两个值相等（ === ）时返回 true 。如果它们不相等，则应抛出错误 "Not Equal" 。
// notToBe(val) 接受另一个值并在两个值不相等（ !== ）时返回 true 。如果它们相等，则应抛出错误 "Equal" 。

// 拓展知识：抛出聚合错误（AggregateError）

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (value) {
            if (val !== value) throw new Error("Not Equal");
            return true;
        },
        notToBe: function (value) {
            if (val === value) throw new Error("Equal");
            return true;
        }
    };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));

```

### 【004】2665. 计数器 II

```javascript
// 请你写一个函数 createCounter。这个函数接收一个初始的整数值 init。并返回一个包含三个函数的对象。
// 这三个函数是：
// increment() 将当前值加 1 并返回。
// decrement() 将当前值减 1 并返回。
// reset() 将当前值设置为 init 并返回。

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = init)
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

```

### 【005】2635. 转换数组中的每个元素

```javascript
// 编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
// 返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
// 请你在不使用内置方法 Array.map 的前提下解决这个问题。

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    var returnedArray = [];
    for (var i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }
    return returnedArray;
};

```

### 【006】2634. 过滤数组中的元素

```javascript
// 给定一个整数数组 arr 和一个过滤函数 fn，并返回一个过滤后的数组 filteredArr 。
// fn 函数接受一个或两个参数：
// arr[i] - arr 中的数字
// i - arr[i] 的索引
// filteredArr 应该只包含使表达式 fn(arr[i], i) 的值为 真值 的 arr 中的元素。
// 真值 是指 Boolean(value) 返回参数为 true 的值。
// 请在不使用内置的 Array.filter 方法的情况下解决该问题。

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

```

### 【007】2626. 数组归约运算

```javascript
// 给定一个整数数组 nums、一个 reducer 函数 fn 和一个初始值 init，返回通过依次对数组的每个元素执行 fn 函数得到的最终结果。
// 通过以下操作实现这个结果：val = fn(init, nums[0])，val = fn(val, nums[1])，val = fn(val, nums[2])，... 直到处理数组中的每个元素。然后返回 val 的最终值。
// 如果数组的长度为 0，则函数应返回 init。
// 请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var val = init;
    for (var i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

```

### 【008】2629. 复合函数

```javascript
// 请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…， fn] ，并返回一个新的函数 fn ，它是函数数组的 复合函数 。
// [f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。
// 一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。
// 你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    // 使用 reduceRight
    // return function (x) {
    //     return functions.reduceRight((p, c) => c(p), x);
    // };
    return function (x) {
        if (functions.length === 0) return x;
        let input = x;

        for (const func of functions.reverse()) {
            input = func(input);
        }

        return input;
    };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

```

### 【009】2703. 返回传递的参数的长度

```javascript
// 请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3

```

### 【010】2666. 只允许一次函数调用

```javascript
// 给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。

// 第一次调用返回的函数时，它应该返回与 fn 相同的结果。
// 第一次后的每次调用，它应该返回 undefined 。

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    var called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
    };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

```

### 【011】2623. 记忆函数

```javascript
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

```

### 【012】2723. 两个 Promise 对象相加

```javascript
// 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。promise1 和 promise2 都会被解析为一个数字。
// 返回的 Promise 应该解析为这两个数字的和。

// 提示：promise1 和 promise2 都是被解析为一个数字的 promise 对象

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    return (await promise1) + (await promise2);
};

console.log(
    addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((res) => {
        console.log(res);
    })
); // 4

```

### 【013】2621. 睡眠函数

```javascript
// 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

```

### 【014】2715. 执行可取消的延迟函数

```javascript
// 给定一个函数 fn ，一个参数数组 args 和一个以毫秒为单位的超时时间 t ，返回一个取消函数 cancelFn 。

// 在 cancelTimeMs 的延迟后，返回的取消函数 cancelFn 将被调用。

// setTimeout(cancelFn, cancelTimeMs)
// 最初，函数 fn 的执行应该延迟 t 毫秒。

// 如果在 t 毫秒的延迟之前调用了函数 cancelFn，它应该取消 fn 的延迟执行。
// 否则，如果在指定的延迟 t 内没有调用 cancelFn，则应执行 fn，并使用提供的 args 作为参数。

// fn 是一个函数
// args 是一个有效的 JSON 数组
// 1 <= args.length <= 10
// 20 <= t <= 1000
// 10 <= cancelTimeMs <= 1000

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    var timer = setTimeout(() => {
        fn(...args);
    }, t);
    return function () {
        clearTimeout(timer);
    };
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
    t = 20,
    cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);

```

### 【015】2725. 间隔取消

```javascript
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

```

### 【016】2637. 有时间限制的 Promise 对象

```javascript
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

```

### 【017】2622. 有时间限制的缓存

```javascript
// 编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。

// 该类有三个公共方法：

// set(key, value, duration) ：接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。
// 一旦 duration 到期后，这个键就无法访问。
// 如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。
// 如果该键已经存在，则它的值和持续时间都应该被覆盖。

// get(key) ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。

// count() ：返回未过期键的总数。

var TimeLimitedCache = function () {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let obj = this.cache.get(key);
    if (obj) {
        clearTimeout(obj.timeout);
    }
    this.cache.set(key, {
        value,
        timeout: setTimeout(() => {
            this.cache.delete(key);
        }, duration)
    });
    return Boolean(obj);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

```

### 【018】2627. 函数防抖

```javascript
// 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。

// 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。
// 你编写的防抖函数也应该接收传递的参数。

// 例如，假设 t = 50ms ，函数分别在 30ms 、 60ms 和 100ms 时调用。
// 前两个函数调用将被取消，第三个函数调用将在 150ms 执行。
// 如果改为 t = 35ms ，则第一个调用将被取消，第二个调用将在 95ms 执行，第三个调用将在 135ms 执行。

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    var timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, t);
    };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms

```

### 【019】2721. 并行执行异步函数

```javascript
// 给定一个异步函数数组 functions，返回一个新的 promise 对象 promise。
// 数组中的每个函数都不接受参数并返回一个 promise。所有的 promise 都应该并行执行。

// promise resolve 条件：

// 当所有从 functions 返回的 promise 都成功的并行解析时。
// promise 的解析值应该是一个按照它们在 functions 中的顺序排列的 promise 的解析值数组。
// promise 应该在数组中的所有异步函数并行执行完成时解析。

// promise reject 条件：

// 当任何从 functions 返回的 promise 被拒绝时。promise 也会被拒绝，并返回第一个拒绝的原因。

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        const results = new Array(functions.length).fill(null);
        let count = 0;
        functions.forEach((el, index) => {
            el()
                .then((res) => {
                    results[index] = res;
                    count++;
                    if (count === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]

```

### 【020】2727. 判断对象是否为空

```javascript
// 给定一个对象或数组，判断它是否为空。

// 一个空对象不包含任何键值对。
// 一个空数组不包含任何元素。
// 你可以假设对象或数组是通过 JSON.parse 解析得到的。

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// 时间、空间复杂度 O(n)
var isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};

// 时间、空间复杂度 O(1)
// var isEmpty = function (obj) {
//     for (let a in obj) return false;
//     return true;
// };

```

### 【021】2677. 分块数组

```javascript
// 给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。
// 分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size 。
// 如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size 。

// 你可以假设该数组是 JSON.parse 的输出结果。换句话说，它是有效的JSON。

// 请你在不使用 lodash 的函数 _.chunk 的情况下解决这个问题。

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function (arr, size) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };

// var chunk = function (arr, size) {
//     return arr.reduce((pre, next, index) => {
//         const lastChunk = pre[pre.length - 1];
//         if (!lastChunk || lastChunk.length === size) {
//             pre.push([next]);
//         } else {
//             lastChunk.push(next);
//         }
//         return pre;
//     }, []);
// };

var chunk = function (arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (_, index) {
        return arr.slice(index * size, index * size + size);
    });
};

console.log(chunk([1, 2, 3, 4, 5], 2));

```

### 【022】2619. 数组原型对象的最后一个元素

```javascript
// 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。
// 如果数组中没有元素，则返回 -1 。

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [1, 2, 3];
arr.last(); // 3

```

### 【023】2631. 分组

```javascript
// 请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。

// 数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。

// 提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。

// 每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((acc, val) => {
        const key = fn(val);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(val);
        return acc;
    }, {});
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}

```

### 【024】2724. 排序方式

```javascript
// 给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。
// 你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。
// sortedArr 必须按照 fn 的输出值 升序 排序。

// 你可以假设对于给定的数组，fn 不会返回重复的数字。

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort(function (a, b) {
        return fn(a) - fn(b);
    });
};

```

### 【025】2722. 根据 ID 合并两个数组

```javascript
// 现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。
// 两个输入数组中的每个对象都包含一个 id 字段。
// joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。
// joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。

// 如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。
// 如果两个对象共享一个 id ，则它们的属性应进行合并：
// 如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
// 如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let temp = {};
    arr1.concat(arr2).forEach((item) => {
        if (!temp[item.id]) {
            temp[item.id] = item;
        } else {
            temp[item.id] = Object.assign(temp[item.id], item);
        }
    });
    return Object.values(temp).sort((a, b) => a.id - b.id);
};

console.log(join([{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }], [{ id: 1, b: { c: 84 }, v: [1, 3] }]));

// 另外还可以使用双指针实现

```

### 【026】2625. 扁平化嵌套数组

```javascript
// 请你编写一个函数，它接收一个 多维数组 arr 和它的深度 n ，并返回该数组的 扁平化 后的结果。

// 多维数组 是一种包含整数或其他 多维数组 的递归数据结构。

// 数组 扁平化 是对数组的一种操作，定义是将原数组部分或全部子数组删除，并替换为该子数组中的实际元素。
// 只有当嵌套的数组深度大于 n 时，才应该执行扁平化操作。第一层数组中元素的深度被认为是 0。

// 请在没有使用内置方法 Array.flat 的前提下解决这个问题。

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];
    arr.forEach((item) => {
        if (Array.isArray(item) && n > 0) {
            result.push(...flat(item, n - 1));
        } else {
            result.push(item);
        }
    });
    return result;
};

```

### 【027】2705. 精简对象

```javascript
// 现给定一个对象或数组 obj，返回一个 精简对象 。
// 精简对象 与原始对象相同，只是将包含 假 值的键移除。
// 该操作适用于对象及其嵌套对象。
// 数组被视为索引作为键的对象。
// 当 Boolean(value) 返回 false 时，值被视为 假 值。

// 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        let result = [];
        obj.forEach((ele) => {
            if (Boolean(ele)) {
                result.push(compactObject(ele));
            }
        });
        return result;
    } else if (typeof obj === "object") {
        let temp = {};
        for (let key in obj) {
            if (Boolean(obj[key])) {
                temp[key] = compactObject(obj[key]);
            }
        }
        return temp;
    } else {
        return obj;
    }
};

```

### 【028】2694. 事件发射器

```javascript
// 设计一个 EventEmitter 类。这个接口与 Node.js 或 DOM 的 Event Target 接口相似，但有一些差异。
// EventEmitter 应该允许订阅事件和触发事件。

// 你的 EventEmitter 类应该有以下两个方法：

// subscribe - 这个方法接收两个参数：
//     一个作为字符串的事件名和一个回调函数。当事件被触发时，这个回调函数将被调用。
//     一个事件应该能够有多个监听器。当触发带有多个回调函数的事件时，应按照订阅的顺序依次调用每个回调函数。应返回一个结果数组。
//     你可以假设传递给 subscribe 的回调函数都不是引用相同的。
//     subscribe 方法还应返回一个对象，其中包含一个 unsubscribe 方法，使用户可以取消订阅。
//     当调用 unsubscribe 方法时，回调函数应该从订阅列表中删除，并返回 undefined。
// emit - 这个方法接收两个参数：一个作为字符串的事件名和一个可选的参数数组，这些参数将传递给回调函数。
//     如果没有订阅给定事件的回调函数，则返回一个空数组。
//     否则，按照它们被订阅的顺序返回所有回调函数调用的结果数组。

class EventEmitter {
    constructor() {
        this.subscribers = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].push(callback);
        } else {
            this.subscribers[eventName] = [callback];
        }
        return {
            unsubscribe: () => {
                this.subscribers[eventName].splice(this.subscribers[eventName].indexOf(callback), 1);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return this.subscribers[eventName]?.map((callback) => callback(...args)) || [];
    }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
    return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit("onClick")); // []

```

### 【029】2695. 包装数组

```javascript
// 创建一个名为 ArrayWrapper 的类，它在其构造函数中接受一个整数数组作为参数。该类应具有以下两个特性：

// 当使用 + 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。
// 当在实例上调用 String() 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，[1,2,3] 。

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((acc, val) => acc + val, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    // return JSON.stringify(this.nums);
    return `[${this.nums}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

```

### 【030】2726. 使用方法链的计算器

```javascript
// 设计一个类 Calculator 。
//      该类应提供加法、减法、乘法、除法和乘方等数学运算功能。
//      同时，它还应支持连续操作的方法链式调用。
//      Calculator 类的构造函数应接受一个数字作为 result 的初始值。

// 你的 Calculator 类应包含以下方法：

// add - 将给定的数字 value 与 result 相加，并返回更新后的 Calculator 对象。
// subtract - 从 result 中减去给定的数字 value ，并返回更新后的 Calculator 对象。
// multiply - 将 result 乘以给定的数字 value ，并返回更新后的 Calculator 对象。
// divide - 将 result 除以给定的数字 value ，并返回更新后的 Calculator 对象。
//      如果传入的值为 0 ，则抛出错误 "Division by zero is not allowed" 。
// power - 计算 result 的幂，指数为给定的数字 value ，并返回更新后的 Calculator 对象。（result = result ^ value ）
// getResult - 返回 result 的值。

// 结果与实际结果相差在 10的-5次幂 范围内的解被认为是正确的。

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }
    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }
    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }
    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        // this.result **= value;
        return this;
    }
    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

```

