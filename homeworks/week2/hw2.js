function capitalize(str) {
    // 建立一個空字串
    var result = ''
        // 檢查字串是大寫還是小寫

    for (var i = 0; i < 1; i++) {
        if (str[0] >= 'a' && str[i] <= 'z') {
            result += str[0].toUpperCase() + str.slice(1);;
        } else {
            result += str

        }
    }

    return result

}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));