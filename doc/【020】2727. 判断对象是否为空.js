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
