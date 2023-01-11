
const removeItemFromObject = (obj, item) => {
    let value = {}
    Object.keys(obj).forEach(function (key, index) {
        if (key !== item) {
            value[key] = obj[key]
        }
    })
    return value
}

module.exports = { removeItemFromObject }