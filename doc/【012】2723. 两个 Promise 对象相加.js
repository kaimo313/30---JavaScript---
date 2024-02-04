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
