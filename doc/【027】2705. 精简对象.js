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
