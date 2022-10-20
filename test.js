function test(count=0) {
    if(count == 3) {
        return null
    } else {
        count += 1;
        console.log(count)
        let result = test(count)
        if(result == null) {
            return result
        } else {
            return `hello world  ${count}`
        }
    }

}

console.log(test())