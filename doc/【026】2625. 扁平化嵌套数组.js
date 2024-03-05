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
