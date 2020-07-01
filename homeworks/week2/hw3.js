function reverse(str) {

    var result = '';

    // 檢查字串
    for (var i = str.length - 1; i >= 0; i--) {

        // console.log(str[i])

        result = result + str[i]
    }


    console.log(result)

}

reverse('hello');