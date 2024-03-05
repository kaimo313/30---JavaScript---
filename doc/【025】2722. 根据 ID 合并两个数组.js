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
