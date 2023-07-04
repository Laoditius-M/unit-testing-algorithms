function anagram(str1, str2){
    const strMapA = buildCharMap(str1);
    const strMapB = buildCharMap(str2);

    if (Object.keys(strMapA).length !== Object.keys(strMapB).length) {
        return false;
    }

    for (let key in strMapA) {
        if (strMapA[key] !== strMapB[key]) {
            return false;
        }
    }

    return true;

}

const buildCharMap = (str) => {
    const charMap = {};

    for (const l of str) {
        charMap[l] = charMap[l] + 1 || 1;
    }

    return charMap;
}

module.exports = anagram;
