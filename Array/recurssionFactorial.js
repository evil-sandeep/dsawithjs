let factoriall = (data) => {
    if (data == 0) {
        return 1
    }
    return data * factoriall(data - 1)

}

let data = 3
console.log(factoriall(data))