function max() {
    let counter= -Infinity
    for(let i of arguments) {
        if(counter<i) {
            counter=i
        }
        
    }if(arguments.length===0) {
        return "Big Error"
    }
    else if(counter===''||counter===' ') {
        return "Error"
    }else {
        return counter<=BigInt(Number.MAX_SAFE_INTEGER)?BigInt(counter):"Big Error"
    } 
}
console.log(max("10" / 3))
