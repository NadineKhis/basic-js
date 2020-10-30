const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || !Array.isArray(members)) return false
    let filtered = members.filter(x => typeof x === 'string' && x)
    let result = filtered.map(x => {
        for (let w of x) {
            if (w !== ' ')
                return w
        }
    })
    result.sort(function (a, b) {
        return a.localeCompare(b)
    })
    return result.join('').toUpperCase()
};
